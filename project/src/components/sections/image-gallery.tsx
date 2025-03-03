import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  {
    url: './images/ph-1.JPG',
    alt: 'Community event with people networking',
  },
  {
    url: './images/ph-2.JPG',
    alt: 'Workshop session with participants',
  },
  {
    url: './images/ph-3.JPG',
    alt: 'Group of friends at a community gathering',
  },
  {
    url: './images/ph-4.JPG',
    alt: 'Concert event with crowd',
  },
  {
    url: './images/ph-5.JPG',
    alt: 'Tech conference presentation',
  },
  // {
  //   url: './images/ph-6.JPG',
  //   alt: 'Outdoor community festival',
  // },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const totalImages = images.length;
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, totalImages]);

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-pink-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Moments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our vibrant community events and gatherings.
          </p>
        </div>
        <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-xl shadow-xl">
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.concat(images).map((image, index) => (
              <div 
                key={index} 
                className="min-w-full h-full flex-shrink-0"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  currentIndex === index ? "bg-white" : "bg-white/50"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}