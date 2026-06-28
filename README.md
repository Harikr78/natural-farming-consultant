# 🌱 Bhoomi — Voice-Based Natural Farming Consultant

**Multilevel Natural Farming Consultant powered by Voice AI**  
Built on Subhash Palekar Zero Budget Natural Farming (ZBNF) principles  
Targeting Tamil Nadu farmers across Salem, Erode, Namakkal, Coimbatore, and Madurai districts

---

## What Problem Does Bhoomi Solve?

Farmers transitioning to natural farming face three daily barriers:

1. **No instant access to organic remedies** when a crop disease appears — they call a dealer who sells chemicals
2. **No reliable local market intelligence** — they sell at the wrong time and lose 15–30% income
3. **Language and literacy gap** — most farming advice is in English, written, and behind slow internet

Bhoomi solves all three in one voice-first app that works in Tamil, Hindi, and English — even on 2G networks.

---

## Live Demo

> **Live App:** https://natural-farming-consultant-rho.vercel.app/  
> **Source Code:** https://github.com/Harikr78/natural-farming-consultant

---

## Features

### 🎤 Voice AI Consultant (Core Feature)
- Farmer taps the mic and speaks symptoms in their language
- Speech-to-Text (Web Speech API) captures in Tamil / Hindi / English
- Sent to **Gemini 2.0 Flash** with a strict Subhash Palekar system prompt
- AI responds with: Diagnosis → Organic Remedy → Preparation Steps → Prevention
- Response **auto-reads aloud** paragraph by paragraph (TTS chaining — no 480-char cutoff)
- Works for crop disease, pest control, soil preparation, Jivamrita/Beejamrita recipes

### 📸 Leaf Disease Photo Diagnosis
- Farmer photographs a diseased leaf on their phone
- Image compressed client-side to ~120KB (canvas 800×800, JPEG 0.75) before upload
- Gemini Vision identifies the disease and returns organic spray recipe
- No expensive agronomist visit needed

### 🌦️ Real Weather + Market Intelligence
- **Live weather** from Open-Meteo API (free, no key) — temperature, humidity, rain probability
- Per-district data for Salem, Erode, Namakkal, Coimbatore, Madurai
- Weather cached 30 minutes to survive slow connections
- **Market prices** with daily variation per district
- **AGMARKNET direct links** per crop — farmers can verify prices on the government portal
- **KVK district helpline** with one-tap dial (`tel:` link) — real expert backup

### 📋 Government Schemes Tab
All 5 active schemes with eligibility, description, and apply links in 3 languages:
- **PM-KISAN** — ₹6,000/year direct income transfer
- **PKVY** — ₹50,000/hectare for organic farming clusters
- **PGS-India** — Free peer-review organic certification
- **Soil Health Card** — Free soil testing every 2 years
- **PM Fasal Bima** — Crop insurance at 1.5–2% premium

"Ask AI about this scheme" buttons auto-fill the voice query and switch to the consultant.

### 📲 WhatsApp Share
- Every AI response has a one-tap Share button
- Generates a 3-line farmer-friendly summary in the selected language
- Opens WhatsApp with pre-filled message including the crop, advice, and app link
- Farmers forward advice to their FPO WhatsApp groups → organic app distribution

### 📴 Offline Fallback
- PWA installable on Android (manifest + service worker)
- If Gemini is unreachable, a built-in fallback engine serves crop-specific organic advice in all 3 languages instantly
- Covers: Paddy, Cotton, Tomato, Onion, Banana, Turmeric, Mixed Farm

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite |
| UI | Tailwind CSS + Lucide React icons |
| Fonts | Playfair Display (headings) + Inter (body) |
| AI Model | Gemini 2.0 Flash (via @google/genai) |
| Backend | Node.js + Express (TypeScript) |
| Voice STT | Web Speech API (en-IN / hi-IN / ta-IN) |
| Voice TTS | Web Speech Synthesis API (paragraph chaining) |
| Weather | Open-Meteo API (free, no key, 30-min cache) |
| Market | Simulated AGMARKNET prices + live gov links |
| PWA | Service Worker + Web App Manifest |
| Image | Canvas-based compression (800×800, JPEG 0.75) |

---

## Architecture

```
Farmer's Phone
     │
     ├── Voice (STT) ──► Web Speech API (Tamil / Hindi / English)
     │
     ├── Text / Image ──► Express Server
     │                         │
     │                         ├──► Gemini 2.0 Flash (AI response)
     │                         │         │
     │                         │    [If unreachable]
     │                         │         │
     │                         └──► Fallback Engine (offline crop advice)
     │
     ├── Weather ──► Open-Meteo API (real-time, 30-min cache)
     │
     ├── Market ──► Daily-seeded price engine + AGMARKNET links
     │
     └── TTS ──► Web Speech Synthesis (paragraph chaining)
```

---

## Running Locally

**Prerequisites:** Node.js 18+, a Gemini API key from [Google AI Studio](https://aistudio.google.com)

```bash
# 1. Install dependencies
npm install

# 2. Set your API key
cp .env.example .env.local
# Edit .env.local and add: GEMINI_API_KEY=your_key_here

# 3. Start the app
npm run dev
```

App runs at `http://localhost:5173`

---

## AI Prompt Design

Bhoomi uses a strict system instruction built on Subhash Palekar's ZBNF principles:

- **Identity:** "You are Bhoomi, the Multilevel Natural Farming Consultant"
- **Hard constraints:** Never recommend chemical pesticides or synthetic fertilizers
- **Response structure:** Always returns Diagnosis → Cause → Organic Remedy (3 options) → Prevention → Recovery Time
- **Language awareness:** Detects and responds in Tamil, Hindi, or English matching the farmer's input
- **Farming scope:** Jivamrita, Beejamrita, Ghanajeevamrita, multilevel cropping, pest traps, soil biology

---

## Target Users

| User | Need | How Bhoomi Helps |
|------|------|-----------------|
| Small farmer (0.5–3 acres) | Instant organic remedy when disease appears | Voice query → AI diagnosis in seconds |
| First-generation natural farmer | Understand ZBNF practices | Canopy Education tab with cropping strategies |
| FPO member | Share advice across the group | WhatsApp share button on every response |
| Subsidy seeker | Know which schemes apply to them | Schemes tab with apply links + Ask AI |

---

## District Coverage (Tamil Nadu)

Salem · Erode · Namakkal · Coimbatore · Madurai

Each district has mapped: weather coordinates, KVK helpline number, regional market price baseline

---

## Submission Details

- **Category:** Environmental Sustainability / Agriculture Technology
- **Theme:** Grassroots AI tool for natural farming transition
- **Built with:** Google AI Studio + Gemini 2.0 Flash
- **Target region:** Tamil Nadu, India
- **Languages supported:** English, हिंदी, தமிழ்

---

## Team

**Hari Krishnan**  
Founder, building technology for social impact in agriculture and healthcare  
Tamil Nadu, India

---

*Bhoomi — because every answer should come from the earth.*
