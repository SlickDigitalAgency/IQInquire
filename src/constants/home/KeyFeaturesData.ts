import { KeyFeaturesData } from '../../types/home/KeyFeaturesTypes';

export const keyFeaturesData: KeyFeaturesData = {
  title: "Powerful Features",
  subtitle: "Everything you need to automate your real estate communications",
  features: [
    {
      id: "crm",
      title: "Smart CRM Integration",
      description: "Seamlessly track and manage leads with our intelligent CRM system designed specifically for real estate",
      icon: "users",
      stats: {
        value: "100%",
        label: "Lead Capture Rate"
      },
      animation: {
        delay: 0,
        duration: 0.5
      }
    },
    {
      id: "automation",
      title: "Marketing Automation",
      description: "AI-driven workflows that nurture leads and maintain client relationships automatically",
      icon: "settings",
      stats: {
        value: "24/7",
        label: "Active Management"
      },
      animation: {
        delay: 0.1,
        duration: 0.5
      }
    },
    {
      id: "messaging",
      title: "Smart Messaging",
      description: "Automated email and SMS campaigns that keep your leads engaged and convert more clients",
      icon: "message-square",
      stats: {
        value: "10x",
        label: "Response Rate"
      },
      animation: {
        delay: 0.2,
        duration: 0.5
      }
    },
    {
      id: "calendar",
      title: "Smart Scheduling",
      description: "Intelligent appointment management with automated reminders and follow-ups",
      icon: "calendar",
      stats: {
        value: "85%",
        label: "Time Saved"
      },
      animation: {
        delay: 0.3,
        duration: 0.5
      }
    },
    {
      id: "website",
      title: "Website Builder",
      description: "Create stunning real estate websites with built-in lead capture and automation",
      icon: "layout",
      stats: {
        value: "3x",
        label: "Lead Generation"
      },
      animation: {
        delay: 0.4,
        duration: 0.5
      }
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      description: "Data-driven insights to optimize your marketing and sales performance",
      icon: "bar-chart",
      stats: {
        value: "360°",
        label: "Business View"
      },
      animation: {
        delay: 0.5,
        duration: 0.5
      }
    }
  ]
};