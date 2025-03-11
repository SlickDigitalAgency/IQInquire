export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  businessType: string;
  quote: string;
  rating: number;
  imageUrl: string;
  companyLogoUrl: string;
  animation: {
    delay: number;
    duration: number;
  };
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}