import { createBEM } from './bem';
export function createNamespace(name) {
    name = 'bhfae-' + name;
    return {
     classNamespace:createBEM(name)
    }
}
