# Glucose Studios site

Static site for the `glucose.github.io`-style user page. No build step —
these files can be dropped straight into the repo root and served by GitHub Pages.

## Structure

```
index.html                 All markup and content (products, copy, links)
css/
  style.css                All styling, including responsive rules
assets/
  glucose-molecule.svg     Hero graphic — self-contained, animates on its own
```

## Notes for whoever edits this next

- **Adding or editing a product**: each product is one `<a class="tile">` block
  inside `#products` in `index.html`, grouped under `.category-block.games` or
  `.category-block.tools`. Copy an existing tile and change the code, icon,
  name, description, and platform tag. Update the `03 titles` / `03 apps`
  count next to the section heading if you add or remove one.
- **Colors, type, spacing**: all live as CSS custom properties at the top of
  `style.css` (`:root`), plus a few section-specific rules further down. There's
  no inline styling in the HTML.
- **Mobile nav**: the hamburger menu is pure CSS (a checkbox hack), no JS
  dependency. If you outgrow it, it lives in the `NAV` block of `style.css`.
- **Fonts**: Fraunces, IBM Plex Sans, and IBM Plex Mono are loaded from Google
  Fonts in the `<head>`. If you'd rather self-host, swap that `<link>` for
  local `@font-face` rules.
- **No JS file yet**: nothing on the page currently needs it. If that changes,
  add a `js/main.js` and link it before `</body>`.
