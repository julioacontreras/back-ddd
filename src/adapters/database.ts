export let database: Database;

export interface Database {
    repositories: {
        clients: unknown;
        points: unknown;
    }
}

export function setDatabase (newDatabase: Database): void{
    database = newDatabase;
}
