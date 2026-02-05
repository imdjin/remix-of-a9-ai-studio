import { LucideIcon } from "lucide-react";

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export const PainPointCard = ({ icon: Icon, title, subtitle, description }: PainPointCardProps) => {
  return (
    <div className="group p-6 bg-card border border-border rounded-xl hover:border-primary/40 transition-all">
      <div className="flex flex-col gap-3">
        <div className="p-3 bg-primary/10 rounded-lg w-fit">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-primary font-medium mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
