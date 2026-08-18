# Whyhat website

A lightweight, responsive one-page website for Whyhat — a data, decision intelligence and AI consultancy.

## Tech

- Plain HTML
- Plain CSS
- Tiny vanilla JavaScript
- Google Fonts (DM Sans + Space Grotesk)

No build process or framework is required.

## Run locally

Open `index.html` in a browser, or use a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Put it on GitHub

1. Create a new empty GitHub repository.
2. Upload the contents of this folder.
3. Commit the files.
4. Enable GitHub Pages under **Settings → Pages** and choose the repository's main branch/root.

## Before publishing

Replace `hello@whyhat.co.za` with the email address you want to use.

The site is intentionally framework-free so it is easy to edit and deploy. The copy is also deliberately positioned around business decisions rather than technical services — that can be refined as the consultancy's offer becomes clearer.

## Personalisation

- Replace the portrait placeholder in `index.html` with your own image.
- Replace the LinkedIn URL with your actual profile.
- Replace `hello@whyhat.co.za` with your preferred contact email.
- Change `--accent` in `styles.css` to adjust the brand accent.


## v3 additions

This version preserves the v2 services, About, credentials, photo placeholder and LinkedIn elements and adds the Whyhat `ŷ` brand concept, a Thinking section with six starter articles, and a short enquiry form.

The contact form currently uses FormSubmit as a placeholder backend. Replace the email address in `index.html` with the mailbox you want to receive enquiries at and complete the FormSubmit verification step before launch.

The LinkedIn URL in `index.html` is a placeholder and should be replaced with your profile URL.
