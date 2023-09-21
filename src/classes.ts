// export class User {
//     public name: string; // public, private, protected, readonly - access modifier 
//     private _age: number; // all properties default need be private. for access to they need create getter/setter function
//     protected login: string; // to this property can access only child of this class: class Admin extends User
//     private readonly _password: string = 'my_very_strong_password'

//     constructor(name: string, _age: number, login: string) {
//         this.name = name;
//         this._age = _age;
//         this.login = login;
//     }
// }

// OR

export class User {
    private readonly _password: string = 'my_very_strong_pass'
    protected _login: string

    constructor(
        private _name: string,
        private _age: number,
        _login: string
    ) {
        this._login = _login
    }

    get login() {
        return this._login;
    }

    set login(l: string) {
        this._login = l;
    } // OR

    setLogin(l: string) {
        this._login = l
    }
}