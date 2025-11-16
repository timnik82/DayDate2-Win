# DayDate2-Win

A NativeScript app that provides a compact Day/Date app designed for Windows and Android. This repository contains the app sources and platform build files. It supports building via NativeScript/webpack and deployment to Android devices.

## Project Structure

- `app/` — main application source code (XML, TypeScript, CSS)
- `App_Resources/` — platform-specific resources
- `platforms/` — build output for Android (auto-generated)
- `tempPlugin/` — helper plugin or local plugin used by the app
- `package.json`, `project.json` — package and project configuration
- `nativescript.config.ts` — NativeScript configuration

## Prerequisites

- Node.js (16+/18 recommended)
- NativeScript CLI
- Java Development Kit (JDK) for Android builds
- Android SDK and platform tools
- Gradle (Android build uses the included wrapper)
- A connected Android device or emulator for `ns run android`.

## Setup

Install dependencies:

```powershell
npm install
```

Update environment variables for Android build if needed (ANDROID_HOME, ANDROID_SDK_ROOT, JAVA_HOME). If you need to run the app on Windows, follow platform-specific setup in `App_Resources`.

## Build

To prepare a debug Android build (build results placed in `platforms/android/app/build/outputs/apk/debug/`):

```powershell
ns build android
```

For a release build follow your app-signing steps:

```powershell
# Replace with the proper args and keystore info
ns build android --release --key-store-path "<keystore-path>" --key-store-password "<password>" \
  --key-store-alias "<alias>" --key-store-alias-password "<alias-password>"
```

## Deploy to Connected Android Device (Overwrite existing app)

Identify the target device:

```powershell
ns device android
```

Build and deploy (this will overwrite the existing app on the connected device):

```powershell
ns run android --device <device-identifier>
# or
ns run android --device
# to select interactive device if multiple connected
```

If you already built and have the APK, you can install it manually via adb:

```powershell
adb install -r -d "platforms/android/app/build/outputs/apk/debug/app-debug.apk"
```

- `-r` replaces the app if already installed.
- `-d` allows version downgrades if necessary.

## Running & Debugging

To run the app directly with quick dev changes:

```powershell
ns run android --emulator
# or hot-reload on device
ns run android --device
```

Use Chrome DevTools (inspector) to debug the app on the device with NativeScript inspector support as needed.

## Contributing

- Branch from `Text-Crop` or the appropriate feature branch.
- Follow a small commit message style `type: description` (e.g., `feat: add new feature`).
- Format code before PRs: `npm run format` (if available in project config).

## Notes

- This project uses NativeScript and webpack for bundling. The `platforms/` folder is generated and should not be committed unless explicitly needed.
- If you want a backup before destructive operations (e.g., resets), use `git stash` or create a temporary WIP branch.

## License

This project may contain a license in the repository root; check `LICENSE` (or be sure to add your chosen license file).

---

If you want the README to be narrower in scope or include more detail like a demo GIF, internal architecture, or CI commands, tell me what you'd like and I will update it.