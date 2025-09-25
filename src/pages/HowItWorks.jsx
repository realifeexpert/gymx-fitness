import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Set Your Goal",
      icon: "🎯",
      description: "Tell us what you want to achieve—whether it's building muscle, losing weight, or improving endurance."
    },
    {
      number: "02", 
      title: "Track Your Progress",
      icon: "⌚",
      description: "Connect your watch or log workouts manually. Our AI learns from your every move."
    },
    {
      number: "03",
      title: "Get Coached", 
      icon: "🧠",
      description: "Receive daily workout and meal plans that adapt in real-time to your performance."
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#3A1212] mb-6">
          How It Works
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your Personalized Fitness Plan in 
          <span className="text-red-500 font-semibold"> 3 Simple Steps</span>
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-300 transform translate-x-0 z-10"></div>
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                {/* Step Number */}
                <div className="text-6xl font-bold text-red-500 mb-4 opacity-20 absolute top-4 right-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-6xl mb-6 relative z-10">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#3A1212] mb-4">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 max-w-4xl mx-auto text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already achieved their goals with our AI-powered fitness platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
