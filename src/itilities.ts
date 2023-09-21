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