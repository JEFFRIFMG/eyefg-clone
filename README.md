# eyeFG Trading Platform

Modern trading platform UI built with Next.js 14, TypeScript, and Tailwind CSS.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to http://localhost:3000

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run linter

## Project Structure

```
eyefg-project/
├── src/app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Sections

- Navigation with logo & menu
- Hero section with trading dashboard
- Classic Challenge (2 phases, 6 tiers)
- Speedy Challenge (1 phase, 5 tiers)
- As Seen In logos
- A Prop Firm That Sees Your Talent
- Why Choose eyeFG
- Footer

## Customization

### Colors
Edit `tailwind.config.ts`:
- `neon-purple`: #a855f7
- `neon-magenta`: #ec4899
- `neon-cyan`: #06b6d4

### Fonts
Google Fonts are imported in `globals.css`:
- Inter (body text)
- Space Grotesk (headings)

### Content
All data is hardcoded in `src/app/page.tsx`

## Browser Support

Chrome/Edge 90+, Firefox 88+, Safari 14+, Mobile browsers
