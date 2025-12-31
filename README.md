# Raghwa Cleaning - Professional Cleaning Services Website

A modern, production-ready Next.js website for **Raghwa Cleaning** - a professional cleaning services company. Built with Next.js 14, TailwindCSS, and Framer Motion for smooth animations.

![Raghwa Cleaning](https://via.placeholder.com/800x400?text=Raghwa+Cleaning)

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized** - Meta tags, Open Graph, Schema.org structured data
- **Performance Focused** - Image optimization, lazy loading, code splitting
- **Interactive Forms** - Contact form with React Hook Form + Yup validation
- **Animated Components** - Framer Motion animations throughout

## 📁 Project Structure

```
raghwa-cleaning/
├── components/          # Reusable UI components
│   ├── AnimatedButton.jsx
│   ├── ContactForm.jsx
│   ├── FAQItem.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── PortfolioItem.jsx
│   ├── ServiceCard.jsx
│   └── TestimonialCard.jsx
├── pages/               # Next.js pages
│   ├── api/
│   │   └── contact.js   # Contact form API endpoint
│   ├── _app.jsx
│   ├── _document.jsx
│   ├── index.jsx        # Home page
│   ├── about.jsx
│   ├── services.jsx
│   ├── portfolio.jsx
│   ├── contact.jsx
│   └── faq.jsx
├── styles/
│   └── globals.css      # Global styles + Tailwind imports
├── utils/
│   ├── api.js           # API helper functions
│   └── validation.js    # Yup validation schemas
├── public/
│   └── images/          # Static images (add your images here)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .env.example         # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd raghwa-cleaning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example file
   copy .env.example .env.local
   
   # Edit .env.local with your actual values
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, Services, Testimonials, Portfolio, FAQ preview, CTA |
| About | `/about` | Company story, values, team |
| Services | `/services` | Detailed service listings |
| Portfolio | `/portfolio` | Project gallery with filtering |
| Contact | `/contact` | Contact form, map, info |
| FAQ | `/faq` | Categorized FAQ accordion |

## 🧩 Components

All components are located in the `/components` directory:

- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Company info, links, newsletter signup
- **HeroSection** - Animated hero with CTA buttons
- **ServiceCard** - Service display cards with hover effects
- **TestimonialCard** - Customer testimonials carousel
- **PortfolioItem** - Gallery items with lightbox
- **FAQItem** - Accordion-style FAQ items
- **ContactForm** - Form with validation and submission
- **AnimatedButton** - Reusable animated buttons

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Email Service (choose one)
SENDGRID_API_KEY=your_api_key
CONTACT_EMAIL=contact@raghwacleaning.com

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Email Integration

The contact form is ready to integrate with:

1. **SendGrid** - Uncomment the SendGrid code in `/pages/api/contact.js`
2. **EmailJS** - Use client-side email sending
3. **Custom SMTP** - Add your own email service

### Database Integration (Optional)

The API is prepared for:
- **MongoDB** - Uncomment MongoDB code in the API route
- **Firebase** - Uncomment Firebase code in the API route

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Fonts

Update Google Fonts in `styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Images

Replace placeholder images in `/public/images/`:
- Add your own hero images
- Service photos
- Team member photos
- Portfolio project images

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Dynamic meta tags per page
- Open Graph tags for social sharing
- Schema.org LocalBusiness markup
- Semantic HTML structure
- Fast page load times

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

Build the production version:
```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, contact:
- Email: info@raghwacleaning.com
- Phone: +966 50 000 0000

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion
