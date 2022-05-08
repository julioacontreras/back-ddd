import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { ActionFunction } from '@/adapters/broker';

export function startServer (actions: Map<string, unknown>): void {   
    const server = Express();
    server.use(bodyParser.urlencoded({ extended: false }));   
    server.use(bodyParser.json());
    server.use(cors());

    server.post('/api/auth/login', (req: Express.Request, res: Express.Response) => {
        // TODO: check sanity req
        const actionLogin = actions.get('login') as ActionFunction;
        const response = actionLogin({ params: req.body });
        res.json(response);
    });

    server.post('/api/auth/logout', (req: Express.Request, res: Express.Response) => {
        const actionLogout = actions.get('logout') as ActionFunction;
        const response = actionLogout({ params: req.body });
        res.json(response);
    });

    server.post('/api/solarRoof/prices/searchByCUP', (req: Express.Request, res: Express.Response) => {
        // TODO: check sanity req
        const actionSearchByCUP = actions.get('getSolarRoofPricesByCUP') as ActionFunction;
        const response = actionSearchByCUP({ params: req.body });
        res.json(response);
    });
    
    const port = 4000;
    server.listen(port, () => {
        console.info(`Runnning application in HTTP mode on port ${port}. 🔥`);
    });
}
