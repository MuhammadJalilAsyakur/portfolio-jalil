# 🚀 Deployment Guide

Panduan lengkap untuk deploy portfolio React Anda ke internet.

## 🌐 Opsi Deployment Terbaik

### 1. **Vercel (⭐ Recommended) - 3 Menit**

Vercel adalah platform terbaik untuk deploy React/Next.js apps. **Gratis** dan sangat mudah!

#### Langkah-langkah:

1. **Push ke GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-react
   git push -u origin main
   ```

2. **Deploy via Vercel**
   - Buka https://vercel.com
   - Login dengan GitHub account
   - Click "Import Project"
   - Pilih repository `portfolio-react`
   - Click "Deploy"
   - ✅ Selesai! Portfolio Anda sudah live

**URL akan terlihat seperti:** `https://portfolio-react.vercel.app`

---

### 2. **Netlify - 3 Menit**

Alternative bagus jika prefer Netlify.

#### Langkah-langkah:

1. Pastikan sudah push ke GitHub (lihat step 1 Vercel)
2. Buka https://netlify.com
3. Login dengan GitHub
4. Click "Add new site" → "Import an existing project"
5. Pilih repo Anda
6. **Build Settings:**
   - Base directory: `/`
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. ✅ Done!

---

### 3. **GitHub Pages - 5 Menit**

Host directly dari GitHub repo Anda.

#### Langkah-langkah:

1. Edit `vite.config.js`:

   ```javascript
   export default defineConfig({
     base: "/portfolio-react/", // ganti dengan nama repo Anda
     plugins: [react()],
   });
   ```

2. Build & publish:

   ```bash
   npm run build
   git add dist
   git commit -m "Build for GitHub Pages"
   git push
   ```

3. Di GitHub repo settings:
   - Go to "Pages"
   - Source: "Deploy from a branch"
   - Branch: select "main", folder "/root"
   - Save

4. ✅ Live di `https://YOUR_USERNAME.github.io/portfolio-react`

---

## 📝 Rekomendasi

| Platform     | Setup Time | Cost      | Custom Domain | Performance | Recommendation |
| ------------ | ---------- | --------- | ------------- | ----------- | -------------- |
| **Vercel**   | 2 min      | FREE      | ✅            | ⭐⭐⭐⭐⭐  | **TERBAIK**    |
| Netlify      | 3 min      | FREE      | ✅            | ⭐⭐⭐⭐    | Bagus          |
| GitHub Pages | 5 min      | FREE      | ❌            | ⭐⭐⭐      | Alternatif     |
| AWS Amplify  | 5 min      | FREE tier | ✅            | ⭐⭐⭐⭐    | Alternatif     |

---

## 🎯 Custom Domain (Optional)

Setelah deploy, Anda bisa set custom domain seperti `jalil.dev`

### Vercel + Custom Domain:

1. Di Vercel dashboard, buka project Anda
2. Go to "Settings" → "Domains"
3. Add custom domain (e.g., `jalil.dev`)
4. Follow DNS setup instructions
5. Tunggu propagation (~24 jam)

### Beli Domain:

- **Recommended:** Namecheap, Porkbun, atau GoDaddy
- Budget: ~$8-12/tahun

---

## ✅ Pre-Deployment Checklist

Sebelum push, pastikan:

- [ ] Semua info di portfolio sudah benar
- [ ] Links (email, GitHub, etc) bekerja
- [ ] Test dark/light mode
- [ ] Test di mobile
- [ ] Tidak ada console errors

### Test locally:

```bash
npm run build
npm run preview
```

---

## 🔧 Environment Variables (Optional)

Jika pakai environment variables:

1. Create `.env` file:

   ```
   VITE_API_URL=https://api.example.com
   ```

2. Access di code:

   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. Di Vercel/Netlify, set di platform dashboard

---

## 📊 Analytics & Monitoring (Optional)

### Google Analytics:

1. Daftar di google.com/analytics
2. Create property untuk domain Anda
3. Add tracking code ke `index.html`:
   ```html
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "GA_ID");
   </script>
   ```

---

## 🆘 Troubleshooting

### Build fails?

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Portfolio not updating after push?

- Clear cache di deployment platform
- Vercel: redeploy manually atau push baru
- Netlify: clear cache & deploy site

### Dark mode tidak work?

- Pastikan `tailwind.config.js` punya `darkMode: 'class'`
- Clear browser cache (Ctrl+Shift+Del)

---

## 🎓 Next Steps Setelah Deploy

1. **Share portfolio Anda:**
   - LinkedIn, GitHub, Instagram, Twitter
   - Email signature

2. **Monitor performance:**
   - Vercel Analytics
   - Google Analytics
   - Lighthouse audit

3. **Keep it updated:**
   - Add new projects
   - Update experience
   - Keep skills current

---

## 📞 Support

Jika ada masalah:

1. Check: https://vercel.com/docs (best documentation)
2. Google error message
3. Check React/Vite docs
4. Ask di GitHub Discussions

---

**Happy deploying! 🚀**
