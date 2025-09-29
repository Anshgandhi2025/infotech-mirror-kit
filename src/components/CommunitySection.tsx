const CommunitySection = () => {
  return (
    <section className="py-20 bg-events-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you are looking to learn new skills, network with peers, or showcase your talent, 
            this is your platform for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange mb-2">500+</div>
            <div className="text-white">Students Registered</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-orange mb-2">50+</div>
            <div className="text-white">Events Hosted</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-orange mb-2">8</div>
            <div className="text-white">Departments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;