"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
exports.Component = () => {
    return function (target) {
        inversify_1.injectable()(target);
    };
};
