# Agent Guidelines for Pokédex

This document provides guidelines for agentic coding agents working in this repository.

## 📦 Project Overview

- **Type**: Cross-platform mobile app (iOS, Android, Web)
- **Framework**: React Native with Expo
- **Language**: TypeScript (strict mode)
- **Routing**: Expo Router (file-based)
- **Styling**: NativeWind (Tailwind CSS)

## 🔧 Build/Lint/Test Commands

### Development
```bash
npm start              # Start Expo development server
npx expo start         # Same as above
npm run android        # Start for Android
npm run ios            # Start for iOS
npm run web            # Start for Web
```

### Linting & Type Checking
```bash
npm run lint           # Run ESLint
npx expo lint          # Expo lint (preferred)
```

### Project Management
```bash
npm run reset-project  # Reset to fresh Expo template
```

### Testing (if Jest is configured)
```bash
npm test               # Run all tests
npm test -- <file>     # Run specific test file
npm test -- --watch    # Watch mode
npm test -- --coverage # With coverage report
```

## 📝 Code Style Guidelines

### TypeScript

- **Strict Mode**: Always enabled (`"strict": true` in tsconfig.json)
- **Avoid `any`**: Use `unknown` when type is unclear, or define proper types
- **Use interfaces for objects**: Prefer `interface` over `type` for object shapes
- **Export types explicitly**: Don't double-export; use consistent patterns

```typescript
// Good
interface Pokemon {
  id: number;
  name: string;
  types: Type[];
}

// Bad
const pokemon: any = { ... };
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `PokemonCard.tsx` |
| Hooks | camelCase with `use` prefix | `usePokemon.ts` |
| Utilities | camelCase | `formatId.ts` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_POKEMON` |
| Types/Interfaces | PascalCase | `PokemonResponse` |
| Files (components) | PascalCase | `PokemonCard.tsx` |
| Files (hooks/utils) | camelCase | `usePokemon.ts` |

### Imports

**Order (enforced by ESLint):**
1. React/Framework imports (`react`, `expo-router`)
2. Third-party libraries
3. Internal modules (absolute `@/` paths)
4. Relative imports
5. Type imports

```typescript
import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { usePokemon } from '@/hooks/usePokemon';
import { Pokemon } from '@/types/pokemon';

import type { PokemonCardProps } from './PokemonCard.types';
```

### Styling with NativeWind

- Use utility classes in `className` prop
- Custom colors defined in `tailwind.config.js` (e.g., `primary: "#DC0A2D"`)
- Use `bg-primary` for the app's brand color
- Keep styles inline for component-specific styling
- Extract repeated styles to components

```tsx
// Good
<View className="flex-1 bg-primary p-4">
  <Text className="text-white text-xl font-bold">Pokédex</Text>
</View>

// Avoid
<View style={{ flex: 1, backgroundColor: '#DC0A2D', padding: 16 }}>
  <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Pokédex</Text>
</View>
```

### File Structure

```
app/                    # Expo Router pages (file-based routing)
  _layout.tsx          # Root layout
  (tabs)/              # Tab-based navigation
  pokemon/[id].tsx     # Dynamic routes

components/            # Reusable UI components
  PokemonCard.tsx      # Component file
  PokemonCard.types.ts # Props/types (optional separate file)

constants/              # App constants (colors)

hooks/                  # Custom React hooks
  usePokemon.ts        # Hook implementation

types/                  # TypeScript type definitions
  pokemon.ts           # Type definitions

services/               # API/network code (create if needed)
  api.ts               # API client
```

### Error Handling

- Use TypeScript's type guards for runtime checks
- Handle API errors gracefully with fallback UI
- Use `try/catch` with async/await
- Return typed results for hooks/services

```typescript
// Good
async function fetchPokemon(id: number): Promise<Pokemon | null> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// In component
const pokemon = await fetchPokemon(id);
if (!pokemon) return <ErrorState />;
```

### React Patterns

- Use functional components with hooks
- Destructure props explicitly
- Use `useCallback` for event handlers passed to children
- Use `useMemo` for expensive computations
- Prefer composition over prop drilling

```tsx
// Good
interface Props {
  id: number;
  name: string;
}

export function PokemonCard({ id, name }: Props) {
  return (
    <View className="bg-white rounded-lg p-4">
      <Text>{name}</Text>
    </View>
  );
}
```

### Accessibility

- Use `accessibilityLabel` for interactive elements
- Ensure touch targets are at least 44x44
- Support dynamic type sizing where possible

### Expo Router Specifics

- Use file-based routing: `app/pokemon/[id].tsx` → `/pokemon/:id`
- Export `Stack`, `Tabs`, or `Drawer` from `_layout.tsx`
- Use `Link` component for navigation
- Access params with `useLocalSearchParams()`

## 🎨 Theme Colors

Custom colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: "#DC0A2D",  // Pokédex red - customize this
}
```

## 📚 Key Dependencies

- `expo` - Expo SDK
- `expo-router` - File-based routing
- `nativewind` + `tailwindcss` - Styling
- `react-native-reanimated` - Animations
- `react-native-gesture-handler` - Gestures

## 🔗 External APIs

- **PokeAPI**: `https://pokeapi.co/api/v2/`
- **Sprites**: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

## ⚠️ Important Notes

1. **NativeWind Setup**: This project uses NativeWind, not standard React Native styles
2. **ESLint Config**: Uses `eslint-config-expo/flat` - do not change
3. **Babel**: Uses `nativewind/babel` preset - required for styling
4. **No `style={{}}`**: Prefer Tailwind classes over inline styles
5. **Path Aliases**: Use `@/` for absolute imports from project root
