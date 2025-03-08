# HuddleHive Events

A modern event management application built with Expo and React Native, featuring a beautiful card-based UI for managing and checking into events.

## Features

- Modern, card-based event list with beautiful UI
- Event details view with rich content and images
- Check-in system with health points rewards
- Responsive design with mobile-first approach
- Tab-based navigation with consistent styling

## Tech Stack

- Expo Router for file-based navigation
- React Native for cross-platform development
- TypeScript for type safety
- Styled Components for styling
- Expo Vector Icons for beautiful iconography

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npx expo start
   ```

## Deployment on Vercel

1. Install Vercel CLI globally (if not already installed)

   ```bash
   npm install -g vercel
   ```

2. Build the web version

   ```bash
   npm run build
   ```

3. Deploy to Vercel

   ```bash
   npm run deploy
   ```

   Or connect your GitHub repository to Vercel for automatic deployments:

   1. Push your code to GitHub
   2. Visit [Vercel](https://vercel.com)
   3. Import your repository
   4. Configure the following settings:
      - Framework Preset: `Other`
      - Build Command: `npm run vercel-build`
      - Output Directory: `web-build`

## Project Structure

- `app/(tabs)/_layout.tsx`: Root tab navigation
- `app/(tabs)/events/_layout.tsx`: Events stack navigation
- `app/(tabs)/events/`:
  - `index.tsx`: Events list with card UI
  - `[id].tsx`: Event details view
  - `check-in.tsx`: Event check-in screen

## Design System

- Colors:
  - Primary Blue: `#007AFF`
  - Success Green: `#34C759`
  - Error Red: `#FF3B30`
  - Inactive Gray: `#666666`
- Typography:
  - Clean hierarchy
  - Responsive sizing
- Components:
  - Card-based layouts with shadows
  - Consistent spacing
  - Modern UI elements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
