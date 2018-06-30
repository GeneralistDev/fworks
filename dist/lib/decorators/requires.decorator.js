"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requires = function (...deps) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            deps.forEach(dep => {
                args = args.concat(require(dep));
            });
            var result = originalMethod.apply(this, args);
            return result;
        };
        return descriptor;
    };
};
