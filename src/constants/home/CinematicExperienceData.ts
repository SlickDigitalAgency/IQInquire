import { CinematicData } from '../../types/home/CinematicExperienceTypes';

export const cinematicData: CinematicData = {
  title: "Experience the Future of Real Estate Communication",
  subtitle: "Watch how InquireIQ transforms missed calls into valuable leads in real-time",
  steps: [
    {
      id: "missed-call",
      title: "Missed Call Detection",
      description: "InquireIQ instantly detects when a potential lead attempts to reach you",
      icon: "phone-missed",
      position: { x: -2, y: 0, z: 0 },
      animation: {
        delay: 0,
        duration: 1.5
      }
    },
    {
      id: "ai-analysis",
      title: "AI Analysis",
      description: "Our AI system analyzes the caller's information and intent",
      icon: "brain",
      position: { x: -1, y: 1, z: 1 },
      animation: {
        delay: 0.5,
        duration: 1.5
      }
    },
    {
      id: "sms-response",
      title: "Instant SMS Response",
      description: "An intelligent, personalized SMS is automatically sent to engage the lead",
      icon: "message-square",
      position: { x: 0, y: 2, z: 2 },
      animation: {
        delay: 1,
        duration: 1.5
      }
    },
    {
      id: "lead-capture",
      title: "Lead Capture",
      description: "Contact information is securely stored in your CRM for follow-up",
      icon: "user-plus",
      position: { x: 1, y: 1, z: 1 },
      animation: {
        delay: 1.5,
        duration: 1.5
      }
    },
    {
      id: "analytics",
      title: "Real-time Analytics",
      description: "Track and analyze lead engagement metrics instantly",
      icon: "bar-chart",
      position: { x: 2, y: 0, z: 0 },
      animation: {
        delay: 2,
        duration: 1.5
      }
    }
  ]
};