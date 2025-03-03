import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-black/20" />
      <div className="absolute inset-0">
        <div className="hidden dark:block bg-[url('/nextgen-nexus/images/GroupPhoto.JPG')] bg-cover bg-center opacity-20 h-full w-full transition-all duration-300 group-hover:blur-sm" />
        <div className="dark:hidden block bg-[url('/nextgen-nexus/images/GroupPhoto.JPG')] bg-cover bg-center opacity-70 h-full w-full transition-all duration-300 group-hover:blur-sm" />
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
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 bg-white dark:bg-gray-800 text-black dark:text-white border-[#0326f3] dark:border-white hover:bg-[#0326f3] hover:text-white dark:hover:bg-white dark:hover:text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Us
          </Button>
          <Button 
            size="lg" 
            style={{backgroundColor: '#0326f3'}} 
            className="hover:bg-blue-700"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Events
          </Button>
        </div>
      </div>
    </section>
  );
}