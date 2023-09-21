// interface IUser {
//     readonly name: string,
//     age: number,
//     [propName: string]: any
// }
// 
// const user: IUser = {
//     name: "paul",
//     age: 67,
//     followers: [] // interface don't control this property
// }

// user.age = 33;
// user.name = '' // error cuz property is readonly


interface IUser {
    name: string,
    age: number,
} // minimal list of properties


interface IAdmin extends IUser {
    isAdmin: boolean
} // interface extends from interface

interface IPerson {
    sayHi(): void
} // minimal list of properties

export class UserFromInterface implements IAdmin, IPerson { // can implements from 1+ interface
    name = 'ss';
    age = 67;
    isAdmin = true;
    password = ''; // interface hasn't got this property. But no error!
    sayHi() {
        console.log('Hi!')
    }
}