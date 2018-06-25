export interface OnInit {
    init: {
        (): void;
    };
};

export interface WithExports {
    getExports: {
        (): Object;
    };
}

export interface OnGetHandler {
    getHandler: {
        (): Function;
    };
};
