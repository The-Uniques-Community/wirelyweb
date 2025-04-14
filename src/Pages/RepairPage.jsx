import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Star, Phone, Edit, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function BusinessProfile() {
  const { id } = useParams();
  const [showNumber, setShowNumber] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isOpen, setIsOpen] = useState(true);
  const [images, setImages] = useState([]);
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/categories/subone/${id}`);
        setServiceData(response.data);
        
        // Set initial images if available
        if (response.data.image) {
          setImages([response.data.image, response.data.image]);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching service data:", err);
        setError("Failed to load service data. Please try again later.");
        setLoading(false);
      }
    };

    if (id) {
      fetchServiceData();
    }
  }, [id]);

  const handleImageUpload = () => {
    if (serviceData?.image) {
      setImages([...images, serviceData.image]);
    }
  };

  // Format business hours from response
  const formatBusinessHours = () => {
    if (!serviceData?.businessHours) return [];
    
    return [
      { day: "Monday", hours: serviceData.businessHours.monday || "Closed" },
      { day: "Tuesday", hours: serviceData.businessHours.tuesday || "Closed" },
      { day: "Wednesday", hours: serviceData.businessHours.wednesday || "Closed" },
      { day: "Thursday", hours: serviceData.businessHours.thursday || "Closed" },
      { day: "Friday", hours: serviceData.businessHours.friday || "Closed" },
      { day: "Saturday", hours: serviceData.businessHours.saturday || "Closed" },
      { day: "Sunday", hours: serviceData.businessHours.sunday || "Closed" },
    ];
  };

  const businessHours = formatBusinessHours();

  const handleCall = () => {
    if (serviceData?.contact?.phone) {
      window.location.href = `tel:${serviceData.contact.phone}`;
    }
  };

  const handleWhatsApp = () => {
    if (serviceData?.contact?.phone) {
      // Remove non-numeric characters for WhatsApp link
      const phoneNumber = serviceData.contact.phone.replace(/\D/g, '');
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  // Sample data for sections that might not be in the API response
  const technicians = [
    {
      name: "Rahul Sharma",
      image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
      price: "₹799/session",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
      price: "₹699/session",
      rating: 4,
    },
    {
      name: "Vikram Singh",
      image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
      price: "₹599/session",
      rating: 4,
    },
  ];

  const services = [
    { name: "Computer Repair", price: "₹499 onwards" },
    { name: "Virus Removal", price: "₹399 onwards" },
    { name: "Data Recovery", price: "₹999 onwards" },
    { name: "Hardware Upgrade", price: "₹799 onwards" },
    { name: "Software Installation", price: "₹299 onwards" },
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent service! My computer was fixed in no time.",
    },
    {
      name: "Priya Patel",
      rating: 4,
      date: "1 month ago",
      comment: "Good service but a bit pricey. Technician was knowledgeable.",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      date: "2 months ago",
      comment: "Fast and reliable service. Would definitely recommend!",
    },
  ];

  if (loading) {
    return (
      <div className="max-w-[95%] mt-28 font-[Poppins] mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg flex justify-center items-center" style={{minHeight: "60vh"}}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[95%] mt-28 font-[Poppins] mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg flex justify-center items-center" style={{minHeight: "60vh"}}>
        <div className="text-red-500 text-center">
          <p className="text-xl font-bold mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="max-w-[95%] mt-28 font-[Poppins] mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg flex justify-center items-center" style={{minHeight: "60vh"}}>
        <div className="text-center">
          <p className="text-xl font-bold mb-2">Service Not Found</p>
          <p>The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[95%] mt-28 font-[Poppins] mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col mt-2 md:mt-2 md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-bold">{serviceData.name}</h1>
                {serviceData.isVerified && (
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
                <div className="flex items-center border rounded-full px-2 py-1 text-xs md:text-sm">
                  <Star className="text-[#fbc800] w-3 h-3 md:w-4 md:h-4 mr-1" fill="#fbc800" />
                  <span className="font-medium">{serviceData.rating?.value || '4.0'}</span>
                  <span className="text-gray-500 text-xs ml-1">
                    ({serviceData.rating?.totalReviews || 0} reviews)
                  </span>
                </div>

                <span className="bg-gray-700 text-white px-2 py-1 text-xs rounded-md">{serviceData.name}</span>

                <div className="flex items-center text-xs md:text-sm text-gray-600">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span>
                    {isOpen ? "Open now" : "Closed"} · 
                    {businessHours[0]?.hours ? ` Hours: ${businessHours[0]?.hours}` : ""}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                className="bg-[#fbc800] hover:bg-[#e0b400] text-black font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-md flex items-center justify-center text-xs md:text-sm"
                onClick={handleCall}
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Call Now
              </button>

              {serviceData.contact?.whatsappAvailable && (
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md flex items-center justify-center text-xs md:text-sm"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp
                </button>
              )}

              <button className="border border-gray-300 hover:bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-md flex items-center justify-center text-xs md:text-sm">
                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Enquire Now
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 md:mt-6">
            <div className="flex border-b overflow-x-auto scrollbar-hide">
              <button
                className={`px-3 py-1.5 md:px-4 md:py-2 font-medium text-sm md:text-base ${activeTab === "about" ? "border-b-2 border-[#fbc800] text-[#fbc800]" : "text-gray-500"}`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`px-3 py-1.5 md:px-4 md:py-2 font-medium text-sm md:text-base ${activeTab === "photos" ? "border-b-2 border-[#fbc800] text-[#fbc800]" : "text-gray-500"}`}
                onClick={() => setActiveTab("photos")}
              >
                Photos
              </button>
              <button
                className={`px-3 py-1.5 md:px-4 md:py-2 font-medium text-sm md:text-base ${activeTab === "services" ? "border-b-2 border-[#fbc800] text-[#fbc800]" : "text-gray-500"}`}
                onClick={() => setActiveTab("services")}
              >
                Services
              </button>
              <button
                className={`px-3 py-1.5 md:px-4 md:py-2 font-medium text-sm md:text-base ${activeTab === "reviews" ? "border-b-2 border-[#fbc800] text-[#fbc800]" : "text-gray-500"}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>

            {/* About Tab */}
            {activeTab === "about" && (
              <div className="py-4 space-y-8">
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-2">About {serviceData.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {serviceData.aboutBusiness || serviceData.description}
                  </p>
                </div>

                {/* Service Details Section */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-5">
                    <div className="bg-[#fbc800] p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">Our Service Details</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Inclusions Card */}
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">What's Included</h3>
                      </div>
                      <ul className="space-y-3 pl-2">
                        {(serviceData.serviceDetails?.whatsIncluded || [
                          "Complete diagnostic report",
                          "Hardware component testing",
                          "Software troubleshooting",
                          "Performance optimization",
                          "Post-service documentation"
                        ]).map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#fbc800] mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements Card */}
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-1 rounded-full mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">What You'll Need</h3>
                      </div>
                      <div className="space-y-4">
                        {(serviceData.serviceDetails?.whatYouNeed || [
                          { title: "Admin Access", note: "For software repairs and installations" },
                          { title: "Installation Media", note: "Original disks or downloads if available" },
                          { title: "Data Backup", note: "Recommended before any major repairs" },
                          { title: "Power Supply", note: "Stable power connection required" }
                        ]).map((item, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-xl mr-3">🔑</span>
                            <div>
                              <h4 className="font-medium text-gray-800">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Guarantee */}
                  <div className="mt-6 bg-gradient-to-r from-[#fff9e6] to-[#fff3cc] p-4 rounded-lg border border-[#fbc800]/30">
                    <div className="flex items-center">
                      <div className="bg-[#fbc800] p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Quality Guarantee</h3>
                        <p className="text-sm text-gray-600">All services come with a 90-day warranty covering parts and labor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-2">Contact Information</h3>
                  <div className="space-y-2">
                    {serviceData.contact?.phone && (
                      <p className="flex items-center text-sm md:text-base">
                        <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-500" />
                        {serviceData.contact.phone}
                      </p>
                    )}
                    {serviceData.contact?.email && (
                      <p className="flex items-center text-sm md:text-base">
                        <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-500" /> 
                        {serviceData.contact.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-2">Business Hours</h3>
                  <div className="space-y-1">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between text-xs md:text-sm border-b border-gray-100 py-1">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Photos Tab */}
            {activeTab === "photos" && (
              <div className="py-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-medium">Photos</h3>
                  <button
                    className="flex items-center border border-[#fbc800] text-[#fbc800] px-2 py-0.5 md:px-3 md:py-1 rounded-md hover:bg-[#fff9e0] text-xs md:text-sm"
                    onClick={handleImageUpload}
                  >
                    <Edit className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Upload Photos
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {images.length > 0 ? images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-md border hover:border-[#fbc800]"
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Business photo ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )) : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                      No photos available
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <div className="py-4 space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border-b border-gray-100">
                        <div>
                          <h4 className="font-medium text-gray-800">{service.name}</h4>
                        </div>
                        <span className="text-[#fbc800] font-medium">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-base md:text-lg font-medium mb-4">Our Expert Technicians</h3>
                  <div className="space-y-4">
                    {technicians.map((tech, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-16 h-16 rounded-full object-cover border border-gray-200"
                        />
                        <div className="flex-1">
                          <h3 className="text-md font-semibold text-gray-800">{tech.name}</h3>
                          <p className="text-sm text-gray-500">{tech.price}</p>
                        </div>
                        <div className="flex items-center bg-[#fbc800] px-2 py-1 rounded-md">
                          <FaStar className="text-white text-xs" />
                          <span className="ml-1 text-white text-sm font-medium">{tech.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="py-4 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-medium">Customer Reviews</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center bg-[#fbc800] px-2 py-1 rounded-md mr-2">
                        <FaStar className="text-white text-xs" />
                        <span className="ml-1 text-white text-sm font-medium">
                          {serviceData.rating?.value || "4.0"}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        ({serviceData.rating?.totalReviews || 0} reviews)
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#fbc800] hover:bg-[#e0b400] text-black font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-md flex items-center justify-center text-xs md:text-sm">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">{review.name}</h4>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "text-[#fbc800]" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center text-sm md:text-base">
                  Load More Reviews
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 md:mt-6 pt-4 border-t">
            <button
              className="w-full border border-[#fbc800] hover:bg-[#fff9e0] text-black px-4 py-2 rounded-md flex items-center justify-center text-sm md:text-base"
              title="Verify ownership to edit business details"
            >
              <Edit className="w-3 h-3 md:w-4 md:h-4 mr-2" /> Claim & Edit Business Profile
            </button>
          </div>
        </div>

        {/* Right Side Contact Panel */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0">
          <div className="sticky top-24 p-3 md:p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact Business</h3>
            
            <div className="space-y-3 md:space-y-4">
              {serviceData.contact?.phone && (
                <div>
                  <h4 className="font-medium text-gray-700 text-sm md:text-base mb-1.5 md:mb-2">Phone Number</h4>
                  <div className="flex items-center gap-2">
                    <button
                      className="flex-1 bg-[#fbc800] hover:bg-[#e0b400] text-black font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-md flex items-center justify-center text-xs md:text-sm"
                      onClick={handleCall}
                    >
                      <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      Call Now
                    </button>
                    {serviceData.contact?.whatsappAvailable && (
                      <button 
                        className="bg-green-600 hover:bg-green-700 text-white p-1.5 md:p-2 rounded-md"
                        onClick={handleWhatsApp}
                      >
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {serviceData.contact?.email && (
                <div>
                  <h4 className="font-medium text-gray-700 text-sm md:text-base mb-1.5 md:mb-2">Email Address</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 md:px-4 md:py-2 flex items-center text-xs md:text-sm">
                      <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-gray-500" />
                      <span>{serviceData.contact.email}</span>
                    </div>
                    <button className="border border-gray-300 hover:bg-gray-100 p-1.5 md:p-2 rounded-md">
                      <Mail className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-medium text-gray-700 text-sm md:text-base mb-1.5 md:mb-2">Business Hours</h4>
                <div className="space-y-1.5 md:space-y-2">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 md:py-2 px-4 rounded-md mt-2 md:mt-4 text-sm md:text-base">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}