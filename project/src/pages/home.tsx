import Hero from '@/components/sections/hero';
import FeaturedEvents from '@/components/sections/featured-events';
import UpcomingEvents from '@/components/sections/upcoming-events';
import TeamSection from '@/components/sections/team';
import ContactSection from '@/components/sections/contact';
import ImageGallery from '@/components/sections/image-gallery';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedEvents />
      <ImageGallery />
      <UpcomingEvents />
      <TeamSection />
      <ContactSection />
    </div>
  );
}