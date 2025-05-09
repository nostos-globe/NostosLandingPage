# Nostos Landing Page

A modern, responsive landing page for Nostos - a digital memory preservation platform built with Astro and TailwindCSS.

## 🚀 Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Built with Astro for optimal performance
- Styled with TailwindCSS
- Interactive components
- Optimized images and assets
- Smooth scrolling navigation
- AOS (Animate On Scroll) integration

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [AOS](https://michalsnik.github.io/aos/)

## 🏗️ Project Structure

```text
/
├── public/
│   ├── icons/
│   ├── fonts/
│   └── images and assets
├── src/
│   ├── components/
│   │   ├── AboutUs.astro
│   │   ├── AppPreview.astro
│   │   ├── CallToAction.astro
│   │   ├── FAQ.astro
│   │   ├── Features.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   └── Navbar.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🐳 Docker Support

The project includes Docker support for easy deployment:

1. Build the Docker image:
```bash
docker build -t nostos-landing .
```

2. Run the container:
```bash
docker run -p 80:80 nostos-landing
```

## 📝 Development Notes

- The landing page uses AOS for scroll animations
- TailwindCSS is configured with custom theme settings
- Responsive design breakpoints follow TailwindCSS defaults
- Images are optimized for web delivery
- Custom fonts are loaded via Google Fonts

## 🔧 Configuration

Key configuration files:
- `astro.config.mjs` - Astro configuration
- `tailwind.config.js` - TailwindCSS theme and plugin settings
- `tsconfig.json` - TypeScript configuration
