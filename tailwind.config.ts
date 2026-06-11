/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0e27',
        'dark-secondary': '#1a1f3a',
        'dark-tertiary': '#252d4a',
        'neon-purple': '#a855f7',
        'neon-magenta': '#ec4899',
        'neon-cyan': '#06b6d4',
        'neon-blue': '#3b82f6',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'neon-magenta': '0 0 20px rgba(236, 72, 153, 0.5)',
      },
      borderColor: {
        'neon-purple': '#a855f7',
        'neon-cyan': '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
