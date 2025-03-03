import { Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">NextGen Nexus</h3>
            <p className="text-muted-foreground">
            Fueling growth with opportunities to master modern skills
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2">
                Email: nextgennexus22@gmail.com
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                Phone: +91 XXXXX XXXXX
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@nexusnextgen"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/nextgen.nexus/"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://x.com/nextgen_nexus22"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/nextgennexus/"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NextGen Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}