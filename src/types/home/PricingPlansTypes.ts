export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  animation: {
    delay: number;
    duration: number;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  cta: {
    text: string;
    href: string;
  };
  animation: {
    delay: number;
    duration: number;
  };
}

export interface PricingPlansData {
  title: string;
  subtitle: string;
  plan: PricingPlan;
}