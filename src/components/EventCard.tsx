import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  category: string;
  price: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isPaid?: boolean;
}

const EventCard = ({ 
  title, 
  category, 
  price, 
  description, 
  date, 
  time, 
  location,
  isPaid = false 
}: EventCardProps) => {
  const getPriceBadgeColor = () => {
    if (price === "Free") return "bg-live text-white";
    return "bg-live text-white";
  };

  const getCategoryColor = () => {
    switch (category.toLowerCase()) {
      case "tech": return "bg-orange/20 text-orange";
      case "gaming": return "bg-blue-500/20 text-blue-400";
      case "design": return "bg-purple-500/20 text-purple-400";
      case "business": return "bg-green-500/20 text-green-400";
      default: return "bg-orange/20 text-orange";
    }
  };

  return (
    <div className="bg-event-card rounded-lg p-6 border border-border hover:border-orange/50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <Badge className={getCategoryColor()}>
          {category}
        </Badge>
        <Badge className={getPriceBadgeColor()}>
          {price}
        </Badge>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          {time}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
      </div>

      <Button className="w-full bg-orange hover:bg-orange/90 text-white">
        Register Now
      </Button>
    </div>
  );
};

export default EventCard;