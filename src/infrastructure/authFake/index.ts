import { Auth, setAuth, User } from '@/adapters/auth';

function login (email: string, password: string, users: User[]): boolean {
    const user = users.find((user) => 
        user.email === email && user.password === password
    );
    return (user !== undefined);
}

function logout (): boolean {
    return true;
}

const auth: Auth = {
    login,
    logout
};

setAuth(auth);
