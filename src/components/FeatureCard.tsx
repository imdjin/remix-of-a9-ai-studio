import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group p-6 bg-transparent border border-foreground/20 rounded-xl hover:border-foreground/40 transition-all">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-feature-icon/20 rounded-lg group-hover:bg-feature-icon/30 transition-colors">
          <Icon className="h-6 w-6 text-feature-icon" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
