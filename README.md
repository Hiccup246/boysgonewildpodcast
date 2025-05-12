# [boysgonewild.com](https://www.boysgonewildpodcast.com/)

![site-screenshot](https://raw.githubusercontent.com/Hiccup246/boysgonewildpodcast/main/public/site-screenshot.webp)

<p>
  This is a fan website dedicated to the boys gone wild podcast. The site is built using <a href="https://remix.run/">Remix</a>, styled with <a href="https://tailwindcss.com/">Tailwind</a> and utilises icons from <a href="https://fontawesome.com/">Font Awesome</a>, <a href="https://lucide.dev/">Lucide</a> and <a href="https://simplelineicons.github.io/">Simple Line Icons</a>.
</p>

## Description

The projects source lives with the `app` directory and can be understood as:

- `images` - All website images in `.webp`
- `routes` - Holds the single index page
  - `components` - Components for the index route
  - `hooks` - Hooks for the index route
  - `_index.tsx` - The index page with SEO
- `styles` - Holds tailwind css and reset css
- `typings` - Holds custom types
- `root.tsx` - Root layout component + analytics scripts

## Deployment

Steps to begin development:

1. Close this repo
2. Run `pnpm install`
3. Run `pnpm run dev`
