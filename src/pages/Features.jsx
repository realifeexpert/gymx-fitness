import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Fitness Coach",
      description: "Dynamic workouts that change as you get stronger."
    },
    {
      icon: "🍎",
      title: "AI Diet Planner", 
      description: "Smart meal suggestions that align with your fitness goals and preferences."
    },
    {
      icon: "📈",
      title: "Analytic Dashboard",
      description: "Visualize your progress with beautiful, easy-to-read charts."
    },
    {
      icon: "⌚",
      title: "Smartwatch Integration",
      description: "Automatically sync data from Apple Watch, Fitbit, and more."
    },
    {
      icon: "💬",
      title: "24/7 AI Chatbot",
      description: "Get instant answers to your fitness and nutrition questions."
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#3A1212] mb-6">
          Everything You Need to Succeed
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our powerful AI-driven features designed to transform your 
          <span className="text-red-500 font-semibold"> fitness journey</span>
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-full transform translate-x-12 -translate-y-12"></div>
              
              {/* Icon */}
              <div className="text-5xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#3A1212] mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3A1212] mb-12">
          Why Choose Our AI-Powered Platform?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl font-bold text-red-500">10x</div>
            <div className="text-xl font-semibold text-[#3A1212]">Faster Results</div>
            <div className="text-gray-600">AI optimization delivers results 10 times faster than traditional methods</div>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl font-bold text-red-500">24/7</div>
            <div className="text-xl font-semibold text-[#3A1212]">AI Support</div>
            <div className="text-gray-600">Round-the-clock assistance from our intelligent fitness assistant</div>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl font-bold text-red-500">100%</div>
            <div className="text-xl font-semibold text-[#3A1212]">Personalized</div>
            <div className="text-gray-600">Every workout and meal plan is tailored specifically for you</div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 max-w-4xl mx-auto text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Future of Fitness?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already achieving their goals with our AI-powered features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
