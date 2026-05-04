'use client';

import { motion } from 'framer-motion';
import { Plane, Passport, Smile } from 'lucide-react';

export default function ChatBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Mascot character (simple circle + emoji approach) */}
      <div className="flex justify-center mb-8">
        <motion.div
          className="relative w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Smile className="w-12 h-12 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Chat bubble */}
      <motion.div
        className="bg-white rounded-3xl shadow-xl max-w-sm mx-auto p-6 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Bubble pointer */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />

        <div className="text-center">
          <h3 className="font-bold text-foreground text-lg mb-2">
            Hi! I'm Uniwise AI Assistant
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Get personalized guidance for your study abroad journey
          </p>

          {/* Icon row */}
          <div className="flex justify-center gap-3 mb-4">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Plane className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}>
              <Passport className="w-6 h-6 text-accent" />
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}>
              <Smile className="w-6 h-6 text-primary" />
            </motion.div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all">
            Talk to Uniwise Bot
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
