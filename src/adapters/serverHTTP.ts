export let serverHTTP: ServerHTTP;

export type HTTPResponse = {
    result: unknown,
    status: string
};

export type UseCaseMap = Map<string, UseCaseSettings>;

export type UseCaseFunction = (settings: unknown) => HTTPResponse;

export type UseCaseSettings = { useCase: UseCaseFunction, route: string  }

export interface ServerHTTP {
    useCases: Map<string, UseCaseSettings>
    add: (command: string, settings: UseCaseSettings) => void
    run: () => void    
}

export type HTTPRequest = {
    command: string;
    settings: {
        params: unknown
    };
}

export function setServerHTTP (newServer: ServerHTTP) {
    serverHTTP = newServer;
}
