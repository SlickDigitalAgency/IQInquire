import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import { calltoActionData } from '../../../constants/home/CalltoActionData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'mail': Mail,
  'message-circle': MessageCircle,
  'linkedin': Linkedin,
};

const CalltoAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const buttons = gsap.utils.toArray('.cta-button');
    
    buttons.forEach((button, i) => {
      ScrollTrigger.create({
        trigger: button as Element,
        start: "top bottom-=100",
        end: "bottom center",
        toggleClass: "active",
        onEnter: () => {
          gsap.to(button, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#9333ea]/5" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            {calltoActionData.title}
          </h2>
          <p className="text-xl text-gray-300">
            {calltoActionData.subtitle}
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto"
        >
          {calltoActionData.buttons.map((button) => {
            const Icon = iconMap[button.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={button.id}
                href={button.href}
                target={button.href.startsWith('http') ? '_blank' : undefined}
                rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="cta-button glass-card w-full md:w-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: button.animation.duration,
                  delay: button.animation.delay
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147,51,234,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative p-6 flex items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/0 via-[#9333ea]/10 to-[#9333ea]/0" />
                  <Icon className="w-6 h-6 text-[#9333ea]" />
                  <span className="font-semibold">{button.label}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;