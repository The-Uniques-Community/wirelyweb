import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiAward, FiGlobe, FiMic } from "react-icons/fi";
import { FiTool, FiUsers } from "react-icons/fi";

const founders = [
  {
    name: "Ankur Gill",
    role: "Founder",
    image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQv3gSutRKWy7NjoCdYLZHpnsaVt4vwuXA5zikM",
    bio: "Tech enthusiast passionate about empowering local communities with reliable IT support. Driving Wirely’s mission to bridge the tech gap for schools and colleges.",
    fact: {
      icon: <FiTool className="text-[#FBC800]" />,
      text: "Loves building DIY tech projects"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jitendra",
    role: "Director",
    image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQvOtVBks1ezMFJdUx32OANHKPm4XQqB7vkiWnf",
    bio: "Strategic leader with a passion for education and community upliftment. Ensuring Wirely delivers effective and dependable technical services to local institutions.",
    fact: {
      icon: <FiUsers className="text-[#FBC800]" />,
      text: "Actively mentors youth in tech literacy"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
];



const FoundersSection = () => {
  return (
    <section className="py-28 relative overflow-hidden font-[Poppins] bg-white isolate">
      {/* Added Vector Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Gold abstract shapes */}
        <svg 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path d="M0 100 Q 300 50 600 150 T 1200 100 L1200 0 L0 0 Z" fill="#FBC800" />
          <path d="M0 700 Q 400 750 800 650 T 1200 700 L1200 800 L0 800 Z" fill="#FBC800" />
        </svg>

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#FBC800_1px,transparent_1px),linear-gradient(to_bottom,#FBC800_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#FBC800] rounded-full"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.08
            }}
            animate={{
              y: [0, (Math.random() * 30) - 15],
              x: [0, (Math.random() * 20) - 10],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Original Dynamic Gradient Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(251,200,0,0.15) 0%, transparent 20%)",
            "radial-gradient(circle at 90% 30%, rgba(251,200,0,0.15) 0%, transparent 20%)",
            "radial-gradient(circle at 50% 80%, rgba(251,200,0,0.15) 0%, transparent 20%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Added Corner Accents */}
      {founders.map((_, index) => (
        <motion.div
          key={`corner-${index}`}
          className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} ${index === 0 ? 'top-1/4' : 'bottom-1/4'} w-32 h-32 -z-10`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#FBC800]">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-block text-[#FBC800] font-medium mb-4 tracking-[0.2em] text-xs uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Visionaries
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-[#FBC800]">Founders</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-[#FBC800] to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            The brilliant minds redefining what's possible in our industry
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Premium Glass Card */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-5"></div>
                
                {/* Inner card layout */}
                <div className={`relative h-full flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} z-10`}>
                  {/* Image container */}
                  <div className={`relative ${index % 2 === 0 ? 'lg:w-2/5' : 'lg:w-2/5'} h-96 lg:h-auto overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <div className="absolute inset-0 border-r border-white/20"></div>
                    <motion.img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Role badge */}
                    <motion.div 
                      className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-[#FBC800] text-xs font-medium tracking-wider">{founder.role}</p>
                    </motion.div>
                  </div>
                  
                  {/* Content area */}
                  <div className={`${index % 2 === 0 ? 'lg:w-3/5' : 'lg:w-3/5'} p-8 lg:p-10 flex flex-col justify-between`}>
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold text-gray-900 mb-3"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {founder.name}
                      </motion.h3>
                      
                      <motion.div 
                        className="w-12 h-0.5 bg-[#FBC800] mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                      
                      <motion.p 
                        className="text-gray-600 mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {founder.bio}
                      </motion.p>
                      
                      {/* Fun fact card */}
                      <motion.div 
                        className="bg-gray-50 border border-gray-100 p-4 rounded-xl mb-8 flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {founder.fact.icon}
                        </div>
                        <p className="text-gray-700 font-medium text-sm">✨ {founder.fact.text}</p>
                      </motion.div>
                    </div>
                    
                    {/* Social links */}
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <motion.a 
                        href={founder.social.linkedin}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-900 hover:bg-[#FBC800] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <FiLinkedin className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors" />
                      </motion.a>
                      <motion.a 
                        href={founder.social.twitter}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-900 hover:bg-[#FBC800] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <FiTwitter className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className={`absolute ${index % 2 === 0 ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} w-32 h-32 rounded-full bg-[#FBC800]/10 backdrop-blur-sm -z-10`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;