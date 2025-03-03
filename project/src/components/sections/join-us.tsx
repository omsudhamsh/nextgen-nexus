import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export default function JoinUsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be part of something special. Join our vibrant community and help shape the future together.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-card rounded-lg p-8 shadow-lg border border-primary/20">
          <div className="text-center space-y-6">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <UserPlus className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Become a Member</h3>
              <p className="text-muted-foreground">
                Get access to exclusive events, connect with like-minded individuals, and make a difference in your community.
              </p>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-12"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 