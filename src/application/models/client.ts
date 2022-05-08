import { Client } from '@/domain/solarRoof/entities/client';

function getClientByCUP (cups: string, clients: Client[]) {
    return clients.find(client => client.cups === cups);
}

export default {
    getClientByCUP
};
