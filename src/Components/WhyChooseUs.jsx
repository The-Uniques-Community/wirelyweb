import { useState, useEffect } from "react";
import { Shield, Award, Clock, Users, ChevronRight, ChevronLeft } from "lucide-react";
import whychoseusimg from "../assets/whychoseusimg.jpg";
import whychoseusgaurantee from "../assets/whychoseusgaurantee.png";
import whychoseus5 from "../assets/whychoseus5.jpg";
import whychoseus4 from "../assets/whychoseus4.jpg";

export default function ProcessFlowWave() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
    };
    
    // Initial check
    handleResize();
    
    // Throttle resize events
    let resizeTimeout;
    const resizeThrottler = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          handleResize();
        }, 100);
      }
    };
    
    window.addEventListener("resize", resizeThrottler);
    
    // Auto-rotate steps
    let interval;
    const startInterval = () => {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 6000);
    };
    
    // Pause on hover
    const container = document.querySelector('.process-container');
    const pauseRotation = () => clearInterval(interval);
    const resumeRotation = () => startInterval();
    
    if (container) {
      container.addEventListener('mouseenter', pauseRotation);
      container.addEventListener('mouseleave', resumeRotation);
      container.addEventListener('touchstart', pauseRotation);
      container.addEventListener('touchend', resumeRotation);
    }
    
    startInterval();

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeThrottler);
      if (container) {
        container.removeEventListener('mouseenter', pauseRotation);
        container.removeEventListener('mouseleave', resumeRotation);
        container.removeEventListener('touchstart', pauseRotation);
        container.removeEventListener('touchend', resumeRotation);
      }
    };
  }, []);

  const primaryColor = "#fbc800";

  const steps = [
    {
      id: 1,
      title: "Expert Technicians",
      description:
        "Our team consists of certified professionals with years of experience in their fields, ensuring top-quality service for all your technical needs.",
      icon: <Award className="w-4 h-4 md:w-5 md:h-5" />,
      color: primaryColor,
      image: whychoseusimg,
    },
    {
      id: 2,
      title: "Guaranteed Satisfaction",
      description:
        "We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied, we'll make it right or refund your money.",
      icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />,
      color: primaryColor,
      image: whychoseusgaurantee,
    },
    {
      id: 3,
      title: "Fast & Reliable Service",
      description:
        "We understand your time is valuable. That's why we offer quick response times and efficient service delivery without compromising quality.",
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
      color: primaryColor,
      image:whychoseus4,
    },
    {
      id: 4,
      title: "Customer-Centric Approach",
      description:
        "We put your needs first, offering personalized solutions and dedicated support throughout your service experience with us.",
      icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
      color: primaryColor,
      image: whychoseus5,
    },
  ];

  // Calculate card width based on window width
  const getCardWidth = () => {
    if (windowWidth < 400) return "w-[220px]";
    if (windowWidth < 640) return "w-[260px]";
    return "w-[300px]";
  };

  // Calculate wave height based on window width
  const getWaveHeight = () => {
    if (windowWidth < 640) return "h-[180px]";
    if (windowWidth < 1024) return "h-[220px]";
    return "h-[280px]";
  };

  return (
    <section className="w-full font-[Poppins] bg-white py-6 sm:py-10 md:py-16 relative bottom-24 overflow-hidden process-container">
      <div className="container mx-auto px-4 sm:px-6 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] relative z-10">
        <header className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-2 sm:mb-3">
            <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs sm:text-sm font-medium rounded-full">
              The Wirely Advantage
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900">
            Why <span style={{ color: primaryColor }}>Choose Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base">
            Delivering exceptional service and technical excellence that keeps our customers coming back
          </p>
        </header>

        {/* Mobile Steps - Vertical Layout */}
        {isMobile && (
          <div className="mb-6 sm:mb-8 md:hidden">
            <div className="relative">
              <div 
                className="absolute left-4 sm:left-5 h-full w-0.5 bg-gray-200" 
                style={{ top: "16px" }}
              ></div>
              
              <div className="space-y-6 sm:space-y-8 pl-8 sm:pl-10">
                {steps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`relative transition-all duration-300 ${activeStep === index ? "opacity-100 scale-[1.02]" : "opacity-80 hover:opacity-90"}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div 
                      className="absolute -left-8 sm:-left-10 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                      style={{ 
                        backgroundColor: activeStep === index ? primaryColor : "#E5E7EB",
                        left: "16px"
                      }}
                    ></div>
                    
                    <div 
                      className={`p-3 sm:p-4 rounded-lg shadow-xs sm:shadow-sm border transition-all ${
                        activeStep === index ? 
                        "border-amber-200 bg-amber-50 shadow-md" : 
                        "border-gray-100 bg-white hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div 
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold mr-2 sm:mr-3 text-xs sm:text-sm"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {step.id}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      {/* Added image for mobile view */}
                      {/* <div className="w-full h-32 sm:h-40 mb-2 sm:mb-3 rounded-md overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div> */}
                      
                      <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Wave Path with Cards */}
        {!isMobile && (
          <div className="relative top-10 mb-10 sm:mb-12 md:mb-16">
            <div className={`relative ${getWaveHeight()} my-12 sm:my-16 md:my-20 lg:my-24`}>
              <svg
                className="w-full h-full absolute top-0 left-0"
                viewBox="0 0 1200 300"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="wave-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="2" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.2" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <path
                  d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,250 1350,150"
                  stroke="#f3f4f6"
                  strokeWidth="12"
                  strokeLinecap="round"
                  filter="url(#wave-shadow)"
                  className="wave-path-bg"
                />

                <path
                  d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,250 1350,150"
                  stroke={primaryColor}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="1500"
                  strokeDashoffset="1500"
                  className={`wave-path-progress ${isVisible ? "animate-wave-dash" : ""}`}
                />

                <path
                  d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,250 1350,150"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="5 15"
                  className="wave-path-dots"
                />
              </svg>

              <div className="absolute top-0 left-0 w-full h-full">
                {steps.map((step, index) => {
                  const xPercent = (index / (steps.length - 1)) * 100;
                  const isAbove = index % 2 === 0;
                  const yPosition = isAbove ? 
                    (windowWidth < 1024 ? "-30%" : "-40%") : 
                    (windowWidth < 1024 ? "60%" : "70%");

                  return (
                    <div
                      key={step.id}
                      className={`absolute transition-all duration-700 ease-in-out ${
                        activeStep === index ? "z-20 scale-105" : "z-10 scale-100 hover:scale-[1.03]"
                      }`}
                      style={{
                        left: `${xPercent}%`,
                        top: yPosition,
                        transform: "translateX(-50%)",
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: `${index * 150}ms`,
                      }}
                    >
                      <div
                        className={`${getCardWidth()} bg-white rounded-lg shadow-sm md:shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                          activeStep === index ? "ring-2 shadow-lg" : "hover:shadow-lg"
                        }`}
                        style={{
                          borderColor: primaryColor,
                          boxShadow: activeStep === index ? `0 8px 20px -5px ${primaryColor}40` : "",
                          ringColor: primaryColor,
                        }}
                        onClick={() => setActiveStep(index)}
                        aria-label={`Benefit ${step.id}: ${step.title}`}
                      >
                        <div className="flex items-center p-3 sm:p-4 border-b border-gray-100">
                          <div
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold mr-2 sm:mr-3 shadow-sm text-sm"
                            style={{ backgroundColor: primaryColor }}
                          >
                            {step.id}
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">{step.title}</h3>
                        </div>

                        {/* Added image to card */}
                        {/* <div className="w-full h-36 sm:h-40">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div> */}

                        <div className="p-2 sm:p-3">
                          <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                        </div>

                        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50">
                          <div className="flex items-center">
                            <span
                              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 sm:mr-2"
                              style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                            >
                              {step.icon}
                            </span>
                            <span className="text-xs font-medium text-gray-500">Advantage {step.id}</span>
                          </div>

                          <div
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: primaryColor }}
                          >
                            <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1"
                        style={{
                          top: isAbove ? "100%" : "auto",
                          bottom: isAbove ? "auto" : "100%",
                          height: "40px",
                          backgroundColor: primaryColor,
                        }}
                      ></div>

                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                        style={{
                          top: isAbove ? "calc(100% + 40px)" : "auto",
                          bottom: isAbove ? "auto" : "calc(100% + 40px)",
                          backgroundColor: primaryColor,
                          boxShadow: `0 0 0 3px white, 0 0 0 5px ${primaryColor}40`,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Active Step Detail Card */}
        <div
          className={`max-w-full sm:max-w-3xl mx-auto transition-all duration-500 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          } ${isMobile ? "mt-4 sm:mt-6" : "mt-12 sm:mt-16 md:mt-28 lg:mt-32"}`}
        >
          <div className="bg-white rounded-lg relative md:top-16 shadow-md border overflow-hidden" style={{ borderColor: primaryColor }}>
            <div className="flex flex-col md:flex-row">
              <div className="w-full h-48 sm:h-56 md:h-auto md:w-2/5 relative overflow-hidden">
                {/* Replace SVG with actual image */}
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-10"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md bg-white"
                  style={{ color: primaryColor }}
                >
                  {steps[activeStep].icon}
                </div>
                <div
                  className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-white px-2 py-1 rounded-full shadow-sm text-xs font-medium"
                  style={{ color: primaryColor }}
                >
                  {activeStep + 1} of {steps.length}
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-5 md:w-3/5">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {steps[activeStep].id}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{steps[activeStep].title}</h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{steps[activeStep].description}</p>

                <div className="mt-3 sm:mt-4 md:mt-5 flex justify-between items-center">
                  <button
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1 border hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                    aria-label="Previous advantage"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    Previous
                  </button>

                  <div className="flex gap-1 sm:gap-1.5">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                          activeStep === idx ? "bg-amber-500" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => setActiveStep(idx)}
                        aria-label={`Go to advantage ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-900 shadow-sm transition-colors flex items-center gap-1"
                    style={{ backgroundColor: primaryColor }}
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    aria-label="Next advantage"
                  >
                    Next
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
          <div className="text-center max-w-2xl mb-3 sm:mb-4 md:mb-6">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base md:mt-16">
              Join thousands of satisfied customers who trust Wirely for their technical needs. Our commitment to excellence and customer satisfaction sets us apart from the competition.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wave-path-bg {
          animation: float 8s ease-in-out infinite;
        }
        
        .wave-path-dots {
          animation: float 8s ease-in-out infinite reverse;
        }
        
        .animate-wave-dash {
          animation: dash 2.5s ease-in-out forwards, pulse 4s ease-in-out infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
}