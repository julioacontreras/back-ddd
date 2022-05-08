import { Auth, setAuth } from '@/adapters/auth';

import { logout } from './core/logout';
import { login } from './core/login';

const auth: Auth = {
    login,
    logout
};

setAuth(auth);
