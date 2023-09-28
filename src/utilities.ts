// 1. Readonly

// interface IUser{
//     name: string
// }

// const user: Readonly<IUser> = {
//     name: 'paul'
// }

// user.name = '' // error! properties of object access only for reading


// 2. Required

// interface IUser {
//     name: string,
//     surname?: string
// }

// const paul: IUser = {
//     name: 'paul'
// }

// const sam: Required<IUser> = {  // All properties here is required!
//     name: 'sam',
//     surname: 'levandovsky'
// }


// 3. Record

// const user: Record<"name" | "surname", string> = {
//     name: 'paul',
//     surname: 'mikhaylov'
// } // we can assign a definite interface or type to each property of an object


// 4. Pick

// type TUser = {
//     name: string,
//     surname: string
// }

// type TPaul = Pick<TUser, "name">; // choose properties which be adding into new type

// const paul: TPaul = {
//     name: 'paul'
// } 


// 5. Omit

// type TUser = Record<"name" | "surname", string>

// type TSurname = Omit<TUser, "name">; // choose properties which be not adding into new type


// const paul: TSurname = {
//     surname: 'mikhaylov',
// }


// 6. Exclude

// type TUser = string | boolean | number

// type TBaby = Exclude<TUser, string>; // we get from type TUser only number | boolean 


// 7. Extract

// type TUser = string | number;

// type TPaul = Extract<TUser, string>; // we get from type TUser only string


// 8. NonNullable

// type TList = string[] | null;
// type TOnlyRealList = NonNullable<TList> // we get only existing types (not null or undefined)


// // 9. ReturnType


// const testFn = (): string => {
//     return 'random text'
// }


// type TRandomText = ReturnType<typeof testFn> // we get the type of value that is returned from the function
// type TRandomValue = ReturnType<() => number> // number
// type TNever = ReturnType<never> // never
// type TAny = ReturnType<any> // any
// // type TString = ReturnType<string> // error

// 10. InstanceType

// class User {
//     public name: string;
//     public surname: string;
//     constructor(name: string, surname: string) {
//         this.name = name;
//         this.surname = surname;
//     }
// }

// type TUser = InstanceType<typeof User> // get the type of instance class User

// const paul:TUser = {
//     name: 'name',
//     surname: 'surname'
// } 