import { Broker, setBroker, ActionFunction } from '@/adapters/broker';

import { startServer } from './startServer';

function useBroker (): Broker {
    const actions = new Map<string, ActionFunction>();

    function action (command: string, action: ActionFunction) {
        actions.set(command, action); 
    }
    
    function run () {
        startServer(actions);
    }
    
    return {
        actions,
        action,
        run
    };
}

setBroker(useBroker());
