// class People {

//     static planet: string = 'Earth'

//     constructor(
//         public name: string,
//     ) { }
// }

// compiler result:

// class People {
//     constructor(_name, _age) {
//         this._name = _name;
//         this._age = _age;
//     }
//     get planet() {
//         return People._planet;
//     }
// }
// People._planet = 'Earth';

// export class Paul extends People {
//     name: string = 'paul111';

//     constructor() {
//         super(Paul.name);
//     }
// }

abstract class User { // can't create instance of an abstract class . only for extends!
    constructor(public name: string, public age: number) { }

    greet(): void {
        console.log(this.name)
    }

    abstract sayHi(): void // method only for instance!
}

export class Paul extends User {
    name: string = 'paul'
    constructor(age: number) {
        super(Paul.name, age)
    }

    sayHi(): void {
        console.log('hi!')
    }
}