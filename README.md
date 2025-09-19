# N64 Online Emulator

A React web app that lets you play Nintendo 64 games in your browser using the n64js emulator.  
**Features:**  
- Upload your own N64 ROMs (legal use only)
- Play public domain/homebrew N64 demos
- Modern UI inspired by [n64-online-v1-1-2.vercel.app](https://n64-online-v1-1-2.vercel.app/)
- Beforeunload prompt warns before leaving/refreshing

---

## 🚀 Quick Start

### 1. Create Your GitHub Repo

1. Go to [github.com](https://github.com)
2. Click the "+" at the top right and select **New repository**
3. Name it: **n64-online**
4. Owner: **BIGCUH** (or your account)
5. Click **Create repository**

### 2. Add Project Files

- Download or copy all code files from this chat.
- Drag-and-drop files into your GitHub repo (or use the "Add file" → "Upload files" button).

### 3. Install & Run Locally (optional)

```bash
git clone https://github.com/BIGCUH/n64-online.git
cd n64-online
npm install
npm start
```

### 4. Deploy to Vercel (recommended)

- Go to [vercel.com](https://vercel.com) and sign up (free).
- Click **"New Project"** and import your GitHub repo.
- Click **"Deploy"**—that’s it!

---

## ROM Library

- Includes public domain/homebrew demos (from [64brew.com](https://64brew.com/)).
- **Upload your own ROM:** Use the upload button for .n64, .z64, or .v64 files.

---

## Emulator Integration

This starter includes everything except the actual emulator logic.
To enable ROM playing, you’ll need to integrate [n64js](https://github.com/hulkholden/n64js):

1. Download the [n64js build](https://github.com/hulkholden/n64js).
2. Place the emulator’s files in `public/` or `src/` as per documentation.
3. In `EmulatorCanvas.js`, use the n64js API to mount the emulator to the canvas and load ROM files.

DO NOT feel free to ask for detailed integration help!

---

## Legal Notice

Do NOT upload or distribute commercial/copyrighted ROMs.
Only use games you legally own or public domain/homebrew ROMs.

---

## Credits

- Emulator: [n64js](https://github.com/hulkholden/n64js)
- Demos: [64brew](https://64brew.com/)
- UI inspired by [n64-online-v1-1-2.vercel.app](https://n64-online-v1-1-2.vercel.app/)
