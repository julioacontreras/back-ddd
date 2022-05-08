import { serverHTTP } from '@/adapters/serverHTTP';

import { solarRoofCaseUse } from './useCases/solarRoof';
import { loginCaseUse } from './useCases/login';
import { logoutCaseUse } from './useCases/logout';

export function startApp () {
    /**
    * @api {post} /api/solarRoof/prices/searchByCUPS Search prices by CUPS
    * @apiName searchByCUP
    * @apiGroup Solar Roof
    * 
    * @apiParam {String} cups CUPS code
    * 
    * @apiSuccess   {Boolean} have_discount Check is have discount or not
    * @apiSuccess   {String} discount Discount
    * @apiSuccess   {String} price Price of solar roof
    * @apiSuccess   {String} price_discount Price discount of solar roof
    * @apiSuccess   {Object} client Data os CUPS client
    * @apiSuccess   {String} status 'ok', 'cups-not-found' or 'error'
    * 
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *         "result": {
    *             "have_discount": false,
    *             "discount": "",
    *             "price": "50,00 €",
    *             "price_discount": "",
    *             "client": {
    *                 "full_name": "Terry Evans",
    *                 "address": "Potato street, 4",
    *                 "cups": "123456",
    *                 "role": "customer",
    *                 "building_type": "house",
    *                 "email": "terry@gmail.com",
    *                 "password": "plainterrypassword"
    *             },
    *             "status": "ok"
    *         },
    *         "status": "ok"
    *     }
    **/
    serverHTTP.add('getSolarRoofPricesByCUPS', {
        useCase: solarRoofCaseUse,
        route: '/api/solarRoof/prices/searchByCUPS'
    });

    /**
     * @api {post} /api/auth/login Request User information
     * @apiName Login
     * @apiGroup Auth
     *
     * @apiBody {String} email User e-mail
     * @apiBody {String} password User password
     *
     * @apiSuccess {Object} result always come empty 
     * @apiSuccess {String} status 'ok', 'user-not-found' or 'error'
     * 
     * @apiSuccessExample {json} Success-Response:
     *   HTTP/1.1 200 OK
     *   {
     *     "result": {},
     *     "status": "ok"
     *   }
     **/    
    serverHTTP.add('login', {
        useCase: loginCaseUse,
        route: '/api/auth/login'
    });

    /**
    * @api {post} /api/auth/logout Request User information
    * @apiName logout
    * @apiGroup Auth
    *
    * @apiSuccess {Object} result always come empty 
    * @apiSuccess {String} status 'ok' or 'error'
    *
    * @apiSuccessExample {json} Success-Response:
    *   HTTP/1.1 200 OK
    *   {
    *     "result": {},
    *     "status": "ok"
    *   }
    **/    
    serverHTTP.add('logout', {
        useCase: logoutCaseUse,
        route: '/api/auth/logout'
    });
    serverHTTP.run();
}
