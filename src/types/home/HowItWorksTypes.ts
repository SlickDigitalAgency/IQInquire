export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
  animation: {
    delay: number;
    duration: number;
  };
  stats?: {
    value: string;
    label: string;
  };
}

export interface HowItWorksData {
  title: string;
  subtitle: string;
  steps: Step[];
}