import { Client } from '../entities/client';

export type Result = {
    have_discount?: boolean;
    discount?: string;
    price?: string;
    price_discount?: string;
    client?: Client;
    status: string;
}
