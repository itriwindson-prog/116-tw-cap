# 打包成 Android APK（Capacitor）

本專案原本是靜態 PWA，已用 **Capacitor** 包成可安裝的 Android App。
Web 端不用改：`build-www.mjs` 會把 App 靜態檔複製到 `www/`（排除 `國中考題/` 來源卷、`node_modules`、`_bank` 等），Capacitor 再把 `www/` 打包進 APK（純離線，不需伺服器）。

已備好的檔案：`package.json`、`capacitor.config.json`、`build-www.mjs`。
`node_modules/`、`www/`、`android/` 都在 .gitignore（可用下列指令重建）。

---

## 一次性前置（本機目前缺，需先裝）

APK 的編譯需要 **JDK + Android SDK + Gradle**，最簡單是裝 **Android Studio**（內含全部）：

1. 下載安裝 **Android Studio**：https://developer.android.com/studio
2. 首次開啟，依精靈裝好 **Android SDK**（API 33 以上）與 **Platform-Tools**。
3. 設定環境變數（PowerShell 範例，路徑依實際安裝調整）：
   ```powershell
   setx ANDROID_HOME "$env:LOCALAPPDATA\Android\Sdk"
   setx JAVA_HOME "C:\Program Files\Android\Android Studio\jbr"
   ```
   （關掉再重開終端機讓變數生效。Android Studio 內建的 JDK 在 `…\Android Studio\jbr`。）
4. 接受授權：`sdkmanager --licenses`（在 `%ANDROID_HOME%\cmdline-tools\latest\bin`）。

---

## 建置 APK

在專案根目錄：

```bash
npm install            # 裝 Capacitor（只需第一次）
npx cap add android    # 產生 android/ 原生專案（若已存在可略）
npm run sync           # 重建 www/ 並同步進 android
```

然後二擇一產出 APK：

**A. 指令直接產 debug APK**
```bash
npm run apk:debug
```
產出：`android/app/build/outputs/apk/debug/app-debug.apk`（可直接傳到手機安裝，需開「允許安裝未知來源」）。

**B. 用 Android Studio（推薦，較好除錯／簽章／上架）**
```bash
npm run open:android   # 用 Android Studio 開啟 android/
```
在 Android Studio 內：`Build → Build Bundle(s) / APK(s) → Build APK(s)`。

---

## 之後每次改了 App 內容

```bash
npm run sync           # 重新複製 www/ 並同步；再 build 一次即可
```

---

## 上架 / 正式簽章（選）

debug APK 只能側載測試。要上 Google Play 或穩定發佈需簽章：

1. 產金鑰：`keytool -genkey -v -keystore studysync.keystore -alias studysync -keyalg RSA -keysize 2048 -validity 10000`
2. 在 `android/app/build.gradle` 設定 `signingConfigs`，或用 Android Studio 的 `Build → Generate Signed Bundle / APK`。
3. `cd android && gradlew.bat assembleRelease` → `app/build/outputs/apk/release/`。

---

## 備註

- App 圖示：Capacitor Android 預設用範本圖示。要換成本專案的珊瑚底「會考」圖，可用 `@capacitor/assets`（放一張 1024×1024 圖後 `npx capacitor-assets generate`）產生各尺寸 res 圖示。
- 目前 `www/` 約 10 MB（含 6 份段考卷頁圖）。若之後電子化更多真卷，APK 會隨頁圖變大；純文字題庫（exambank.js）很小。
- `appId` = `tw.cap116.studysync`、`appName` = 會考總複習（可在 `capacitor.config.json` 改）。
