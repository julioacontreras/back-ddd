import { Client } from '@/domain/solarRoof/entities/client';
import { Point } from '@/domain/solarRoof/entities/point';
import { Result } from '@/domain/solarRoof/entities/result';

import { isEnableToGetSolarRoof } from '@/domain/solarRoof/rules/isEnableToGetSolarRoof';
import { getSolarRoofPricesByCUP } from '@/domain/solarRoof/rules/getSolarRoofPricesByCUP';

export function processSolarRoof (client: Client, clientPoint: Point, neighborPoints: Point[]): Result {
    if (!isEnableToGetSolarRoof(client, clientPoint)) {
        return {
            status: 'not-found'
        };
    }
    return getSolarRoofPricesByCUP(client, clientPoint, neighborPoints);
}
