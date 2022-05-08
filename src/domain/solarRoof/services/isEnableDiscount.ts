import { Point } from '../entities/point';  

export function isEnableDiscount (clientPoint: Point, neighborPoints: Point[]): boolean {
    const isLessPowerThanClient = (neighborPoint: Point): boolean => {
        return (neighborPoint.power.p1 < clientPoint.power.p1 && 
                neighborPoint.power.p2 < clientPoint.power.p2);
    };   

    return neighborPoints.every(isLessPowerThanClient);
}
