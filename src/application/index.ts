import { serverHTTP } from '@/adapters/serverHTTP';

import { solarRoofCaseUse } from './useCases/solarRoof';
import { loginCaseUse } from './useCases/login';
import { logoutCaseUse } from './useCases/logout';

export function startApp () {
    serverHTTP.add('getSolarRoofPricesByCUP', {
        useCase: solarRoofCaseUse,
        route: '/api/solarRoof/prices/searchByCUP'        
    });
    serverHTTP.add('login', {
        useCase: loginCaseUse,
        route: '/api/auth/login'
    });
    serverHTTP.add('logout', {
        useCase: logoutCaseUse,
        route: '/api/auth/logout'
    });
    serverHTTP.run();
}
