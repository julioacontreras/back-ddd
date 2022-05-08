import { ServerHTTP, setServerHTTP, UseCaseSettings } from '@/adapters/serverHTTP';

import startServer from './core';

function useServerHTTP (): ServerHTTP {
    const useCases = new Map<string, UseCaseSettings>();

    function add (command: string, settings: UseCaseSettings) {
        useCases.set(command, settings); 
    }
    
    function run () {
        startServer(useCases);
    }
    
    return {
        useCases,
        add,
        run
    };
}

setServerHTTP(useServerHTTP());
