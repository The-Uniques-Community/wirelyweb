import React from 'react';
import { Star } from 'lucide-react';

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajiv Mehta',
      role: 'IT Director, Pinnacle Solutions',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      review: 'Wirely\'s server management services have been transformative for our operations. After struggling with frequent downtimes and slow response from our previous provider, their team implemented a robust monitoring system and optimized our server infrastructure within just two weeks. We\'ve seen a 99.9% uptime since then, and their 24/7 support team resolves issues before they impact our business. What impressed me most was their documentation and knowledge transfer to our internal team.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Operations Head, TechFusion',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      review: 'The structured cabling installation by Wirely\'s team exceeded our expectations. Despite our complex office layout, they completed the project on schedule and within budget. The network speed improved dramatically, and their cable management is impeccable—our server room finally looks organized! Their team was professional and minimized disruption to our daily operations.',
      rating: 4
    },
    {
      id: 7,
      name: 'Vikram Singh',
      role: 'Security Manager, FinSecure Ltd.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      review: 'As a financial services firm, security is critical for us. Wirely implemented a comprehensive security system with biometric access control and CCTV monitoring that has significantly enhanced our premises security. Their team conducted a thorough assessment, identified vulnerabilities in our existing setup, and proposed a tailored solution that met our regulatory requirements. The installation was completed ahead of schedule, and their training for our staff was exceptional. We\'ve already recommended them to several partners in the industry.',
      rating: 5
    },
    {
      id: 'featured',
      name: 'Ananya Patel',
      role: 'CTO, GrowthWave Technologies',
      image: 'https://randomuser.me/api/portraits/women/67.jpg',
      review: 'When our data center experienced a catastrophic failure, Wirely\'s recovery team was on-site within 2 hours. They not only recovered 98% of our critical data but also implemented a robust backup system to prevent future incidents. Their disaster recovery planning has given us peace of mind, and their ongoing server management service has improved our system performance by 40%. What sets them apart is their proactive approach—they identify and resolve potential issues before they become problems. Worth every rupee invested.',
      rating: 5
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      role: 'Startup Founder, InnoLabs',
      image: 'https://randomuser.me/api/portraits/men/28.jpg',
      review: 'As a startup with limited resources, we were worried about investing in expensive IT infrastructure. Wirely provided a scalable solution that fit our budget while allowing for future growth. Their hardware recommendations and configuration saved us nearly 30% compared to other quotes we received. Honest, reliable service.',
      rating: 4
    },
    {
      id: 5,
      name: 'Neha Kapoor',
      role: 'Office Administrator, Delhi First Consultancy',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      review: 'The firewall installation and network security setup by Wirely has been reliable, though we had some initial configuration issues. Their team was responsive in addressing these problems, and we\'ve had a secure network since then. Their documentation could be more user-friendly for non-technical staff.',
      rating: 3
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 font-[Poppins] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-6 sm:text-3xl sm:mb-8 md:text-4xl md:mb-12">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 md:auto-rows-fr">
          {testimonials.map((testimonial) => {
            const isFeaturedCard = testimonial.id === 'featured';
            const reviewLength = testimonial.review.length;
            
            const cardSizeClass = reviewLength > 100 ? 'md:row-span-2' : 'md:row-span-1';
            
            return (
              <div 
                key={testimonial.id}
                className={`
                  bg-white rounded-lg shadow-sm p-4 
                  hover:shadow-md transition-shadow duration-200
                  ${isFeaturedCard ? 'md:col-start-2' : ''}
                  ${cardSizeClass}
                  flex flex-col
                `}
              >
                <div className={`flex flex-col h-full ${isFeaturedCard ? 'md:p-2' : ''}`}>
                  <div className="flex items-center mb-3">
                    <img 
                      className={`rounded-full object-cover mr-3 h-10 w-10 sm:h-12 sm:w-12 ${isFeaturedCard ? 'md:h-14 md:w-14' : 'md:h-12 md:w-12'}`}
                      src={testimonial.image} 
                      alt={testimonial.name}
                    />
                    <div>
                      <h3 className={`text-sm font-medium text-gray-900 sm:text-base ${isFeaturedCard ? 'md:text-lg' : 'md:text-base'}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-xs text-gray-500 sm:text-sm ${isFeaturedCard ? 'md:text-base' : 'md:text-sm'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-xs text-gray-500 sm:text-sm">
                      {testimonial.rating % 1 === 0 ? `${testimonial.rating}.0` : testimonial.rating}
                    </span>
                  </div>
                  <p className={`text-xs text-gray-600 mt-1 sm:text-sm ${isFeaturedCard ? 'md:text-base' : 'md:text-sm'} ${reviewLength > 200 ? 'line-clamp-4 md:line-clamp-none' : ''}`}>
                    "{testimonial.review}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;