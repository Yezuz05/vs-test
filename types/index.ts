export interface LandingPageResponse {
    landingPages: LandingPage[];
}

export interface LandingPage {
    title: string[];
    subtitle: string;
    stage: string;
    id: string;
    cta: string;
    metrics: Metric[];
    key: string;
    prices: Price[];
}

export interface Metric {
    id: string;
    label: string;
    stage: string;
    value: string;
    key: string;
}

export interface Price {
    amount: string;
    baseFeatures: string;
    discount: string;
    icon: string;
    id: string;
    specialFeatures: string;
    title: string;
    unsupportedFeatures: string;
}