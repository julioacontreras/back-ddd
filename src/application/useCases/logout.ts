import { auth } from '@/adapters/auth';
import { HTTPResponse } from '@/adapters/serverHTTP';

export const logoutCaseUse = (): HTTPResponse => {
    try {

        const isSuccessful = auth.logout();
        return {
            result: {},
            status: isSuccessful ? 'ok' : 'usert-not-found'
        };

    } catch(e) {
        console.error(e);
        return {
            result: {},
            status: 'internal-error'
        };
    }
};
