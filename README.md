# VidScope Safety

VidScope Safety is a community-made web tool designed to help users prepare clear, professional reports for YouTube Trust & Safety regarding channels that appear to promote adult content through bot-like behavior.  
This project is **not affiliated with Google LLC or YouTube** and does **not** automatically submit reports.

---

## Features

- YouTube-like dark-mode interface  
- Professional, non-AI-sounding report text  
- One-click Gmail compose with prefilled report  
- Copy-to-clipboard support  
- Local report history (stored in browser localStorage)  
- Safety and disclaimer popup  
- Version label displayed in the UI  
- No automation, no scraping, no data collection  

---

## Project Structure

```
yt-nsfw-bot-takedown/
├── index.html
├── style.css
├── script.js
├── cover.png
└── README.md
```

---

## Deployment (GitHub Pages)

1. Create a GitHub repository.
2. Upload all project files.
3. Go to **Settings → Pages**.
4. Set source to `main` branch and `/root`.
5. Save.

Your site will be available at:

```
https://yourusername.github.io/your-repo-name/
```

---

## Discord / Social Embed

Add the following inside the `<head>` of `index.html`:

```html
<meta property="og:title" content="VidScope Safety">
<meta property="og:description" content="A community-made tool for preparing reports against YouTube bot accounts that promote inappropriate content. Not affiliated with Google or YouTube.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourusername.github.io/your-repo-name/">
<meta property="og:image" content="https://yourusername.github.io/your-repo-name/cover.png">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="VidScope Safety">
<meta name="twitter:description" content="Prepare professional reports for YouTube Trust & Safety. Community-made. Non-affiliated.">
<meta name="twitter:image" content="https://yourusername.github.io/your-repo-name/cover.png">
```

Recommended image size: **1200 × 630**

---

## How It Works

1. Enter a YouTube channel URL.
2. Select where the account was encountered.
3. Generate a professional report message.
4. Open Gmail or copy the text manually.
5. Review and send the report yourself.

Reports are **never sent automatically**.

---

## Acceptable Use

- Use this tool only for legitimate safety concerns.
- Do not submit false or malicious reports.
- Do not use this tool to harass individuals or creators.
- This tool exists to support platform safety, not abuse reporting systems.

---

## Privacy

- No analytics
- No tracking
- No server-side storage
- All report history is stored locally in the user's browser

---

## Disclaimer

VidScope Safety is an independent, community-created project.  
It is not affiliated with, endorsed by, or operated by Google LLC or YouTube.

---

## License

MIT License
