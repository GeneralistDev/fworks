export interface ModuleConfiguration {
    components?: any[];
    constants?: Object;
}
export declare const Module: (config?: ModuleConfiguration | undefined) => (target: any) => void;
