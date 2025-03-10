export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  };
}

export interface SolutionStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  animation?: {
    delay: number;
    duration: number;
  };
}

export interface ProblemSolutionData {
  problem: {
    title: string;
    subtitle: string;
    painPoints: PainPoint[];
  };
  solution: {
    title: string;
    subtitle: string;
    steps: SolutionStep[];
  };
}