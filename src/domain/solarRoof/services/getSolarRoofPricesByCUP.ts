import { Point } from '../entities/point';
import { Client } from '../entities/client';
import { Result } from '../entities/result';

import { isEnableDiscount } from './isEnableDiscount';

const calculeDiscount5Perc = (price: number): number => {
    return price - (price * 0.05);
};

const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

/**
 * getSolarRoofPricesByCUP
 * 
 * @brief
 *  This function get solar roof proces avaliables to this CUP
 * 
 * @param client 
 * @param clientPoint 
 * @param neighborPoints 
 * @returns 
 */
export function getSolarRoofPricesByCUP (client: Client, clientPoint: Point, neighborPoints: Point[]): Result {
    const haveDiscount = isEnableDiscount(clientPoint, neighborPoints);
    return {
        have_discount: haveDiscount,
        discount: haveDiscount ? '5%' : '',
        price: formatter.format(Number(clientPoint.invoiced_amount)),
        price_discount: haveDiscount ? formatter.format(calculeDiscount5Perc(Number(clientPoint.invoiced_amount))) : '',
        client: client,
        status: 'ok'
    };
}
