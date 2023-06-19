# Desafio técnico Front-end Mercado Libre

This guide explains how to use this app powered by:
- [NextJS](https://nextjs.org/) - The React Framework for the Web
- [React](https://react.dev/) - The library for web and native user interfaces.
- [Storybook](https://react.dev/) - A front-end workshop for building UI components and pages in isolation.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

And just open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Useful commands
- `npm run dev` - Run the application in development mode (enabling hot-reload, error reporting and more).
- `npm run build` - Creates an optimized production build of your application.
- `npm run start` - Starts the application in production mode (the application should be compiled with next build first).
- `npm run storybook` - Run storybook locally.
- `npm run test` - Run unit test for UI components.

### Files and folders structure
This section provides an overview of the file and folder structure of a Next.js project. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.

#### Files
- `next.config.js` - Configuration file for Next.js.
- `.env` - Environment variables.
- `.next-env.d.ts` - TypeScript declaration file for Next.js.
- `package.json` - Project dependencies and scripts.
- `.gitignore` - Git files and folders to ignore.
- `tsconfig.json` - Configuration file for TypeScript.

#### Folders
- `app`	- App Router.
- `app/pages` - Pages Router.
- `assets` - Project core dependencies.
- `public` - Static assets to be served.