/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { 
  Bot, 
  Cpu, 
  Globe, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  BarChart3, 
  Layers,
  ChevronRight,
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Rocket,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Quote,
  Database,
  MailCheck,
  Search,
  Mic,
  Volume2
} from 'lucide-react';

// --- Animation Variants ---

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-10%" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerItemLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerItemRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center glow-blue">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">Lunexor<span className="text-neon-blue">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 mr-4 border-r border-white/10 pr-8">
            <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          {['Home', 'About', 'Process', 'Services', 'Plans', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-bold glow-purple hover:scale-105 transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" /> Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Process', 'Services', 'Plans', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
                  className="text-lg font-medium text-slate-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-6 py-4 border-y border-white/10">
                <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-blue pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-neon-blue pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.2 }}
      />
    </>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <motion.div 
    variants={staggerContainer}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, margin: "-10%" }}
    className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''}`}
  >
    <motion.h2 
      variants={staggerItem}
      className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        variants={staggerItem}
        className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description, preview, tagline, variants = staggerItem }: { icon: any, title: string, description: string, preview?: React.ReactNode, tagline?: string, variants?: any }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -8, scale: 1.01 }}
    className="glass p-5 md:p-6 rounded-[24px] md:rounded-[32px] relative overflow-hidden group border border-white/10 hover:border-neon-blue/50 transition-all duration-500 flex flex-col h-full"
  >
    <div className="flex flex-col gap-6 h-full">
      <div className="flex-grow">
        {/* Animated background glow */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl group-hover:bg-neon-blue/30 transition-all duration-700" />
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-all duration-700" />
        
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-6 border border-white/10 group-hover:glow-blue transition-all duration-500">
          <Icon className="text-neon-blue w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
        </div>
        {tagline && (
          <p className="text-neon-blue text-[9px] font-black uppercase tracking-[0.2em] mb-2">{tagline}</p>
        )}
        <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm mb-6">{description}</p>
        
        {preview && (
          <div className="flex flex-wrap gap-2 mt-auto mb-6">
            <div className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              24/7
            </div>
            <div className="px-2 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-[9px] font-bold text-neon-blue uppercase tracking-widest flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" />
              Leads
            </div>
          </div>
        )}
      </div>
      
      {preview && (
        <div className="w-full flex-shrink-0 relative z-10">
          {preview}
        </div>
      )}
    </div>
    
    {/* Subtle bottom accent line */}
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-700" />
  </motion.div>
);

const ChatBotPreview = () => (
  <div className="relative group/chat">
    {/* Decorative elements */}
    <div className="absolute -inset-4 bg-neon-blue/20 blur-2xl rounded-full opacity-0 group-hover/chat:opacity-100 transition-opacity duration-700" />
    
    <div className="glass rounded-[20px] overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[240px] w-full relative z-10">
      {/* Header */}
      <div className="bg-white/5 p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg">
            <Bot className="text-white w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white">Lunexor AI</p>
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-3 space-y-3 overflow-y-auto flex-grow scrollbar-hide">
        <div className="flex gap-2">
          <div className="bg-white/5 p-2 rounded-xl rounded-tl-none text-[10px] text-slate-300 max-w-[85%] border border-white/5">
            Hi! How can I help you today?
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <div className="bg-neon-blue/20 p-2 rounded-xl rounded-tr-none text-[10px] text-white max-w-[85%] border border-neon-blue/30">
            Tell me about your AI services.
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-white/5 p-2 rounded-xl rounded-tl-none text-[10px] text-slate-300 max-w-[85%] border border-white/5">
            We specialize in custom AI automation!
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-2 bg-white/5 border-t border-white/10 flex gap-2">
        <div className="h-7 flex-grow bg-white/5 rounded-lg border border-white/10 px-3 text-[9px] text-slate-500 flex items-center">
          Message...
        </div>
        <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
          <ArrowRight className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  </div>
);

const WorkflowAutomationPreview = () => (
  <div className="relative group/workflow">
    <div className="absolute -inset-4 bg-neon-purple/20 blur-2xl rounded-full opacity-0 group-hover/workflow:opacity-100 transition-opacity duration-700" />
    
    <div className="glass rounded-[20px] p-4 border border-white/10 shadow-2xl flex flex-col h-[240px] w-full relative z-10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[9px] font-black text-white uppercase tracking-widest">Automation</h4>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
          <span className="text-[8px] font-bold text-neon-purple uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="space-y-3 relative">
        <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent opacity-30" />

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Globe className="w-4 h-4 text-neon-blue" />
          </div>
          <div className="flex-grow">
            <p className="text-[10px] font-bold text-white">New Lead</p>
          </div>
          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-neon-blue/20 border border-neon-blue/30 flex items-center justify-center">
            <Bot className="w-4 h-4 text-neon-blue" />
          </div>
          <div className="flex-grow">
            <p className="text-[10px] font-bold text-white">AI Analysis</p>
          </div>
          <div className="w-3 h-3 rounded-full border-2 border-neon-blue border-t-transparent animate-spin" />
        </div>

        <div className="flex items-center gap-3 relative z-10 opacity-50">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Database className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex-grow">
            <p className="text-[10px] font-bold text-white">CRM Sync</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between">
        <p className="text-[8px] text-slate-500">Active</p>
        <div className="flex -space-x-1.5">
          <div className="w-5 h-5 rounded-full bg-white/10 border border-slate-900 flex items-center justify-center text-[7px] text-white">Z</div>
          <div className="w-5 h-5 rounded-full bg-white/10 border border-slate-900 flex items-center justify-center text-[7px] text-white">S</div>
        </div>
      </div>
    </div>
  </div>
);

const VoiceChatbotPreview = () => (
  <div className="relative group/voice">
    <div className="absolute -inset-4 bg-neon-blue/20 blur-2xl rounded-full opacity-0 group-hover/voice:opacity-100 transition-opacity duration-700" />
    
    <div className="glass rounded-[20px] p-4 border border-white/10 shadow-2xl flex flex-col h-[240px] w-full relative z-10 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-neon-blue/5 rounded-full animate-ping opacity-20" />
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-xl border border-white/20 mb-4 glow-blue">
          <Mic className="w-7 h-7 text-white" />
        </div>
        
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [6, 18, 10, 24, 6] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              className="w-0.5 bg-neon-blue rounded-full"
            />
          ))}
        </div>

        <p className="text-[10px] font-bold text-white uppercase tracking-widest">Listening...</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
        <div className="flex items-center gap-1.5">
          <Volume2 className="w-2.5 h-2.5 text-neon-blue" />
          <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Voice AI</span>
        </div>
        <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Online</span>
      </div>
    </div>
  </div>
);

const GeneratedAIImage = ({ prompt, className }: { prompt: string, className?: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: prompt,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "4:3",
              imageSize: "1K"
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64EncodeString}`);
            setLoading(false);
            return;
          }
        }
        setError(true);
      } catch (err) {
        console.error("Image generation failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt]);

  if (loading) {
    return (
      <div className={`${className} bg-white/5 flex items-center justify-center overflow-hidden relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 animate-pulse" />
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-full border-2 border-neon-blue border-t-transparent animate-spin" />
          <p className="text-[10px] font-bold text-neon-blue uppercase tracking-widest">Generating AI Asset...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <img 
        src={`https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/600`} 
        alt={prompt} 
        referrerPolicy="no-referrer"
        className={className}
      />
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={prompt} 
      referrerPolicy="no-referrer"
      className={className}
    />
  );
};

const PricingCard = ({ title, price, features, icon: Icon, popular = false }: { title: string, price: string, features: string[], icon: any, popular?: boolean }) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ y: -10 }}
    className={`glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] relative overflow-hidden flex flex-col h-full ${popular ? 'border-neon-purple/50 glow-purple' : 'border-white/10'}`}
  >
    {popular && (
      <div className="absolute top-0 right-0 bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded-bl-xl">
        Most Popular
      </div>
    )}
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${popular ? 'bg-neon-purple/20 text-neon-purple' : 'bg-white/5 text-slate-400'}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-black text-white">{price}</span>
      <span className="text-slate-500 text-sm">/month</span>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
          <CheckCircle2 className="w-4 h-4 text-neon-blue flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-2xl font-bold transition-all ${popular ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
      Choose Plan
    </button>
  </motion.div>
);

const ProcessStep = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <motion.div variants={staggerItem} className="relative flex flex-col items-center text-center group">
    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:glow-blue group-hover:border-neon-blue/50 transition-all duration-500">
      <Icon className="w-10 h-10 text-neon-blue group-hover:scale-110 transition-transform" />
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-xs font-black text-white glow-purple">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, role, content, image }: { name: string, role: string, content: string, image: string }) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ y: -5 }}
    className="glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10 flex flex-col h-full relative group"
  >
    <div className="absolute top-6 right-8 text-neon-blue/20 group-hover:text-neon-blue/40 transition-colors duration-500">
      <Quote size={48} />
    </div>
    <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-lg">"{content}"</p>
    <div className="flex items-center gap-4 mt-auto">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-neon-blue/30" referrerPolicy="no-referrer" />
      <div>
        <h4 className="text-white font-bold text-sm">{name}</h4>
        <p className="text-slate-500 text-xs">{role}</p>
      </div>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Message sent! Check the console for details.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2 text-left">
        <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-all"
        />
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
        <input
          id="email"
          type="email"
          required
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-all"
        />
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="message" className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-all resize-none"
        />
      </div>
      <button 
        type="submit"
        className="w-full py-4 md:py-5 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-black text-lg md:text-xl glow-purple hover:scale-[1.02] transition-all flex items-center justify-center gap-3 mt-4"
      >
        Send Message <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </form>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div id="home" className="min-h-screen font-sans selection:bg-neon-purple selection:text-white">
      <CustomCursor />
      <Navbar />

      {/* Hero Section (Home) */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-blue/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-purple/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="absolute -top-10 md:-top-20 left-0 w-full text-center pointer-events-none select-none opacity-[0.03] overflow-hidden whitespace-nowrap">
            <span className="text-[20vw] md:text-[15vw] font-black tracking-tighter">AI • AUTOMATION • SCALE</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-300">Next-Gen AI Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                Scale Your Business with <span className="text-gradient">AI Agents</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Lunexor provides premium AI Chatbots and Voice Agents that save time, reduce costs, and scale your business faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg glow-purple hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                  Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                  Book Free Consultation
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative hidden lg:block"
            >
              {/* Floating UI Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass p-6 rounded-3xl w-72 absolute -top-10 -left-10 z-20 glow-blue"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <MessageSquare className="text-neon-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400">AI Chatbot</p>
                    <p className="text-sm font-bold text-white">Customer Support</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded" />
                  <div className="h-2 w-3/4 bg-white/10 rounded" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass p-6 rounded-3xl w-80 absolute top-40 -right-10 z-10 glow-purple"
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm font-bold text-white">Automation Flow</p>
                  <Zap className="text-neon-purple w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                    <Globe className="w-4 h-4 text-slate-400" />
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                    <Bot className="w-4 h-4 text-slate-400" />
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                    <Layers className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <p className="text-xs text-slate-500">Active: 1,240 tasks today</p>
              </motion.div>

              <div className="w-full max-w-[500px] aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-[60px] border border-white/10 overflow-hidden relative shadow-2xl mx-auto">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="p-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10" />
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 w-full bg-white/5 rounded" />
                    <div className="h-4 w-5/6 bg-white/5 rounded" />
                    <div className="h-4 w-4/6 bg-white/5 rounded" />
                    <div className="grid grid-cols-2 gap-4 mt-10">
                      <div className="h-32 rounded-2xl bg-neon-blue/5 border border-neon-blue/20" />
                      <div className="h-32 rounded-2xl bg-neon-purple/5 border border-neon-purple/20" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -left-10 -top-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]" />
              <GeneratedAIImage 
                prompt="A high-tech futuristic AI neural network visualization with glowing neon blue and purple circuits, cinematic lighting, 8k resolution, hyper-realistic"
                className="rounded-[40px] border border-white/10 shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl z-20 border-neon-blue/30 glow-blue">
                <p className="text-3xl font-black text-white">50+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Clients</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neon-blue">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Pioneering the <span className="text-gradient">AI Revolution</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Lunexor is a boutique AI automation agency dedicated to helping businesses leverage the power of artificial intelligence. We don't just build bots; we build intelligent systems that integrate seamlessly into your existing workflows.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <ShieldCheck className="text-neon-blue w-8 h-8 mb-4" />
                  <h4 className="text-white font-bold mb-2">Expert Team</h4>
                  <p className="text-sm text-slate-500">Specialists in LLMs, Voice AI, and Workflow Automation.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Globe className="text-neon-purple w-8 h-8 mb-4" />
                  <h4 className="text-white font-bold mb-2">Global Vision</h4>
                  <p className="text-sm text-slate-500">Helping businesses worldwide scale with efficiency.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Our Proven Process" 
            subtitle="From initial discovery to full-scale deployment, we follow a rigorous methodology to ensure your AI transformation is a success."
          />
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
            >
              <ProcessStep 
                number="01"
                title="Discovery"
                description="We analyze your current workflows and identify the best opportunities for AI automation."
                icon={MessageSquare}
              />
              <ProcessStep 
                number="02"
                title="Strategy"
                description="Our experts design a custom AI roadmap tailored to your specific business goals."
                icon={Layers}
              />
              <ProcessStep 
                number="03"
                title="Development"
                description="We build and train your AI agents using cutting-edge models and custom datasets."
                icon={Cpu}
              />
              <ProcessStep 
                number="04"
                title="Deployment"
                description="Full integration into your tech stack with ongoing monitoring and optimization."
                icon={Rocket}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Our Core Services" 
            subtitle="We offer specialized AI solutions tailored to your business needs, from intelligent chatbots to complex workflow automation."
          />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={MessageSquare}
              title="Business AI Chatbots"
              description="Intelligent conversational agents for WhatsApp, Instagram, and Web. Capture leads 24/7 and provide instant support to your customers."
              preview={<ChatBotPreview />}
              variants={staggerItemLeft}
            />
            <FeatureCard 
              icon={PhoneCall}
              title="AI Voice Chatbots"
              description="Human-like voice agents that handle inbound and outbound calls, manage bookings, and conduct follow-ups with natural speech."
              tagline="Next-Gen Voice AI"
              preview={<VoiceChatbotPreview />}
              variants={staggerItem}
            />
            <FeatureCard 
              icon={Zap}
              title="AI Workflow Automation"
              description="Streamline your operations by automating repetitive tasks and connecting your entire tech stack with custom AI-driven workflows."
              preview={<WorkflowAutomationPreview />}
              variants={staggerItemRight}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Trusted by satisfied clients" 
            subtitle="Don't just take our word for it. Here's what our partners have to say about their journey with Lunexor."
          />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <TestimonialCard 
              name="Sarah Johnson"
              role="CEO at TechFlow"
              content="Lunexor transformed our customer support. Their AI chatbot handles 80% of our queries, allowing our team to focus on high-value tasks."
              image="https://picsum.photos/seed/sarah/200/200"
            />
            <TestimonialCard 
              name="Michael Chen"
              role="Operations Manager at GlobalLogistics"
              content="The workflow automation they implemented saved us over 20 hours a week. It's like having an extra team member that never sleeps."
              image="https://picsum.photos/seed/michael/200/200"
            />
            <TestimonialCard 
              name="Elena Rodriguez"
              role="Marketing Director at CreativePulse"
              content="Their voice AI agents are incredibly natural. Our booking conversion rate increased by 40% within the first month of deployment."
              image="https://picsum.photos/seed/elena/200/200"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section (Optional/Merged) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-neon-blue/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div
              variants={staggerItem}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Why Choose Lunexor?</h2>
              <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                {[
                  "Faster response times (under 5 seconds)",
                  "Reduced operational costs by up to 70%",
                  "Scalable systems that grow with you",
                  "Easy integration with 1000+ apps"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-neon-blue w-4 h-4" />
                    </div>
                    <span className="text-lg text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="glass p-6 md:p-10 rounded-[40px] relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl" />
              <BarChart3 className="text-neon-purple w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Measurable Impact</h3>
              <p className="text-slate-400 mb-8">
                Our AI agents don't just work; they perform. We provide full analytics so you can see exactly how much time and money you're saving.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-3xl font-bold text-neon-blue">98%</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Accuracy</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-3xl font-bold text-neon-purple">24/7</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Availability</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Scalable Plans" 
            subtitle="Choose the perfect automation package for your business size and growth goals."
          />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <PricingCard 
              title="Starter"
              price="$499"
              icon={Rocket}
              features={[
                "1 AI Chatbot Agent",
                "Basic Workflow Automation",
                "Email Support",
                "Standard Analytics",
                "Up to 1,000 interactions"
              ]}
            />
            <PricingCard 
              title="Professional"
              price="$1,299"
              icon={Star}
              popular={true}
              features={[
                "3 AI Chatbot Agents",
                "1 AI Voice Agent",
                "Advanced Workflows",
                "Priority 24/7 Support",
                "Custom Integrations",
                "Unlimited interactions"
              ]}
            />
            <PricingCard 
              title="Enterprise"
              price="Custom"
              icon={ShieldCheck}
              features={[
                "Unlimited AI Agents",
                "Full Voice Automation",
                "Dedicated Account Manager",
                "On-premise Deployment",
                "Custom AI Training",
                "White-label options"
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[24px] md:rounded-[48px] p-6 sm:p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/10 to-transparent -z-10" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeInUp} className="text-center lg:text-left">
                <h2 className="text-2xl md:text-6xl font-black mb-4 md:mb-8 tracking-tighter">
                  Ready to <span className="text-gradient">Automate?</span>
                </h2>
                <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Have questions or ready to start? Our team is here to help you build the future of your business.
                </p>
                
                <div className="space-y-4 md:space-y-8 flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5 md:mb-1">Email Us</p>
                      <p className="text-base md:text-lg font-bold text-white">hello@lunexor.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5 md:mb-1">Office</p>
                      <p className="text-base md:text-lg font-bold text-white">Global Remote • HQ in SF</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeInUp}
                className="glass p-6 md:p-10 rounded-[32px] md:rounded-[40px] border-white/10 flex flex-col items-center"
              >
                <h3 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 tracking-tight text-center">Send us a Message</h3>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="text-neon-blue w-6 h-6" />
            <span className="text-xl font-bold text-white">Lunexor</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-slate-600 text-center">
            © 2026 Lunexor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
