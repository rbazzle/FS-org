import { Button } from '@/components/ui/button';
import { categories } from '@/data/glossary';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-700">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={
            activeCategory === category.id
              ? 'bg-brand-600 dark:bg-brand-700 text-white hover:bg-brand-700 dark:hover:bg-brand-600 border-brand-600 dark:border-brand-700'
              : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-700 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-700 border-zinc-300 dark:border-zinc-600'
          }
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
