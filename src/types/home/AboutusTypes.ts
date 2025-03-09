export interface AboutSection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface AboutData {
  mission: string;
  sections: AboutSection[];
  values: CoreValue[];
}