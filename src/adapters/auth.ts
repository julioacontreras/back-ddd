export let auth: Auth;

export interface Auth {
    login: (email: string, password: string, users: User[]) => boolean
    logout: () => boolean
}

export type User = {
    email: string;
    password: string;
}

export function setAuth (newAuth: Auth) {
    auth = newAuth;
}
