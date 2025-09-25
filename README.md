# Melvin Yawlui - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a web developer and data analyst.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **React Router**: Multi-page navigation with smooth transitions
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Interactive Components**: Contact form, project showcase, and skill displays
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Development**: ESLint, Hot Module Replacement (HMR)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable componentslow
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About page with skills
│   │   ├── Projects.jsx   # Projects showcase
│   │   └── Contact.jsx    # Contact form
│   ├── assets/            # Images and static files
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

- **Home**: Landing page with introduction and call-to-action
- **About**: Detailed information about skills, experience, and background
- **Projects**: Showcase of completed projects with technologies used
- **Contact**: Contact form and social media links

## 🎨 Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- Primary: `#00e1c2` (teal/cyan)
- Dark backgrounds: `#0a0a0a`, `#121212`, `#1a1a1a`

### Content
Update the following files to customize content:
- `src/pages/Home.jsx` - Personal introduction
- `src/pages/About.jsx` - Skills and experience
- `src/pages/Projects.jsx` - Project portfolio
- `src/pages/Contact.jsx` - Contact information

## 📦 Build and Deploy

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory

3. Deploy the `dist/` folder to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Melvin Kwaku Yawlui**