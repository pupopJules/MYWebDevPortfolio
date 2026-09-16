# MYWebDevPortfolio

# Jules AI — Portfolio

A personal portfolio site for a full-stack web developer. Built with plain
HTML, CSS, and JavaScript — no build step, no dependencies.

## Structure

```
portfolio/
├── newjulesai.html              Page markup and content
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── julesai.css       All styling + theme variables
    ├── js/
    │   └── aijules.js       Theme toggle, nav, project accordion
    ├── img/                Photos, project screenshots
    └── icons/              Favicon, social icons
```

## Running it

No server required — open `newjulesai.html` directly in a browser.

For a local server (useful if you later add fetch calls or routing):

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Editing content

| What to change        | Where                                        |
|-----------------------|----------------------------------------------|
| Name, bio, projects   | `newjulesai.html`                                 |
| Colors / theme        | `:root` and `:root[data-theme="light"]` in `julesai.css` |
| Fonts                 | Google Fonts `<link>` in `index.html` head, then `--font-*` vars |
| Behavior              | `assets/js/aijules.js`                        |

### Adding a project

Copy any `<article class="fileitem">` block in the `#work` section of
`newjulesai.html` and edit the name, tech list, description, and link. The
expand/collapse behavior is wired up automatically — no JS changes needed.

## Theming

Theme is controlled by a `data-theme` attribute on `<html>`. An inline script
in the `<head>` applies the saved theme before first paint to avoid a flash of
the wrong colors. The choice persists in `localStorage`; with no saved value it
follows the OS preference.

## Deploying

Any static host works. For GitHub Pages: push the repo, then enable Pages in
Settings → Pages with the source set to your main branch root.

## To do

- [ ] Replace placeholder projects with real work
- [ ] Add real contact links (GitHub, LinkedIn, email)
- [ ] Add a favicon to `assets/icons/`
- [ ] Add Open Graph meta tags for link previews
