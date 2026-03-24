# Pokédex App

> A modern cross-platform Pokédex mobile application built with React Native and Expo.

![React Native](https://img.shields.io/badge/React_Native-0.81.5-blue)
![Expo](https://img.shields.io/badge/Expo-54.0.33-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC)

## 📱 Overview

Pokédex is a mobile application that brings the classic Pokémon encyclopedia to your fingertips. Browse, search, and discover all your favorite Pokémon with a modern, intuitive interface.

## ✨ Features

- 🔍 **Search** - Find Pokémon by name or number
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 📦 **Cross-Platform** - Works on iOS, Android, and Web
- ⚡ **Native Performance** - Built with React Native for optimal speed
- 🌙 **Dark Mode Ready** - Styled for any theme
- 🌐 **Real Data** - Powered by the PokeAPI

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Core framework for mobile development |
| **Expo** | Platform for universal React applications |
| **Expo Router** | File-based navigation and routing |
| **NativeWind** | Tailwind CSS utility styling for React Native |
| **React Native Reanimated** | Performant animations |
| **TypeScript** | Type-safe JavaScript |
| **React Navigation** | Navigation infrastructure |

### Key Dependencies

- `expo` - Core Expo SDK
- `expo-router` - File-based routing
- `nativewind` + `tailwindcss` - Styling
- `react-native-reanimated` - Animations
- `react-native-gesture-handler` - Gesture handling
- `@expo/vector-icons` - Icon library (MaterialCommunityIcons)

### 🌐 PokeAPI Integration

This app uses [PokeAPI](https://pokeapi.co/) for all Pokémon data. The API provides comprehensive data including sprites, stats, types, abilities, and more.

**Base URL:** `https://pokeapi.co/api/v2/`

**Key Endpoints:**

| Endpoint | Description | Example |
|----------|-------------|---------|
| `/pokemon` | List all Pokémon (paginated) | `/pokemon?limit=20&offset=0` |
| `/pokemon/{id}` | Get Pokémon by ID | `/pokemon/25` (Pikachu) |
| `/pokemon/{name}` | Get Pokémon by name | `/pokemon/pikachu` |
| `/pokemon-species/{id}` | Get species data | `/pokemon-species/25` |
| `/type/{id}` | Get type information | `/type/1` (Normal) |

**Sprite Images:**

```javascript
// Official artwork
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png

// Shiny variant
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png

// Artwork (high resolution)
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI (`npx expo`)
- For device testing: Expo Go app (iOS/Android)
- For emulator: Android Studio or Xcode

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd pokedex
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npx expo start
```

### Running the App

| Platform | Command | Description |
|----------|---------|-------------|
| Web | `npx expo start --web` | Opens in browser |
| iOS | `npx expo start --ios` | Opens iOS Simulator (Mac only) |
| Android | `npx expo start --android` | Opens Android Emulator |
| Expo Go | Scan QR code | Run on physical device |

## 📁 Project Structure

```
pokedex/
├── app/                    # Expo Router pages (file-based routing)
│   ├── _layout.tsx         # Root layout component
│   └── index.tsx           # Home/Main screen
├── assets/                 # Static assets (images, fonts)
├── components/             # Reusable UI components
├── constants/              # App constants (theme, colors)
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── global.css              # Global styles
├── app.json                # Expo configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Customization

### Theme Colors

Edit `constants/theme.ts` to customize the app's color scheme:

```typescript
export const Colors = {
  light: { /* light mode colors */ },
  dark: { /* dark mode colors */ },
};
```

### Tailwind Configuration

The project uses NativeWind (Tailwind for React Native). Modify `tailwind.config.js` to add custom utilities or themes.

## 📝 Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Start for Android
npm run ios        # Start for iOS
npm run web        # Start for Web
npm run lint       # Run ESLint
npm run reset-project  # Reset to fresh Expo template
```

## 🔗 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/)
- [PokeAPI](https://pokeapi.co/) - Pokémon Data API

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

MIT License - see repository for details.

---

<div align="center">
  <p>Built with ❤️ using Expo</p>
  <p>Pokémon © Nintendo/Creatures Inc./GAME FREAK Inc.</p>
</div>
