# Koakuma Site

Official website and Sparkle update feed for [Koakuma](https://github.com/XadillaX/koakuma), a native macOS SQLite database client.

## Published paths

- `/` — product website
- `/updates/appcast.xml` — stable Sparkle update feed

The site is deployed to GitHub Pages by `.github/workflows/pages.yml`.

Release binaries belong in the main Koakuma repository's GitHub Releases. This repository only contains the website, signed appcast metadata, and release notes.

## Local preview

Open `index.html` directly, or serve the repository root with any static HTTP server.

## Publishing an update

See [`updates/README.md`](updates/README.md). Never commit Sparkle private signing keys, Apple signing credentials, or GitHub tokens.
