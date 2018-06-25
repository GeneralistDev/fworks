import { Container } from 'inversify';
export interface ModuleConfiguration {
    components?: any[];
    constants?: Object;
    providers?: any[];
}
export declare const Module: (config?: ModuleConfiguration | undefined) => <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {
        container: Container;
    };
} & T;
