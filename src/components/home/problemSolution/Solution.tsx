import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radar, BrainCircuit, MessageSquare as MessageSquareCheck, UserCheck } from 'lucide-react';
import { problemSolutionData } from '../../../constants/home/problemSolutionData';

const iconMap = {
  'radar': Radar,
  'brain-circuit': BrainCircuit,
  'message-square-check': MessageSquareCheck,
  'user-check': UserCheck,
};

const Solution = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {problemSolutionData.solution.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {problemSolutionData.solution.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#9333ea] to-transparent hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 relative">
            {problemSolutionData.solution.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: step.animation?.duration || 0.5,
                    delay: step.animation?.delay || 0
                  }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 glass-card p-8 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>

                  <div className="relative hidden md:block">
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
                      className="w-16 h-16 rounded-full bg-[#9333ea]/20 flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-[#9333ea]" />
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

export default Solution;