# Koakuma Site

Official website and signed update feed for Koakuma, a native macOS SQLite database workspace.

## Published paths

- `/` — product website
- `/updates/appcast.xml` — stable Sparkle update feed

Release binaries are stored by the official release pipeline. This project contains the website, signed appcast metadata, and release notes.

## Local preview

Open `index.html` directly, or serve the repository root with any static HTTP server.

## Publishing an update

See [`updates/README.md`](updates/README.md). Never commit Sparkle private signing keys, Apple signing credentials, or release-service tokens.
