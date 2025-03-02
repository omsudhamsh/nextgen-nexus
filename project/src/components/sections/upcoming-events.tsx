import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Community Hackathon',
    date: 'September 5, 2025',
    time: '10:00 AM - 8:00 PM',
    location: 'Innovation Center',
    category: 'Tech',
  },
  {
    id: 2,
    title: 'Photography Workshop',
    date: 'September 12, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Creative Studio',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Charity Fun Run',
    date: 'September 19, 2025',
    time: '8:00 AM - 12:00 PM',
    location: 'City Park',
    category: 'Charity',
  },
  {
    id: 4,
    title: 'Book Club Meeting',
    date: 'September 25, 2025',
    time: '7:00 PM - 9:00 PM',
    location: 'Community Library',
    category: 'Social',
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars for these exciting upcoming events in our community.
          </p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="bg-primary/5 p-6 sm:p-8 flex flex-col items-center justify-center sm:w-1/4">
                    <div className="text-xl font-bold">{event.date.split(',')[0].split(' ')[1]}</div>
                    <div className="text-3xl font-bold">{event.date.split(',')[0].split(' ')[0]}</div>
                    <div className="text-sm text-muted-foreground">{event.date.split(', ')[1]}</div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <Badge>{event.category}</Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <Button size="sm">Register</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <Calendar className="h-5 w-5" />
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}