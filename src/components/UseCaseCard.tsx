interface UseCaseCardProps {
  number: string;
  title: string;
  description: string;
}

export const UseCaseCard = ({ number, title, description }: UseCaseCardProps) => {
  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary-soft transition-all">
      <div className="flex items-start gap-4">
        <span className="text-4xl font-bold text-primary-deep/40">{number}</span>
        <div className="flex-1 pt-1">
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
