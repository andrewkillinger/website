# Andrew Killinger - Personal Website

A clean, professional personal website for Andrew Killinger, built with Astro and deployed via GitHub Pages.

## Live Site

**URL:** [https://andrewkillinger.com](https://andrewkillinger.com)

## Tech Stack

- **Framework:** [Astro](https://astro.build/) - Static site generator
- **Styling:** [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- **Language:** TypeScript
- **Deployment:** GitHub Pages via GitHub Actions
- **Contact Form:** [Formspree](https://formspree.io/)
- **Fonts:** Google Fonts (Source Serif 4 + Inter)

## Local Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Getting Started

```bash
# Clone the repository
git clone https://github.com/andrewkillinger/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server                 |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview production build locally         |

## Project Structure

```
/
├── public/
│   ├── CNAME              # Custom domain configuration
│   ├── favicon.svg        # SVG favicon
│   └── robots.txt         # Search engine directives
├── src/
│   ├── assets/            # Images (add headshot.jpg here)
│   ├── components/
│   │   ├── sections/      # Page section components
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── ThemeToggle.astro
│   ├── content/
│   │   └── siteContent.ts # All editable content & config
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro    # Main page
│   └── styles/
│       └── global.css     # Global styles & Tailwind
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Editing Content

All site content is centralized in a single file for easy editing:

**`src/content/siteContent.ts`**

### Configuration Values

At the top of the file, you'll find:

```typescript
export const config = {
  linkedIn: 'https://www.linkedin.com/in/killinger',
  email: 'Andrew.killinger@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/XXXXXXX', // Replace with your form ID
  // ...
};
```

### Editing Page Copy

Each section has its own export:

- `hero` - Home section content
- `journey` - "The long way here" section
- `focus` - "What I focus on now" section
- `future` - "Where I'm headed" section
- `why` - "My why" section
- `bio` - Bio section (third-person)
- `contact` - Contact section labels

Simply edit the text values and rebuild the site.

## Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io/) for email delivery.

### Steps:

1. Go to [formspree.io](https://formspree.io/) and create a free account
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/xyzabc123`)
4. Open `src/content/siteContent.ts`
5. Replace the placeholder endpoint:

```typescript
export const config = {
  // ...
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  // ...
};
```

6. Commit and push - the form will work after deployment

## Adding Your Headshot

### Steps:

1. Add your high-resolution headshot image to: `src/assets/headshot.jpg`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended: at least 400x400 pixels, square aspect ratio

2. Open `src/components/sections/HeadshotSection.astro`

3. Uncomment the image import lines at the top:
   ```astro
   import { Image } from 'astro:assets';
   import headshotImage from '../../assets/headshot.jpg';
   ```

4. Uncomment the `<Image>` component in the template and remove/comment the placeholder div

5. Rebuild and deploy

## Deployment

### How It Works

The site deploys automatically via GitHub Actions:

1. Push to `main` branch triggers the workflow
2. Astro builds the static site
3. Output is deployed to GitHub Pages
4. CNAME file ensures custom domain works

### Initial Setup (One-Time)

#### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Build and deployment", set **Source** to **GitHub Actions**

#### 2. Set Custom Domain

1. In **Settings** > **Pages**, enter `andrewkillinger.com` as the custom domain
2. Click **Save**
3. Wait for DNS verification (may show warning until DNS is configured)

#### 3. Configure DNS at Hover

After your domain transfer completes, add these DNS records:

**For apex domain (andrewkillinger.com):**

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www subdomain (optional):**

| Type | Host | Value |
|------|------|-------|
| CNAME | www | andrewkillinger.github.io |

#### 4. Enable HTTPS

1. After DNS propagates (can take up to 48 hours), return to **Settings** > **Pages**
2. Check the box for **Enforce HTTPS**

### Deployment Workflow

After initial setup, deployment is automatic:

1. Edit content or code
2. Commit and push to `main`
3. GitHub Actions builds and deploys
4. Site updates at andrewkillinger.com

## Troubleshooting

### "404" on Custom Domain

- DNS may not have propagated yet. Wait up to 48 hours.
- Verify DNS records are correct using `dig andrewkillinger.com`
- Ensure the CNAME file exists in `public/CNAME`

### "Your site is having problems building"

- Check the Actions tab for build errors
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Form Not Submitting

- Verify Formspree endpoint is correct in `siteContent.ts`
- Check browser console for errors
- Ensure Formspree form is active (not archived)

### HTTPS Not Working

- Ensure all DNS records are correct
- Wait for GitHub to provision the certificate (can take up to 24 hours after DNS propagates)
- Verify "Enforce HTTPS" is checked in Settings > Pages

### Stale Content After Deploy

- Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache
- Check that the workflow completed successfully in Actions tab

### Mixed Content Warnings

- Ensure all external resources use HTTPS
- Check for any hardcoded HTTP URLs in content

## Design Decisions

### Why Astro + GitHub Pages?

1. **Static Output:** Pure HTML/CSS/JS with minimal JavaScript - fast loading, great SEO
2. **Zero Cost:** GitHub Pages hosting is free
3. **Simple Deployment:** GitHub Actions handles build/deploy automatically
4. **Content Flexibility:** Easy to edit content without touching components
5. **Future-Ready:** Can easily add a `/writing` route or blog later

### Site Architecture

- **Single Page:** All sections on one scrolling page with anchor navigation
- **Content Source:** Centralized in `siteContent.ts` for easy editing
- **Component-Based:** Each section is a separate component for maintainability
- **Theme Toggle:** Light/dark mode with localStorage persistence

### Future Expansion

The site is structured to easily add:

- **Writing Section:** Add `src/pages/writing.astro` and link from nav
- **Blog:** Use Astro's content collections for markdown posts
- **LinkedIn Cross-Posting:** Add a script to fetch LinkedIn posts via API
- **Analytics:** Add Plausible, Fathom, or similar (privacy-friendly)

## License

MIT License - see [LICENSE](LICENSE)
