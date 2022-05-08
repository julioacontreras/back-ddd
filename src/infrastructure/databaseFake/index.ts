import { Database, setDatabase } from '@/adapters/database';

import Client from './repositories/client';
import Point from './repositories/point';

function useDatabase (): Database {

    return {
        repositories: {
            clients: Client,
            points: Point
        }
    };
}

setDatabase(useDatabase());
