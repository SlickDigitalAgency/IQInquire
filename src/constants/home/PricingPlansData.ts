import { PricingPlansData } from '../../types/home/PricingPlansTypes';

export const pricingPlansData: PricingPlansData = {
  title: "Premium Real Estate Automation",
  subtitle: "Transform your business with AI-powered lead generation and automation",
  plan: {
    id: "elite",
    name: "Elite Plan",
    price: "$350",
    description: "All-inclusive solution for real estate professionals who demand excellence",
    features: [
      {
        id: "tools",
        title: "Complete Lead Capture Suite",
        description: "Advanced tools to capture, nurture, and convert more leads",
        icon: "tool",
        animation: {
          delay: 0,
          duration: 0.5
        }
      },
      {
        id: "nurture",
        title: "AI-Powered Lead Nurturing",
        description: "Intelligent automation to convert leads into customers",
        icon: "brain",
        animation: {
          delay: 0.1,
          duration: 0.5
        }
      },
      {
        id: "booking",
        title: "Full Business Suite",
        description: "Booking, pipelines, social calendar, and website builder included",
        icon: "briefcase",
        animation: {
          delay: 0.2,
          duration: 0.5
        }
      },
      {
        id: "contacts",
        title: "Unlimited Contacts & Users",
        description: "No restrictions on contacts or team members",
        icon: "users",
        animation: {
          delay: 0.3,
          duration: 0.5
        }
      },
      {
        id: "accounts",
        title: "Multiple Sub-Accounts",
        description: "Set up and manage multiple business locations",
        icon: "layout-grid",
        animation: {
          delay: 0.4,
          duration: 0.5
        }
      },
      {
        id: "api",
        title: "Full API Access",
        description: "Complete integration capabilities for your tech stack",
        icon: "code",
        animation: {
          delay: 0.5,
          duration: 0.5
        }
      },
      {
        id: "branding",
        title: "Custom Branding",
        description: "Personalized desktop app with custom domain support",
        icon: "palette",
        animation: {
          delay: 0.6,
          duration: 0.5
        }
      }
    ],
    cta: {
      text: "Get Started – Automate Your Growth",
      href: "#"
    },
    animation: {
      delay: 0,
      duration: 0.8
    }
  }
};