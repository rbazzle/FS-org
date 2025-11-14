import { useState } from 'react';
import { Eye, EyeOff, BookOpen } from 'lucide-react';
import { TermCard } from './components/TermCard';
import { glossaryData } from './data/glossary';
import { Button } from './components/ui/button';
import * as LucideIcons from 'lucide-react';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
      {/* Decorative corner accent */}
      <div className="fixed top-0 right-0 w-64 h-64 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 10px)',
        }} />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header with asymmetric layout */}
        <header className="mb-16 relative animate-fade-in">
          <div className="flex items-start gap-6 mb-8">
            <div className="hidden sm:block w-1 h-32 bg-gradient-to-b from-primary via-accent to-transparent opacity-60" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
                  Reference Library
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Organizational Glossary
              </h1>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    A comprehensive reference of terms, roles, and concepts from SOC and SDLC documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setShowDetails(!showDetails)}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-6 py-2.5 rounded transition-all duration-300 hover:shadow-lg"
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
        </header>

        {/* Content sections with staggered animations */}
        <div className="space-y-20">
          {glossaryData.map((section, sectionIdx) => {
            const IconComponent = (LucideIcons as any)[
              section.icon.split('-').map((word: string, i: number) =>
                i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
              ).join('')
            ] || LucideIcons.Layers;

            return (
              <section
                key={section.id}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${(sectionIdx + 1) * 0.1}s` }}
              >
                {/* Section header with decorative elements */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2.5 bg-accent/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h2
                      className="text-3xl font-semibold text-foreground tracking-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>

                {/* Terms grid */}
                <div className="grid gap-5">
                  {section.terms.map((term, termIdx) => (
                    <div
                      key={term.id}
                      className="animate-fade-in opacity-0"
                      style={{ animationDelay: `${(sectionIdx + 1) * 0.1 + termIdx * 0.05}s` }}
                    >
                      <TermCard term={term} showDetails={showDetails} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer accent */}
        <div className="mt-24 pt-12 border-t border-border/50 animate-fade-in opacity-0 animate-delay-300">
          <p className="text-center text-sm text-muted-foreground">
            FamilySearch Internal Reference • {glossaryData.reduce((acc, section) => acc + section.terms.length, 0)} Terms
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
