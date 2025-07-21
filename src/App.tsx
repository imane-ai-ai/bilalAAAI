import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Vapi from '@vapi-ai/web';
import { Clock, Watch, Shield, Award, Package, Star, ChevronDown, TrendingUp, Users, DollarSign, Clock3, GraduationCap, CheckCircle, Cpu, Zap, Layers, Database, Code, Terminal, Timer, Settings, Gauge, Download, BookOpen, Target, ArrowRight, Phone, AlertTriangle } from 'lucide-react';
import WatchDetails from './pages/WatchDetails';
import { Squares } from './components/ui/squares-background';
import { SparklesCore } from './components/ui/sparkles';
import { SparklesPreview } from './components/ui/sparkles-preview';
import { HeroGeometric } from './components/ui/hero-geometric';
import { LogoCarousel } from './components/ui/logo-carousel';
import { FirebloodSection } from './components/ui/fireblood-section';

const allLogos = [
  { 
    name: "Apple", 
    id: 1, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Clock {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Supabase", 
    id: 2, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Database {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Vercel", 
    id: 3, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Code {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Lowes", 
    id: 4, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Package {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Ally", 
    id: 5, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Shield {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Pierre", 
    id: 6, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Star {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "BMW", 
    id: 7, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Watch {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Claude", 
    id: 8, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Terminal {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Nextjs", 
    id: 9, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Layers {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Tailwind", 
    id: 10, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Cpu {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Upstash", 
    id: 11, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Zap {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Typescript", 
    id: 12, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Code {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "Stripe", 
    id: 13, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <DollarSign {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
  { 
    name: "OpenAI", 
    id: 14, 
    img: (props) => (
      <div className="p-3 rounded-xl bg-[#1a1f36]/40 backdrop-blur-sm border border-white/10 hover:border-accent-purple/30 transition-all duration-300 group">
        <Terminal {...props} className="w-8 h-8 text-accent-purple group-hover:text-accent-cyan transition-colors duration-300 filter drop-shadow-[0_0_10px_rgba(159,111,255,0.5)]" />
      </div>
    )
  },
];

interface WatchItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface WatchCardProps {
  watch: WatchItem;
}

interface CollectionSectionProps {
  title: string;
  watches: WatchItem[];
}

// Countdown Banner Component
const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    // Set target date to 48 hours from now
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-blue-800 text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="font-bold text-sm sm:text-base">
              The price will increase in 48 hours!
            </span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <Timer className="w-4 h-4 text-yellow-300" />
  )
}