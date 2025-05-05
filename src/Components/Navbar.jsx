import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Video,
  Laptop,
  Wifi,
  ChevronRight,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchAllSubCategories } from "../redux/slices/categorySlice";

// Default image for services without icons
const DEFAULT_ICON = <Zap size={16} className="text-primary-500 mr-2" />;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [visibleServicesCount, setVisibleServicesCount] = useState(9); // Show 9 initially
  const initialServicesCount = 9; // Store initial count as a constant
  const searchRef = useRef(null);
  
  const dispatch = useDispatch();
  const { subAllCategories, loading } = useSelector(state => state.categories);
  
  // Fetch all subcategories when component mounts
  useEffect(() => {
    // This assumes you have a method to fetch all subcategories
    // You might need to create this action in your redux slice
    dispatch(fetchAllSubCategories());
  }, [dispatch]);
  
  // Map icons to subcategories based on name
  const getIconForSubcategory = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('cctv') || nameLower.includes('camera')) 
      return <Video size={16} className="text-primary-500 mr-2" />;
    if (nameLower.includes('computer') || nameLower.includes('pc') || nameLower.includes('laptop')) 
      return <Laptop size={16} className="text-primary-500 mr-2" />;
    if (nameLower.includes('network') || nameLower.includes('wifi') || nameLower.includes('internet')) 
      return <Wifi size={16} className="text-primary-500 mr-2" />;
    return DEFAULT_ICON;
  };
  
  // Create service data with icons from Redux subcategories
  const serviceData = subAllCategories ? Object.values(subAllCategories).map(subcat => ({
    id: subcat._id,
    name: subcat.name,
    icon: getIconForSubcategory(subcat.name)
  })) : [];
  
  // Get only visible subcategories
  const visibleServices = serviceData.slice(0, visibleServicesCount);
  
  // Create grid layout for visible services (3 columns)
  const services = [];
  for (let i = 0; i < visibleServices.length; i += 3) {
    services.push(visibleServices.slice(i, i + 3));
  }
  
  // Handle showing more services
  const handleViewMore = () => {
    setVisibleServicesCount(prev => Math.min(prev + 6, serviceData.length));
  };
  
  // Handle showing fewer services
  const handleViewLess = () => {
    setVisibleServicesCount(initialServicesCount);
  };
  
  // All services flattened for search
  const allServices = serviceData.map(service => service.name);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close search results when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = allServices.filter(service =>
        service.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    };
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      // Find the service object to get its ID
      const service = serviceData.find(s => s.name === searchResults[0]);
      if (service) {
        window.location.href = `/book/${service.id}`;
      }
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/service", label: "Services", dropdown: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-[Poppins] text-black transition-all duration-300 ${
        isScrolled ? "shadow-md py-0 bg-white" : " py-2 "
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum8fKWgPXlJfrKGuWUjb4n6NYRd3wE9DxCgy0v"
                alt="Wirely Logo"
                className="h-[2rem] w-auto md:h-[4rem] transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Search - Centered */}
          <div className="hidden md:flex items-center w-1/3 mx-6" ref={searchRef}>
            <div className="relative w-full">
              {/* Search form code here */}
            </div>
          </div>

          {/* Desktop Navigation - Moved to the right */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.dropdown ? (
                    <>
                      <div
                        className="flex items-center font-medium text-gray-700 hover:text-black transition-colors cursor-pointer"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onClick={() => {
                          setIsServicesOpen(!isServicesOpen);
                        }}
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg z-50 border border-gray-200"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                          >
                            {/* Added max-height and overflow for scrollable dropdown */}
                            <div className="p-4 max-h-[400px] overflow-y-auto">
                              {loading ? (
                                <div className="flex justify-center items-center py-6">
                                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
                                </div>
                              ) : (
                                <>
                                  <table className="w-full">
                                    <tbody>
                                      {services.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                          {row.map((service, colIndex) => (
                                            <td key={colIndex} className="p-2">
                                              <Link
                                                to={`/book/${service.id}`}
                                                className="flex items-center text-sm text-gray-700 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                                onClick={() => setIsServicesOpen(false)}
                                              >
                                                {service.icon}
                                                {service.name}
                                              </Link>
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  
                                  {/* View More/Less buttons */}
                                  <div className="mt-4 text-center flex justify-center space-x-4">
                                    {visibleServicesCount < serviceData.length && (
                                      <button
                                        onClick={handleViewMore}
                                        className="px-4 py-2 text-sm font-medium flex items-center justify-center text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                      >
                                        View More <ChevronRight size={16} className="ml-1" />
                                      </button>
                                    )}
                                    
                                    {visibleServicesCount > initialServicesCount && (
                                      <button
                                        onClick={handleViewLess}
                                        className="px-4 py-2 text-sm font-medium flex items-center justify-center text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                      >
                                        View Less <ChevronUp size={16} className="ml-1" />
                                      </button>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="relative group font-medium text-gray-700 hover:text-black transition-colors"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.dropdown ? (
                        <>
                          <div className="flex items-center justify-between">
                            <Link
                              to="/service"
                              className="text-gray-700 hover:text-black py-2 font-medium transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {link.label}
                            </Link>
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className="p-2"
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  isServicesOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>
                          {isServicesOpen && (
                            <div className="pl-2">
                              {loading ? (
                                <div className="flex justify-center items-center py-4">
                                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary-500"></div>
                                </div>
                              ) : (
                                <>
                                  {/* Added max-height and overflow for mobile services */}
                                  <div className="max-h-[300px] overflow-y-auto">
                                    <table className="w-full">
                                      <tbody>
                                        {services.map((row, rowIndex) => (
                                          <tr key={rowIndex}>
                                            {row.map((service, colIndex) => (
                                              <td key={colIndex} className="p-1">
                                                <Link
                                                  to={`/book/${service.id}`}
                                                  className="flex items-center text-xs text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                                  onClick={() => {
                                                    setIsServicesOpen(false);
                                                    setIsMenuOpen(false);
                                                  }}
                                                >
                                                  {service.icon}
                                                  {service.name}
                                                </Link>
                                              </td>
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                  
                                  {/* Mobile View More/Less buttons */}
                                  <div className="mt-3 text-center flex justify-center space-x-2">
                                    {visibleServicesCount < serviceData.length && (
                                      <button
                                        onClick={handleViewMore}
                                        className="px-3 py-1 text-xs font-medium flex items-center justify-center text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                      >
                                        More <ChevronRight size={14} className="ml-1" />
                                      </button>
                                    )}
                                    
                                    {visibleServicesCount > initialServicesCount && (
                                      <button
                                        onClick={handleViewLess}
                                        className="px-3 py-1 text-xs font-medium flex items-center justify-center text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                      >
                                        Less <ChevronUp size={14} className="ml-1" />
                                      </button>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          className="block text-gray-700 hover:text-black py-2 font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;