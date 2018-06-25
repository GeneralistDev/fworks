import { injectable } from "inversify";

export const Component = () => {
    return function<T>(target: T) {
        injectable()(target);
    };
};