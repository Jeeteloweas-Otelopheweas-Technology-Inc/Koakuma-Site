# Koakuma update feed

`appcast.xml` is the stable Sparkle feed consumed by released Koakuma builds.

The empty feed committed initially is intentional: it gives the application a stable HTTPS endpoint without advertising an unsigned or unavailable build.

For each formal release:

1. Build the Developer ID signed application.
2. Package, notarize, staple, and verify the DMG.
3. Upload the DMG to the official immutable release storage.
4. Generate the appcast with Sparkle's `generate_appcast` tool so the enclosure contains the exact build number, file size, and EdDSA signature.
5. Point the enclosure URL at the immutable release asset.
6. Commit the generated appcast and release notes here.
7. Verify the public feed and test an update from the previous released build before publishing the Git tag broadly.

Never commit the Sparkle EdDSA private key. Keep the private key in the release machine's Keychain or CI secret store. Only the public key belongs in Koakuma's `Info.plist`.
