import { ProblemSolutionData } from '../../types/home/problemSolutionTypes';

export const problemSolutionData: ProblemSolutionData = {
  problem: {
    title: "The Cost of Missed Opportunities",
    subtitle: "Every missed call is a potential lead slipping through your fingers",
    painPoints: [
      {
        id: "lost-leads",
        title: "Lost Leads",
        description: "80% of potential clients won't leave a voicemail and will call your competitor instead",
        icon: "phone-missed",
        stats: {
          value: "80%",
          label: "Lost Opportunities"
        }
      },
      {
        id: "response-time",
        title: "Slow Response Times",
        description: "The chance of qualifying a lead drops by 400% when response time exceeds 10 minutes",
        icon: "clock",
        stats: {
          value: "400%",
          label: "Decreased Success Rate"
        }
      },
      {
        id: "revenue-loss",
        title: "Revenue Loss",
        description: "Real estate agents lose an average of $100K annually due to missed calls",
        icon: "ban-dollar",
        stats: {
          value: "$100K",
          label: "Annual Loss"
        }
      }
    ]
  },
  solution: {
    title: "Instant AI-Powered Response",
    subtitle: "Never miss another opportunity with automated SMS responses",
    steps: [
      {
        id: "detect",
        title: "Instant Detection",
        description: "Our AI system instantly detects missed calls in real-time",
        icon: "radar",
        animation: {
          delay: 0,
          duration: 0.5
        }
      },
      {
        id: "analyze",
        title: "Smart Analysis",
        description: "AI analyzes the caller's information and intent",
        icon: "brain-circuit",
        animation: {
          delay: 0.2,
          duration: 0.5
        }
      },
      {
        id: "respond",
        title: "Automated Response",
        description: "Sends a personalized SMS response within seconds",
        icon: "message-square-check",
        animation: {
          delay: 0.4,
          duration: 0.5
        }
      },
      {
        id: "capture",
        title: "Lead Capture",
        description: "Automatically captures and stores lead information in your CRM",
        icon: "user-check",
        animation: {
          delay: 0.6,
          duration: 0.5
        }
      }
    ]
  }
};