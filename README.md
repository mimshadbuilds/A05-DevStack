# A05-DevStack

A modern, performant web development stack built with React, TypeScript, and Vite. This project demonstrates best practices for building fast, type-safe web applications with a focus on developer experience.

## 🌐 Live Link

[View Live Project](https://a05-dev-stack-nine.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Links & Resources](#links--resources)

---

## 📸 Overview

A05-DevStack is a modern development stack template that combines:
- **React 19** for building dynamic user interfaces
- **TypeScript** for type-safe development
- **Vite** for lightning-fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built accessible components

This stack is optimized for performance, maintainability, and developer productivity.

---

## 🛠 Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.8 | UI Library |
| **TypeScript** | ~6.0.2 | Type Safety |
| **Vite** | 8.3.0 | Build Tool & Dev Server |
| **Tailwind CSS** | 4.3.3 | Styling Framework |
| **DaisyUI** | 5.7.37 | UI Component Library |
| **React Icons** | 5.7.0 | Icon Library |
| **React Toastify** | 11.1.0 | Toast Notifications |
| **Oxlint** | 1.81.0 | Linting |

---

## ✨ Features

- ⚡ **Lightning-Fast Development** - Instant HMR (Hot Module Replacement) with Vite
- 🔒 **Type Safety** - Full TypeScript support with strict type checking
- 🎨 **Modern Styling** - Tailwind CSS + DaisyUI for beautiful, responsive designs
- 🧹 **Code Quality** - Oxlint for consistent code standards
- 🔄 **Component-Driven** - React best practices and patterns
- 📦 **Optimized Builds** - Fast production builds with tree-shaking
- 🎯 **Developer Experience** - Comprehensive tooling and configuration
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/vite": "^4.3.3",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-icons": "^5.7.0",
  "react-toastify": "^11.1.0",
  "tailwindcss": "^4.3.3"
}
```

### Development Dependencies
```json
{
  "@types/node": "^24.13.3",
  "@types/react": "^19.2.18",
  "@types/react-dom": "^19.2.7",
  "@vitejs/plugin-react": "^6.1.1",
  "daisyui": "^5.7.37",
  "oxlint": "^1.81.0",
  "typescript": "~6.0.2",
  "vite": "^8.3.0"
}
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Step-by-Step Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/mimshadbuilds/A05-DevStack.git
   cd A05-DevStack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized build will be generated in the `dist/` directory

5. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build TypeScript and optimize for production |
| `npm run lint` | Run Oxlint code quality checks |
| `npm run preview` | Preview production build locally |

---

## 🔧 Configuration

### Oxlint Configuration
The project uses Oxlint for code quality. For production applications, enable type-aware lint rules by modifying `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See [Oxlint Rules Documentation](https://oxc.rs/docs/guide/usage/linter/rules) for all available rules.

### Tailwind CSS
Tailwind CSS is configured via `tailwind.config.js`. The project includes DaisyUI for pre-built components.

---
JSX is a syntax extension for JavaScript that allows writing HTML-like markup inside React components.

Props are read-only data passed down from a parent to a child.

The useState hook allows functional components to store and update internal data.

The useEffect hook manages side effects in functional components.

Every item in a .map() list requires a unique key prop so React can efficiently track exactly which items are added, changed, or removed during UI updates.

Conditional rendering displays different UI elements based on current state or logic, such as 'showing an empty stack message when an array's length is zero'.

Data is passed from parent to child using props. 
Then the child sends data back to the parent by executing a callback function provided through those same props.

---
# 3 key features

*Data fetching using the 'use' hook
*Conditional rendering to add cards in the stack
*Implementation of the sidebar with Add/Remove functionality
---

## 📚 Links & Resources

- 🔗 **[GitHub Repository](https://github.com/mimshadbuilds/A05-DevStack)**
- 🌐 **[Live Project](https://a05-dev-stack-nine.vercel.app/)**
- 📖 **[React Documentation](https://react.dev)**
- ⚡ **[Vite Documentation](https://vite.dev)**
- 🎨 **[Tailwind CSS](https://tailwindcss.com)**
- 🧩 **[DaisyUI Components](https://daisyui.com)**
- 📦 **[React Icons](https://react-icons.github.io/react-icons)**

---

## 🎯 Project Structure

```
A05-DevStack/
├── src/                 # Source code
│   ├── components/      # React components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # This file
```

---

## 👤 Author

**mimshadbuilds** - [GitHub Profile](https://github.com/mimshadbuilds)

---
