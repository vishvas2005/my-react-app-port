import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Swiper = () => {
  const slides = [  
    "https://i.ibb.co/wNZTjfP1/Screenshot-2025-06-29-153317.png",
       "https://images.unsplash.com/photo-1570556319136-3cfc640168a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwYWNlfGVufDB8fDB8fHww",
    "https://i.postimg.cc/NMdmy8vH/Screenshot-2025-06-29-160110.png",
    "https://i.ibb.co/35vRkVgg/Screenshot-2025-06-29-153644.png",
 
  ];
  const slides1 = [
    "https://i.ibb.co/SCZ9zvv/Screenshot-2025-06-29-153236.png",
    "https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://i.postimg.cc/g2syhPW5/Screenshot-2025-06-29-155733.png",
    "https://i.postimg.cc/VLS9y1fj/Screenshot-2025-06-29-153702.png",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-[90vw] h-[80vh] mx-auto overflow-hidden  rounded-2xl shadow-lg">
      {/* Left Arrow */}
      <button
        className="absolute left-0 md:left-4 p-2 text-white bg-transparent md:bg-gray-800 rounded-full shadow-lg hover:bg-gray-700"
        onClick={goToPrevious}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Slide Content */}
      <div className="md:flex gap-10">
      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-[65vw] md:w-[20vw] h-[50vh] md:h-[53vh] object-cover transition-transform duration-500 rounded-[15px]"
      />
       <img
        src={slides1[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-[65vw] md:w-[53vw] h-[50vh] md:h-[53vh] mt-5 md:mt-0 object-cover transition-transform duration-500 rounded-[15px]"
      />
      </div>
      {/* Right Arrow */}
      <button
        className="absolute right-0 md:right-4 p-2 text-white bg-transparent md:bg-gray-800 rounded-full shadow-lg hover:bg-gray-700"
        onClick={goToNext}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Swiper;

