interface SolutionCardProps {
  title: string;
  description: string;
  highlight?: boolean;
}

export const SolutionCard = ({ title, description, highlight = false }: SolutionCardProps) => {
  return (
    <div className={`p-6 bg-card border rounded-lg transition-all ${
      highlight 
        ? 'border-primary-warm/50 shadow-glow' 
        : 'border-border hover:border-primary-soft/50'
    }`}>
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
