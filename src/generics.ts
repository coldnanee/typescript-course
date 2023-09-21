// const getter = (data:any) => data;

// getter(1).length; bad variant


const getter = <T>(data: T) => data;

getter([]).length

getter<string>('');


class User<T extends string, K> { // T can be only string type
    constructor(public name: T, password: string, notes: K[]) { }
}

const user = new User<string, number>('paul', '8fiuowq', [88]);