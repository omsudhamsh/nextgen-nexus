import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const featuredEvents = [
  {
    id: 1,
    title: 'Open Source Day',
    description: 'Join us for a day of learning and contributing to open source projects.',
    date: 'March 1, 2025',
    time: '10:30 AM - 2:00 PM',
    location: 'Microsoft Office, Gachibowli',
    category: 'Conference',
    status: 'Closed',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://reskilll.com/event/opensourcehyd'
  },
  {
    id: 2,
    title: 'Open Source Day',
    description: 'Experience a vibrant celebration of local art, music, and cultural performances.',
    date: 'Feb 1, 2025',
    time: '10:30 AM - 1:00 PM',
    location: 'Microsoft Office, Building 3, Gachibowli',
    category: 'Conference',
    status: 'Closed',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://reskilll.com/event/opensourcehyd'
  },
  // {
  //   id: 3,
  //   title: 'Wellness Retreat',
  //   description: 'A weekend of mindfulness, yoga, and wellness workshops to rejuvenate your mind and body.',
  //   date: 'August 20-22, 2025',
  //   time: 'All Day',
  //   location: 'Serenity Resort',
  //   category: 'Wellness',
  //   status: 'Open',
  //   image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  // },
];

export default function FeaturedEvents() {
  return (
    <section id="events" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of must-attend events that promise unforgettable experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge>{event.category}</Badge>
                  <Badge className={event.status === 'Open' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}>
                    {event.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {event.id === 1 ? (
                  <Button 
                    className="w-full"
                    onClick={() => window.open(event.link, '_blank', 'noopener,noreferrer')}
                  >
                    View Details
                  </Button>
                ) : (
                  <Button className="w-full">View Details</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}