export const Requires = function(...deps: string[]) {
    return function (target: any, key: any, descriptor: any) {
        var originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            deps.forEach(dep => {
                args = args.concat(require(dep));
            });

            var result = originalMethod.apply(this, args);
            return result;
        };

        return descriptor;
    };
};