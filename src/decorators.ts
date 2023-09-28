// types of decorators: property, class, method, accessor

// const classDecorator = (constructor: Function) => {
//     // console.log(constructor);
// }

// const propertyDecorator = (target: any, propName: string | symbol) => {
//     // console.log(target);
// }

// const methodDecorator = (target: any, propName: string | symbol, descriptor: PropertyDescriptor) => {
//     // console.log(descriptor);
// }

// const getterDecorator = (target: any, propName: string | symbol, descriptor: PropertyDescriptor) => {
//     console.log(target);
//     console.log(propName);
//     console.log(descriptor);
// }

// @classDecorator
// class User {

//     @propertyDecorator
//     public name: string;

//     constructor(name: string) {
//         this.name = name
//     }

//     @methodDecorator
//     logName() {
//         console.log(this.name);
//     }

//     @getterDecorator
//     get getName() {
//         return this.name
//     }
// }

interface ComponentDecorator {
    styles: Object,
    disabled?: boolean,
    children: null | Object
}


function Component(config: ComponentDecorator) {
    console.log(config);
    return function (constructor: Function) {

    }
}

@Component({
    styles: {
        color: 'green'
    },
    children: null
})
class CardComponent {
    constructor() {

    }

    public sayHi() {
        console.log('hi!');
    }
}