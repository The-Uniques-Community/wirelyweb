"use client"
import { motion } from "framer-motion"
import { Target, Eye, Gem, Circle, Triangle, Square, Star } from "lucide-react"

const cards = [
    {
        id: 1,
        title: "Our Mission",
        icon: <Target size={40} className="text-[#fbc800]" />,
        description: "To deliver robust IT infrastructure solutions that enhance business efficiency, security, and reliability while ensuring exceptional client satisfaction and technical excellence.",
    },
    {
        id: 2,
        title: "Our Vision",
        icon: <Eye size={40} className="text-[#fbc800]" />,
        description: "To become the premier provider of integrated IT infrastructure services, recognized for our technical expertise, innovation, and ability to future-proof businesses in an evolving digital landscape.",
    },
    {
        id: 3,
        title: "Our Values",
        icon: <Gem size={40} className="text-[#fbc800]" />,
        description: "Reliability, expertise, and transparency form our foundation. We believe in proactive solutions, continuous learning, and building lasting partnerships with our clients through trustworthy service.",
    },
]

const MissionVisionValues = () => {
    return (
        <div className="relative font-[Poppins] flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#f9f9f9] to-[#f5f5f5] min-h-screen py-12 md:py-20 px-4 md:px-12 mt-8">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-[30%] right-[10%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-[#fbc800] to-[#ffa100] opacity-20 rounded-full blur-md"
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                    className="absolute top-[60%] left-[15%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-[#fbc800] to-[#ffa100] opacity-20 rounded-full blur-md"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, 25, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Floating Shapes */}
                <div className="absolute inset-0 z-0">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: 0.07,
                                color: "#ffa100",
                            }}
                            animate={{
                                y: [0, Math.random() * 30 - 15],
                                x: [0, Math.random() * 30 - 15],
                                rotate: [0, Math.random() * 360],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            {i % 4 === 0 ? (
                                <Circle size={10 + Math.random() * 15} />
                            ) : i % 4 === 1 ? (
                                <Triangle size={10 + Math.random() * 15} />
                            ) : i % 4 === 2 ? (
                                <Square size={10 + Math.random() * 15} />
                            ) : (
                                <Star size={10 + Math.random() * 15} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto mb-8 md:mb-12 lg:mb-16 pt-6 md:pt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-4 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-4 py-1 md:px-6 md:py-2 bg-gradient-to-r from-[#ffa100]/10 to-[#fbc800]/10 rounded-full text-sm md:text-base text-[#ffa100] font-medium mb-4 md:mb-6 lg:mb-8"
                    >
                        Infrastructure Excellence
                    </motion.div>
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#372828] mb-4 md:mb-6 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Powering Your <span className="text-[#ffa100]">Digital Foundation</span>
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Our guiding principles drive us to deliver secure, reliable, and scalable IT infrastructure solutions that empower your business growth
                    </motion.p>
                </div>
            </motion.div>

            {/* Core Policies Section */}
            <div className="flex flex-col items-center text-center relative z-10 w-full px-4 mb-6 md:mb-8">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-2xl font-semibold text-[#372828] tracking-[0.5em] mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <span className="text-[#ffa100]">GUIDING</span> PRINCIPLES
                </motion.h2>
                <motion.div
                    className="flex flex-col gap-1 md:gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {/* <div className="w-[250px] sm:w-[300px] md:w-[360px] h-1 bg-gradient-to-r from-[#ffa100] to-[#fbc800]"></div>
                    <div className="w-[250px] sm:w-[300px] md:w-[360px] h-1 bg-gradient-to-r from-[#ffa100] to-[#fbc800] self-center"></div> */}
                </motion.div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 p-4 md:p-8 w-full max-w-7xl relative z-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className="relative bg-white p-5 md:p-6 lg:p-8 w-full flex flex-col shadow-lg md:shadow-xl rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-xl lg:hover:shadow-2xl hover:border-[#ffa100]/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    >
                        {/* Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffa100]/5 to-[#fbc800]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Card Number */}
                        <div className="absolute -right-4 -top-4 md:-right-5 md:-top-5 text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#ffa100]/5 group-hover:text-[#ffa100]/10 transition-colors duration-300">
                            0{card.id}
                        </div>

                        <div className="relative">
                            {/* Icon with consistent alignment */}
                            <div className="h-16 opacity-45 -mt-4 mb-4 md:h-20 flex items-center md:-mt-5 md:mb-5 lg:mb-6 -ml-2 md:-ml-3">
                                <motion.div
                                    className="text-[#fbc800] text-3xl md:text-4xl"
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    {card.icon}
                                </motion.div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#372828] mb-3 md:mb-4">
                                {card.title}
                                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#ffa100] to-[#fbc800] mt-2 rounded-full" />
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Decoration */}
            <motion.div
                className="relative z-10 w-full max-w-5xl mx-auto mt-12 md:mt-16 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
            >
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#ffa100] to-[#fbc800] rounded-full" />
            </motion.div>
        </div>
    )
}

export default MissionVisionValues