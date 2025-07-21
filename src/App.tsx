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
            <div className="flex items-center gap-1 font-mono font-bold text-sm sm:text-base">
              <div className="bg-white/20 px-2 py-1 rounded min-w-[2rem] text-center">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded min-w-[2rem] text-center">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded min-w-[2rem] text-center">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="watch-card group"
    >
      <motion.div 
        className="watch-frame"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="corner-marker top-left"></div>
        <div className="corner-marker top-right"></div>
        <div className="corner-marker bottom-left"></div>
        <div className="corner-marker bottom-right"></div>
        
        <div className="watch-content">
          <motion.div 
            className="watch-image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img 
              src={watch.image} 
              alt={watch.name}
              className="watch-image"
            />
            <div className="watch-glow"></div>
          </motion.div>
          
          <div className="watch-info">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-white truncate flex-1">{watch.name}</h4>
                <span className="text-sm font-semibold text-accent-cyan ml-2">{watch.price}</span>
              </div>
              <p className="text-[11px] leading-tight text-text-secondary line-clamp-2">{watch.description}</p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-accent-cyan"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <span className="text-[10px] text-text-secondary">In Stock</span>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/watch/${watch.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="text-[10px] px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full hover:bg-accent-cyan/20 transition-colors"
                >
                  Details
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CollectionSection: React.FC<CollectionSectionProps> = ({ title, watches }) => (
  <section className="py-20 relative overflow-hidden collection-section">
    <div className="absolute inset-0">
      <Squares 
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(159, 111, 255, 0.1)"
        hoverFillColor="rgba(159, 111, 255, 0.05)"
        className="opacity-50"
      />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.h3 
        className="text-4xl font-display mb-16 gradient-text collection-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-text={title}
      >
        {title}
      </motion.h3>
      <div className="collection-grid">
        {watches.map((watch, index) => (
          <WatchCard key={index} watch={watch} />
        ))}
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: <Clock className="feature-icon" />,
    title: "Swiss Precision",
    description: "Each movement is crafted with unparalleled attention to detail and precision."
  },
  {
    icon: <Watch className="feature-icon" />,
    title: "Smart Integration",
    description: "Seamlessly blending traditional horology with cutting-edge technology."
  },
  {
    icon: <Shield className="feature-icon" />,
    title: "Lifetime Warranty",
    description: "Our commitment to quality is backed by a comprehensive lifetime warranty."
  },
  {
    icon: <Award className="feature-icon" />,
    title: "Award Winning",
    description: "Recognized globally for innovation in luxury watchmaking."
  },
  {
    icon: <Package className="feature-icon" />,
    title: "Custom Design",
    description: "Create your perfect timepiece with our bespoke design service."
  },
  {
    icon: <Star className="feature-icon" />,
    title: "Limited Editions",
    description: "Exclusive collections that push the boundaries of watch design."
  }
];

const rolexWatches = [
  {
    name: "Daytona Cosmograph",
    description: "Precision chronograph with Oysterflex bracelet",
    price: "$34,500",
    image: "https://i.imgur.com/Fa3Qon0.jpeg"
  },
  {
    name: "Submariner Date",
    description: "Professional diver's watch with Cerachrom bezel",
    price: "$41,900",
    image: "https://i.imgur.com/XR0Pj97.png"
  },
  {
    name: "GMT-Master II",
    description: "Dual time zone functionality with Jubilee bracelet",
    price: "$38,700",
    image: "https://i.imgur.com/YapysZX.png"
  }
];

const tissotWatches = [
  {
    name: "PRX Powermatic 80",
    description: "Integrated bracelet with automatic movement",
    price: "$3,900",
    image: "https://i.imgur.com/vgBjiJf.png"
  },
  {
    name: "Seastar 2000",
    description: "Professional diver's watch with ceramic bezel",
    price: "$2,500",
    image: "https://i.imgur.com/example.png"
  }
];