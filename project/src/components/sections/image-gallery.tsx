import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  {
    url: '/src/components/images/ph-1.JPG',
    alt: 'Community event with people networking',
  },
  {
    url: 'https://images.unsplash.com/photo-1475721027785-f74ec9c7180a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'Workshop session with participants',
  },
  {
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'Group of friends at a community gathering',
  },
  {
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80',
    alt: 'Concert event with crowd',
  },
  {
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    alt: 'Tech conference presentation',
  },
  {
    url: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    alt: 'Outdoor community festival',
  },
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