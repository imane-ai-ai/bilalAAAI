import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Vapi from '@vapi-ai/web';
import { Clock, Watch, Shield, Award, Package, Star, ChevronDown, TrendingUp, Users, DollarSign, Clock3, GraduationCap, CheckCircle, Cpu, Zap, Layers, Database, Code, Terminal, Timer, Settings, Gauge, Download, BookOpen, Target, ArrowRight, Phone } from 'lucide-react';
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
    description: "Professional dive watch with 600m water resistance",
    price: "$4,200",
    image: "https://i.imgur.com/EQAixxX.png"
  },
  {
    name: "Bilal MotoGP",
    description: "Limited edition chronograph with racing inspiration",
    price: "$3,500",
    image: "https://i.imgur.com/G4yTOZp.png"
  }
];

const apWatches = [
  {
    name: "Royal Oak Offshore",
    description: "Chronograph with ceramic bezel and tapisserie dial",
    price: "$185,000",
    image: "https://i.imgur.com/UmSZrWL.png"
  },
  {
    name: "Royal Oak Perpetual",
    description: "Perpetual calendar with grand tapisserie dial",
    price: "$235,000",
    image: "https://i.imgur.com/vvvZZGB.png"
  },
  {
    name: "Code 11.59",
    description: "Flying tourbillon with octagonal case middle",
    price: "$195,000",
    image: "https://i.imgur.com/ixbfMSP.png"
  }
];

const patekWatches = [
  {
    name: "Nautilus 5711",
    description: "Iconic sports watch with blue dial",
    price: "$285,000",
    image: "https://i.imgur.com/Afjfu0z.png"
  },
  {
    name: "Calatrava 5227",
    description: "Classic dress watch with hunter caseback",
    price: "$245,000",
    image: "https://i.imgur.com/RlEtTtn.png"
  },
  {
    name: "Grand Complications",
    description: "Perpetual calendar chronograph",
    price: "$395,000",
    image: "https://i.imgur.com/XoDc9Ex.png"
  }
];

const techSpecs = [
  {
    icon: <Cpu className="w-6 h-6 text-accent-purple" />,
    title: "Quantum Processing",
    description: "Next-gen neural network with advanced AI capabilities"
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-purple" />,
    title: "Neural Sync™",
    description: "Seamless integration with biological rhythms"
  },
  {
    icon: <Layers className="w-6 h-6 text-accent-purple" />,
    title: "Holographic Core",
    description: "Revolutionary 4D display technology"
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const arrowProgress = useTransform(scrollYProgress, [0.3, 0.7], ["30%", "70%"]);
  const arrowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const arrowScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 0.8]);

  // Vapi AI phone caller setup
  const [vapi, setVapi] = React.useState(null);
  const [isCallActive, setIsCallActive] = React.useState(false);
  
  React.useEffect(() => {
    const apiKey = "f059b533-8076-4800-99ac-3d8deb3fce3c";
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Listen for call status changes
    vapiInstance.on('call-start', () => {
      setIsCallActive(true);
    });

    vapiInstance.on('call-end', () => {
      setIsCallActive(false);
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const startCall = () => {
    if (vapi && !isCallActive) {
      const assistantId = "e311bb26-57ad-4693-ab8b-b6dd76ec6d0e";
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    if (vapi && isCallActive) {
      vapi.stop();
    }
  };

  // Initialize chat widget
  React.useEffect(() => {
    // Set up VG_CONFIG
    (window as any).VG_CONFIG = {
      ID: "iwRGPGiTSUaljv2qXaoL",
      region: 'na',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    // Load the script
    const VG_SCRIPT = document.createElement("script");
    VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    VG_SCRIPT.defer = true;
    document.body.appendChild(VG_SCRIPT);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black text-white">
          {/* Chat Widget Container */}
          <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
            {/* Here is where CONVOCORE renders the widget. */}
          </div>

          {/* Hero Section - Skill to Cash */}
          <section className="min-h-screen bg-black flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                      <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                        SKILL
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">TO</span>
                      <br />
                      <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                        CASH
                      </span>
                    </h1>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg"
                  >
                    How to Turn Your Skill Into Real Money — Step by Step
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6 flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      href="https://cobragency.gumroad.com/l/SkillToCash"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative bg-gradient-to-r from-accent-purple to-accent-cyan hover:from-accent-purple/90 hover:to-accent-cyan/90 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 inline-block flex-1 sm:flex-none"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        GET THE BOOK
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.a>

                    <motion.button
                      onClick={isCallActive ? endCall : startCall}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative ${
                        isCallActive 
                          ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                          : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                      } text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 inline-block flex-1 sm:flex-none shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]`}
                    >
                      <span className="flex items-center gap-2">
                        <Phone className={`w-5 h-5 ${isCallActive ? 'animate-pulse' : ''}`} />
                        {isCallActive ? 'END CALL' : 'START A CALL'}
                        {!isCallActive && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </motion.button>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-gray-400 text-sm mt-4 sm:mt-0"
                    >
                      Even if you've never sold anything before
                    </motion.p>
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center gap-6 pt-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan border-2 border-black flex items-center justify-center text-white font-bold text-sm"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-white font-medium">10,000+ Students</p>
                        <p className="text-gray-400 text-sm">Already transformed their skills</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - eBook Cover (Large Size) */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative flex justify-center lg:justify-end lg:order-2"
                >
                  <div className="relative">
                    {/* Blue Glow Effect - Larger */}
                    <div className="absolute -inset-16 bg-blue-500/20 rounded-3xl blur-3xl opacity-60" />
                    
                    {/* Book Cover - Much Larger */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.03,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative z-10"
                    >
                      <img
                        src="https://i.imgur.com/R1RzumI.png"
                        alt="Skill to Cash eBook Cover"
                        className="w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] h-auto rounded-lg shadow-2xl"
                        style={{
                          filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Fireblood Section */}
          <FirebloodSection />

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-cyan/5 to-accent-purple/10" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="max-w-2xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                    Ready to Transform Your Skills Into Income?
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Join thousands who have already started their journey from skill to cash
                  </p>
                  <motion.a
                    href="https://cobragency.gumroad.com/l/SkillToCash"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-block bg-gradient-to-r from-accent-purple to-accent-cyan hover:from-accent-purple/90 hover:to-accent-cyan/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-[0_0_30px_rgba(159,111,255,0.3)] hover:shadow-[0_0_50px_rgba(159,111,255,0.5)]"
                  >
                    <span className="flex items-center gap-4">
                      <Download className="w-7 h-7" />
                      GET THE BOOK
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <motion.h5 
                    className="font-display text-xl mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    MORCO AURA
                  </motion.h5>
                  <p className="text-text-secondary">Crafting tomorrow's classics today.</p>
                </div>
                <div>
                  <h6 className="font-medium mb-4">Collections</h6>
                  <ul className="space-y-2 text-text-secondary">
                    <motion.li whileHover={{ x: 5 }}>Chronograph</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Automatic</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Smart Fusion</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Limited Edition</motion.li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium mb-4">Support</h6>
                  <ul className="space-y-2 text-text-secondary">
                    <motion.li whileHover={{ x: 5 }}>Contact</motion.li>
                    <motion.li whileHover={{ x: 5 }}>FAQ</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Shipping</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Returns</motion.li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium mb-4">Follow Us</h6>
                  <ul className="space-y-2 text-text-secondary">
                    <motion.li whileHover={{ x: 5 }}>Instagram</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Twitter</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Facebook</motion.li>
                    <motion.li whileHover={{ x: 5 }}>LinkedIn</motion.li>
                  </ul>
                </div>
              </div>
            </div>
          
          </footer>
        </div>
      } />
      <Route path="/watch/:id" element={<WatchDetails />} />
    </Routes>
  );
}

export default App;