import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiAward, FiGlobe, FiMic, FiTool, FiUsers, FiCode, FiCamera, FiPenTool, FiTrendingUp } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Expanded team members array
const teamMembers = [
  // {
  //   name: "Ankur Gill",
  //   role: "Founder",
  //   image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQv3gSutRKWy7NjoCdYLZHpnsaVt4vwuXA5zikM",
  //   bio: "Tech enthusiast passionate about empowering local communities with reliable IT support. Driving Wirely's mission to bridge the tech gap for schools and colleges.",
  //   fact: {
  //     icon: <FiTool className="text-[#FBC800]" />,
  //     text: "Loves building DIY tech projects"
  //   },
  //   social: {
  //     linkedin: "#",
  //     twitter: "#"
  //   }
  // },
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
  // New team members
  {
    name: "Abhishek Mishra",
    role: "Tech Lead",
    image: "https://bharat-tech-xperience.theuniques.in/static/media/abhishek3.7ef90fa80309140a198c.jpg",
    bio: "Experienced software engineer specializing in building robust IT infrastructure. Leading Wirely's technical innovation and service quality initiatives.",
    fact: {
      icon: <FiCode className="text-[#FBC800]" />,
      text: "Contributes to open-source projects on weekends"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Aryn Kamboj",
    role: "Operations Manager",
    image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQv1c9KkjqHbNYm7tVsZ0F15LIM8AjGX2eSCiao",
    bio: "Logistics expert ensuring Wirely's service delivery is seamless and efficient. Passionate about optimizing processes to deliver superior customer experiences.",
    fact: {
      icon: <FiTrendingUp className="text-[#FBC800]" />,
      text: "Built his first computer at age 12"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Niraj Gupta",
    role: "Customer Relations",
    image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQv9vrK2Z6ypQvP0K4oCIMsuOxta6zbVGWDqAnf",
    bio: "Dedicated to ensuring client satisfaction through clear communication and attentive service. Creating meaningful relationships between Wirely and its customers.",
    fact: {
      icon: <FiMic className="text-[#FBC800]" />,
      text: "Speaks four languages fluently"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Kumar Sujal",
    role: "Lead Technician",
    image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQvEzb8QdgtO8RGNpF6JBKc4CzbyiAsfLIqYvMQ",
    bio: "Expert in hardware diagnostics and repair with over a decade of experience. Leads Wirely's technical team in providing top-tier service solutions.",
    fact: {
      icon: <FiAward className="text-[#FBC800]" />,
      text: "Certified in 7 technical specialties"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Aman ",
    role: "Marketing Director",
    image: "https://05h0tt171l.ufs.sh/f/9WspmJu6ypQvfc1VYs3GMtZFS7iOKBypXRVL1NE8TJbDPWu2",
    bio: "Creative strategist driving Wirely's brand awareness and community engagement. Passionate about connecting technology services with those who need them most.",
    fact: {
      icon: <FiPenTool className="text-[#FBC800]" />,
      text: "Amateur photographer and digital artist"
    },
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
];

const FoundersSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-28 relative overflow-hidden font-[Poppins] bg-white isolate">
      {/* Background elements */}
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

      {/* Dynamic Gradient Background */}
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
      
      {/* Corner Accents */}
      {teamMembers.slice(0, 2).map((_, index) => (
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

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
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
            Meet Our <span className="text-[#FBC800]">Team</span>
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

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <motion.button 
            ref={prevRef}
            className="w-12 h-12 bg-gray-100 hover:bg-[#FBC800] rounded-full flex items-center justify-center transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </motion.button>
          <motion.button 
            ref={nextRef}
            className="w-12 h-12 bg-gray-100 hover:bg-[#FBC800] rounded-full flex items-center justify-center transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </motion.button>
        </div>

        {/* Team Carousel with fixed-height cards */}
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="team-carousel"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="h-auto pb-10">
              {/* Fixed height container - INCREASED HEIGHT */}
              <div className="h-[450px] sm:h-[400px]"> {/* Increased height for all screen sizes */}
                <motion.div
                  className="relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Card with horizontal layout */}
                  <div className="relative h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md">
                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-5"></div>
                    
                    {/* Flex container for horizontal layout */}
                    <div className="relative h-full flex flex-col sm:flex-row z-10">
                      {/* Image on left - fixed width and taller height */}
                      <div className="w-full sm:w-[120px] md:w-[140px] lg:w-[160px] h-80 sm:h-full overflow-hidden relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        {/* Role badge */}
                        <motion.div 
                          className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur px-3 py-1.5 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="text-[#FBC800] text-xs font-medium tracking-wider">{member.role}</p>
                        </motion.div>
                      </div>
                      
                      {/* Content on right - scrollable if needed */}
                      <div className="w-full p-5 sm:p-4 flex flex-col justify-between overflow-y-auto">
                        <div>
                          <motion.h3 
                            className="text-lg font-bold text-gray-900 mb-3"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {member.name}
                          </motion.h3>
                          
                          <motion.div 
                            className="w-8 h-0.5 bg-[#FBC800] mb-3"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                          />
                          
                          <motion.p 
                            className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            {member.bio}
                          </motion.p>
                          
                          {/* Fun fact card */}
                          <motion.div 
                            className="bg-gray-50 border border-gray-100 p-3 rounded-lg mb-4 flex items-start gap-2"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {member.fact.icon}
                            </div>
                            <p className="text-gray-700 font-medium text-xs">✨ {member.fact.text}</p>
                          </motion.div>
                        </div>
                        
                        {/* Social links */}
                        <motion.div 
                          className="flex gap-2 mt-auto pt-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <motion.a 
                            href={member.social.linkedin}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 hover:bg-[#FBC800] w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group"
                          >
                            <FiLinkedin className="w-3.5 h-3.5 text-white group-hover:text-gray-900 transition-colors" />
                          </motion.a>
                          <motion.a 
                            href={member.social.twitter}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 hover:bg-[#FBC800] w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group"
                          >
                            <FiTwitter className="w-3.5 h-3.5 text-white group-hover:text-gray-900 transition-colors" />
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Decorative circle */}
                    <motion.div 
                      className="absolute -right-4 -bottom-4 w-14 h-14 rounded-full bg-[#FBC800]/10 backdrop-blur-sm -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination styling */}
        <div className="swiper-pagination-wrapper">
          <style jsx>{`
            :global(.swiper-pagination-bullet) {
              width: 8px;
              height: 8px;
              background: #e5e7eb;
              opacity: 1;
              margin: 0 4px;
            }
            :global(.swiper-pagination-bullet-active) {
              background: #FBC800;
            }
            :global(.swiper-button-disabled) {
              opacity: 0.4;
              cursor: not-allowed;
            }
            :global(.team-carousel) {
              padding-bottom: 50px;
            }
            :global(.swiper-pagination) {
              bottom: 0px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;