import { Container } from 'inversify';
import { TYPES } from '../types';
import { ComponentLifeCycle, HasContainer } from '../interfaces';

export interface ModuleConfiguration {
    components?: any[];
    constants?: Object;
    providers?: any[];
};

export const Module = (config?: ModuleConfiguration) => {
    return function<T extends {new(...args:any[]):{}}>(target: T) {
        const container = new Container();

        if (config) {
            if (config.constants){
                Object.keys(config.constants).forEach(key => {
                    if (config && config.constants) {
                        const constant = (<any>config.constants)[key];
                        container.bind(TYPES.Constant).toConstantValue(constant).whenTargetNamed(key);
                    }
                });
            }

            if (config.providers) {
                config.providers.forEach(function<T>(provider: any) {
                    container.bind<T>(provider).toSelf();
                });
            }

            if (config.components) {
                config.components.forEach(component => {
                    component.parent = target;
                    container.bind<ComponentLifeCycle>(TYPES.Component).to(component);
                });
            }
        }

        return class extends target {
            container = container;
        }
    };
};
