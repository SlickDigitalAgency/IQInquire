import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UserPlus,
  MessageSquare,
  Repeat,
  Share2,
  Calendar,
  Database,
  GitBranch,
  Star,
  Layout,
  BarChart
} from 'lucide-react';
import { howItWorksData } from '../../../constants/home/HowItWorksData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'user-plus': UserPlus,
  'message-square': MessageSquare,
  'repeat': Repeat,
  'share-2': Share2,
  'calendar': Calendar,
  'database': Database,
  'git-branch': GitBranch,
  'star': Star,
  'layout': Layout,
  'bar-chart': BarChart,
};

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    const steps = gsap.utils.toArray('.step-card');
    
    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step as Element,
        start: "top center+=100",
        end: "bottom center",
        toggleClass: "active",
        onEnter: () => {
          gsap.to(step, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        }
      });
    });

    // Animate timeline progress
    gsap.to(timelineRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {howItWorksData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {howItWorksData.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Progress Bar */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#9333ea]/20 hidden lg:block">
            <div
              ref={timelineRef}
              className="w-full bg-[#9333ea] h-0 transition-all duration-500"
            />
          </div>

          {/* Steps */}
          <div ref={ref} className="relative space-y-12">
            {howItWorksData.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  className={`flex items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: step.animation.duration,
                    delay: step.animation.delay
                  }}
                >
                  <div className={`flex-1 step-card glass-card p-8 opacity-0 translate-y-8 ${
                    isEven ? 'lg:text-right' : 'lg:text-left'
                  } text-center`}>
                    <div className={`flex items-center gap-4 mb-6 ${
                      isEven ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-center`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#9333ea]/20 rounded-full blur-xl" />
                        <div className="relative w-16 h-16 rounded-full bg-[#9333ea]/20 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#9333ea]" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{step.description}</p>

                    {step.stats && (
                      <div className={`flex items-center gap-4 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-center`}>
                        <span className="text-2xl font-bold text-[#9333ea]">
                          {step.stats.value}
                        </span>
                        <span className="text-sm text-gray-400">
                          {step.stats.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Timeline Node */}
                  <div className="relative hidden lg:block">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-8 h-8 rounded-full bg-[#9333ea]/20 flex items-center justify-center"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#9333ea]" />
                    </motion.div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default HowItWorks;