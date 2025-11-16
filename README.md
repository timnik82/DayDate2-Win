# DayDate2

DayDate2 is a simple Day & Date app for Android. It shows the current day and date with a minimal interface — no sign-in required.

## Quick Start (Android)

1. **Install prerequisites**
   - Install [Node.js](https://nodejs.org/) (includes npm).
   - Install the NativeScript CLI: `npm install -g nativescript` (provides the `ns` command).
   - Install Android Studio or the Android SDK so `adb` and the required build tools are available.
2. **Install project dependencies**
   - From the repository root, run `npm install` to populate `node_modules`.
3. **Build and install the APK**

```powershell
# Build the debug APK
ns build android

# Install the APK (replace the path if needed)
adb install -r "platforms/android/app/build/outputs/apk/debug/app-debug.apk"
```

If installing directly on a device, enable installation from unknown sources or use Google Play if the app is published there.

## Using the App

- Open DayDate2 and it will show the current day and date.
- No account or network connection is required for daily use.

## Troubleshooting

- If the app won't install: ensure your device allows installation from the source and that `adb` is available in your PATH.
- If the app crashes: try restarting your device and reinstalling the APK.

## Support

- For issues or feature requests, open an issue in this GitHub repository: https://github.com/timnik82/DayDate2-Win/issues
