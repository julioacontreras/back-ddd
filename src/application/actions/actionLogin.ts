import { auth, User } from '@/adapters/auth';
import { ActionResponse } from '@/adapters/broker';
import { database } from '@/adapters/database';

type SettingsLogin = {
    params: {
        email: string
        password: string
    }
}

export const actionLogin = (settings: unknown): ActionResponse => {
    try {

        const s = settings as SettingsLogin;
        const clients = database.repositories.clients as User[];
        const isSuccessful = auth.login(s.params.email, s.params.password, clients);

        return {
            result: {},
            status: isSuccessful ? 'ok' : 'error'
        };

    } catch (e) {
        console.error(e);
        return {
            result: {},
            status: 'internal-error'
        };        
    }
};
