import Express from 'express';

import { UseCaseSettings, UseCaseMap } from '@/adapters/serverHTTP';

export function createUseCases (useCases: UseCaseMap, server: Express.Express) {
    useCases.forEach((value, key) => {
        const useCase = value as unknown as UseCaseSettings;
        server.post(useCase.route, (req: Express.Request, res: Express.Response) => {
            const useCase = useCases.get(key)?.useCase;
            if (useCase) {
                const response = useCase({ params: req.body });
                res.json(response);    
            } else {
                throw `Not exist use case ${key}`;
            }
        });
    });
}
