import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { TermCard } from './components/TermCard';
import { glossaryData } from './data/glossary';
import { Button } from './components/ui/button';
import * as LucideIcons from 'lucide-react';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-card dark:bg-card p-8 sm:p-12 lg:p-16 shadow-sm border border-border rounded-xl relative">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="absolute top-8 right-8 z-10 bg-card dark:bg-card border-border dark:border-border text-card-foreground dark:text-card-foreground hover:bg-accent dark:hover:bg-accent"
        >
          {showDetails ? (
            <>
              <EyeOff className="w-4 h-4 mr-2" />
              Hide Details
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 mr-2" />
              Show Details
            </>
          )}
        </Button>
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-card-foreground tracking-tight leading-tight mb-3">
            FamilySearch Organizational Glossary
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Terms, Roles, and Concepts from SOC and SDLC Documentation
          </p>
        </header>

        <div className="space-y-14">
          {glossaryData.map((section) => {
            const IconComponent = (LucideIcons as any)[
              section.icon.split('-').map((word: string, i: number) => 
                i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
              ).join('')
            ] || LucideIcons.Layers;

            return (
              <section key={section.id}>
                <h2 className="text-2xl font-semibold text-card-foreground mb-6 pb-4 border-b border-border tracking-tight flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-muted-foreground" />
                  <span>{section.title}</span>
                </h2>
                <div className="grid gap-6">
                  {section.terms.map((term) => (
                    <TermCard key={term.id} term={term} showDetails={showDetails} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Version 1.0.1
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
