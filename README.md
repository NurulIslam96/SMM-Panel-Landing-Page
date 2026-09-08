# SMM Panel Landing Page

A modern, responsive landing page for an SMM (Social Media Marketing) panel built with React and Vite. Designed for Bangladeshi businesses, creators, and agencies looking for fast, safe, and affordable social media growth services.

## Live Demo

[Deploy on Netlify](https://www.netlify.com/)

## Features

- **Hero Section** - Eye-catching intro with rating, headline, and CTAs
- **Stats Section** - Key metrics and numbers
- **Services Section** - Platform-based social media marketing services with filters
- **Working Process** - Step-by-step guide on how the panel works
- **Payment Methods** - Multiple payment options (Visa, Mastercard, PayPal, bKash, Nagad, etc.)
- **Growth Section** - Timeline-based growth strategy for social media
- **Advantages** - Key benefits of using the panel services
- **FAQ Section** - Frequently asked questions with accordion UI
- **CTA Section** - Call-to-action with "See All Services" and "Create Free Account"
- **Footer** - Quick links, service pages, and contact info

## Tech Stack

- **React** 18.2
- **Vite** 5.0
- **React Router DOM** 6.20
- **CSS** (no external CSS framework)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
git clone https://github.com/Saiful1253/SMM-Panel-Landing-Page.git
cd SMM-Panel-Landing-Page
npm install
```

### Development

```bash
npm run dev
```

The app runs on `http://localhost:5173` by default. If port 5173 is in use, Vite will automatically pick the next available port.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on **Netlify**.

- Build command: `npm run build`
- Publish directory: `dist`

A `netlify.toml` file is included in the project root for automatic deployment configuration.

### Deploy Steps

1. Push the code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click **"New site from Git"**
4. Select your GitHub repo
5. Netlify will auto-detect the `netlify.toml` and deploy

## Project Structure

```
SMM-Panel-Landing-Page/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── public/
│   ├── hero.png
│   ├── upper.jpg
│   ├── people.png
│   ├── trophy.png
│   ├── order.png
│   └── cloud.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── pages/
    │   └── Home.jsx
    └── components/
        ├── Navbar.jsx
        ├── Footer.jsx
        ├── Stats.jsx
        ├── WorkingProcess.jsx
        ├── PaymentMethods.jsx
        ├── GrowthSection.jsx
        ├── Advantages.jsx
        ├── FAQ.jsx
        └── CTASection.jsx
```

## Customization

- **Logo**: Replace `LOGO` text in `Navbar.jsx` and `Footer.jsx` with your brand logo
- **Images**: Replace images in the `public/` folder with your own assets
- **Colors**: Update the orange theme colors in `src/App.css`
- **Content**: Edit section content in individual component files under `src/components/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All Rights Reserved

---

Built with React + Vite
