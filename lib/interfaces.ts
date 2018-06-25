import { Container } from "inversify";

export interface ComponentLifeCycle {
    init: {
        (): void;
    };

    getExports: {
        (): Object;
    };
};

export interface OnGetHandler {
    getHandler: {
        (): Function;
    };
};

export interface HasContainer {
    container: Container;
}