<div align="center">

# 🌤️ Klimate

### *Your Modern, Real-Time Weather Dashboard*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BFF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4.7-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

<br/>

> **Klimate** is a sleek, feature-rich weather dashboard built with cutting-edge web technologies. It delivers real-time weather data, geolocation support, interactive charts, dark mode, and a personalized favourite cities experience — all in a beautifully crafted, fully responsive UI.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-22D3EE?style=for-the-badge)](https://github.com/deepshikava/klimate)
[![GitHub Repo](https://img.shields.io/badge/📂_Source_Code-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/deepshikava/klimate)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Dependencies](#-dependencies)
- [🗂️ Project Structure](#️-project-structure)
- [🌳 Component Tree](#-component-tree)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Environment Variables](#️-environment-variables)
- [🧩 Starter Code](#-starter-code)
- [🔌 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| 🌟 Feature | 📝 Description |
|---|---|
| 📍 **Geolocation** | Auto-detects your location for instant local weather |
| 🌡️ **Current Weather** | Temperature, humidity, wind speed, UV index & more |
| ⏱️ **Hourly Forecast** | Interactive temperature chart for the next 24 hours |
| 📅 **Extended Forecast** | Multi-day weather outlook with conditions |
| ❤️ **Favourite Cities** | Save and manage favourite cities with local storage |
| 🔍 **City Search** | Powerful city search with instant results |
| 🌗 **Dark / Light Mode** | Theme toggle powered by ShadCn |
| 📊 **Weather Charts** | Beautiful recharts-powered data visualisations via `recharts` |
| 🔔 **Toast Notifications** | Elegant feedback via `sonner` |
| 📱 **Fully Responsive** | Optimised for mobile, tablet, and desktop |

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology | Version |
|---|---|---|
| ⚛️ **UI Library** | React | `^19.2.5` |
| 🔷 **Language** | TypeScript | `~6.0.2` |
| ⚡ **Build Tool** | Vite | `^8.0.10` |
| 🎨 **Styling** | Tailwind CSS | `^4.2.4` |
| 🧩 **Component Library** | shadcn/ui + Radix UI | `^4.7.0` / `^1.4.3` |
| 🔄 **Data Fetching** | TanStack Query (React Query) | `^5.100.9` |
| 🗺️ **Routing** | React Router DOM | `^7.15.0` |
| 📈 **Charts** | Recharts | `^3.8.1` |
| 🎭 **Theming** | shadcn/ui + Radix UI | `^4.7.0` / `^1.4.3` |
| 🔔 **Notifications** | Sonner | `^2.0.7` |
| 🔍 **Command Menu** | cmdk | `^1.1.1` |
| 📅 **Date Utilities** | date-fns | `^4.1.0` |
| 🔣 **Icons** | Lucide React | `^1.14.0` |
| 🖋️ **Font** | Geist Variable | `^5.2.8` |

</div>

---

## 📦 Dependencies

### Production Dependencies

```json
{
  "@fontsource-variable/geist": "^5.2.8",
  "@tailwindcss/vite": "^4.2.4",
  "@tanstack/react-query": "^5.100.9",
  "@tanstack/react-query-devtools": "^5.100.9",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "^1.1.1",
  "date-fns": "^4.1.0",
  "lucide-react": "^1.14.0",
  "next-themes": "^0.4.6",
  "radix-ui": "^1.4.3",
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "react-router-dom": "^7.15.0",
  "recharts": "^3.8.1",
  "shadcn": "^4.7.0",
  "sonner": "^2.0.7",
  "tailwind-merge": "^3.5.0",
  "tailwindcss": "^4.2.4",
  "tw-animate-css": "^1.0.0"
}
```

### Dev Dependencies

```json
{
  "@eslint/js": "^10.0.1",
  "@types/node": "^24.12.2",
  "@types/react": "^19.2.14",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^6.0.1",
  "eslint": "^10.2.1",
  "eslint-plugin-react-hooks": "^7.1.1",
  "eslint-plugin-react-refresh": "^0.5.2",
  "typescript": "~6.0.2",
  "typescript-eslint": "^8.58.2",
  "vite": "^8.0.10"
}
```

---

## 🗂️ Project Structure

```
klimate/
├── 📂 public/
│   └── logo.png                    # App favicon / logo
│
├── 📂 src/
│   ├── 📂 api/
│   │   └── weather.ts              # OpenWeatherMap API calls
│   │
│   ├── 📂 components/
│   │   ├── 📂 ui/                  # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── command.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── ...
│   │   │
│   │   ├── CurrentWeather.tsx      # Current conditions panel
│   │   ├── WeatherDetails.tsx      # Detailed metrics (wind, humidity, etc.)
│   │   ├── HourlyTemperature.tsx   # 24-hr recharts temperature graph
│   │   ├── WeatherForecast.tsx     # Multi-day forecast
│   │   ├── FavoriteCities.tsx      # Saved cities list
│   │   ├── CitySearch.tsx          # cmdk-powered city search
│   │   ├── Header.tsx              # Top nav with search & theme toggle
│   │   └── LoadingSkeleton.tsx     # Loading state placeholders
│   │
│   ├── 📂 hooks/
│   │   ├── use-geolocation.ts      # Browser geolocation hook
│   │   ├── use-weather.ts          # TanStack Query weather hooks
│   │   ├── use-search-history.ts   # TanStack Query Mutation / Query hooks
│   │   ├── use-local-storage.ts    # LocalStorage setValue hooks
│   │   └── use-favorites.ts        # LocalStorage favourites hook
│   │
│   ├── 📂 lib/
│   │   └── utils.ts                # cn() utility (clsx + tailwind-merge)
│   │
│   ├── 📂 pages/
│   │   ├── WeatherDashboard.tsx    # Home / geolocation-based dashboard
│   │   └── CityPage.tsx            # City-specific weather page
│   │
│   ├── 📂 api/
│   │   ├── weather.ts              # Weather API calls - OpenWeatherAPI
│   │   ├── config.ts               # OpenWeatherAPI configurations
│   │   └── index.ts                # TypeScript interfaces for API responses
│   │
│   ├── App.tsx                     # Router setup & theme provider
│   ├── main.tsx                    # ReactDOM entry point
│   └── index.css                   # Tailwind base + CSS variables
│
├── .env.example                    # Environment variable template
├── .gitignore
├── components.json                 # shadcn/ui configuration
├── eslint.config.js
├── index.html                      # Vite HTML entry
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts                  # Vite + Tailwind plugin config
```

---

## 🌳 Component Tree

```
App
├── ThemeProvider (ShadCn / Tailwind CSS)
│   └── QueryClientProvider (TanStack Query)
│       └── BrowserRouter (React Router DOM)
│           ├── Header
│           │   ├── Logo / Brand
│           │   ├── CitySearch          ← cmdk Command Dialog
│           │   └── ThemeToggle         ← Dark / Light switch
│           │
│           └── Routes
│               ├── "/" → WeatherDashboard
│               │   ├── useGeolocation()        ← Browser GPS hook
│               │   ├── useWeatherQuery()        ← TanStack Query
│               │   │
│               │   ├── FavoriteCities
│               │   │   └── FavoriteCityCard[]  ← Saved city weather tiles
│               │   │
│               │   ├── CurrentWeather
│               │   │   ├── Temperature display
│               │   │   ├── Weather icon
│               │   │   └── Location label
│               │   │
│               │   ├── WeatherDetails
│               │   │   ├── Humidity
│               │   │   ├── Wind Speed
│               │   │   ├── Feels Like
│               │   │   └── Visibility
│               │   │
│               │   ├── HourlyTemperature
│               │   │   └── ResponsiveContainer → LineChart (recharts)
│               │   │
│               │   └── WeatherForecast
│               │       └── ForecastDay[] cards
│               │
│               └── "/city/:cityName" → CityPage
│                   ├── CurrentWeather
│                   ├── WeatherDetails
│                   ├── HourlyTemperature
│                   └── WeatherForecast
│
└── Toaster (Sonner)
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or later — [Download](https://nodejs.org/)
- **npm** v9+ or **yarn** or **pnpm**
- An **OpenWeatherMap API key** — [Get one free](https://openweathermap.org/api)

### 📥 Installation

**1. Clone the repository**

```bash
git clone https://github.com/deepshikava/klimate.git
cd klimate
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

```bash
cp .env.example .env
```

Open `.env` and add your OpenWeatherMap API key:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

**4. Start the development server**

```bash
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

### 🏗️ Build for Production

```bash
npm run build
```

**Preview the production build:**

```bash
npm run preview
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root (use `.env.example` as a template):

```env
# Copy to .env and fill in (never commit .env).
# https://openweathermap.org/api
VITE_OPENWEATHER_API_KEY=
```

> ⚠️ **Important:** Never commit your `.env` file. It is listed in `.gitignore`.

> 💡 All Vite environment variables must be prefixed with `VITE_` to be accessible in the browser bundle.

---

## 🧩 Starter Code

### `src/main.tsx` — App Entry Point

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/geist";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### `src/App.tsx` — Router & Providers

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import WeatherDashboard from "@/pages/WeatherDashboard";
import CityPage from "@/pages/CityPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="klimate-theme">
          <div className="bg-background min-h-screen font-sans antialiased">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<WeatherDashboard />} />
                <Route path="/city/:cityName" element={<CityPage />} />
              </Routes>
            </main>
            <Toaster richColors />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
```

### `vite.config.ts` — Vite Configuration

```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## 🔌 API Reference

Klimate uses the **OpenWeatherMap API** (free tier):

| Endpoint | Description |
|---|---|
| `GET /data/2.5/weather` | Current weather by coordinates |
| `GET /data/2.5/forecast` | 5-day / 3-hour forecast |
| `GET /geo/1.0/direct` | Geocoding — city name → coordinates |

**Base URL:** `https://api.openweathermap.org`

**Authentication:** Pass `appid=YOUR_API_KEY` as a query parameter on every request.

> 📚 Full API docs: [openweathermap.org/api](https://openweathermap.org/api)

---

<div align="center">

Made with ❤️ by [deepshikava](https://github.com/deepshikava)

⭐ If you found this project helpful, please give it a star on [GitHub](https://github.com/deepshikava/klimate)!

</div>