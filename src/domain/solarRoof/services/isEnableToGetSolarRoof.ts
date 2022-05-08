import { Client } from '../entities/client';
import { Point } from '../entities/point';


/**
 * isEnableToGerSolarRoof
 * 
 * @brief
 * This function verify is enable to get solar roof need:
 *   - have a building type house
 *   - have minimun one neighbor
 * 
 * @param client 
 * @param Point 
 * @returns boolean
 */ 
export function isEnableToGetSolarRoof (client: Client, point: Point): boolean {
    if (client.building_type !== 'house') {
        return false;
    }

    if (point.neighbors.length < 1) {
        return false;
    }

    return true;   
}
