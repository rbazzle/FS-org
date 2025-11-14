# FamilySearch Organizational Glossary

A modern React application built with Vite, TypeScript, Tailwind CSS, and shadcn/ui that displays organizational terms, roles, and concepts from SOC and SDLC documentation.

## Features

- **Search Functionality**: Real-time search across terms, abbreviations, definitions, and tags
- **Category Filtering**: Filter terms by category (Roles, Objects, Process, Governance, etc.)
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Modern UI Components**: Utilizing shadcn/ui for a clean, accessible interface
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Lucide React**: Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui base components
│   ├── CategoryFilter.tsx
│   ├── SearchBar.tsx
│   └── TermCard.tsx
├── data/               # Data files
│   └── glossary.ts     # Glossary terms and structure
├── lib/                # Utility functions
│   └── utils.ts        # cn() helper for class merging
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Usage

1. **Browse All Terms**: By default, all terms are displayed organized by category
2. **Search**: Use the search bar to find specific terms, abbreviations, or concepts
3. **Filter by Category**: Click on category buttons to view terms from a specific category
4. **View Details**: Each term card shows the definition, key details, and relevant tags

## Customization

### Adding New Terms

Edit `src/data/glossary.ts` to add new terms to the glossary. Each term should follow the `Term` interface structure.

### Styling

The application uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### Components

All UI components are in `src/components/`. The base shadcn/ui components are in `src/components/ui/`.

## License

This project is for FamilySearch internal use.
