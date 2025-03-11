export interface CTAButton {
  id: string;
  label: string;
  href: string;
  icon: string;
  animation: {
    delay: number;
    duration: number;
  };
}

export interface CalltoActionData {
  title: string;
  subtitle: string;
  buttons: CTAButton[];
}