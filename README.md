# Nostos Landing Page

This repository contains the source code for the **Landing Page** of the app, developed using **Astro** for static site generation and **GSAP** for animations.

---

## 📌 Features
✔ **Fast and Lightweight**: Built with Astro for optimized performance.  
✔ **Smooth Animations**: Powered by GSAP for engaging user experience.  
✔ **SEO Optimized**: Best practices implemented for better search engine rankings.  
✔ **Responsive Design**: Works seamlessly across all devices.  
✔ **Modular Components**: Reusable and maintainable code structure.  

---

## 📂 Project Structure
```
📦 landing-page
 ├── 📂 src
 │   ├── 📂 components   # Reusable UI components
 │   ├── 📂 layouts      # Page layouts
 │   ├── 📂 pages        # Website pages
 │   ├── 📂 styles       # Global and component-specific styles
 │   ├── 📂 assets       # Images, icons, and other assets
 ├── 📄 package.json     # Dependencies and scripts
 ├── 📄 astro.config.mjs # Astro configuration
 ├── 📄 README.md        # Project documentation
```

---

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/landing-page.git
cd landing-page
```
### **2️⃣ Install Dependencies**
```bash
npm install
```
### **3️⃣ Start the Development Server**
```bash
npm run dev
```
The landing page will be available at **http://localhost:3000**.

---

## 🌟 Animations with GSAP
This project uses **GSAP (GreenSock Animation Platform)** for smooth and engaging animations.
Animations are defined inside `src/animations/` and applied to components.

### **Example GSAP Animation in Astro**
```js
import gsap from 'gsap';
import { onMount } from 'astro/runtime';

onMount(() => {
  gsap.from('.hero-text', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
});
```

---

## 🚀 Deployment
This landing page can be deployed using **Vercel, Netlify, GitHub Pages, or Cloudflare Pages**.
### **Deploy on Vercel**
```bash
npm install -g vercel
vercel
```

---

## 📌 Contributing
Feel free to contribute by submitting **issues** and **pull requests**!

---
