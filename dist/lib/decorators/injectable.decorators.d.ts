export interface InjectableConfiguration {
    name?: string;
}
export declare const Injectable: (config?: InjectableConfiguration | undefined) => <T>(target: T) => void;
export declare const getConcreteInjectables: () => any[];
