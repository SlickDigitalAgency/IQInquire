import { HowItWorksData } from '../../types/home/HowItWorksTypes';

export const howItWorksData: HowItWorksData = {
  title: "How It Works",
  subtitle: "Automating SMS Responses Seamlessly",
  steps: [
    {
      id: "lead-capture",
      title: "Instant Lead Capture",
      description: "Automatically collect and process leads from missed calls, ensuring no opportunity slips through the cracks",
      icon: "user-plus",
      animation: {
        delay: 0,
        duration: 0.5
      },
      stats: {
        value: "100%",
        label: "Capture Rate"
      }
    },
    {
      id: "ai-sms",
      title: "AI-Powered SMS Automation",
      description: "Our AI instantly engages potential clients with personalized messages, maintaining a natural conversation flow",
      icon: "message-square",
      animation: {
        delay: 0.1,
        duration: 0.5
      },
      stats: {
        value: "< 1s",
        label: "Response Time"
      }
    },
    {
      id: "follow-up",
      title: "Smart Follow-Ups",
      description: "Intelligent follow-up sequences keep leads engaged and nurture them through your sales pipeline",
      icon: "repeat",
      animation: {
        delay: 0.2,
        duration: 0.5
      },
      stats: {
        value: "3x",
        label: "Engagement Rate"
      }
    },
    {
      id: "multi-channel",
      title: "Multi-Channel Communication",
      description: "Seamlessly connect via SMS, email, and calls for comprehensive lead engagement",
      icon: "share-2",
      animation: {
        delay: 0.3,
        duration: 0.5
      }
    },
    {
      id: "booking",
      title: "Easy Appointment Booking",
      description: "Allow leads to schedule appointments directly through automated SMS conversations",
      icon: "calendar",
      animation: {
        delay: 0.4,
        duration: 0.5
      },
      stats: {
        value: "85%",
        label: "Booking Rate"
      }
    },
    {
      id: "crm",
      title: "CRM Integration",
      description: "Automatically sync all lead interactions with your favorite CRM platform",
      icon: "database",
      animation: {
        delay: 0.5,
        duration: 0.5
      }
    },
    {
      id: "pipeline",
      title: "Pipeline Tracking",
      description: "Monitor your sales pipeline with real-time updates and insights",
      icon: "git-branch",
      animation: {
        delay: 0.6,
        duration: 0.5
      },
      stats: {
        value: "360°",
        label: "Pipeline View"
      }
    },
    {
      id: "reputation",
      title: "Reputation Management",
      description: "Automatically request and collect reviews from satisfied clients",
      icon: "star",
      animation: {
        delay: 0.7,
        duration: 0.5
      },
      stats: {
        value: "4.9★",
        label: "Avg. Rating"
      }
    },
    {
      id: "campaigns",
      title: "Custom Campaigns",
      description: "Create and automate marketing campaigns with drag-and-drop simplicity",
      icon: "layout",
      animation: {
        delay: 0.8,
        duration: 0.5
      }
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      description: "Get detailed insights into your lead generation and conversion performance",
      icon: "bar-chart",
      animation: {
        delay: 0.9,
        duration: 0.5
      },
      stats: {
        value: "200%",
        label: "ROI Increase"
      }
    }
  ]
};