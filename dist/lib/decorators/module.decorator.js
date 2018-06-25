"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("../types");
const injectable_decorators_1 = require("./injectable.decorators");
;
exports.Module = (config) => {
    return function (target) {
        const container = new inversify_1.Container();
        if (config) {
            if (config.constants) {
                Object.keys(config.constants).forEach(key => {
                    if (config && config.constants) {
                        const constant = config.constants[key];
                        console.log('constant', typeof constant);
                        container.bind(key).toConstantValue(constant);
                    }
                });
            }
            if (config.components) {
                config.components.forEach(component => {
                    component.parent = target;
                    container.bind(types_1.TYPES.PulumiComponent).to(component);
                });
            }
        }
        const concreteInjectables = injectable_decorators_1.getConcreteInjectables();
        concreteInjectables.forEach((injectable) => {
            console.log(typeof injectable);
            container.bind(types_1.TYPES.Injectable).to(injectable);
        });
        target.container = container;
    };
};
