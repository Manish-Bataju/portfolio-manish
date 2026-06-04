
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react';

export const ImageCarousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || !images.length === 0) return <div className="text-gray-500 italic">No images for this project.</div>;

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const firstImage = images[currentIndex]
  console.log(firstImage);

  const secondImage = images[(currentIndex + 1) % images.length];
  console.log(secondImage);
  
  return (
    <div className="flex flex-col h-full w-full gap-2 justify-start items-center">
      <div className='grid grid-cols-2 gap-5 justify-between items-center px-2 py-1'>
        {/* firstImage */}
        <div className='flex flex-col gap-2 w-full justify-center items-center cursor-pointer transition-all duration-500 hover:scale-102 hover:z-10'>
          <img src={firstImage.url} alt={firstImage.caption} className='w-[95%] h-auto object-contain aspect-video rounded-t-md shadow-md overflow-hidden  ' />
          <span className='text-md bg-foreground text-background w-[95%] text-center rounded-b-md'>{firstImage.caption}</span>
        </div>
        
        {/* Second Image */}
        <div className="flex flex-col gap-2 w-full justify-center items-center cursor-pointer transition-all duration-500 hover:scale-102 hover:z-10">
          <img src={secondImage.url} alt={secondImage.caption} className='w-[95%] h-auto object-contain aspect-video rounded-t-md shadow-md overflow-hidden' />
          <span className='text-md bg-foreground text-background w-[95%] text-center rounded-b-md'>{secondImage.caption}</span>
        </div>
      </div>

      <div className='flex gap-8'>
        <button
          onClick={() => { handlePrev() }}
          className="
      //  1. The Gradient: Lighter blue in middle, deeper on edges
    bg-[radial-gradient(circle,#3b82f6_0%,#1e40af_100%)]
    
    /* 2. The Text */
    text-white
    
    // /* 3. The Raised Shadow (External) */
    shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.2)]
    
    /* 4. Layout & Shape */
    p-2 rounded-full flex items-center justify-center
    
    /* 5. Hover Effect (Lift it higher) */
    transition-all duration-200 cursor-pointer
    hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]
    
    /* 6. Pressed Effect (The Drop) */
    active:scale-95 
    active:translate-y-1 
    active:shadow-inner
      active:bg-[radial-gradient(circle,#2563eb_0%,#1e3a8a_100%)]"> <ChevronLeft size={25} /> </button>
        <button
          onClick={() => { handleNext() }}
          className="
      //  1. The Gradient: Lighter blue in middle, deeper on edges
    bg-[radial-gradient(circle,#3b82f6_0%,#1e40af_100%)]
    
    /* 2. The Text */
    text-white
    
    // /* 3. The Raised Shadow (External) */
    shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.2)]
    
    /* 4. Layout & Shape */
    p-2 rounded-full flex items-center justify-center
    
    /* 5. Hover Effect (Lift it higher) */
    transition-all duration-200 cursor-pointer
    hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]
    
    /* 6. Pressed Effect (The Drop) */
    active:scale-95 
    active:translate-y-1 
    active:shadow-inner
    active:bg-[radial-gradient(circle,#2563eb_0%,#1e3a8a_100%)]">
          <ChevronRight size={25} /> </button>
      </div>
    </div>
  )
}
