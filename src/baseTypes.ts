enum EUsersRoles {
    User = 1,
    Manager, // 2
    Moderator, // 3
    Admin // 4
}

type TBlockedUsersInfo = {
    isShowed: boolean
}

type TBaseTypes = {
    isActivated: boolean,
    likes: number,
    nickname: string,
    login: null,
    isOnline: undefined,
    greeting: () => void,
    friends: Array<string> // generic type,
    blockedUsers: [number, TBlockedUsersInfo] // tuple type,
    userRole: number,
    errorAuth: () => never // infinite loop or error function,
    usersApps: Object,
    gender: string | null // multiple type
}

export const baseTypes: TBaseTypes = {
    isActivated: false,
    likes: 10010,
    nickname: 'Paul',
    login: null,
    isOnline: undefined,
    greeting: function () {
        console.log(`My name is ${this.nickname}`)
    },
    friends: ['98', '9239', '11'],
    blockedUsers: [17, { isShowed: false }],
    userRole: EUsersRoles.User,
    errorAuth: function () {
        throw new Error('Error Auth!');
    },
    usersApps: {
        whatsapp: false,
        googlePlay: false,
        instagram: true
    },
    gender: null
}