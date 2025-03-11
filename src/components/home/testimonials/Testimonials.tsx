import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import { testimonialsData } from '../../../constants/home/TestimonialsData';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.testimonial-card');
    
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
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {testimonialsData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card glass-card p-8 opacity-0 translate-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: testimonial.animation.duration,
                delay: testimonial.animation.delay
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Company Logo */}
              <div className="mb-6">
                <img
                  src={testimonial.companyLogoUrl}
                  alt={`${testimonial.company} logo`}
                  className="h-12 object-contain"
                />
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#9333ea] fill-current"
                  />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#9333ea]/20 rounded-full blur-xl" />
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-[#9333ea]"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-[#9333ea] text-sm">{testimonial.businessType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;