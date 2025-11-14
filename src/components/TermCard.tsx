import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Term } from '@/data/glossary';

interface TermCardProps {
  term: Term;
  showDetails: boolean;
}

export function TermCard({ term, showDetails }: TermCardProps) {
  const hasDetails = term.details && term.details.length > 0;

  return (
    <Card className="group relative bg-card border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 hover:shadow-xl shadow-md overflow-hidden">
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/[0.02] group-hover:to-accent/[0.02] transition-all duration-500 pointer-events-none" />

      <div className="relative p-7">
        {/* Header section */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3
            className="text-xl font-semibold text-card-foreground leading-tight tracking-tight group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {term.name}
          </h3>
          {term.abbreviation && (
            <Badge
              variant="secondary"
              className="whitespace-nowrap text-xs font-medium bg-accent/15 text-accent border border-accent/30 px-3 py-1"
            >
              {term.abbreviation}
            </Badge>
          )}
        </div>

        {/* Definition with refined typography */}
        <p className="text-muted-foreground leading-[1.7] text-[15px] mb-1">
          {term.definition}
        </p>

        {/* Details section with smooth animation */}
        {showDetails && (
          <>
            {hasDetails && (
              <div className="border-t border-border/60 pt-5 mt-5 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-3 bg-muted/20 -mx-7 px-7 py-4 rounded">
                  {term.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3 text-sm">
                      <span
                        className="font-semibold text-foreground min-w-[120px] tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {detail.label}:
                      </span>
                      <span className="text-muted-foreground flex-1">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags with refined colors */}
            {term.tags && term.tags.length > 0 && (
              <div className={`flex flex-wrap gap-2.5 ${hasDetails ? 'mt-5' : 'mt-5 pt-5 border-t border-border/60'} animate-in slide-in-from-top-2 duration-300`}>
                {term.tags.map((tag, idx) => {
                  const getTagColors = () => {
                    switch (tag.variant) {
                      case 'role':
                        return 'bg-blue-100 dark:bg-blue-100 text-blue-700 dark:text-blue-700 border-blue-200 dark:border-blue-200 hover:bg-blue-200';
                      case 'governance':
                        return 'bg-violet-100 dark:bg-violet-100 text-violet-700 dark:text-violet-700 border-violet-200 dark:border-violet-200 hover:bg-violet-200';
                      case 'process':
                        return 'bg-emerald-100 dark:bg-emerald-100 text-emerald-700 dark:text-emerald-700 border-emerald-200 dark:border-emerald-200 hover:bg-emerald-200';
                      case 'object':
                        return 'bg-amber-100 dark:bg-amber-100 text-amber-700 dark:text-amber-700 border-amber-200 dark:border-amber-200 hover:bg-amber-200';
                      default:
                        return 'bg-muted text-muted-foreground border-border hover:bg-muted/70';
                    }
                  };

                  return (
                    <Badge
                      key={idx}
                      variant="outline"
                      className={`text-xs font-medium px-3 py-1 transition-colors duration-200 ${getTagColors()}`}
                    >
                      {tag.text}
                    </Badge>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 6px)',
        }} />
      </div>
    </Card>
  );
}
