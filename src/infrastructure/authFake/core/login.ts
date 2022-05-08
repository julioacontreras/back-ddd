import { User } from '@/adapters/auth';

export function login (email: string, password: string, users: User[]): boolean {
    const user = users.find((user) => 
        user.email === email && user.password === password
    );
    return (user !== undefined);
}
