'use client';

import { motion } from 'framer-motion';
import { Plane, FileText } from 'lucide-react';

export default function CloudVisualization() {
  const cards = [
    {
      number: '01',
      icon: Plane,
      title: 'Am I Eligible?',
      description: 'Check your profile against university requirements',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Dream School Finder',
      description: 'Discover universities that match your goals',
    },
    {
      number: '03',
      icon: Plane,
      title: 'Explore Programs',
      description: 'Browse thousands of programs worldwide',
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Cloud SVG backgrounds - subtle and decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="hsl(206 100% 50%)">
          <path d="M 50 100 Q 50 80, 70 80 Q 80 60, 100 60 Q 120 60, 130 80 Q 150 80, 150 100 Q 150 120, 130 120 L 70 120 Q 50 120, 50 100 Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-0 w-80 h-80 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="hsl(188 100% 50%)">
          <path d="M 40 110 Q 40 85, 65 80 Q 75 55, 100 55 Q 130 55, 140 80 Q 160 85, 160 110 Q 160 135, 140 140 L 60 140 Q 40 135, 40 110 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Intro text */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              ✈️
            </motion.span>
            How Uniwise Works
          </button>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Cloud-like background with soft shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Number badge */}
                <div className="text-5xl font-bold text-primary/20 mb-4">{card.number}</div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{card.description}</p>

                {/* Plane icon floating in corner */}
                <motion.div
                  className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Plane className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative planes in background */}
        <motion.div
          className="absolute top-20 right-20 opacity-10 pointer-events-none"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Plane className="w-16 h-16 text-primary" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-10 opacity-10 pointer-events-none"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Plane className="w-12 h-12 text-accent" />
        </motion.div>
      </div>
    </section>
  );
}
