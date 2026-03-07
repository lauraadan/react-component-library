# React Component Library

A reusable **React component library** built with **Vite, TypeScript, Vitest, and Storybook**.
This project provides modular UI components that can be reused across multiple React applications.

## ✨ Features

- ⚛️ **React** components written in TypeScript
- ⚡ **Vite** for fast development and bundling
- 🧪 **Vitest + Testing Library** for unit testing
- 📚 **Storybook** for interactive component documentation
- 🎨 Custom **ThemeProvider** for consistent styling
- 🧩 Modular component architecture

---

# 📦 Installation

Install the library from npm:

```bash
npm install @lauraadan/react-component-library
```

or

```bash
yarn add @lauraadan/react-component-library
```

---

# 🚀 Usage

Example usage in a React project:

```tsx
import { Button } from "@lauraadan/react-component-library";

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
```

---

# 📦 Components

The library currently includes the following components:

- **Accordion**
- **Alert**
- **Button**
- **Card**

Each component includes:

- TypeScript types
- Unit tests
- Storybook documentation
- Barrel export

Example structure:

```
src/components/Button
 ├ Button.tsx
 ├ Button.types.ts
 ├ Button.test.tsx
 ├ Button.stories.tsx
 └ index.ts
```

---

# 🚀 Getting Started

## Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

# 🧑‍💻 Development

Run the development environment:

```bash
npm run dev
```

---

# 📚 Storybook

Run Storybook to explore and test components visually:

```bash
npm run storybook
```

Storybook allows you to:

- view component variations
- test UI states
- document props
- check accessibility

---

# 🧪 Running Tests

Run unit tests with **Vitest**:

```bash
npm run test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Tests are written using:

- **Vitest**
- **Testing Library**
- **JSDOM**

Example test:

```ts
render(<Button>Click me</Button>);
expect(screen.getByRole("button")).toBeInTheDocument();
```

---

# 🏗 Project Structure

```
src
 ├ components
 │   ├ Accordion
 │   ├ Alert
 │   ├ Button
 │   └ Card
 │
 ├ theme
 │   ├ ThemeProvider.tsx
 │   └ theme.ts
 │
 └ index.ts
```

---

# 🎨 Theming

The project includes a `ThemeProvider` to apply consistent styling across components.

Example usage:

```tsx
import { ThemeProvider } from "@/theme/ThemeProvider";

<ThemeProvider>
  <App />
</ThemeProvider>;
```

---

# 📦 Build Library

Build the component library:

```bash
npm run build
```

The output will be generated in the `dist` folder.

---

# 🔍 Linting

Run ESLint:

```bash
npm run lint
```

---

# 🛠 Tech Stack

- React
- TypeScript
- Vite
- Vitest
- Testing Library
- Storybook
- ESLint

---

# 🔗 Links

- GitHub repository
  https://github.com/lauraadan/react-component-library

- npm package
  https://www.npmjs.com/package/@lauraadan/react-component-library
