# eStokvel – Mobile App Setup Guide (Android + iOS)

This document covers everything you need to get the hybrid mobile app running on Android and iOS using [Capacitor](https://capacitorjs.com/).

---

## Architecture

| Layer | Technology |
|-------|-----------|
| UI Framework | Angular 20 + Angular Material |
| Hybrid Bridge | Capacitor v7 |
| Native Android | Android Studio (Gradle) |
| Native iOS | Xcode (CocoaPods) |
| Auth | Auth0 (`@auth0/auth0-angular`) |
| State | NgRx |

### Platform-Aware Layout
- **Native (Android/iOS):** Compact top header + bottom tab bar; content scrolls between them with safe-area padding for notches and home indicators.
- **Web / PWA:** Standard top toolbar + footer (existing layout).

---

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | ≥ 18 | |
| npm | ≥ 9 | |
| Android Studio | Ladybug+ | With Android SDK 34 |
| Xcode | ≥ 15 | macOS only, for iOS |
| CocoaPods | ≥ 1.13 | `sudo gem install cocoapods` |
| Java (JDK) | 17 | Required by Android Gradle |

---

## Step 1 – Install Dependencies

When network/registry access is available, run:

```bash
cd estokvel-ui
npm install
```

This will install the Capacitor platform and plugin packages that were added to `package.json`:

- `@capacitor/android`
- `@capacitor/ios`
- `@capacitor/status-bar`
- `@capacitor/splash-screen`
- `@capacitor/keyboard`
- `@capacitor/app`
- `@capacitor/haptics`
- `@capacitor/browser`

---

## Step 2 – Build the Web App

```bash
npm run build:mobile
# Outputs to: www/
```

---

## Step 3 – Add Native Platforms (first time only)

```bash
npm run cap:add:android   # adds android/ folder
npm run cap:add:ios       # adds ios/ folder (macOS only)
```

---

## Step 4 – Sync Web Assets to Native Projects

```bash
npm run cap:sync
# Equivalent to: npx cap sync
# Copies www/ into android/ and ios/ and updates plugins
```

---

## Step 5 – Open in IDE and Run

### Android
```bash
npm run cap:android
# Opens the android/ project in Android Studio
# Then: Run > Run app (or press Shift+F10)
```

### iOS (macOS only)
```bash
npm run cap:ios
# Opens the ios/ project in Xcode
# Then: Product > Run (or Cmd+R)
```

---

## Step 6 – Auth0 Callback URL Configuration

In your [Auth0 Dashboard](https://manage.auth0.com/) > Application > **Allowed Callback URLs**, add all of the following:

```
http://localhost:4200,
http://localhost,
https://localhost,
capacitor://localhost,
za.co.bluetank.estokvelui://callback
```

Also add to **Allowed Logout URLs**:
```
http://localhost:4200,
http://localhost,
capacitor://localhost
```

And **Allowed Web Origins**:
```
http://localhost:4200,
http://localhost,
capacitor://localhost
```

> `capacitor://localhost` is used by Capacitor on **iOS**  
> `http://localhost` is used by Capacitor on **Android**

---

## Development Workflow

```
┌─────────────────────────────────────────────────────────┐
│  ng build --configuration production                    │
│         ↓                                               │
│      www/  (web assets)                                 │
│         ↓                                               │
│      npx cap sync                                       │
│    ↙            ↘                                       │
│ android/        ios/                                     │
│ (Android        (Xcode                                  │
│  Studio)         project)                               │
└─────────────────────────────────────────────────────────┘
```

### Hot Reload During Development
You can point Capacitor at your local dev server for live reload:

```bash
# Start the Angular dev server
ng serve --host 0.0.0.0

# In capacitor.config.ts, temporarily add:
server: {
  url: 'http://YOUR_LOCAL_IP:4200',
  cleartext: true
}

# Then sync and open the native project
npx cap sync && npx cap open android
```

Remove the `server.url` before production builds.

---

## Native App Configuration

### Android
Located in `android/app/src/main/`:
- `AndroidManifest.xml` – permissions, intent filters, deep links
- `res/values/strings.xml` – app name
- `res/drawable/splash.png` – splash screen image (replace with branded asset)

### iOS
Located in `ios/App/`:
- `App/Info.plist` – permissions, URL schemes
- `App/Assets.xcassets/AppIcon.appiconset/` – app icons

---

## App Icons & Splash Screens

Use [Capacitor Assets](https://capacitorjs.com/docs/v7/assets) or a tool like [Appicon.co](https://appicon.co/):

```bash
# After installing @capacitor/assets
npx @capacitor/assets generate --iconBackgroundColor '#061d4a' --splashBackgroundColor '#061d4a'
```

Required icon sizes are automatically generated from a single 1024×1024 PNG.

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm start` | Angular dev server (web) |
| `npm run build:mobile` | Production build → `www/` |
| `npm run cap:sync` | Sync web assets + plugins to native |
| `npm run cap:android` | Open in Android Studio |
| `npm run cap:ios` | Open in Xcode |
| `npm run deploy:android` | Build + sync + open Android Studio |
| `npm run deploy:ios` | Build + sync + open Xcode |

