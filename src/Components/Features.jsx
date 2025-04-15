"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Shield, 
  Clock, 
  Headphones, 
  Code, 
  Server, 
  Globe, 
  Smartphone,
  LifeBuoy,
  Settings,
  Database,
  Lock,
  HardDrive,
  Wrench,
  WifiIcon,
  Camera,
  Fingerprint
} from "lucide-react"

export default function FeaturesSection() {
  // Color theme with your #fbc800 accent
  const colors = {
    primary: "#fbc800",  // Your golden yellow
    secondary: "#2563eb", // Blue
    accent: "#7c3aed",   // Purple
    background: "#f8fafc", // Lightest slate
    card: "#ffffff",       // Pure white
    text: "#1e293b",       // Dark slate
    muted: "#64748b"       // Gray
  }

  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Server Management",
      description: "Comprehensive monitoring and administration of your critical server infrastructure",
      color: colors.primary
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Firewall Installation",
      description: "Custom security solutions to protect your network from unauthorized access and threats",
      color: colors.secondary
    },
    {
      icon: <WifiIcon className="w-6 h-6" />,
      title: "Structured Cabling",
      description: "Professional network cable installation for reliable, high-speed connectivity",
      color: colors.accent
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Security Cameras",
      description: "Advanced CCTV systems with remote monitoring capabilities for complete premises security",
      color: colors.primary
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Solutions",
      description: "Sophisticated access control systems using fingerprint, facial recognition, and other biometrics",
      color: colors.secondary
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Storage",
      description: "Scalable, secure storage solutions for all your business data needs",
      color: colors.accent
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: "Recovery Solutions",
      description: "Emergency data recovery and business continuity planning to minimize downtime",
      color: colors.primary
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Computer Hardware",
      description: "Quality hardware procurement, installation, and maintenance services for your workstations",
      color: colors.secondary
    }
  ]

  return (
    <div 
      className="py-20 px-4 sm:px-6 lg:px-8 relative font-[Poppins]"
      style={{ background: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div 
              className="px-4 py-2 rounded-full bg-[#fbc800]/10 text-[#fbc800] text-sm font-medium flex items-center justify-center mx-auto w-fit"
            >
              <Zap className="w-4 h-4 mr-2 fill-[#fbc800]" />
              INFRASTRUCTURE SOLUTIONS
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Complete IT Infrastructure Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            End-to-end hardware, networking, and security solutions for your business
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative group" // Added 'group' class here
            >
              <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-gray-200 group-hover:border-[#fbc800]/30 transition-colors" />
              
              <div className="relative h-full p-6 rounded-xl bg-white">
                <div 
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.color}10`,
                    border: `1px solid ${feature.color}20`,
                    color: feature.color
                  }}
                >
                  {feature.icon}
                </div>
                <h3 
                  className="text-lg font-semibold mb-2 transition-colors group-hover:text-[#fbc800]"
                  style={{ color: colors.text }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                {/* Hover effect */}
                <div 
                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#fbc800]/20 pointer-events-none transition-all duration-300"
                  style={{
                    boxShadow: `0 0 0 1px ${feature.color}20 inset`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-md border border-gray-200"
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>4hr</div>
            <p className="text-gray-600">Average Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </motion.div> */}
      </div>
    </div>
  )
}