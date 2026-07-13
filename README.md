# Jalil.dev Portfolio

A modern, clean portfolio website built with **React + Vite + Tailwind CSS** featuring dark/light mode support.

## 🌐 Live Demo

👉 **Visit the live portfolio:** [https://portfolio-jalil.vercel.app/](https://portfolio-jalil.vercel.app/)

## ✨ Features

- **⚡ Fast & Modern** - Built with Vite for lightning-fast development and optimized builds
- **🌙 Dark/Light Mode** - Smooth theme switching with persistence
- **📱 Responsive Design** - Mobile-first, works on all devices
- **♿ Accessible** - Semantic HTML and ARIA labels
- **🎨 Beautiful UI** - Modern design with smooth animations and transitions
- **📦 Production Ready** - Optimized for deployment on Vercel, Netlify, or any static host

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <your-repo>

# Navigate to project directory
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
portfolio-react/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── context/             # React Context (Theme management)
│   │   └── ThemeContext.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

## 🎨 Customization

### Updating Content

Edit the data objects in each component file:

- `src/components/Hero.jsx` - Hero section
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Project showcase
- `src/components/Skills.jsx` - Technical skills
- `src/components/Contact.jsx` - Contact information

### Tailwind Configuration

Modify color schemas and theme in `tailwind.config.js`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Add to `vite.config.js`:

```javascript
export default defineConfig({
  base: "/repository-name/",
  // ... rest of config
});
```

2. Run: `npm run build`
3. Push the `dist` folder to GitHub Pages

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **LocalStorage** - Theme persistence

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhammad Jalil Asyakur**

- Email: jalilasyakur@gmail.com
- GitHub: [@MuhammadJalilAsyakur](https://github.com/MuhammadJalilAsyakur)
- Portfolio: [jalil.dev](https://jalil.dev)

---

Built with ❤️ by Jalil Asyakur
