import { broker } from '@/adapters/broker';

import { actionSolarRoof } from './actions/actionSolarRoof';
import { actionLogin } from './actions/actionLogin';
import { actionLogout } from './actions/actionLogout';

export function startApp () {
    broker.action('getSolarRoofPricesByCUP', actionSolarRoof);
    broker.action('login', actionLogin);
    broker.action('logout', actionLogout);
    broker.run();
}
