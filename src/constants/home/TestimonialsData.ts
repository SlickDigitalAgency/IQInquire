import { TestimonialsData } from '../../types/home/TestimonialsTypes';

export const testimonialsData: TestimonialsData = {
  title: "What Our Clients Say About InquireIQ",
  subtitle: "Real estate professionals share their success stories with our AI-powered SMS automation",
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Principal Broker",
      company: "Luxury Homes Real Estate",
      businessType: "Luxury Properties",
      quote: "InquireIQ transformed our lead response time from hours to seconds. We've seen a 300% increase in lead conversion since implementing their AI SMS system.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop",
      companyLogoUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&h=100&fit=crop",
      animation: {
        delay: 0,
        duration: 0.5
      }
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Sales Director",
      company: "Metropolitan Properties",
      businessType: "Commercial Real Estate",
      quote: "The automated response system has been a game-changer. We never miss a lead now, and our team can focus on closing deals instead of manual follow-ups.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
      companyLogoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&h=100&fit=crop",
      animation: {
        delay: 0.2,
        duration: 0.5
      }
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Team Lead",
      company: "Coastal Realty Group",
      businessType: "Residential Properties",
      quote: "Our response rate has improved by 200% with InquireIQ. The AI's ability to engage potential clients instantly has revolutionized our lead generation process.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop",
      companyLogoUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&h=100&fit=crop",
      animation: {
        delay: 0.4,
        duration: 0.5
      }
    }
  ]
};