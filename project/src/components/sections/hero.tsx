import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-black/20" />
      <div className="absolute inset-0">
        <div className="hidden dark:block bg-[url('C:/Users/omsud/website-nn/project/src/components/images/GroupPhoto.jpg')] bg-cover bg-center opacity-20 h-full w-full transition-all duration-300 group-hover:blur-sm" />
        <div className="dark:hidden block bg-[url('C:/Users/omsud/website-nn/project/src/components/images/GroupPhoto.jpg')] bg-cover bg-center opacity-70 h-full w-full transition-all duration-300 group-hover:blur-sm" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center group">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-[#0326f3] dark:text-white">
            Connect. Engage. Inspire.
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 text-muted-foreground">
          Join our vibrant community and discover amazing events that bring people together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" style={{backgroundColor: '#0326f3'}} className="hover:bg-blue-700">
            Explore Events
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Calendar className="h-5 w-5" />
            View Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}