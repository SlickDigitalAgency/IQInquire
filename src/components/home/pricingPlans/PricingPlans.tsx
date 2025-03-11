import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PenTool as Tool, Brain, Briefcase, Users, LayoutGrid, Code, Palette, Info } from 'lucide-react';
import { pricingPlansData } from '../../../constants/home/PricingPlansData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'tool': Tool,
  'brain': Brain,
  'briefcase': Briefcase,
  'users': Users,
  'layout-grid': LayoutGrid,
  'code': Code,
  'palette': Palette,
};

const PricingPlans = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // 3D card animation values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const features = gsap.utils.toArray('.feature-item');
    
    features.forEach((feature, i) => {
      ScrollTrigger.create({
        trigger: feature as Element,
        start: "top bottom-=100",
        end: "bottom center",
        toggleClass: "active",
        onEnter: () => {
          gsap.to(feature, {
            opacity: 1,
            x: 0,
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
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {pricingPlansData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pricingPlansData.subtitle}
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            ref={cardRef}
            className="glass-card p-8 md:p-12"
            style={{
              perspective: 2000,
              rotateX,
              rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: pricingPlansData.plan.animation.duration,
              delay: pricingPlansData.plan.animation.delay
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Plan Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">{pricingPlansData.plan.name}</h3>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-6xl font-bold text-[#9333ea]">
                  {pricingPlansData.plan.price}
                </span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-300 text-lg">
                {pricingPlansData.plan.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              {pricingPlansData.plan.features.map((feature) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={feature.id}
                    className="feature-item flex items-start gap-4 opacity-0 translate-x-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: feature.animation.duration,
                      delay: feature.animation.delay
                    }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#9333ea]/20 rounded-full blur-xl" />
                      <div className="relative w-12 h-12 rounded-full bg-[#9333ea]/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#9333ea]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-lg">{feature.title}</h4>
                        <div className="group relative">
                          <Info className="w-4 h-4 text-gray-400" />
                          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-64 p-2 bg-black/90 rounded-lg text-sm invisible group-hover:visible">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.button
                className="btn-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147,51,234,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {pricingPlansData.plan.cta.text}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;