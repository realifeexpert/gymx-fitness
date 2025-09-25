import React, { useState, useRef, useEffect } from 'react';

const AiChatModal = ({ feature, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Automatically scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Add a welcome message when the modal opens
  useEffect(() => {
    if (feature) {
      setMessages([
        {
          sender: 'ai',
          text: `Hello! I am the ${feature.title}. How can I help you today?`
        }
      ]);
       setInput(''); // Clear input when modal opens
    }
  }, [feature]);


  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Prepare history for the backend. The backend expects 'assistant' role for the AI.
    const history = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));
    
    setInput('');
    setIsLoading(true);

    // --- REAL BACKEND COMMUNICATION ---
    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,       // The new message from the user
          history: history,     // The previous conversation messages
          featureTitle: feature.title, // The title of the current feature
        }),
      });

      if (!response.ok) {
        // If the server response is not OK, throw an error to be caught by the catch block
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok.');
      }

      const data = await response.json();
      
      const aiResponse = { 
        sender: 'ai', 
        text: data.response 
      };
      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error("Failed to fetch AI response:", error);
      const errorResponse = {
        sender: 'ai',
        text: "I'm having trouble connecting. Please ensure the backend server is running and try again."
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
    // --- End of Backend Communication ---
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Prevent modal from closing when clicking inside it
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  if (!feature) return null;

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
        onClick={onClose} // Close modal on backdrop click
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col transform transition-all duration-300 scale-95 animate-modal-pop-in"
        onClick={handleModalContentClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 rounded-t-2xl bg-gray-50">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="text-2xl font-bold text-[#3A1212]">{feature.title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && <div className="text-2xl w-8 h-8 flex-shrink-0">🤖</div>}
              <div 
                className={`max-w-md p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-red-500 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
              >
                <p className="text-lg whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-end gap-3">
               <div className="text-2xl w-8 h-8 flex-shrink-0">🤖</div>
               <div className="max-w-md p-4 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                   <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-fast"></div>
                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-medium"></div>
                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-slow"></div>
                   </div>
               </div>
           </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-5 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow text-lg"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes modal-pop-in {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-modal-pop-in { animation: modal-pop-in 0.2s ease-out forwards; }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow { animation: bounce 1.4s infinite; animation-delay: 0.4s; }
        .animate-bounce-medium { animation: bounce 1.4s infinite; animation-delay: 0.2s; }
        .animate-bounce-fast { animation: bounce 1.4s infinite; }
      `}</style>
    </div>
  );
};

export default AiChatModal;

