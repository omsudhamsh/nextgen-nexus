import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Community Lead',
    bio: 'Sarah has been organizing community events for over 10 years and is passionate about bringing people together.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Co-operational Lead',
    bio: 'Michael handles the logistics and operations to ensure all our events run smoothly and successfully.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Events Coordinator',
    bio: 'Priya curates our event calendar and works with partners to create memorable experiences.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Marketing Director',
    bio: 'David leads our marketing efforts to spread the word about our community and events.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    linkedin: '#',
    twitter: '#',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind our community who work tirelessly to create amazing experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden bg-muted/20 border-none hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}