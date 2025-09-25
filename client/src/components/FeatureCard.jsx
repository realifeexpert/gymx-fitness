import React from 'react';

// Notice we are now receiving an 'onClick' prop
const FeatureCard = ({ icon, title, description, onClick }) => {
  
  // Conditionally add classes if the card is clickable
  const clickableClasses = onClick 
    ? 'cursor-pointer transform hover:-translate-y-3 hover:shadow-xl' 
    : 'cursor-default';

  return (
    // The onClick event is now passed directly to this div
    <div 
      onClick={onClick}
      className={`group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden ${clickableClasses}`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-full transform translate-x-12 -translate-y-12"></div>
      
      {/* Icon */}
      <div className="text-5xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-[#3A1212] mb-4 group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
      
      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
  );
};

export default FeatureCard;

