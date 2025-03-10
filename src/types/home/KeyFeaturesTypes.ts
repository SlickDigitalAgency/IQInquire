export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  };
  animation?: {
    delay: number;
    duration: number;
  };
}

export interface KeyFeaturesData {
  title: string;
  subtitle: string;
  features: Feature[];
}