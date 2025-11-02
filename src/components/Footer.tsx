import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Russian Spa Centre</h3>
            <p className="text-muted-foreground">
              Experience authentic Russian Banya traditions in the heart of New Delhi
            </p>
          </div>

          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/2LTFUUiwPaqB2Y1c7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-smooth"
                >
                  Office No - 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi, Delhi 110037
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a href="tel:+919818931148" className="hover:text-gold transition-smooth">
                  +91 98189 31148
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a href="mailto:info@russianspacentre.com" className="hover:text-gold transition-smooth">
                  info@russianspacentre.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold shrink-0" />
                <span>Open 24 Hours</span>
              </div>
              <p className="ml-7">Monday - Sunday</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-muted-foreground mb-4">
            <p>&copy; {new Date().getFullYear()} Russian Spa Centre. All rights reserved.</p>
          </div>
          
          {/* SEO Keywords Section */}
          <div className="text-xs text-muted-foreground/60 text-center space-y-2">
            <p>
              Russian Body | Massage Centres | Beauty Spas For Men | Russian Body Massage Centres | 
              Russian Body Massage Centres-Z | Beauty Spas For Men-A | 24 Hours Beauty Spas Massage | 
              Centres For Men | 24 Hours Beauty Spas-A | Massage Centres For Men-Z | 
              24 Hours Body Massage Centres | Beauty Spas | 24 Hours Body Massage Centres-Z | 
              Beauty Spas-A | Russian spa in mahipalpur | Russian spa in aerocity | Russian spa Mahipalpur
            </p>
            <p>
              Serving areas: Mahipalpur, Aerocity, Defence Colony, South Delhi | 
              Pincodes: 110001, 110011, 110089, 110075, 110070, 110005, 110049, 11048, 122001, 122002, 201014, 201002, 201301, 121001, 110037, 110097, 110067, 110057
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
