import React from "react";
import { motion } from 'framer-motion';
import { Sparkles, Download, ArrowRight } from 'lucide-react';
import { SparklesCore } from './sparkles';

const benefits = [
  "How to Create a Powerful Offer",
  "How to Find the Right Clients", 
  "How to Prospect with Confidence",
  "How to Close Deals Like a Pro",
  "How to Communicate with Clients Effectively",
  "How to Collect Real Testimonials",
  "How to Use Your Words to Sell"
];

export const FirebloodSection = memo(function FirebloodSection() {
  return (
    <section className="min-h-screen bg-primary relative overflow-hidden py-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#9F6FFF"
          speed={0.5}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-wider font-bold mb-6"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                textShadow: '0 0 20px rgba(159, 111, 255, 0.5)'
              }}
            >
              ALL-YOU-NEED
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                Skill To Cash
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 font-mono space-y-4"
            >
              <p className="text-accent-purple">
                SKILL TO CASH <span className="text-white">REPLACES</span> CONFUSION AND
              </p>
              <p className="text-white">
                HESITATION BY FILLING THE GAP BETWEEN YOUR
              </p>
              <p className="text-accent-cyan">
                SKILL AND YOUR INCOME. <span className="text-white">JUST ONE</span>
              </p>
              <p className="text-white">
                SIMPLE FRAMEWORK GIVES YOU THE ESSENTIAL
              </p>
              <p className="text-accent-purple">
                TOOLS TO: CREATE IRRESISTIBLE OFFERS,
              </p>
              <p className="text-white">
                FIND CLIENTS, AND CLOSE DEALS.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-12 font-mono tracking-wide"
            >
              IN SHORT, IT'S A <span className="text-accent-cyan">SMART INVESTMENT</span> IN YOUR FUTURE —
              <br />TO MONETIZE YOUR TALENT NOW AND BUILD LONG-TERM FREEDOM.
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative flex items-center justify-center perspective">
                <motion.div
                  initial={{ rotateY: -15 }}
                  animate={{ rotateY: 15 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(10deg)",
                  }}
                  className="relative w-[400px]"
                >
                  {/* Corner Marks */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <div className="absolute top-0 left-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute top-0 left-0 w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6">
                    <div className="absolute top-0 right-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute top-0 right-0 w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-6 h-6">
                    <div className="absolute bottom-0 left-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <div className="absolute bottom-0 right-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-px bg-white/50"></div>
                  </div>

                  {/* Middle Corner Marks */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-[50%] w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-[50%] w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-6">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-px bg-white/50"></div>
                    <div className="absolute top-1/2 -translate-y-[50%] left-0 w-px h-3 bg-white/50"></div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6">
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-px bg-white/50"></div>
                    <div className="absolute top-1/2 -translate-y-[50%] right-0 w-px h-3 bg-white/50"></div>
                  </div>

                  <img 
                    src="https://i.imgur.com/10raL0c.png" 
                    alt="Skill to Cash eBook"
                    className="w-[400px] relative z-10 mix-blend-normal transition-all duration-300 hover:scale-105 transform-gpu"
                  />
                </motion.div>
              </div>

              <div className="mt-12 bg-[#0A0D16]/95 p-6 backdrop-blur-sm border border-accent-purple/20 rounded-lg">
                <h3 className="text-xl font-mono font-bold text-accent-purple mb-4 tracking-wider flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  YOUR LOOK INSIDE SKILL TO CASH:
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300 font-mono tracking-wider group"
                    >
                      <span className="text-accent-cyan group-hover:scale-125 transition-transform duration-300">—</span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 text-sm font-mono text-accent-purple hover:text-white transition-colors tracking-wider relative overflow-hidden group"
                >
                  <span className="relative z-10">SEE SKILL TO CASH CONTENTS</span>
                  <div className="absolute inset-0 bg-accent-purple/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.a
                href="https://cobralaunchai.gumroad.com/l/SkillToCash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block bg-gradient-to-r from-accent-purple to-accent-cyan hover:from-accent-purple/90 hover:to-accent-cyan/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(159,111,255,0.3)] hover:shadow-[0_0_50px_rgba(159,111,255,0.5)]"
              >
                <span className="flex items-center gap-3 font-mono tracking-wider">
                  <Download className="w-6 h-6" />
                  GET THE BOOK
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent animate-pulse" />
    </section>
  );
}
)