import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../../constants/home/AboutusData';
import { Zap, Shield, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  zap: Zap,
  shield: Shield,
  cpu: Cpu,
};

const Aboutus = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray('.scroll-section');
    
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section as Element,
        start: "top center",
        end: "bottom center",
        toggleClass: "active",
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-grid-pattern">
      {/* Mission Statement */}
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          Our <span className="text-[#9333ea]">Mission</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          {aboutData.mission}
        </p>
      </motion.div>

      {/* Scrolling Sections */}
      <div ref={ref} className="space-y-32">
        {aboutData.sections.map((section, index) => (
          <div
            key={section.id}
            className={`scroll-section container mx-auto px-4 opacity-0 translate-y-10
                       ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="glass-card p-8 relative overflow-hidden">
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg" />
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {section.description}
                </p>
                
                {section.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="glass-card p-4 text-center">
                        <div className="text-2xl font-bold text-[#9333ea]">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 mt-32"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
          Our Core <span className="text-[#9333ea]">Values</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.values.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <div className="inline-block p-4 rounded-full bg-[#9333ea]/20 mb-6">
                  <Icon className="w-8 h-8 text-[#9333ea]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutus;