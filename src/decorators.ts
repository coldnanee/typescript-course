const logClass = (constructor: Function) => {
    console.log(constructor);
}


class Phone {
    constructor(public model: string, public year: string) { }
}