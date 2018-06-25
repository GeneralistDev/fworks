"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("../types");
;
exports.Module = (config) => {
    return function (target) {
        const container = new inversify_1.Container();
        if (config) {
            if (config.constants) {
                Object.keys(config.constants).forEach(key => {
                    if (config && config.constants) {
                        const constant = config.constants[key];
                        container.bind(types_1.TYPES.Constant).toConstantValue(constant).whenTargetNamed(key);
                    }
                });
            }
            if (config.providers) {
                config.providers.forEach(function (provider) {
                    container.bind(provider).toSelf();
                });
            }
            if (config.components) {
                config.components.forEach(component => {
                    component.parent = target;
                    container.bind(types_1.TYPES.Component).to(component);
                });
            }
        }
        return class extends target {
            constructor() {
                super(...arguments);
                this.container = container;
            }
        };
    };
};
