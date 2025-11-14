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
    <Card className="p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="text-lg font-semibold text-card-foreground leading-tight">{term.name}</h3>
        {term.abbreviation && (
          <Badge variant="secondary" className="whitespace-nowrap text-xs bg-muted text-muted-foreground border-border">
            {term.abbreviation}
          </Badge>
        )}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {term.definition}
      </p>

      {showDetails && (
        <>
          {hasDetails && (
            <div className="border-t border-border pt-4 mt-4 bg-muted/30 -mx-6 px-6 animate-in slide-in-from-top-2 duration-200">
              <div className="space-y-2.5">
                {term.details?.map((detail, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-medium text-card-foreground">{detail.label}:</span>{' '}
                    <span className="text-muted-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {term.tags && term.tags.length > 0 && (
            <div className={`flex flex-wrap gap-2 ${hasDetails ? '-mx-6 px-6 pb-4 -mb-6' : 'mt-4'} animate-in slide-in-from-top-2 duration-200`}>
              {term.tags.map((tag, idx) => {
                const getTagColors = () => {
                  switch (tag.variant) {
                    case 'role':
                      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
                    case 'governance':
                      return 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800';
                    case 'process':
                      return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
                    case 'object':
                      return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
                    default:
                      return 'bg-muted text-muted-foreground border-border';
                  }
                };
                
                return (
                  <Badge
                    key={idx}
                    variant="outline"
                    className={`text-xs ${getTagColors()}`}
                  >
                    {tag.text}
                  </Badge>
                );
              })}
            </div>
          )}
        </>
      )}
    </Card>
  );
}
