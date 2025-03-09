import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Phone, Clock, Bot, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Create sphere geometry
    const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: '#9333ea',
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
    // Add particles around the sphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#8b5cf6',
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    
    scene.add(sphere);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.001;
      particlesMesh.rotation.y -= 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      if (sceneRef.current?.contains(renderer.domElement)) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const features = [
    { icon: Phone, text: "Instant Response", delay: 0 },
    { icon: Bot, text: "AI-Powered", delay: 0.2 },
    { icon: Building, text: "Real Estate Focus", delay: 0.4 },
    { icon: Clock, text: "24/7 Availability", delay: 0.6 },
    { icon: MessageSquare, text: "Smart SMS", delay: 0.8 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* 3D Scene Background */}
      <div ref={sceneRef} className="absolute inset-0 -z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Never Miss
              <br />
              <span className="text-[#9333ea]">A Lead Again</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              AI-Powered SMS automation that instantly responds to missed calls,
              capturing leads 24/7 for your real estate business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Started – Automate Your Missed Calls
            </motion.button>
          </motion.div>

          {/* 3D Sphere with Feature Icons */}
          <div ref={sphereRef} className="relative h-[600px]">
            {features.map((Feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: Feature.delay,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className={`absolute glass-card p-4 flex items-center space-x-3
                           ${index === 0 ? 'top-1/4 left-0' : ''}
                           ${index === 1 ? 'top-0 left-1/2 -translate-x-1/2' : ''}
                           ${index === 2 ? 'top-1/4 right-0' : ''}
                           ${index === 3 ? 'bottom-1/4 left-0' : ''}
                           ${index === 4 ? 'bottom-1/4 right-0' : ''}`}
              >
                <Feature.icon className="w-6 h-6 text-[#9333ea]" />
                <span className="text-sm font-medium">{Feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;