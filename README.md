# React Context Theme Demo

A minimal React + TypeScript + Vite app demonstrating the React Context API with a light/dark theme toggle.

**Live demo:** [https://context-44.vercel.app/](https://your-project-name.vercel.app) <!-- TODO: replace with your Vercel deployment URL -->

## Tech Stack

- React 19
- TypeScript
- Vite

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd context-44
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development

Start the local dev server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Lint

Check the code with ESLint:

```bash
npm run lint
```

### Production Build

Type-check and build the app for production:

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

Serve the production build locally:

```bash
npm run preview
```

## Deployment (Vercel)

This project is ready to deploy on [Vercel](https://vercel.com):

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in the [Vercel dashboard](https://vercel.com/new).
3. Vercel auto-detects the Vite framework preset — no extra configuration is required:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy, then replace the demo link at the top of this README with your live Vercel URL.

## Performance

`Header`, `Footer`, `ThemeToggle`, and `Card` are wrapped in `React.memo` to avoid unnecessary re-renders of components that consume the theme context or receive stable props.

## Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Card/
│   ├── Footer/
│   └── ThemeToggle/
├── context/
│   └── theme/       # ThemeContext, ThemeProvider, useTheme hook
├── App.tsx
└── main.tsx
```

## License

Licensed under the MIT License — see [LICENSE.md](./LICENSE.md).
