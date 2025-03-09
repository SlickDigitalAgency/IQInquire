import { AboutData } from '../../types/home/AboutusTypes';

export const aboutData: AboutData = {
  mission: "Revolutionizing real estate communication through AI-powered automation",
  sections: [
    {
      id: "vision",
      title: "Our Vision",
      description: "We're transforming how real estate professionals handle missed opportunities. Every unanswered call is a potential lead lost - we're here to change that with instant, intelligent responses that keep your business growing 24/7.",
      imageUrl: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2000&auto=format&fit=crop",
      stats: [
        { value: "99.9%", label: "Response Rate" },
        { value: "24/7", label: "Availability" },
        { value: "300%", label: "Lead Conversion" }
      ]
    },
    {
      id: "innovation",
      title: "Innovation First",
      description: "Our AI-powered platform learns and adapts to your business, ensuring every response is personalized and professional. We combine cutting-edge technology with real estate expertise to deliver unmatched results.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  values: [
    {
      title: "Speed",
      description: "Instant responses to every missed call, ensuring no lead goes cold",
      icon: "zap"
    },
    {
      title: "Reliability",
      description: "24/7 automated response system that never sleeps",
      icon: "shield"
    },
    {
      title: "Innovation",
      description: "Cutting-edge AI technology that learns and improves",
      icon: "cpu"
    }
  ]
};