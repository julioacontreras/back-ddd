import { Point } from '@/domain/solarRoof/entities/point';

function getPointByCUP (cups: string, points: Point[]) {    
    return points.find(point => point.cups === cups);
}

function getNeighborPointsByCUP (clientPoint: Point, points: Point[]) {
    const result: Point[] = [];
    clientPoint.neighbors.forEach((cups) => {
        const pointFinded: Point = points.find(client => client.cups === cups) as Point;
        if (pointFinded) {
            result.push(pointFinded);
        }
    });
    return result;
}

export default {
    getPointByCUP,
    getNeighborPointsByCUP
};
