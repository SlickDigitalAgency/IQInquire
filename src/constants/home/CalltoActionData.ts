import { CalltoActionData } from '../../types/home/CalltoActionTypes';

export const calltoActionData: CalltoActionData = {
  title: "Never Miss a Lead – Get Started with AI-Driven SMS Responses!",
  subtitle: "Join top real estate professionals who automate missed call responses and capture every lead instantly!",
  buttons: [
    {
      id: "contact",
      label: "Contact Us",
      href: "/contact",
      icon: "mail",
      animation: {
        delay: 0,
        duration: 0.5
      }
    },
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      href: "https://wa.me/447393642179",
      icon: "message-circle",
      animation: {
        delay: 0.1,
        duration: 0.5
      }
    },
    {
      id: "linkedin",
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/company/inquireiq",
      icon: "linkedin",
      animation: {
        delay: 0.2,
        duration: 0.5
      }
    }
  ]
};