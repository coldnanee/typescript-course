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

// interface ComponentDecorator {
//     className: string,
//     disabled?: boolean,
//     children: null | Object
// }


// function Component(config: ComponentDecorator) {
//     return function <TConstructor extends { new(...args: any[]): object }>(constructor: TConstructor) {
//         return class extends constructor {
//             constructor(...args: any[]) {
//                 super(...args)
//             }
//         }
//     }
// }

// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const original = descriptor.value;

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return original.bind(this)
//         }
//     }
// }

// @Component({
//     className: 'card-content',
//     children: null
// })
// class CardComponent {
//     constructor(public name: string) {

//     }

//     @Bind
//     public getComponentName() {
//         console.log(this.name);
//     }
// }


// const card = new CardComponent('card component');

// card.getComponentName();

// type TUserConfig = Record<"name" | "surname", string>;


// function UserDecorator(config: TUserConfig) {
//     return function <TConstructor extends { new(...args: any[]): object }>(constructor: TConstructor) {
//         return class extends constructor {
//             constructor(...args: any[]) {
//                 super(...args);

//                 console.log(config.name);
//             }
//         }
//     }
// }

// @UserDecorator({
//     name: 'paul',
//     surname: 'mikhaylov'
// })

// class User {
//     constructor(public role: string) {

//     }
// }


// const user = new User('admin');

type TValidator = "required" | "email"

interface IValidatorConfig {
    [className: string]: {
        [validateProp: string]: TValidator
    }
}

const validators: IValidatorConfig = {}


function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: "required"
    }
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig) {
        return true
    }

    let isValid = true

    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })

    return isValid
}

class Form {
    @Required
    public email?: string
    constructor(email?: string) {
        this.email = email
    }
}


const form = new Form('test@github.com');

if (validate(form)) {
    console.log('Validate successful!')
} else {
    console.log('Error validate!');
}
