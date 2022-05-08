import { Point } from '../entities/point';  

/**
 * isEnableDiscount
 * 
 * @brief
 *  This function verify have 5% discount need p1 e p2 be less than client point
 * 
 * @param clientPoint 
 * @param neighborPoints
 * return boolean 
 */
export function isEnableDiscount (clientPoint: Point, neighborPoints: Point[]): boolean {
    const isLessPowerThanClient = (neighborPoint: Point): boolean => {
        return (neighborPoint.power.p1 < clientPoint.power.p1 && 
                neighborPoint.power.p2 < clientPoint.power.p2);
    };   

    return neighborPoints.every(isLessPowerThanClient);
}
