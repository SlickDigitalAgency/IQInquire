import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Settings, MessageSquare, Calendar, Layout, BarChart } from 'lucide-react';
import { keyFeaturesData } from '../../../constants/home/KeyFeaturesData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'users': Users,
  'settings': Settings,
  'message-square': MessageSquare,
  'calendar': Calendar,
  'layout': Layout,
  'bar-chart': BarChart,
};

const KeyFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.feature-card');
    
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card as Element,
        start: "top bottom-=100",
        end: "bottom center",
        toggleClass: "active",
        onEnter: () => {
          gsap.to(card, {
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
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {keyFeaturesData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {keyFeaturesData.subtitle}
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeaturesData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.id}
                className="feature-card glass-card p-8 opacity-0 translate-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: feature.animation?.duration || 0.5,
                  delay: feature.animation?.delay || 0
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#9333ea]/20 rounded-full blur-xl" />
                  <div className="relative w-16 h-16 rounded-full bg-[#9333ea]/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#9333ea]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>

                {feature.stats && (
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-2xl font-bold text-[#9333ea]">
                      {feature.stats.value}
                    </span>
                    <span className="text-sm text-gray-400">
                      {feature.stats.label}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#9333ea]/0 via-[#9333ea] to-[#9333ea]/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;