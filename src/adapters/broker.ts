export let broker: Broker;

export type ActionResponse = {
    result: unknown,
    status: string
};

export type ActionFunction = (settings: unknown) => ActionResponse;

export interface Broker {
    actions: Map<string, ActionFunction>
    action: (command: string, action: ActionFunction) => void
    run: () => void    
}

export type Request = {
    command: string;
    settings: {
        params: unknown
    };
}

export function setBroker (newBroker: Broker) {
    broker = newBroker;
}
