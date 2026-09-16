# Glucose Studios site

Static site for the GitHub Pages user page. No build step — these files can be
dropped straight into the repo root and served as-is.

## Structure

```
index.html                 Markup and copy — no product content lives here anymore
css/
  style.css                All styling, including responsive rules
js/
  main.js                  Loads data/products.json and builds the product tiles
data/
  products.json            The one file to edit when a product is added, changed, or removed
assets/
  glucose-molecule.svg     Hero graphic — self-contained, animates on its own
```

## Adding, editing, or removing a product

Everything about a product tile — including the download link — lives in
**`data/products.json`**. You should never need to touch `index.html` for a
product change. The file has two arrays, `games` and `tools`; each entry
looks like this:

```json
{
  "code": "DRW",
  "name": "Driftwood",
  "description": "A quiet sailing game about reading currents, patching a boat, and not being in a hurry.",
  "platforms": "Mac · Windows · Steam Deck",
  "downloadLink": "",
  "icon": "<path d=\"M3 15c3-4 6-4 9 0s6 4 9 0\"/><path d=\"M3 19c3-4 6-4 9 0s6 4 9 0\"/><circle cx=\"17\" cy=\"7\" r=\"3\"/>"
}
```

- **code** — short tag shown at the top of the tile (three letters reads best).
- **name / description / platforms** — plain text, shown as-is.
- **downloadLink** — leave as `""` until a build exists. The tile shows
  "Coming soon" when this is empty, and a real "Download" link once you fill
  it in with a URL.
- **icon** — raw inner SVG markup (paths, circles, rects) on a 24×24 grid, no
  color set — the site colors it automatically (rose for games, teal for
  tools). Icons from any outline icon set built on a 24×24 grid (Feather,
  Lucide) will drop straight in; just copy the shapes from inside their
  `<svg>` tag.

The section heading count ("2 titles", "1 app", etc.) updates itself based on
how many entries are in the array — you don't need to edit that by hand.
Add or remove an object from the array and the grid re-flows on its own,
whether there's one product or twelve.

## Running it locally

Because the page fetches `data/products.json` with JavaScript, opening
`index.html` by double-clicking it won't work in most browsers (they block
`fetch` on the `file://` protocol). Serve the folder locally instead, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`. This isn't an issue on GitHub Pages —
it serves everything over `https://`, where `fetch` works normally.

## Other notes

- **Colors, type, spacing**: all live as CSS custom properties at the top of
  `style.css` (`:root`), plus a few section-specific rules further down.
- **Mobile nav**: the hamburger menu is pure CSS (a checkbox hack), no JS
  dependency.
- **Fonts**: Fraunces, IBM Plex Sans, and IBM Plex Mono load from Google
  Fonts in `<head>`. Swap that `<link>` for local `@font-face` rules if you'd
  rather self-host.
