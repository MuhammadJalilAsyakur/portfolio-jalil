# Quick Start Guide - Portfolio React

## 📦 Setup dalam 5 Menit

### 1. Install Dependencies

```bash
cd portfolio-react
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka browser: `http://localhost:3000`

### 3. Edit Content Anda

Buka file-file ini dan update dengan info Anda:

- **`src/components/Hero.jsx`** - Nama, deskripsi, stats
- **`src/components/Experience.jsx`** - Experience/kerja
- **`src/components/Projects.jsx`** - Project showcase
- **`src/components/Skills.jsx`** - Technical skills
- **`src/components/Contact.jsx`** - Contact info

### 4. Build untuk Production

```bash
npm run build
```

### 5. Deploy ke Vercel (Recommended)

Lihat `DEPLOYMENT_GUIDE.md` untuk langkah lengkap.

---

## 🎨 Fitur

✅ **Dark/Light Mode** - Toggle di navigation bar  
✅ **Fully Responsive** - Cantik di semua device  
✅ **Fast & Optimized** - Built dengan Vite  
✅ **Modern Design** - Clean & professional  
✅ **Easy to Customize** - Component-based architecture

---

## 📂 File Structure

```
portfolio-react/
├── src/
│   ├── components/          # Components (Hero, Experience, etc)
│   ├── context/             # Theme context
│   ├── App.jsx              # Main app
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind config
├── vite.config.js           # Vite config
└── package.json             # Dependencies
```

---

## 🚀 Deployment Steps

1. **Push ke GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-react
   git push -u origin main
   ```

2. **Deploy ke Vercel:**
   - Buka vercel.com
   - Login dengan GitHub
   - Select repository
   - Click Deploy
   - ✅ Done!

Lebih detail? Lihat `DEPLOYMENT_GUIDE.md`

---

## 🎯 Customization Tips

### Change Colors

Edit `tailwind.config.js` - section `colors`

### Change Fonts

Fonts sudah import dari Google Fonts di `src/index.css`

### Add New Section

1. Create component di `src/components/`
2. Import di `App.jsx`
3. Add ke component tree

### Smooth Scroll Navigation

Nav links sudah set dengan `scroll-behavior: smooth`

---

## 💡 Pro Tips

1. **Test dark mode:** Click moon icon di header
2. **Responsive test:** Open DevTools (F12) → resize browser
3. **Performance:** Check `npm run build` output size
4. **SEO:** Edit `index.html` `<title>` dan meta tags

---

## 🆘 Helpful Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)

---

**Siap deploy? Follow `DEPLOYMENT_GUIDE.md` sekarang** 🚀
