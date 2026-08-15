# NURÉH E-Commerce Storefront Clone

A high-performance, responsive e-commerce storefront replica of the official NURÉH brand site. Built using **React + Vite**, styled with **custom Vanilla CSS**, and fully optimized for sub-second page load times.

---

## Key Features

*   **Fast Page Loads**: Leverages HTML-based font preconnecting and LCP asset preloading ( marble background, logo, and initial slideshow banners) to eliminate layout shift and FOUT (Flash of Unstyled Text).
*   **Top Slideshow Banner**: High-performance, auto-playing image slider that cycles through campaign graphics with absolute-positioned z-index arrow selectors.
*   **Trendsetters Product Slider**: Smooth horizontal scrollable carousel with overlay next/prev controls styled on the edges of the track.
*   **Watch & Buy Reels**: Vertical 9:16 reels that autoplay preview clips on mouse hover. Clicking a reel opens an immersive overlay modal containing a vertical player and size-selection shopping overlays.
*   **Dynamic Cart Drawer**: Slide-out cart drawer supporting quantity adjustments, item deletions, and a progress bar showing progress toward the free shipping threshold (Rs. 15,000).
*   **Category Grid**: Visual grid mapping *Unstitched*, *Luxury Pret*, and *Pret* collections in the official order, using elegant zoom card overlays on hover.
*   **New In Grid**: 4-column product grid featuring size option bubbles, hover thumbnail swaps, and "Sold Out" status indicators.
*   **Instagram Collage & Spotlights**: Masonry visual grid mapping influencer-spotted campaigns and dual highlight call-out links.

---

## Vercel Deployment

The project is pre-configured to be **Vercel-ready**:
*   **Platform Binding Fix**: The Windows-specific compiler binding (`@rolldown/binding-win32-x64-msvc`) is declared under `optionalDependencies` in `package.json`. Vercel's Linux containers will skip this package automatically, avoiding `EBADPLATFORM` build failures while keeping your local Windows dev environment fully operational.
*   **Build Commands**: Vercel will automatically detect Vite and run `npm run build` to generate the static files under the `dist/` directory.
