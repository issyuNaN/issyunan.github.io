# Academic Homepage · Vue 3

A clean, responsive academic homepage built with Vue 3, TypeScript, and Vite. The site includes an introduction, news, education and research experience, publications, projects, an offline section, and a single light visual theme.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Content

Most of the homepage content lives in `src/data/site.ts`:

- `profile`: name, role, affiliation, bio, email, and research interests
- `links`: GitHub, X, and Google Scholar
- `offlineNotes`: short details about life beyond research
- `news`: recent milestones and announcements
- `experiences`: education and research experience
- `publications`: publication metadata, thumbnails, and links
- `projects`: project descriptions, thumbnails, tags, and links

The email is intentionally displayed with `[AT]` and without a `mailto:` link to reduce harvesting by basic address scrapers.

## Assets

- The portrait is stored at `public/images/profile.JPG`.
- Publication and project thumbnails are stored in `public/images/`.
- Downloadable files, such as award certificates, are stored in `public/files/`.

The portrait and work thumbnails automatically fall back to text placeholders when an image is unavailable.

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Pushing to `main` installs dependencies, builds the Vite site, and deploys the `dist` directory to GitHub Pages.

This configuration targets the root user site at `https://issyuNaN.github.io/`. In the GitHub repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
