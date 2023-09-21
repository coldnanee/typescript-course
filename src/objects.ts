type TVegetables = {
    isTomatoes: boolean
}

const vegetables: TVegetables = {
    isTomatoes: true
}

const fruits: { isApples: boolean } = {
    isApples: true
}

export const products: { isTomatoes: boolean, isApples: boolean } = {
    ...vegetables, ...fruits
}


// type Person = {
//     name: string,
//     age: number
// }

// const user: Person & { sayHello: () => void } = {
//     name: 'alex',
//     age: 56,
//     sayHello: () => console.log('Hello!')
// }

// const admin: Person & { warningToPerson: () => void } = {
//     name: 'sam',
//     age: 11,
//     warningToPerson: () => console.log('Stop spam or ban!')
// } 
// OR

// type Person = {
//     name: string,
//     age: number,
//     sayHello?: () => void, ? - optional param
//     warningToPerson?: () => void ? - optional param
// }

// const user: Person = {
//     name: 'alex',
//     age: 56,
//     sayHello: () => console.log('Hello!')
// }

// const admin: Person = {
//     name: 'sam',
//     age: 11,
//     warningToPerson: () => console.log('Stop spam or ban!')
// } 

