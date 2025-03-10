import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  PhoneMissed,
  Brain,
  MessageSquare,
  UserPlus,
  BarChart
} from 'lucide-react';
import { cinematicData } from '../../../constants/home/CinematicExperienceData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'phone-missed': PhoneMissed,
  'brain': Brain,
  'message-square': MessageSquare,
  'user-plus': UserPlus,
  'bar-chart': BarChart,
};

// 3D Scene Component
const Scene = () => {
  const { camera } = useThree();
  const groupRef = useRef();

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {cinematicData.steps.map((step, index) => (
        <Float
          key={step.id}
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={2}
          position={[step.position.x, step.position.y, step.position.z]}
        >
          <mesh>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color="#9333ea" />
          </mesh>
          <Text
            position={[0, 0.4, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {step.title}
          </Text>
        </Float>
      ))}
    </group>
  );
};

const CinematicExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {cinematicData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {cinematicData.subtitle}
          </p>
        </motion.div>

        <div ref={ref} className="relative h-[600px] mb-16">
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Scene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>

          {/* Overlay Cards */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              {cinematicData.steps.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={step.id}
                    className="feature-card glass-card p-6 opacity-0 translate-y-8 pointer-events-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: step.animation.duration,
                      delay: step.animation.delay
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#9333ea]/20 rounded-full blur-xl" />
                        <div className="relative w-12 h-12 rounded-full bg-[#9333ea]/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#9333ea]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicExperience;