import { Mail, Phone, MapPin, Clock } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Get in Touch */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about events or want to organize one? We are here to help you connect and engage.
            </p>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange" />
                <span className="text-muted-foreground">events@cec.edu.in</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange" />
                <span className="text-muted-foreground">+91 9876543210</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange" />
                <span className="text-muted-foreground">College of Engineering Campus, Main Building</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange" />
                <span className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange text-foreground placeholder-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange text-foreground placeholder-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange text-foreground placeholder-muted-foreground resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange hover:bg-orange/90 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;