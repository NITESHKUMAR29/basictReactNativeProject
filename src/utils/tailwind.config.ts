import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './App.tsx',  // Path to your main entry file
    './src/components/NewsCard.{ts,tsx}',  // Add paths to all your components and screens
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config