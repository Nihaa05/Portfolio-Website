
# Niharika Pendem - Portfolio Website

A modern, recruiter-focused portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed to showcase data engineering expertise with Azure, Microsoft Fabric, and Power Platform.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: System-aware with manual toggle
- **Interactive Animations**: Smooth Framer Motion animations
- **Skills Visualization**: Interactive skills chart with Recharts
- **Data-Driven**: All content from a single `/data/portfolio.ts` file
- **SEO Optimized**: Metadata, OpenGraph, sitemap, robots.txt
- **Accessible**: ARIA labels, keyboard navigation, proper headings

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots configuration
│   ├── projects/
│   │   └── [slug]/          # Dynamic project case studies
│   └── resume/
│       └── page.tsx         # Resume page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── DataEngineerMindset.tsx  # Pipeline visualization
│   ├── Skills.tsx           # Skills section with chart
│   ├── Experience.tsx       # Timeline experience
│   ├── Projects.tsx         # Projects grid with filters
│   ├── Certifications.tsx   # Certifications section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer
├── data/
│   └── portfolio.ts         # All portfolio content (EDIT THIS)
├── lib/
│   ├── utils.ts             # Utility functions
│   └── ThemeContext.tsx     # Dark mode context
└── public/
    ├── images/              # Image placeholders
    └── resume.pdf           # Resume file (add yours)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niharika-pendem/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## ✏️ Customization

### 1. Update Personal Information

Edit `/data/portfolio.ts` to update:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline here...",
  email: "your.email@example.com",
  // ... more fields
};
```

### 2. Update Social Links

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "linkedin",
  },
  // ... add more
];
```

### 3. Update Skills

```typescript
export const skillCategories: SkillCategory[] = [
  {
    name: "Category Name",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    proficiency: 85, // 0-100
    color: "#0078D4",
  },
  // ... add more categories
];
```

### 4. Update Experience

```typescript
export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Job Title",
    company: "Company Name",
    location: "City, State",
    startDate: "Month Year",
    endDate: "Present",
    highlights: [
      "Achievement 1...",
      "Achievement 2...",
    ],
  },
  // ... add more experiences
];
```

### 5. Update Projects

```typescript
export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "project-url-slug",
    title: "Project Title",
    shortDescription: "Brief description...",
    outcome: "Key results achieved...",
    tags: ["Tag1", "Tag2"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://example.com/demo",
    caseStudy: {
      problem: "What problem did it solve...",
      approach: "How you approached it...",
      architecture: [...],
      results: ["Result 1", "Result 2"],
      improvements: ["Future improvement 1"],
    },
  },
  // ... add more projects
];
```

### 6. Add Your Resume

Replace `/public/resume.pdf` with your actual resume file.

### 7. Add Profile Image

Replace `/public/images/profile.jpg` with your photo.

### 8. Update Site URL

In these files, replace `https://niharika-pendem.dev` with your actual domain:
- `/app/sitemap.ts`
- `/app/robots.ts`
- `/app/layout.tsx` (OpenGraph metadata)

## 🎨 Theming

### Colors

The primary colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  azure: {
    // Blue shades for Azure theme
  },
  fabric: {
    // Purple shades for Fabric theme
  },
}
```

### Fonts

Default fonts are Inter and JetBrains Mono. Modify in `/app/layout.tsx`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically:
- Build your Next.js app
- Deploy to their global CDN
- Set up automatic deployments for future commits

### Deploy to Other Platforms

The app can also be deployed to:
- **Netlify**: `npm run build` and deploy the `.next` folder
- **AWS Amplify**: Connect your GitHub repo
- **Docker**: Create a Dockerfile with Node.js

## 📊 Lighthouse Score

This portfolio is optimized for performance:

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔧 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/niharika-pendem/portfolio/issues).

## 📧 Contact

Niharika Pendem - [niharika.pendem@email.com](mailto:niharika.pendem@email.com)

---

Built with ❤️ for recruiters who appreciate clean code and practical engineering.
