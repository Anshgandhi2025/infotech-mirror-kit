import { Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your gateway to discovering and participating in the most exciting events across all college departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To connect students with exciting opportunities and foster a vibrant campus community through engaging departmental events.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Community Driven</h3>
            <p className="text-muted-foreground">
              Built by students, for students. We understand what makes college events meaningful and impactful.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Excellence</h3>
            <p className="text-muted-foreground">
              Committed to delivering high-quality events that provide real value and learning opportunities for all participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;