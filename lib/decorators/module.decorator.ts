import { Container } from 'inversify';
import { TYPES } from '../types';
import { getConcreteInjectables } from './injectable.decorators';
import { OnInit } from '../interfaces';

export interface ModuleConfiguration {
    components?: any[];
    constants?: Object;
};

export const Module = (config?: ModuleConfiguration) => {
    return function(target: any) {
        const container: Container = new Container();

        if (config) {
            if (config.constants){
                Object.keys(config.constants).forEach(key => {
                    if (config && config.constants) {
                        const constant = (<any>config.constants)[key];
                        console.log('constant', typeof constant);
                        container.bind<typeof constant>(key).toConstantValue(constant);
                    }
                });
            }

            if (config.components) {
                config.components.forEach(component => {
                    component.parent = target;
                    container.bind<OnInit>(TYPES.PulumiComponent).to(component);
                });
            }
        }

        const concreteInjectables = getConcreteInjectables();

        concreteInjectables.forEach((injectable) => {
            console.log(typeof injectable);
            container.bind<typeof injectable>(TYPES.Injectable).to(injectable);
        });

        target.container = container;
    };
};
