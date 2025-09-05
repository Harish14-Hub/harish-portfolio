[![Netlify Status](https://api.netlify.com/api/v1/badges/933652a4-6e87-4660-9780-f819d1a29620/deploy-status)](https://app.netlify.com/projects/harish14portfolio/deploys)# Professional Developer Portfolio

A modern, responsive portfolio website built with React.js, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a comprehensive showcase of projects and skills.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll-triggered animations and micro-interactions
- **Dark/Light Mode**: Persistent theme switching with localStorage
- **Performance Optimized**: Lazy loading, intersection observers, and efficient rendering
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Interactive Components**: Animated progress bars, typewriter effects, and hover states
- **Contact Form**: Fully functional form with validation using React Hook Form
- **Project Showcase**: Interactive project cards with detailed modal views
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React.js 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   └── ui/              # UI components (Button, Card)
├── contexts/            # React contexts (Theme)
├── data/               # Static data (projects, skills)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and animations
└── App.tsx             # Main application component
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/data/projects.ts` - Your projects and portfolio items
- `src/data/skills.ts` - Your technical skills and proficiency levels
- `src/components/sections/Hero.tsx` - Your name and introduction
- `src/components/sections/About.tsx` - Your personal story and background
- `src/components/sections/Contact.tsx` - Your contact information

### Styling
- Colors and themes: `tailwind.config.js`
- Animations: `src/utils/animations.ts`
- Component styles: Individual component files

### Content Images
Replace placeholder images with your own:
- Use high-quality images from Pexels or your own photos
- Optimize images for web (WebP format recommended)
- Update image URLs in component files

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy
3. Configure environment variables if needed

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your web server to serve the files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Optimizations

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Intersection Observer**: Efficient scroll-triggered animations
- **Memoization**: React.memo and useMemo for expensive operations
- **Optimized Assets**: Compressed images and efficient bundling

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Structured data markup ready

## 🎯 Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators
- ARIA labels and descriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Built with ❤️ using React.js and modern web technologies.