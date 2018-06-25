"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
;
const concreteInjectables = [];
exports.Injectable = (config) => {
    return function (target) {
        inversify_1.injectable()(target);
        concreteInjectables.push({
            config: config,
            injectable: target,
        });
    };
};
exports.getConcreteInjectables = () => {
    return concreteInjectables;
};
