import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneMissed, Clock, DollarSign as BanDollar } from 'lucide-react';
import { problemSolutionData } from '../../../constants/home/problemSolutionData';

const iconMap = {
  'phone-missed': PhoneMissed,
  'clock': Clock,
  'ban-dollar': BanDollar,
};

const Problem = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {problemSolutionData.problem.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {problemSolutionData.problem.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 aspect-square flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <PhoneMissed className="w-32 h-32 text-red-500" />
                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Pain Points */}
          <div className="space-y-6">
            {problemSolutionData.problem.painPoints.map((point, index) => {
              const Icon = iconMap[point.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-red-500/20">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                      <p className="text-gray-300">{point.description}</p>
                      {point.stats && (
                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-2xl font-bold text-red-500">
                            {point.stats.value}
                          </span>
                          <span className="text-sm text-gray-400">
                            {point.stats.label}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;