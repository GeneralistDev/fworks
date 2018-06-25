import { injectable } from "inversify";

export interface InjectableConfiguration {
    name?: string;
};

const concreteInjectables: any[] = [];

export const Injectable = (config?: InjectableConfiguration) => {
    return function<T>(target: T) {
        injectable()(target);
        
        concreteInjectables.push({
            config: config,
            injectable: target,
        });
    }
}

export const getConcreteInjectables = () => {
    return concreteInjectables;
}