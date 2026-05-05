# Polyglot Pro 🌍

Polyglot Pro is a lightweight, serverless Progressive Web App (PWA) designed for advanced language learners. It leverages a custom Spaced Repetition System (SRS) to help users effectively memorize vocabulary and complex sentences.

## 🚀 Features

* **Spaced Repetition System (SRS):** Active recall modes with difficulty grading (Hard, Medium, Learned) to optimize memory retention.
* **Smart AI Importer:** Bulk import structured vocabulary and phrases directly from AI assistants (like Gemini or ChatGPT) using a simple text format.
* **Audio & Shadowing:** Built-in Text-to-Speech (TTS) integration with speed control (0.75x, 0.5x) for shadowing and pronunciation practice.
* **Offline First:** 100% Serverless. As a fully functional PWA, it works entirely offline. 
* **Privacy Focused:** No backend or cloud databases. All your learning data and progress are stored safely inside your device's `LocalStorage`.
* **Multi-language:** Support to seamlessly switch and train between multiple target languages.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Storage:** LocalStorage API
* **APIs:** Google Translate API (for instant translations), Web Speech API (for native device TTS)
* **Architecture:** Progressive Web App (PWA) with Service Workers (`sw.js`) and Web Manifest.

## 📦 How to Use

Since this project is completely serverless, no build steps or dependencies (like Node.js or npm) are required.

1. Clone or download this repository.
2. Host the files on any static hosting service (like **GitHub Pages**, Vercel, or Netlify).
3. Open the URL on your mobile device or desktop browser.
4. **Install as an App:** Use the "Add to Home Screen" option in your browser to install it natively on your device for offline use.

## 💾 Data Backup

Because data is stored locally on your browser, the app includes a **Backup & Restore** feature. You can export your progress as a `.json` file at any time and import it across different devices.
