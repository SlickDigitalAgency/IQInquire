import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Clock,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  ChevronDown
} from 'lucide-react';
import { caseStudiesData } from '../../../constants/home/CaseStudiesData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'clock': Clock,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  'users': Users,
  'target': Target,
};

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.case-study-card');
    
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {caseStudiesData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {caseStudiesData.subtitle}
          </p>
        </motion.div>

        <div ref={ref} className="space-y-8">
          {caseStudiesData.caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="case-study-card glass-card p-8 opacity-0 translate-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: study.animation.duration,
                delay: study.animation.delay
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative">
                  <img
                    src={study.imageUrl}
                    alt={study.businessName}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">{study.businessName}</h3>
                  <p className="text-[#9333ea] mb-4">{study.industry}</p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, index) => {
                      const Icon = iconMap[result.icon as keyof typeof iconMap];
                      return (
                        <div key={index} className="text-center p-4 glass-card">
                          <Icon className="w-6 h-6 text-[#9333ea] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-[#9333ea]">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-400">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Expandable Content */}
                  <motion.button
                    onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                    className="flex items-center gap-2 text-[#9333ea] hover:text-[#7928ca] transition-colors"
                  >
                    Learn More
                    <motion.div
                      animate={{ rotate: expandedId === study.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedId === study.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                            <p className="text-gray-300">{study.problem}</p>
                          </div>
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                            <p className="text-gray-300">{study.solution}</p>
                          </div>
                          
                          {/* Before & After Comparison */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="glass-card p-6">
                              <h5 className="text-lg font-semibold mb-4">Before InquireIQ</h5>
                              {study.beforeMetrics.map((metric, index) => (
                                <div key={index} className="mb-2 flex justify-between">
                                  <span className="text-gray-400">{metric.label}</span>
                                  <span className="text-red-500">{metric.value}</span>
                                </div>
                              ))}
                            </div>
                            <div className="glass-card p-6">
                              <h5 className="text-lg font-semibold mb-4">After InquireIQ</h5>
                              {study.afterMetrics.map((metric, index) => (
                                <div key={index} className="mb-2 flex justify-between">
                                  <span className="text-gray-400">{metric.label}</span>
                                  <span className="text-[#9333ea]">{metric.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;