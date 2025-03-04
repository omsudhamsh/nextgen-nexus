import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    id: 1,
    name: 'L. Harsha Vardhan',
    role: 'Founder & CEO',
    bio: 'Tech enthusiast and community builder passionate about empowering the next generation through technology and innovation.',
    image: '/nextgen-nexus/images/harshaanna-nn.png',
    linkedin: 'https://www.linkedin.com/in/harsha-vardhan-lankalapalli/',
  },
  {
    id: 2,
    name: 'Dhanush Goud',
    role: 'Co-Founder',
    bio: 'Technology advocate focused on creating impactful learning experiences and fostering collaboration within the tech community.',
    image: '/nextgen-nexus/images/dhanushanna-nn.png',
    linkedin: 'https://www.linkedin.com/in/dhanush-goud/',
  },
  {
    id: 3,
    name: 'Gayatri G',
    role: 'Operational Lead',
    bio: 'Strategic planner and community organizer dedicated to creating engaging tech events and fostering knowledge sharing.',
    image: '/nextgen-nexus/images/gayatrig-nn.png',
    linkedin: 'https://www.linkedin.com/in/g-gayatri192005/',
  },
  {
    id: 4,
    name: 'Shruthi Kolluri',
    role: 'Co-Operational Lead',
    bio: 'Community engagement specialist focused on building bridges between technology enthusiasts and creating learning opportunities.',
    image: '/nextgen-nexus/images/shruthi-nn.png',
    linkedin: 'https://www.linkedin.com/in/sruthi-kolluri/',
  },
  {
    id: 5,
    name: 'Manasa Pandla',
    role: 'Esports Manager',
    bio: 'Community engagement specialist focused on building bridges between technology enthusiasts and creating learning opportunities.',
    image: '/nextgen-nexus/images/manasa-nn.png',
    linkedin: 'https://www.linkedin.com/in/pandala-manasa/',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind NextGen Nexus who work tirelessly to empower and inspire the tech community.
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
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Centered Join Us Card */}
        <div className="mt-16">
          <Card className="overflow-hidden bg-muted/20 border-none hover:shadow-lg transition-all max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-primary/5 opacity-50"></div>
            <CardContent className="p-8 text-center relative">
              <div className="bg-primary/10 p-4 rounded-full mb-6 inline-block group-hover:bg-primary/20 transition-colors duration-300">
                <UserPlus className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Join Our Team</h3>
              <p className="text-base text-muted-foreground mb-6 max-w-lg mx-auto">
                Be part of our mission to empower the next generation through technology and innovation. Join us in creating impactful experiences.
              </p>
              <a
                href="https://forms.gle/dK7DkR5SXfEoYjYB8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 py-2 h-auto relative group-hover:shadow-[0_0_15px_rgba(0,40,240,0.5)] transition-shadow duration-300"
                >
                  Join Now
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}