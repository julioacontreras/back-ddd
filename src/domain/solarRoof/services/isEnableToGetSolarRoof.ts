import { Client } from '../entities/client';
import { Point } from '../entities/point';

export function isEnableToGetSolarRoof (client: Client, point: Point): boolean {
    if (client.building_type !== 'house') {
        return false;
    }

    if (point.neighbors.length < 1) {
        return false;
    }

    return true;   
}
