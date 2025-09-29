import { Lightbulb } from "lucide-react";

const InnovationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Innovation</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fostering creative thinking and breakthrough solutions through cutting-edge events and workshops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;