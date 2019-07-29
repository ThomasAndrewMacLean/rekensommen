export interface SettingsType {
    name: string;
    id: string;
    time: 'fast' | 'normal' | 'slow';
    kind: 'plus' | 'plusminus';
    upperlimit: number;
}
