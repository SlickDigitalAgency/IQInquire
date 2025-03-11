import { CaseStudiesData } from '../../types/home/CaseStudiesTypes';

export const caseStudiesData: CaseStudiesData = {
  title: "Real Estate Success Stories with InquireIQ",
  subtitle: "Discover how leading real estate businesses transformed their lead generation with AI-powered automation",
  caseStudies: [
    {
      id: "1",
      businessName: "Premier Properties NYC",
      industry: "Luxury Real Estate",
      problem: "Missing 60% of potential leads due to delayed response times and after-hours calls",
      solution: "Implemented InquireIQ's AI SMS automation for instant 24/7 lead engagement",
      results: [
        {
          label: "Lead Response Time",
          value: "< 30 seconds",
          icon: "clock"
        },
        {
          label: "Lead Conversion Rate",
          value: "+200%",
          icon: "trending-up"
        },
        {
          label: "Monthly Revenue",
          value: "+150%",
          icon: "dollar-sign"
        }
      ],
      beforeMetrics: [
        { label: "Response Time", value: "3 hours" },
        { label: "Lead Capture Rate", value: "40%" },
        { label: "Monthly Missed Calls", value: "120+" }
      ],
      afterMetrics: [
        { label: "Response Time", value: "30 seconds" },
        { label: "Lead Capture Rate", value: "95%" },
        { label: "Monthly Missed Calls", value: "0" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1582037928769-51d3c198c190?q=80&w=800&h=400&fit=crop",
      animation: {
        delay: 0,
        duration: 0.5
      }
    },
    {
      id: "2",
      businessName: "Bay Area Homes",
      industry: "Residential Real Estate",
      problem: "Struggling to manage high call volume during peak hours and losing potential buyers",
      solution: "Deployed InquireIQ to automate initial client engagement and qualification",
      results: [
        {
          label: "Client Engagement",
          value: "+300%",
          icon: "users"
        },
        {
          label: "Time Saved",
          value: "40 hrs/week",
          icon: "clock"
        },
        {
          label: "Lead Quality",
          value: "+180%",
          icon: "target"
        }
      ],
      beforeMetrics: [
        { label: "Daily Missed Calls", value: "25+" },
        { label: "Lead Response Rate", value: "45%" },
        { label: "Team Productivity", value: "60%" }
      ],
      afterMetrics: [
        { label: "Daily Missed Calls", value: "0" },
        { label: "Lead Response Rate", value: "98%" },
        { label: "Team Productivity", value: "95%" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=400&fit=crop",
      animation: {
        delay: 0.2,
        duration: 0.5
      }
    }
  ]
};