export interface Result {
  label: string;
  value: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  businessName: string;
  industry: string;
  problem: string;
  solution: string;
  results: Result[];
  beforeMetrics: {
    label: string;
    value: string;
  }[];
  afterMetrics: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  animation: {
    delay: number;
    duration: number;
  };
}

export interface CaseStudiesData {
  title: string;
  subtitle: string;
  caseStudies: CaseStudy[];
}