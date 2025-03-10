export interface AnimationStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  animation: {
    delay: number;
    duration: number;
  };
}

export interface CinematicData {
  title: string;
  subtitle: string;
  steps: AnimationStep[];
}