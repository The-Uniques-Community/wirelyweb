import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
  fetchMainCategories, 
  fetchSubCategories,
  // Don't import these actions that control FamousServices modal
  // selectMainCategory, 
  // closeModal 
} from "../redux/slices/categorySlice";
import Cctv from '../assets/cctv.png';
import Cctv2 from '../assets/cctv2.png';
import Pc from '../assets/pc.png';
import Pc2 from '../assets/pc2.png';
import Windows from '../assets/windows.png';
import Windows2 from '../assets/windows2.png';
import DataRecovery from '../assets/data recovery.png';

// Service category modal component using local state only
const ServiceModal = ({ isOpen, onClose, selectedCategory }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subCategories, loading } = useSelector(state => state.categories);
  
  useEffect(() => {
    if (selectedCategory && isOpen) {
      dispatch(fetchSubCategories(selectedCategory._id));
    }
  }, [dispatch, selectedCategory, isOpen]);
  
  const currentSubCategories = selectedCategory ? 
    (subCategories[selectedCategory._id] || []) : [];

  const handleSubCategoryClick = (subCategory) => {
    navigate(`/book/${subCategory._id}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold text-gray-800">
            {selectedCategory?.name || "Services"}
          </h3>
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentSubCategories.map((subCategory) => (
                <div
                  key={subCategory._id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleSubCategoryClick(subCategory)}
                >
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{subCategory.name}</h4>
                      <p className="text-sm text-gray-500">{subCategory.description || "Professional service"}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {currentSubCategories.length === 0 && !loading && (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No services found in this category
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function RotatingText({
  texts,
  interval = 3000,
  animationDuration = 0.5,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative h-12 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: animationDuration }}
          className="absolute inset-0 font-bold text-2xl text-[#FBC800]"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function BusinessDirectory() {
  const [location, setLocation] = useState("Mumbai");
  const [search, setSearch] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const dispatch = useDispatch();
  const { mainCategories, loading } = useSelector(state => state.categories);
  
  useEffect(() => {
    dispatch(fetchMainCategories());
  }, [dispatch]);
  
  // Map service titles to keywords that might appear in main categories
  const serviceKeywords = {
    "CCTV Installation": ["cctv", "security", "surveillance", "camera"],
    "PC Repair": ["pc", "computer", "repair", "laptop"],
    "Windows Installation": ["windows", "os", "operating system", "software"],
    "Accessories & Spares": ["accessories", "parts", "spares", "hardware"],
    "Data Recovery": ["data", "recovery", "backup", "restore"],
  };
  
  // Function to find the matching main category based on service title
  const findMainCategory = (serviceTitle) => {
    if (!mainCategories || mainCategories.length === 0) {
      return null;
    }
    
    const keywords = serviceKeywords[serviceTitle] || [];
    
    // Check for exact match first
    const exactMatch = mainCategories.find(
      cat => cat.name.toLowerCase() === serviceTitle.toLowerCase()
    );
    
    if (exactMatch) {
      return exactMatch;
    }
    
    // Then check for keyword matches
    for (const keyword of keywords) {
      const matchingCategory = mainCategories.find(
        cat => cat.name.toLowerCase().includes(keyword.toLowerCase())
      );
      
      if (matchingCategory) {
        return matchingCategory;
      }
    }
    
    // If no matches, return the first category (fallback)
    return mainCategories.length > 0 ? mainCategories[0] : null;
  };

  const handleExploreService = (service) => {
    const category = findMainCategory(service.title);
    console.log("Service clicked:", service.title, "Category:", category?.name);
    
    if (category) {
      // Only use local state, don't dispatch Redux actions that control the FamousServices modal
      setSelectedCategory(category);
      setIsModalOpen(true);
    } else {
      console.error("No matching main category found for service:", service.title);
    }
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    // Don't dispatch closeModal() since it would affect FamousServices
  };

  const services = [
    {
      title: "CCTV Installation",
      subheading: "Security Solutions",
      desc: "Professional CCTV installation services",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      text: "text-blue-700",
      border: "border-blue-300",
      defaultVector: Cctv2, // CCTV icon
      hoverVector: Cctv, // CCTV with alert
      alt: "CCTV camera illustration",
    },
    {
      title: "PC Repair",
      subheading: "Computer Services",
      desc: "Fast and reliable PC repairs",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      text: "text-indigo-700",
      border: "border-indigo-300",
      defaultVector: Pc, // PC repair icon
      hoverVector: Pc2, // PC with tools
      alt: "PC repair illustration",
    },
    {
      title: "Windows Installation",
      subheading: "OS Installation & Setup",
      desc: "Professional Windows installation",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      text: "text-emerald-700",
      border: "border-emerald-300",
      defaultVector: Windows, // Laptop icon
      hoverVector: Windows2, // Laptop with settings
      alt: "Laptop illustration",
    },
    {
      title: "Accessories & Spares",
      subheading: "Computer Parts",
      desc: "Genuine accessories and spare parts",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
      text: "text-purple-700",
      border: "border-purple-300",
      defaultVector: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png", // Computer parts icon
      hoverVector: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png", // Computer parts expanded
      alt: "Computer parts illustration",
    },
    {
      title: "Data Recovery",
      subheading: "Hard Drive Services",
      desc: "Professional hard drive data recovery",
      gradient: "bg-gradient-to-br from-amber-500 to-amber-700",
      text: "text-amber-700",
      border: "border-amber-300",
      defaultVector: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png", // Hard drive icon
      hoverVector: DataRecovery, // Data recovery icon
      alt: "Data recovery illustration",
    },
  ];

  return (
    <div className="min-h-screen font-[Poppins] mt-20 bg-gray-50">
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/open-sauce-one");
        body {
          font-family: "Open Sauce One", sans-serif;
        }
        @supports (font-variation-settings: normal) {
          body {
            font-family: "Open Sauce One Variable", sans-serif;
          }
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center md:text-left px-2">
          <div className="grid grid-cols-12">
            <div className="col-span-2 w-max-co">
              <div className="flex h-full text-2xl font-bold">
                Search across{" "} 
              </div>
            </div>
            <div className="col-span-10">
              <RotatingText
                texts={["4.7 crore+ Services", "5.9 crore+ Services"]}
                interval={2000}
                animationDuration={0.5}
              />
            </div>
          </div>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mt-4">
            Find and connect with the best local businesses in your area. Over
            10 million businesses listed.
          </p>
        </div>

        <div className="relative rounded-2xl p-4 sm:p-6 mb-8 mx-2 sm:mx-0">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex items-center bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl w-full md:w-64 flex-shrink-0 hover:border-amber-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500 mr-2 h-5 w-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input
                type="text"
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your location"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl w-full md:w-[30rem] hover:border-amber-300 transition-colors">
              <input
                type="text"
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 mb-2 sm:mb-0"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-400 text-white font-medium px-5 py-2 rounded-lg flex items-center shadow hover:shadow-md transition-all sm:ml-3 transform hover:scale-[1.02] active:scale-95 w-full sm:w-auto justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 text-gray-800 px-2 sm:px-0">
          Popular Services
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-12 px-2 sm:px-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`h-60 min-w-[calc(100%-1rem)] sm:min-w-0 transition-all duration-300 ease-in-out ${
                hoveredCard === index
                  ? "sm:w-2/6 w-full"
                  : hoveredCard === null && index === 0
                  ? "sm:w-2/6 w-full"
                  : "sm:w-1/6 w-full"
              }`}
            >
              <div
                className={`${service.gradient} text-white rounded-xl h-full overflow-hidden relative group transition-all duration-300 hover:shadow-md`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity"></div>
                <div className="p-5 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                      <div>
                        <p className="text-xs font-medium opacity-80">
                          {service.subheading}
                        </p>
                        <h3 className="text-lg font-bold mt-1">
                          {service.title}
                        </h3>
                        <p className="text-xs opacity-90 mt-1">
                          {service.desc}
                        </p>
                      </div>

                      {hoveredCard !== index &&
                        !(index === 0 && hoveredCard === null) && (
                          <div className="mt-3 flex justify-end pr-2">
                            <img
                              src={service.defaultVector}
                              alt={service.alt}
                              className="w-16 h-16 object-contain opacity-90 transition-opacity"
                            />
                          </div>
                        )}

                      {(hoveredCard === index ||
                        (index === 0 && hoveredCard === null)) && (
                        <button
                          onClick={() => handleExploreService(service)}
                          className={`z-50 cursor-pointer flex items-center mt-3 text-xs font-medium ${service.text}  bg-white px-3 py-1.5 rounded-md shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto`}
                        >
                          Explore Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`ml-1 h-3 w-3 ${service.text}`}
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      )}
                    </div>

                    {(hoveredCard === index ||
                      (index === 0 && hoveredCard === null)) && (
                      <div className="hidden sm:flex ml-3 items-center justify-start">
                        <img
                          src={
                            hoveredCard === index
                              ? service.hoverVector
                              : service.defaultVector
                          }
                          alt={service.alt}
                          className="w-32 h-32 object-contain opacity-90 transition-opacity"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="h-60 w-full sm:w-1/6">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 rounded-xl h-full overflow-hidden relative transition-all duration-300 hover:shadow-md">
              <div className="p-5 h-full flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium opacity-80">
                    Complete Directory
                  </p>
                  <h3 className="text-lg font-bold mt-1">All Services</h3>
                  <p className="text-xs opacity-90 mt-1">
                    Browse our complete service directory
                  </p>
                </div>
                <button className="flex items-center mt-3 text-xs font-medium text-gray-800 bg-white px-3 py-1.5 rounded-md shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-3 w-3 text-gray-800"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ServiceModal 
              isOpen={isModalOpen} 
              onClose={closeModal}
              selectedCategory={selectedCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}