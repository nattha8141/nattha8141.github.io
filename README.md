# Hajid Naufal Atthousi - Portfolio

A buildless, interactive bento-grid portfolio designed for GitHub Pages.

## Preview locally

Run a static server from this directory:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create or rename the GitHub repository to `<your-username>.github.io`.
2. Push `index.html`, `styles.css`, `script.js`, `avatar/`, and `self_produced/` to the default branch.
3. In **Settings → Pages**, choose **Deploy from a branch** and select the default branch at `/ (root)`.
4. Visit `https://<your-username>.github.io`.

## Content map

- Primary page structure: `index.html`
- Visual system and responsive layout: `styles.css`
- Modal content, career interactions, and music player: `script.js`
- Optimized profile photo: `avatar/profile-photo.jpg`
- Music previews: `self_produced/`

The audio player intentionally has no autoplay behavior. Playback begins only after the visitor presses play, chooses a track, or uses a previous/next control.

## Visitor analytics with GoatCounter

The site uses the `nattha8141` GoatCounter code and displays the total visit count in the header.

1. In GoatCounter, open **Settings → Site settings** and enable **Allow adding visitor counts on your website**.
2. Deploy the site. The header fetches the `TOTAL` count while localhost previews remain excluded from tracking.
3. GoatCounter caches public counter responses, so new visits may take up to four hours to appear.
