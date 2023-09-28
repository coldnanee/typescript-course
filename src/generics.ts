// const getter = (data:any) => data;

// getter(1).length; bad variant


const getter = <T>(data: T) => data;

getter([]).length

getter<string>('');


class User<T extends string, K> { // T can be only string type
    constructor(public name: T, password: string, notes: K[]) { }
}

const user = new User<string, number>('paul', '8fiuowq', [88]);



// const menu = {
//     support: {
//         number: 3456580286,
//         address: 'New York, Random str. 19'
//     },
//     shop: {
//         food: ['apple', 'pineapple', 'lemon', 'melon'],
//         cars: ['bentley', 'cadillac', 'mazda', 'suzuki']
//     }
// }

// const getMenu = <TMenu, TL1Menu extends keyof TMenu, TL2Menu extends keyof TMenu[TL1Menu]>(menu: TMenu, l1: TL1Menu, l2: TL2Menu) => {
//     return menu[l1][l2]
// }

// console.log(getMenu(menu, 'shop', 'cars'))