import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us through any of these channels.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">nextgennexus22@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Community St, City, Country</p>
                </div>
              </div> */}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4 text-foreground">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.youtube.com/@nexusnextgen"
                  className="bg-primary p-3 rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/nextgen.nexus/"
                  className="bg-primary p-3 rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/nextgen_nexus22"
                  className="bg-primary p-3 rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/nextgennexus/"
                  className="bg-primary p-3 rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-primary/20">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="border-primary/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="border-primary/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" className="border-primary/20" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="border-primary/20"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}