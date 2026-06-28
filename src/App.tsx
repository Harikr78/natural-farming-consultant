import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Leaf, 
  CloudSun, 
  TrendingUp, 
  BookOpen, 
  AlertTriangle, 
  Camera, 
  Plus, 
  Check, 
  Play, 
  History, 
  Sparkles, 
  Sun, 
  CloudRain, 
  HelpCircle, 
  ExternalLink,
  ChevronRight,
  RotateCcw,
  Compass,
  Share2,
  DollarSign,
  Moon,
  Search,
  RefreshCw,
  LayoutDashboard,
  Home
} from "lucide-react";
import { 
  WeatherData, 
  MarketPrice, 
  AgroIntelligence, 
  CroppingModel, 
  SavedConsultation 
} from "./types";

export default function App() {
  // Navigation Tabs for the right-side control dashboard
  const [activeTab, setActiveTab] = useState<"dashboard" | "advisor" | "intelligence" | "education" | "guidance">("dashboard");

  // Language management
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "hi" | "ta">("en");

  // Theme Management
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme_mode");
    return saved !== "light";
  });

  useEffect(() => {
    localStorage.setItem("theme_mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Dynamic Localization Dictionary
  const localization = {
    en: {
      welcome: "Hello! I am your Bhoomi Natural Farming Consultant. Press the microphone button to ask a question, select a crop, or upload a photo of a leaf disease to find organic remedies.",
      listening: "Hearing your regional query...",
      hearingPrompt: "Talk naturally now. Speak about disease, multi-layer cropping, or Jivamrita preparation.",
      micLegend: "Tap the green microphone and speak in English, or choose a quick prompt.",
      suggested: [
        { text: "My tomatoes have dark curly leaf spots. What should I spray?", tag: "remedy" },
        { text: "How do I cultivate the 5-layer multilevel cropping canopy?", tag: "education" },
        { text: "How is Jivamrita and Neemastra organic fertilizer prepared?", tag: "education" },
        { text: "What deep soil preparation prevents water run-off of cotton crops?", tag: "finance" }
      ],
      activeCrop: "Active Crop:",
      portalTitle: "Real-time Audio Portal",
      consultBtn: "Ask Advisor",
      historyTitle: "Farming History & Logs",
      climateTitle: "Micro-Climate Advisory",
      weatherAdviceBtn: "Read Climate Advice Aloud",
      organicPremiumTitle: "Regional Organic Market Ledger",
      consultResponseTitle: "Farming Remedy Response",
      clearHistory: "Clear History"
    },
    hi: {
      welcome: "नमस्कार! मैं भूमि हूँ — आपका प्राकृतिक खेती सलाहकार। जैविक उपचार जानने के लिए माइक बटन दबाकर प्रश्न पूछें, फसल चुनें, या पत्ती की बीमारी की फ़ोटो अपलोड करें।",
      listening: "आपकी क्षेत्रीय आवाज़ सुन रहे हैं...",
      hearingPrompt: "अब खुलकर बोलें। बीमारी, बहु-स्तरीय खेती, या जीवामृत बनाने की विधि के बारे में बात करें।",
      micLegend: "हरे रंग का माइक बटन दबाएं और हिंदी में बोलें, या नीचे दिए गए सुझाव को चुनें।",
      suggested: [
        { text: "मेरे टमाटर के पत्तों पर काले घुंघराले धब्बे हैं। मुझे क्या स्प्रे करना चाहिए?", tag: "remedy" },
        { text: "मैं 5-स्तरीय बहु-फसली छत्र (canopy) मॉडल कैसे तैयार करूँ?", tag: "education" },
        { text: "जीवामृत और नीमास्त्र जैविक खाद कैसे तैयार की जाती है?", tag: "education" },
        { text: "कपास की फसल में मिट्टी को जल बहाव से बचाने के लिए गहरी तैयारी कैसे करें?", tag: "finance" }
      ],
      activeCrop: "सक्रिय फसल:",
      portalTitle: "रीयल-टाइम वॉयस पोर्टल",
      consultBtn: "सलाहकार से पूछें",
      historyTitle: "खेती का इतिहास और लॉग्स",
      climateTitle: "मौसम और जलवायु परामर्श",
      weatherAdviceBtn: "जलवायु परामर्श जोर से पढ़ें",
      organicPremiumTitle: "क्षेत्रीय जैविक बाजार बहीखाता",
      consultResponseTitle: "प्राकृतिक उपचार जवाब",
      clearHistory: "इतिहास मिटाएं"
    },
    ta: {
      welcome: "வணக்கம்! நான் பூமி — உங்கள் இயற்கை விவசாய ஆலோசகர். கேள்விகளைக் கேட்க, பயிரைத் தேர்வு செய்ய அல்லது இலை நோய் புகைப்படத்தைப் பதிவேற்றி இயற்கை வைத்தியங்களைக் கண்டறிய மைக் பொத்தானை அழுத்தவும்.",
      listening: "உங்கள் கேள்வியை உன்னிப்பாகக் கேட்டுக்கொண்டிருக்கிறேன்...",
      hearingPrompt: "இப்போது இயற்கை முறையில் பேசலாம். நோய், அடுக்கு முறை விவசாயம் அல்லது ஜீவாமிர்தம் தயாரிப்பு பற்றி பேசுங்கள்.",
      micLegend: "பச்சை மைக் பொத்தானைத் தட்டி தமிழில் பேசவும் அல்லது கீழே உள்ள விரைவு கேள்வியைத் தேர்ந்தெடுக்கவும்.",
      suggested: [
        { text: "என் தக்காளி இலையில் சுருள் கரும்புள்ளிகள் உள்ளன. நான் என்ன தெளிக்க வேண்டும்?", tag: "remedy" },
        { text: "5-அடுக்கு பலவிளைச்சல் பயிர் முறைக்கான விதானத்தை நான் எப்படி அமைப்பது?", tag: "education" },
        { text: "ஜீவாமிர்தம் மற்றும் வேப்பங்கொட்டை கரைசல் தயாரிப்பது எப்படி?", tag: "education" },
        { text: "பருத்தி பயிரில் நீர் வடிந்து போவதைத் தடுக்க மண்ணை எவ்வாறு ஆழமாகத் தயார் செய்வது?", tag: "finance" }
      ],
      activeCrop: "செயலில் உள்ள பயிர்:",
      portalTitle: "நேரடி ஆடியோ தளம்",
      consultBtn: "ஆலோசனையைக் கேள்",
      historyTitle: "விவசாய வரலாற்று பதிவுகள்",
      climateTitle: "காலநிலை மற்றும் வானிலை ஆலோசனை",
      weatherAdviceBtn: "வானிலை ஆலோசனையை உரக்கப் படிக்கவும்",
      organicPremiumTitle: "வட்டார இயற்கை சந்தை விலை நிலவரம்",
      consultResponseTitle: "இயற்கை வழி நிவாரண ஆலோசனைகள்",
      clearHistory: "வரலாற்றை நீக்கு"
    }
  };

  // Voice/Consultant States
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ttsUnavailableNotice, setTtsUnavailableNotice] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [response, setResponse] = useState<string>(localization.en.welcome);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState("Common Crop / Mixed Farm");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // Intelligence States (Weather & Market Prices)
  const [selectedRegion, setSelectedRegion] = useState("Central Plateau");
  const [intelligenceData, setIntelligenceData] = useState<AgroIntelligence | null>(null);
  const [isLoadingIntelligence, setIsLoadingIntelligence] = useState(false);
  const [customRegionSearch, setCustomRegionSearch] = useState("");

  // Education States
  const [croppingModels, setCroppingModels] = useState<CroppingModel[]>([]);
  const [selectedModelId, setSelectedModelId] = useState<string>("model-5-layer");
  const [activeEduLayer, setActiveEduLayer] = useState<number | null>(0);

  // Saved Consultations History
  const [consultHistory, setConsultHistory] = useState<SavedConsultation[]>([]);

  // PWA States
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState<boolean>(false);

  // Web Speech API references
  const recognitionRef = useRef<any>(null);
  const synthesisUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speechTimeoutRef = useRef<any>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioQueueRef = useRef<string[]>([]);
  const audioQueueIndexRef = useRef<number>(0);
  const paragraphIndexRef = useRef<number>(0);
  const speechParagraphsRef = useRef<string[]>([]);

  // Suggested questions based on active localization
  const suggestedQuestions = localization[selectedLanguage].suggested;

  // Dummy crop images representing typical pest issues to simulate visual disease diagnostic demo
  const sampleLeafDiseases = [
    {
      name: "Mildew / Fungal Spot",
      url: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400",
      prompt: "Identify issues on this crop leaf. It has fuzzy growth and circular yellow blemishes."
    },
    {
      name: "Sucking Pest Insect Damage",
      url: "https://images.unsplash.com/photo-1522325636832-5dbc1440f793?auto=format&fit=crop&q=80&w=400",
      prompt: "This plant leaf exhibits white spots and curling leaves typical of aphid infestation."
    },
    {
      name: "Healthy Seedlings",
      url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=400",
      prompt: "How can I apply Beejamrita to protect these sprouted desi corn seedlings?"
    }
  ];

  // Sync welcome welcome string when language fluctuates
  useEffect(() => {
    setResponse(localization[selectedLanguage].welcome);
    stopSpeaking();
  }, [selectedLanguage]);

  // STT language re-initialisation
  useEffect(() => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch(e) {}
    }
    setupSpeechRecognition();
  }, [selectedLanguage]);

  // Auto-hide ttsUnavailableNotice after 5 seconds
  useEffect(() => {
    if (!ttsUnavailableNotice) return;
    const t = setTimeout(() => setTtsUnavailableNotice(false), 5000);
    return () => clearTimeout(t);
  }, [ttsUnavailableNotice]);

  // Pre-seed consultation history with realistic entries
  useEffect(() => {
    // PWA Service Worker registration & beforeinstallprompt handler
    if (typeof window !== "undefined") {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/sw.js")
            .then(reg => {
              console.log("PWA Service Worker registered with scope:", reg.scope);
            })
            .catch(err => {
              console.warn("PWA Service Worker registration failed:", err);
            });
        });
      }

      const handleBeforeInstallPrompt = (e: any) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallBtn(true);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      };
    }
  }, []);

  useEffect(() => {
    const historical = localStorage.getItem("farming_consultations");
    if (historical) {
      setConsultHistory(JSON.parse(historical));
    } else {
      const defaultHistory: SavedConsultation[] = [
        {
          id: "const-1",
          timestamp: new Date(Date.now() - 3600000 * 24).toLocaleString(),
          query: "How do I prevent root rot in my papaya orchard using organic inputs?",
          response: "Apply liquid Jivamrita directly to the root basin during watering. Also spray sour buttermilk (1 litre buttermilk mixed in 10 litres water) to create a protective antifungal layer. Keep appropriate soil aeration (Whapasa) by not overwatering.",
          cropContext: "Papaya trees"
        },
        {
          id: "const-2",
          timestamp: new Date(Date.now() - 3600000 * 48).toLocaleString(),
          query: "What is the preparation method for Agniastra natural pesticide?",
          response: "To prepare Agniastra: Boil 10 litres of local cow urine, add 1 kg crushed neem leaves, 500g crushed hot green chili paste, 250g garlic paste, and 500g tobacco powder. Let it ferment for 48 hours, stir twice daily, strain, and dilute 3 litres of the mixture in 100 litres of water for a 1-acre spray.",
          cropContext: "Organic Chili & Pulses"
        }
      ];
      setConsultHistory(defaultHistory);
      localStorage.setItem("farming_consultations", JSON.stringify(defaultHistory));
    }

    // Fetch weather & price intelligence initially
    fetchIntelligence(selectedRegion);

    // Fetch educational models
    fetchCroppingModels();

    // Warm up and log available voices lists inside browser Web Speech API early on mount
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const logVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          console.group("Bhoomi TTS: Detected Web Speech Voices");
          console.log(`Total available speech voices: ${voices.length}`);
          voices.forEach((v, index) => {
            console.log(`[Voice ${index + 1}] ${v.name} (${v.lang}) - default: ${v.default}, localService: ${v.localService}`);
          });
          console.groupEnd();
        } else {
          console.log("Bhoomi TTS: Web Speech API ready, but getVoices() returned empty. Waiting on voices loading...");
        }
      };

      // Try reading loaded voices immediately
      logVoices();

      // Many browsers load voices asynchronously, so capture the update event
      window.speechSynthesis.onvoiceschanged = () => {
        console.log("Bhoomi TTS: onvoiceschanged triggered!");
        logVoices();
      };
    }

    return () => {
      stopSpeaking();
    };
  }, []);

  // Set up speech recognition (STT) inside browser
  const setupSpeechRecognition = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      
      // Select appropriate language code
      rec.lang = selectedLanguage === "hi" ? "hi-IN" : selectedLanguage === "ta" ? "ta-IN" : "en-IN";

      rec.onstart = () => {
        setIsListening(true);
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setQuery(transcript);
          const listeningFeedback = selectedLanguage === "hi" 
            ? `आपने पूछा: ${transcript}। प्राकृतिक खेती पंचांग की जाँच कर रहे हैं।`
            : selectedLanguage === "ta"
            ? `நீங்கள் கேட்டீர்கள்: ${transcript}. ஆலோசனையைச் சரிபார்க்கிறேன்.`
            : `You asked: ${transcript}. Consulting the virtual farming ledger now.`;
          
          speakResponse(listeningFeedback);
          triggerConsultation(transcript, uploadedImage);
        }
      };

      rec.onerror = (err: any) => {
        console.error("Speech Recognition Error", err);
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  };

  // Turn Voice Recognition ON/OFF
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      stopSpeaking();
      try {
        if (recognitionRef.current) {
          recognitionRef.current.lang = selectedLanguage === "hi" ? "hi-IN" : selectedLanguage === "ta" ? "ta-IN" : "en-IN";
        }
        recognitionRef.current?.start();
      } catch (e) {
        // Fallback for restart errors
        setupSpeechRecognition();
        if (recognitionRef.current) {
          recognitionRef.current.lang = selectedLanguage === "hi" ? "hi-IN" : selectedLanguage === "ta" ? "ta-IN" : "en-IN";
        }
        recognitionRef.current?.start();
      }
    }
  };

  // Convert AI Response text to clear Voice (TTS)
  const speakResponse = (textToSpeak: string) => {
    setTtsUnavailableNotice(false);
    if (isMuted) return;

    // Clear any active voice synthesis or playback first
    stopSpeaking();

    // Segment response by double newlines into clean paragraphs
    const rawParagraphs = textToSpeak.split(/\n\n+/);
    const cleanedParagraphs = rawParagraphs
      .map(p => p.replace(/\*+/g, "").replace(/#+/g, "").replace(/-\s/g, " ").trim())
      .filter(p => p.length > 0);

    if (cleanedParagraphs.length === 0) return;

    speechParagraphsRef.current = cleanedParagraphs;
    paragraphIndexRef.current = 0;
    setIsSpeaking(true);

    const playNextParagraph = () => {
      const idx = paragraphIndexRef.current;
      if (idx >= speechParagraphsRef.current.length) {
        setIsSpeaking(false);
        return;
      }

      const cleanText = speechParagraphsRef.current[idx];
      console.log(`TTS: Speaking paragraph ${idx + 1}/${speechParagraphsRef.current.length}: "${cleanText}"`);

      const targetLang = selectedLanguage === "hi" ? "hi-IN" : selectedLanguage === "ta" ? "ta-IN" : "en-IN";
      const langCode = selectedLanguage === "hi" ? "hi" : selectedLanguage === "ta" ? "ta" : "en";

      // Detect if browser has native speech support for target language
      let hasNativeVoice = false;
      let selectedVoice: SpeechSynthesisVoice | undefined = undefined;

      if (typeof window !== "undefined" && window.speechSynthesis) {
        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          selectedVoice = voices.find(v => {
            const vLang = v.lang.toLowerCase().replace("_", "-");
            return vLang === targetLang.toLowerCase();
          });

          if (!selectedVoice) {
            selectedVoice = voices.find(v => {
              const vLang = v.lang.toLowerCase().replace("_", "-");
              return vLang === langCode || vLang.startsWith(langCode + "-") || vLang.startsWith(langCode + "_");
            });
          }

          if (!selectedVoice) {
            const keyword = selectedLanguage === "hi" ? "hindi" : selectedLanguage === "ta" ? "tamil" : "english";
            selectedVoice = voices.find(v => {
              const nameLower = v.name.toLowerCase();
              const langLower = v.lang.toLowerCase();
              return nameLower.includes(keyword) || langLower.includes(keyword);
            });
          }

          if (selectedVoice) {
            hasNativeVoice = true;
          }
        }
      }

      // Fallback for Tamil
      if (selectedLanguage === "ta" && (!hasNativeVoice || !window.speechSynthesis)) {
        console.log("Bhoomi TTS: No native Tamil voice found for paragraph. Falling back to high-fidelity Google Translate TTS via local proxy.");
        const words = cleanText.split(/\s+/);
        const chunks: string[] = [];
        let currentChunk = "";

        for (const word of words) {
          if ((currentChunk + " " + word).trim().length > 150) {
            if (currentChunk.trim()) {
              chunks.push(currentChunk.trim());
            }
            currentChunk = word;
          } else {
            currentChunk = currentChunk ? currentChunk + " " + word : word;
          }
        }
        if (currentChunk.trim()) {
          chunks.push(currentChunk.trim());
        }

        if (chunks.length === 0) {
          paragraphIndexRef.current += 1;
          playNextParagraph();
          return;
        }

        audioQueueRef.current = chunks;
        audioQueueIndexRef.current = 0;

        const playNextChunk = () => {
          const chunkIdx = audioQueueIndexRef.current;
          if (chunkIdx >= audioQueueRef.current.length) {
            // Finished this paragraph, move to the next paragraph!
            paragraphIndexRef.current += 1;
            playNextParagraph();
            return;
          }

          const textToPlay = audioQueueRef.current[chunkIdx];
          const url = `/api/tts-tamil?text=${encodeURIComponent(textToPlay)}`;
          const audio = new Audio(url);
          activeAudioRef.current = audio;

          audio.onended = () => {
            audioQueueIndexRef.current += 1;
            playNextChunk();
          };

          audio.onerror = (err) => {
            console.warn(`Fallback Tamil voice error on piece ${chunkIdx}, attempting next chunk.`, err);
            if (chunkIdx === 0) {
              setTtsUnavailableNotice(true);
            }
            audioQueueIndexRef.current += 1;
            playNextChunk();
          };

          audio.play().catch(playErr => {
            console.error("Playback of fallback Tamil audio failed:", playErr);
            if (chunkIdx === 0) {
              setTtsUnavailableNotice(true);
            }
            audioQueueIndexRef.current += 1;
            playNextChunk();
          });
        };

        playNextChunk();
        return;
      }

      // Fallback to standard native Web Speech API Synthesis
      if (!window.speechSynthesis) {
        paragraphIndexRef.current += 1;
        playNextParagraph();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = targetLang;
      utterance.rate = 0.90; // Slightly slower for clear regional pacing
      utterance.pitch = 1.0;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Set up a backup watchdog layout to prevent buttons from getting stuck
      const durationEstimate = Math.max(4500, (cleanText.length * 160) / utterance.rate);
      speechTimeoutRef.current = setTimeout(() => {
        if (synthesisUtteranceRef.current !== utterance) return;
        console.warn("Bhoomi TTS Watchdog timeout triggered on paragraph. Moving to next paragraph.");
        paragraphIndexRef.current += 1;
        playNextParagraph();
      }, durationEstimate);

      utterance.onstart = () => {
        if (synthesisUtteranceRef.current !== utterance) return;
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        if (synthesisUtteranceRef.current !== utterance) return;
        if (speechTimeoutRef.current) {
          clearTimeout(speechTimeoutRef.current);
          speechTimeoutRef.current = null;
        }
        paragraphIndexRef.current += 1;
        playNextParagraph();
      };

      utterance.onerror = (err) => {
        if (synthesisUtteranceRef.current !== utterance) return;
        if (speechTimeoutRef.current) {
          clearTimeout(speechTimeoutRef.current);
          speechTimeoutRef.current = null;
        }
        // If the speech was cancelled or interrupted, don't treat it as a hard failure and don't advance the paragraph index
        if (err && (err.error === 'interrupted' || err.error === 'canceled')) {
          console.log("Speech utterance cancelled or interrupted.");
          return;
        }
        console.error("Speech Synthesis Utterance Error on paragraph", err);
        paragraphIndexRef.current += 1;
        playNextParagraph();
      };

      synthesisUtteranceRef.current = utterance;
      try {
        window.speechSynthesis.speak(utterance);
      } catch (speakException) {
        console.error("SpeechSynthesis speak invocation failed:", speakException);
        paragraphIndexRef.current += 1;
        playNextParagraph();
      }
    };

    playNextParagraph();
  };

  const stopSpeaking = () => {
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = null;
    }
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (cancelErr) {
        console.warn("Failed to cancel speech synthesis:", cancelErr);
      }
    }
    if (activeAudioRef.current) {
      try {
        activeAudioRef.current.pause();
        activeAudioRef.current.src = "";
      } catch (audioErr) {
        console.warn("Failed to pause fallback audio:", audioErr);
      }
      activeAudioRef.current = null;
    }
    audioQueueRef.current = [];
    audioQueueIndexRef.current = 0;
    speechParagraphsRef.current = [];
    paragraphIndexRef.current = 0;
    setIsSpeaking(false);
  };

  // Fetch Weather & Market intelligence
  const fetchIntelligence = async (region: string) => {
    setIsLoadingIntelligence(true);
    try {
      const response = await fetch(`/api/intelligence?region=${encodeURIComponent(region)}`);
      if (response.ok) {
        const data = await response.json();
        setIntelligenceData(data);
      }
    } catch (err) {
      console.error("Error fetching intelligence data:", err);
    } finally {
      setIsLoadingIntelligence(false);
    }
  };

  // Fetch education modules
  const fetchCroppingModels = async () => {
    try {
      const response = await fetch("/api/education/multilevel-cropping");
      if (response.ok) {
        const data = await response.json();
        setCroppingModels(data.models || []);
      }
    } catch (err) {
      console.error("Error loading cropping models:", err);
    }
  };

  // Send query to Gemini API backend proxy with target language
  const triggerConsultation = async (customText?: string, base64Image?: string | null) => {
    const textPrompt = customText !== undefined ? customText : query;
    const finalImage = base64Image !== undefined ? base64Image : uploadedImage;

    if (!textPrompt && !finalImage) {
      return;
    }

    setIsLoading(true);
    stopSpeaking();

    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: textPrompt,
          image: finalImage,
          currentCropContext: selectedCrop,
          language: selectedLanguage
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed dynamic farm consultation.");
      }

      const data = await res.json();
      setResponse(data.text);
      
      // Auto-speak the response
      speakResponse(data.text);

      // Save consultation to local history
      const newConsult: SavedConsultation = {
        id: "const-" + Date.now(),
        timestamp: new Date().toLocaleString(),
        query: textPrompt || "analyzed uploaded leaf photo",
        response: data.text,
        cropContext: selectedCrop,
        image: finalImage || undefined
      };

      const updatedHistory = [newConsult, ...consultHistory];
      setConsultHistory(updatedHistory);
      localStorage.setItem("farming_consultations", JSON.stringify(updatedHistory));

      // Reset current fields
      setQuery("");

    } catch (error: any) {
      console.error("Consultation Error:", error);
      const errorMessage = error.message || "Could not reach consultant API. Please check your Gemini API Key configuration.";
      setResponse(errorMessage);
      const errSpeak = selectedLanguage === "hi"
        ? "क्षमा करें। कृषि पंचांग जानकारी प्राप्त करने में त्रुटि हुई है।"
        : selectedLanguage === "ta"
        ? "மன்னிக்கவும். வேளாண் ஆலோசனையைப் பெறுவதில் பிழை ஏற்பட்டுள்ளது."
        : "Apologies. I experienced an error checking the farming manual.";
      speakResponse(errSpeak);
    } finally {
      setIsLoading(false);
    }
  };

  const compressImage = (base64Str: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        const maxSide = 800;

        if (width > maxSide || height > maxSide) {
          if (width > height) {
            height = Math.round((height * maxSide) / width);
            width = maxSide;
          } else {
            width = Math.round((width * maxSide) / height);
            height = maxSide;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", 0.75);
          resolve(compressed);
        } else {
          resolve(base64Str);
        }
      };
      img.onerror = () => {
        resolve(base64Str);
      };
      img.src = base64Str;
    });
  };

  // Handle image file upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const rawBase64 = reader.result as string;
        try {
          const compressedBase64 = await compressImage(rawBase64);
          setUploadedImage(compressedBase64);
        } catch (err) {
          console.error("Compression failed, using raw base64 instead", err);
          setUploadedImage(rawBase64);
        }
        // Switch tab automatically to consultant advisor
        setActiveTab("advisor");
      };
      reader.readAsDataURL(file);
    }
  };

  // Set sample crop disease
  const applySampleDisease = (disease: typeof sampleLeafDiseases[0]) => {
    setUploadedImage(disease.url); // Use the preset Unsplash leaves for preview demo safely
    setQuery(disease.prompt);
    setActiveTab("advisor");
  };

  // Handle preset organic region changing
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    fetchIntelligence(region);
  };

  // Render weather background indicators
  const getWeatherIcon = (forecast: string) => {
    if (forecast.includes("Sunny")) return <Sun id="forecast-icon" className="w-10 h-10 text-amber-500 animate-spin-slow" />;
    if (forecast.includes("Rain") || forecast.includes("Showers")) return <CloudRain id="forecast-icon" className="w-10 h-10 text-cyan-500 shrink-0" />;
    return <CloudSun id="forecast-icon" className="w-10 h-10 text-emerald-500 shrink-0" />;
  };

  return (
    <div 
      id="advisor-app-root"
      className={`min-h-screen flex flex-col antialiased pb-20 md:pb-0 ${isDarkMode ? "dark-theme" : ""}`}
    >
      <style>{`
        :root {
          --bhoomi-green: #1B4332;
          --bhoomi-green-mid: #2D6A4F;
          --bhoomi-green-light: #52B788;
          --bhoomi-cream: #F8F4EE;
          --bhoomi-sand: #EDE8DF;
          --bhoomi-brown: #6B4E35;
          --bhoomi-text: #1A1A18;
          --bhoomi-muted: #6B6860;
          --bhoomi-border: #DDD8CF;
          --bhoomi-card: #FFFFFF;
          --bhoomi-dark-bg: #0F1A14;
          --bhoomi-dark-card: #162318;
          --bhoomi-dark-border: #243020;
          --bhoomi-dark-text: #E8E4DC;
          --bhoomi-dark-muted: #8A9A8E;
        }

        #advisor-app-root {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 15px;
          line-height: 1.65;
          background-color: var(--bhoomi-cream);
          color: var(--bhoomi-text);
        }

        #advisor-app-root.dark-theme {
          background-color: var(--bhoomi-dark-bg);
          color: var(--bhoomi-dark-text);
        }

        h1, h2, h3, h4, h5, .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        * {
          box-sizing: border-box;
        }

        button { cursor: pointer; }

        input, select, textarea {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 15px;
          border-radius: 10px;
          border: 1.5px solid var(--bhoomi-border);
          background-color: #FFFFFF;
          color: var(--bhoomi-text);
          padding: 10px 14px;
        }

        #advisor-app-root.dark-theme input,
        #advisor-app-root.dark-theme select,
        #advisor-app-root.dark-theme textarea {
          border-color: var(--bhoomi-dark-border);
          background-color: var(--bhoomi-dark-card);
          color: var(--bhoomi-dark-text);
        }
      `}</style>
      
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: isDarkMode ? '#0F1A14' : '#FFFFFF',
        borderBottom: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Logo + Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: '#1B4332',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Leaf style={{ width: '18px', height: '18px', color: '#52B788' }} strokeWidth={2.5} />
          </div>
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '20px', fontWeight: 600,
              color: isDarkMode ? '#E8E4DC' : '#1A1A18',
              margin: 0, lineHeight: 1
            }}>Bhoomi</h1>
            <p style={{
              fontSize: '11px', margin: 0, marginTop: '2px',
              color: isDarkMode ? '#8A9A8E' : '#6B6860',
              fontFamily: "'Inter', sans-serif"
            }}>Natural Farming Consultant</p>
          </div>
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Language pills */}
          <div style={{
            display: 'flex', gap: '2px', padding: '3px',
            background: isDarkMode ? '#162318' : '#F0EBE2',
            borderRadius: '10px', border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`
          }}>
            {(['en', 'hi', 'ta'] as const).map(lang => (
              <button key={lang} onClick={() => setSelectedLanguage(lang)} style={{
                padding: '4px 12px', borderRadius: '7px', border: 'none',
                fontSize: '12px', fontWeight: 500, fontFamily: "'Inter', sans-serif",
                background: selectedLanguage === lang ? '#1B4332' : 'transparent',
                color: selectedLanguage === lang ? '#FFFFFF' : isDarkMode ? '#8A9A8E' : '#6B6860',
                transition: 'all 0.15s'
              }}>
                {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिंदी' : 'தமிழ்'}
              </button>
            ))}
          </div>

          {/* Crop selector */}
          <select value={selectedCrop} onChange={e => setSelectedCrop(e.target.value)} style={{
            fontSize: '12px', padding: '6px 10px', borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
            background: isDarkMode ? '#162318' : '#FFFFFF',
            color: isDarkMode ? '#E8E4DC' : '#1A1A18',
            fontFamily: "'Inter', sans-serif", maxWidth: '150px'
          }}>
            <option value="Common Crop / Mixed Farm">Mixed Farm</option>
            <option value="Organic Basmati Paddy">Basmati Rice</option>
            <option value="Desi Cotton">Desi Cotton</option>
            <option value="Turmeric & Ginger">Turmeric & Ginger</option>
            <option value="Papaya & Banana Orchard">Fruit Orchard</option>
            <option value="Green Vegetable Bed">Vegetables</option>
          </select>

          {/* Mute button */}
          <button onClick={() => { const m = !isMuted; setIsMuted(m); if (m) stopSpeaking(); }} style={{
            width: '34px', height: '34px', borderRadius: '8px', border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
            background: isDarkMode ? '#162318' : '#FFFFFF',
            color: isMuted ? '#C05C3E' : '#2D6A4F',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {isMuted ? <VolumeX style={{ width: '16px', height: '16px' }} /> : <Volume2 style={{ width: '16px', height: '16px' }} />}
          </button>

          {/* Dark mode button */}
          <button onClick={() => setIsDarkMode(!isDarkMode)} style={{
            width: '34px', height: '34px', borderRadius: '8px', border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
            background: isDarkMode ? '#162318' : '#FFFFFF',
            color: isDarkMode ? '#E2C97E' : '#6B6860',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {isDarkMode ? <Sun style={{ width: '16px', height: '16px' }} /> : <Moon style={{ width: '16px', height: '16px' }} />}
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div id="app-layout-body" className="flex-1 flex flex-col min-h-[calc(100vh-73px)] relative pb-28">

        {/* MAIN CONTENT WORKSPACE PANE */}
        <main style={{
          flex: 1, padding: '28px 32px',
          maxWidth: '900px', width: '100%',
          margin: '0 auto', display: 'flex',
          flexDirection: 'column', gap: '24px'
        }} className="px-4 md:px-8">
          <AnimatePresence mode="wait">
            
            {/* TAB 0: FARM OVERVIEW DASHBOARD */}
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                {/* Welcome Box */}
                <div 
                  style={{
                    background: isDarkMode ? '#162318' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                    borderRadius: '16px',
                    padding: '24px 32px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-950/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h2 
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '24px',
                          fontWeight: 700,
                          color: isDarkMode ? '#E8E4DC' : '#1B4332',
                          marginBottom: '8px'
                        }}
                      >
                        {selectedLanguage === "hi" 
                          ? "राम राम जी! आपके कृषि केंद्र में आपका स्वागत है।" 
                          : selectedLanguage === "ta" 
                          ? "வணக்கம்! உங்கள் இயற்கை வேளாண் முகப்பிற்கு வரவேற்கிறோம்." 
                          : "Namaskar! Welcome to Your Farm Center."}
                      </h2>
                      <p 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          lineHeight: '1.65',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          maxWidth: '640px'
                        }}
                      >
                        {selectedLanguage === "hi"
                          ? "यह आपका जैविक और प्राकृतिक कृषि नियंत्रण बोर्ड है। यहाँ से आप मौसम, फसल की सेहत और बाज़ार दरों की जानकारी देख सकते हैं।"
                          : selectedLanguage === "ta"
                          ? "இது உங்கள் இயற்கை விவசாய கட்டுப்பாட்டு அறை. இங்கிருந்து வானிலை, பயிர் ஆரோக்கியம் மற்றும் சந்தை விலைகளை அறியலாம்."
                          : "This is your organic and natural farming control board. Access climate advisories, crop health analytics, and premium market indices here."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Card 1: Voice Advisor */}
                  <div 
                    onClick={() => setActiveTab("advisor")}
                    style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.15s',
                      height: '210px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                    }}
                    className="group"
                  >
                    <div>
                      <div 
                        style={{
                          padding: '12px',
                          background: isDarkMode ? '#1B4332' : '#EBF5EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          color: isDarkMode ? '#52B788' : '#1B4332',
                          borderRadius: '10px',
                          width: 'fit-content'
                        }}
                      >
                        <Mic className="w-5 h-5" />
                      </div>
                      <h3 
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '16px',
                          fontWeight: 600,
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                          marginTop: '16px',
                          marginBottom: '4px'
                        }}
                      >
                        {selectedLanguage === "hi" ? "वॉयस सलाहकार कक्ष" : selectedLanguage === "ta" ? "ஆடியோ ஆலோசகர்" : "Voice Advisor Room"}
                      </h3>
                      <p 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          lineHeight: '1.4',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860'
                        }}
                        className="line-clamp-2"
                      >
                        {selectedLanguage === "hi" ? "कृषि रोगों का निदान करें और प्राकृतिक उपचार पूछें।" : selectedLanguage === "ta" ? "பயிர் நோயைக் கண்டறிந்து இயற்கை வைத்தியங்களைப் பெறுங்கள்." : "Diagnose leaf symptoms and get instant natural remedies."}
                      </p>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#1B4332' }} className="flex items-center gap-1 mt-3">
                      Open Advisor Room <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Card 2: Climate & Market */}
                  <div 
                    onClick={() => setActiveTab("intelligence")}
                    style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.15s',
                      height: '210px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                    }}
                    className="group"
                  >
                    <div>
                      <div 
                        style={{
                          padding: '12px',
                          background: isDarkMode ? '#1B4332' : '#EBF5EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          color: isDarkMode ? '#52B788' : '#1B4332',
                          borderRadius: '10px',
                          width: 'fit-content'
                        }}
                      >
                        <CloudSun className="w-5 h-5" />
                      </div>
                      <h3 
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '16px',
                          fontWeight: 600,
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                          marginTop: '16px',
                          marginBottom: '4px'
                        }}
                      >
                        {selectedLanguage === "hi" ? "जलवायु और बाजार भाव" : selectedLanguage === "ta" ? "காலநிலை & சந்தை" : "Climate & Market Intel"}
                      </h3>
                      <p 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          lineHeight: '1.4',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860'
                        }}
                        className="line-clamp-2"
                      >
                        {selectedLanguage === "hi" ? "मिट्टी की नमी सेंसर और जैविक उपज बाजार बहीखाता।" : selectedLanguage === "ta" ? "ஈரப்பதம் மற்றும் இயற்கை விவசாய சந்தை விலை நிலவரம்." : "Live moisture indices and premium organic market price ledger feeds."}
                      </p>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#1B4332' }} className="flex items-center gap-1 mt-3">
                      View Climate Intel <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Card 3: Syntropic Canopy */}
                  <div 
                    onClick={() => setActiveTab("education")}
                    style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.15s',
                      height: '210px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                    }}
                    className="group"
                  >
                    <div>
                      <div 
                        style={{
                          padding: '12px',
                          background: isDarkMode ? '#1B4332' : '#EBF5EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          color: isDarkMode ? '#52B788' : '#1B4332',
                          borderRadius: '10px',
                          width: 'fit-content'
                        }}
                      >
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '16px',
                          fontWeight: 600,
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                          marginTop: '16px',
                          marginBottom: '4px'
                        }}
                      >
                        {selectedLanguage === "hi" ? "कृषि वानिकी छत्र शिक्षा" : selectedLanguage === "ta" ? "விதானக்காடு பயிற்சி" : "Canopy Education"}
                      </h3>
                      <p 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          lineHeight: '1.4',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860'
                        }}
                        className="line-clamp-2"
                      >
                        {selectedLanguage === "hi" ? "5-स्तरीय फसलों की सघनता और नियोजन मार्गदर्शिका।" : selectedLanguage === "ta" ? "பல அடுக்கு காடு வளர்ப்பு முறைக்கான கல்விப் பகுதி." : "Interactive 5-layer Subhash Palekar multistory syntropic canopy model."}
                      </p>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#1B4332' }} className="flex items-center gap-1 mt-3">
                      Study Canopy Model <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Card 4: Seeds & Funds */}
                  <div 
                    onClick={() => setActiveTab("guidance")}
                    style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.15s',
                      height: '210px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                    }}
                    className="group"
                  >
                    <div>
                      <div 
                        style={{
                          padding: '12px',
                          background: isDarkMode ? '#1B4332' : '#EBF5EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          color: isDarkMode ? '#52B788' : '#1B4332',
                          borderRadius: '10px',
                          width: 'fit-content'
                        }}
                      >
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <h3 
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '16px',
                          fontWeight: 600,
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                          marginTop: '16px',
                          marginBottom: '4px'
                        }}
                      >
                        {selectedLanguage === "hi" ? "जैविक बीज और कोष" : selectedLanguage === "ta" ? "விதை & மானியம்" : "Seeds & Funds"}
                      </h3>
                      <p 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          lineHeight: '1.4',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860'
                        }}
                        className="line-clamp-2"
                      >
                        {selectedLanguage === "hi" ? "देशी बीज बैंक, बायो-पंचांग, और सरकारी योजनाएं।" : selectedLanguage === "ta" ? "விதை வங்கிகள், சந்திர நாட்காட்டி மற்றும் மானியங்கள்." : "Desi seed catalogs, lunar biological calendar, and government schemes."}
                      </p>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#1B4332' }} className="flex items-center gap-1 mt-3">
                      Open Seeds & Funds <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* KVK Expert Helpline Card */}
                {(() => {
                  const kvkMapping: Record<string, string> = {
                    "Salem": "04427-260295",
                    "Erode": "04294-220199",
                    "Namakkal": "04286-281070",
                    "Coimbatore": "0422-2450324",
                    "Madurai": "0452-2422540",
                    "Central Plateau": "04427-260295",
                    "Coastal Region": "044-22353001",
                    "Hilly Areas": "0423-2443337",
                    "River Valleys": "04294-220199"
                  };
                  const kvkNum = kvkMapping[selectedRegion] || "04427-260295";
                  return (
                    <div 
                      style={{
                        background: isDarkMode ? '#162318' : '#FFFFFF',
                        border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                        borderRadius: '14px',
                        padding: '20px 24px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}
                      className="flex-col sm:flex-row"
                    >
                      <div className="flex items-center gap-3.5">
                        <div 
                          style={{
                            padding: '12px',
                            background: isDarkMode ? '#1B4332' : '#EBF5EE',
                            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                            color: isDarkMode ? '#52B788' : '#1B4332',
                            borderRadius: '10px'
                          }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: '15px',
                              fontWeight: 600,
                              color: isDarkMode ? '#E8E4DC' : '#1A1A18'
                            }}
                          >
                            {selectedLanguage === "hi" ? "कृषि विशेषज्ञ से बात करें" : selectedLanguage === "ta" ? "நேரடி நிபுணர் ஆலோசனை" : "Talk to a real expert"}
                          </h3>
                          <p 
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '13px',
                              color: isDarkMode ? '#8A9A8E' : '#6B6860',
                              marginTop: '4px'
                            }}
                          >
                            {selectedLanguage === "hi" ? `आपके क्षेत्र (${selectedRegion}) के लिए कृषि विज्ञान केंद्र (KVK) विशेषज्ञ से तुरंत जुड़ें।` : selectedLanguage === "ta" ? `உங்கள் வட்டாரம் (${selectedRegion}) சார்ந்த வேளாண் அறிவியல் மைய (KVK) நிபுணருடன் தொடர்பு கொள்ளவும்.` : `Directly dial the Krishi Vigyan Kendra (KVK) helpline for ${selectedRegion}.`}
                          </p>
                        </div>
                      </div>
                      <a 
                        href={`tel:${kvkNum}`}
                        style={{
                          background: '#1B4332',
                          color: '#FFFFFF',
                          borderRadius: '10px',
                          padding: '10px 20px',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          fontWeight: 600,
                          border: 'none',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        className="w-full sm:w-auto shadow-md shrink-0"
                      >
                        <span>{kvkNum}</span>
                      </a>
                    </div>
                  );
                })()}

                {/* Consultation History Logs */}
                <div 
                  style={{
                    background: isDarkMode ? '#162318' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                    borderRadius: '14px',
                    padding: '20px 24px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                      borderBottom: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                      paddingBottom: '12px'
                    }}
                  >
                    <h3 
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <History className="w-5 h-5 text-emerald-500" />
                      {localization[selectedLanguage].historyTitle}
                    </h3>
                    {consultHistory.length > 0 && (
                      <button 
                        onClick={() => setConsultHistory([])}
                        style={{
                          background: 'rgba(230, 57, 70, 0.1)',
                          color: '#E63946',
                          border: '1px solid rgba(230, 57, 70, 0.2)',
                          borderRadius: '8px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {localization[selectedLanguage].clearHistory}
                      </button>
                    )}
                  </div>

                  {consultHistory.length === 0 ? (
                    <div className="py-12 text-center">
                      <Compass className="w-10 h-10 mx-auto mb-2.5" style={{ color: isDarkMode ? '#243020' : '#DDD8CF' }} />
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '14px',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          maxWidth: '480px',
                          margin: '0 auto'
                        }}
                      >
                        {selectedLanguage === "hi" 
                          ? "अभी तक कोई वॉयस या रोग उपचार लॉग उपलब्ध नहीं है। सलाहकार कक्ष में प्रश्न पूछकर शुरुआत करें।" 
                          : selectedLanguage === "ta" 
                          ? "இதுவரை குரல்வழி ஆலோசனைகள் எதுவும் இல்லை. உங்கள் முதல் கேள்வியைக் கேட்டுத் தொடங்கவும்." 
                          : "No consult history available yet. Speak with the advisor in the Advisor Room to generate your first organic remedy cards."}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {consultHistory.map((h) => (
                        <div 
                          key={h.id}
                          style={{
                            background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}
                          className="transition hover:shadow-sm"
                        >
                          <div>
                            <div 
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '8px',
                                borderBottom: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                                paddingBottom: '8px',
                                marginBottom: '10px'
                              }}
                            >
                              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: isDarkMode ? '#8A9A8E' : '#6B6860' }}>{h.timestamp}</span>
                              {h.cropContext && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: '#1B4332' }}>{h.cropContext}</span>}
                            </div>
                            {h.image && (
                              <img 
                                src={h.image} 
                                alt="Leaf diagnostic reference" 
                                style={{
                                  width: '100%',
                                  height: '96px',
                                  objectFit: 'cover',
                                  borderRadius: '8px',
                                  border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                  marginBottom: '12px'
                                }}
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <p 
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '13px',
                                fontWeight: 600,
                                color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                                marginBottom: '4px'
                              }}
                            >
                              Q: {h.query}
                            </p>
                            <p 
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '13px',
                                fontStyle: 'italic',
                                color: isDarkMode ? '#8A9A8E' : '#4A4943'
                              }}
                              className="line-clamp-3"
                            >
                              A: {h.response}
                            </p>
                          </div>

                          <div 
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginTop: '16px',
                              paddingTop: '12px',
                              borderTop: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`
                            }}
                          >
                            <button
                              onClick={() => {
                                setQuery(h.query);
                                setResponse(h.response);
                                if (h.image) setUploadedImage(h.image);
                                speakResponse(h.response);
                                setActiveTab("advisor");
                              }}
                              style={{
                                background: isDarkMode ? '#1B4332' : '#EBF5EE',
                                border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                color: isDarkMode ? '#52B788' : '#1B4332',
                                borderRadius: '8px',
                                padding: '6px 12px',
                                fontSize: '11px',
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                            >
                              <Play className="w-3 h-3" /> Load & Speak Aloud
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB 1: Real-time remedies & advisor feedback logs */}
            {activeTab === "advisor" && (
              <motion.div
                key="tab-advisor"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Voice Assistant Diagnostic Panel (Col 5) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Earthy Interactive Voice Console */}
                  <div style={{
                    background: isDarkMode ? '#162318' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                    borderRadius: '14px',
                    padding: '20px 24px'
                  }} className="flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-950/10 rounded-full blur-3xl pointer-events-none" />
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '16px',
                        borderBottom: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                        paddingBottom: '12px'
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 600,
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> {localization[selectedLanguage].portalTitle}
                      </span>
                      <span 
                        id="active-locale-badge" 
                        style={{
                          fontSize: '10px',
                          fontFamily: "'JetBrains Mono', monospace",
                          background: isDarkMode ? '#1B4332' : '#EBF5EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          color: isDarkMode ? '#52B788' : '#1B4332',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {selectedLanguage === "hi" ? "हिंदी ACTIVE" : selectedLanguage === "ta" ? "தமிழ் ACTIVE" : "ENGLISH ACTIVE"}
                      </span>
                    </div>

                    <div 
                      style={{
                        height: '112px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                        border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                        borderRadius: '12px',
                        marginBottom: '16px',
                        padding: '16px',
                        position: 'relative'
                      }}
                    >
                      {isListening && (
                        <div className="absolute inset-0 bg-emerald-950/20 rounded-xl flex flex-col items-center justify-center animate-pulse">
                          <span className="text-xs text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" /> {localization[selectedLanguage].listening}
                          </span>
                        </div>
                      )}

                      {isSpeaking && !isListening && (
                        <div className="absolute inset-0 bg-stone-950/30 rounded-xl flex flex-col items-center justify-center">
                          <span className="text-xs text-stone-300 font-semibold mb-2">
                            {selectedLanguage === "hi" ? "सलाहकार बोल रहे हैं..." : selectedLanguage === "ta" ? "ஆலோசகர் பேசுகிறார்..." : "Consultant is speaking..."}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 h-10">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((bar) => {
                          if (isListening) {
                            const animationDelay = `${bar * 0.1}s`;
                            return (
                              <span 
                                key={bar} 
                                className="w-1 bg-emerald-500 rounded-full animate-bounce" 
                                style={{ 
                                  height: `${Math.floor(Math.sin(bar) * 16) + 24}px`,
                                  animationDelay,
                                  animationDuration: "0.6s"
                                }} 
                              />
                            );
                          }
                          if (isSpeaking) {
                            const animationDelay = `${bar * 0.05}s`;
                            return (
                              <span 
                                key={bar} 
                                className="w-1 bg-amber-400 rounded-full animate-bounce" 
                                style={{ 
                                  height: `${Math.floor(Math.cos(bar) * 12) + 16}px`,
                                  animationDelay,
                                  animationDuration: "1s"
                                }} 
                              />
                            );
                          }
                          return (
                            <span 
                              key={bar} 
                              style={{
                                background: isDarkMode ? '#243020' : '#DDD8CF',
                                width: '4px',
                                height: '12px',
                                borderRadius: '9999px'
                              }}
                            />
                          );
                        })}
                      </div>

                      {!isListening && !isSpeaking && (
                        <span 
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '12px',
                            fontWeight: 500,
                            color: isDarkMode ? '#8A9A8E' : '#6B6860',
                            marginTop: '8px'
                          }}
                        >
                          {selectedLanguage === "hi" ? "माइक इनपुट तैयार है" : selectedLanguage === "ta" ? "மைக்ரோஃபோன் தயார்" : "Microphone pipeline ready"}
                        </span>
                      )}
                    </div>

                    <div style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      padding: '40px 0', gap: '20px'
                    }}>
                      <div className="flex items-center gap-4">
                        <button
                          id="advisor-main-mic-btn"
                          onClick={toggleListening}
                          style={{
                            width: '96px', height: '96px', borderRadius: '50%',
                            border: 'none', cursor: 'pointer',
                            background: isListening ? '#E63946' : '#1B4332',
                            color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: isListening ? '0 0 30px rgba(230, 57, 70, 0.4)' : '0 10px 25px rgba(27, 67, 50, 0.2)',
                            transition: 'all 0.3s ease', margin: '0 auto', position: 'relative'
                          }}
                        >
                          <Mic style={{width: '36px', height: '36px'}} />
                          {isListening && (
                            <span className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping opacity-75" />
                          )}
                        </button>

                        {(isSpeaking || (response && !isMuted)) && (
                          <div className="flex flex-col gap-2">
                            {isSpeaking && (
                              <button
                                id="stop-audio-replay"
                                onClick={stopSpeaking}
                                style={{
                                  background: isDarkMode ? '#1B4332' : '#EBF5EE',
                                  border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                  color: isDarkMode ? '#52B788' : '#1B4332',
                                  padding: '12px',
                                  borderRadius: '50%',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                                title="Pause Audio Output"
                              >
                                <VolumeX className="w-5 h-5" />
                              </button>
                            )}

                            {!isSpeaking && response && !isMuted && (
                              <button
                                id="replay-audio-btn"
                                onClick={() => speakResponse(response)}
                                style={{
                                  background: isDarkMode ? '#1B4332' : '#EBF5EE',
                                  border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                  color: isDarkMode ? '#52B788' : '#1B4332',
                                  padding: '12px',
                                  borderRadius: '50%',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  transition: 'all 0.2s'
                                }}
                                title="Replay Audio response aloud"
                              >
                                <Volume2 className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      <div style={{textAlign: 'center'}}>
                        <p style={{
                          fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 500,
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18', margin: '0 0 6px 0'
                        }}>
                          {isListening ? localization[selectedLanguage].listening : (selectedLanguage === 'hi' ? 'दबाएं और बोलना शुरू करें' : selectedLanguage === 'ta' ? 'பேச தட்டவும்' : 'Tap to Speak')}
                        </p>
                        <p style={{
                          fontFamily: "'Inter', sans-serif", fontSize: '13px',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860', margin: 0
                        }}>
                          {selectedLanguage === 'hi' ? 'Subhash Palekar प्राकृतिक कृषि सिद्धांतों पर आधारित' : selectedLanguage === 'ta' ? 'சுபாஷ் பாலேக்கர் இயற்கை வேளாண்மை ஆலோசனைகள்' : 'Powered by Subhash Palekar ZBFN Core'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Query Input & Sample Image Drawer */}
                  <div style={{
                    background: isDarkMode ? '#162318' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                    borderRadius: '14px',
                    padding: '20px 24px'
                  }} className="flex flex-col gap-4">
                    <h3 
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: isDarkMode ? '#8A9A8E' : '#6B6860',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> {selectedLanguage === "hi" ? "परामर्श लें या फ़ोटो अपलोड करें" : selectedLanguage === "ta" ? "ஆலோசனை அல்லது படம் பதிவேற்றவும்" : "Consult Or Upload Media"}
                    </h3>
                    
                    <div className="space-y-3">
                      <textarea
                        id="manual-consult-textarea"
                        rows={3}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={selectedLanguage === "hi" ? "फसल के लक्षण, रोग, उर्वरक विधि या मौसम की समस्या यहाँ लिखें..." : selectedLanguage === "ta" ? "பயிரின் நோய் அறிகுறிகள், மண் வளம் அல்லது இயற்கை உரம் பற்றி எழுதுங்கள்..." : "Describe crop symptoms, weather concerns, seed plans, or tap below..."}
                        style={{
                          width: '100%',
                          background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          borderRadius: '12px',
                          padding: '12px',
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                          fontSize: '13px',
                          fontFamily: "'Inter', sans-serif",
                          outline: 'none',
                          resize: 'none'
                        }}
                      />

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <label 
                          style={{
                            display: 'flex',
                            flex: 1,
                            cursor: 'pointer',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                            border: `1px dashed ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                            borderRadius: '12px',
                            padding: '12px',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: isDarkMode ? '#8A9A8E' : '#6B6860'
                          }}
                        >
                          <Camera className="w-4 h-4 text-emerald-500" />
                          <span>{selectedLanguage === "hi" ? "पत्ती या खेत का फ़ोटो भेजें" : selectedLanguage === "ta" ? "இலை அல்லது பயிர் படம் பதிவேற்று" : "Upload leaf or farm photo"}</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange} 
                            className="hidden" 
                          />
                        </label>

                        {uploadedImage && (
                          <div 
                            style={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                              border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                              borderRadius: '12px',
                              padding: '6px 12px'
                            }}
                            className="sm:max-w-[150px]"
                          >
                            <img 
                              src={uploadedImage} 
                              alt="uploaded crop" 
                              className="w-8 h-8 rounded object-cover" 
                            />
                            <button 
                              onClick={() => setUploadedImage(null)}
                              style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#E63946',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                marginLeft: '8px'
                              }}
                            >
                              {selectedLanguage === "hi" ? "हटाएं" : selectedLanguage === "ta" ? "நீக்கு" : "Clear"}
                            </button>
                          </div>
                        )}

                        <button
                          id="submit-consultation-btn"
                          onClick={() => triggerConsultation()}
                          disabled={isLoading || (!query && !uploadedImage)}
                          style={{
                            background: '#1B4332',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            padding: '12px 20px',
                            fontSize: '12px',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: (isLoading || (!query && !uploadedImage)) ? 0.5 : 1
                          }}
                          className="w-full sm:w-auto shrink-0"
                        >
                          {isLoading ? (
                            <>
                              <span className="w-3.5 h-3.5 rounded-full border-2 border-transparent border-t-white animate-spin mr-1.5" />
                              {selectedLanguage === "hi" ? "सलाह ले रहे हैं..." : selectedLanguage === "ta" ? "ஆலோசனை கேட்கிறது..." : "Consulting..."}
                            </>
                          ) : (
                            <>
                              {localization[selectedLanguage].consultBtn} <ChevronRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div 
                      style={{
                        borderTop: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                        marginTop: '8px',
                        paddingTop: '12px'
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 600,
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          display: 'block',
                          marginBottom: '8px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {selectedLanguage === "hi" ? "कीट और पत्ती रोग निदान डेमो:" : selectedLanguage === "ta" ? "பூச்சி மற்றும் நோய் கண்டறிதல் டெமோ:" : "Simulate Pest & Crop Camera Diagnostics:"}
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {sampleLeafDiseases.map((sd, idx) => {
                          let renderedName = sd.name;
                          if (selectedLanguage === "hi") {
                            renderedName = sd.name.includes("Mildew") ? "फंगल फफूंदी धब्बा" : sd.name.includes("Sucking") ? "चूसक कीट नुकसान" : "स्वस्थ अंकुरित पौधे";
                          } else if (selectedLanguage === "ta") {
                            renderedName = sd.name.includes("Mildew") ? "பூஞ்சை காளான் புள்ளி" : sd.name.includes("Sucking") ? "சாறு உறிஞ்சும் பூச்சி" : "ஆரோக்கியமான நாற்றுகள்";
                          }
                          return (
                            <button
                              key={idx}
                              onClick={() => applySampleDisease(sd)}
                              style={{
                                background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                                border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                borderRadius: '12px',
                                padding: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                textAlign: 'left',
                                cursor: 'pointer'
                              }}
                              className="group/btn hover:shadow-sm transition"
                            >
                              <img 
                                src={sd.url} 
                                alt={sd.name} 
                                className="w-full h-11 object-cover rounded-lg mb-1 group-hover/btn:scale-105 transition duration-300" 
                              />
                              <span className="text-[10px] text-stone-400 font-medium truncate block">
                                {renderedName}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Local Saved Consultations Logs History */}
                  <div 
                    style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px 24px'
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 600,
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <History className="w-4 h-4 text-emerald-500" /> {localization[selectedLanguage].historyTitle}
                      </h3>
                      <button
                        onClick={() => {
                          localStorage.removeItem("farming_consultations");
                          setConsultHistory([]);
                        }}
                        style={{
                          background: 'rgba(230, 57, 70, 0.1)',
                          border: '1px solid rgba(230, 57, 70, 0.2)',
                          color: '#E63946',
                          borderRadius: '8px',
                          padding: '6px 12px',
                          fontSize: '11px',
                          fontWeight: 600,
                          fontFamily: "'Inter', sans-serif",
                          cursor: 'pointer'
                        }}
                      >
                        {localization[selectedLanguage].clearHistory}
                      </button>
                    </div>

                    {consultHistory.length === 0 ? (
                      <div 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '12px',
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          padding: '16px 0',
                          textAlign: 'center'
                        }}
                      >
                        {selectedLanguage === "hi" 
                          ? "अभी तक कोई वॉयस या रोग उपचार लॉग उपलब्ध नहीं है।" 
                          : selectedLanguage === "ta" 
                          ? "இதுவரை குரல்வழி ஆலோசனைகள் எதுவும் இல்லை." 
                          : "No consult history available yet."}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-1 font-sans">
                        {consultHistory.map((h) => (
                          <div 
                            key={h.id}
                            style={{
                              background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                              border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                            className="hover:shadow-sm transition"
                          >
                            <div 
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '10px',
                                color: isDarkMode ? '#8A9A8E' : '#6B6860',
                                marginBottom: '4px'
                              }}
                            >
                              <span>{h.timestamp}</span>
                              {h.cropContext && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 600, color: '#1B4332' }}>{h.cropContext}</span>}
                            </div>
                            <p 
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '12px',
                                fontWeight: 600,
                                color: isDarkMode ? '#E8E4DC' : '#1A1A18'
                              }}
                            >
                              Q: {h.query}
                            </p>
                            <p 
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '12px',
                                fontStyle: 'italic',
                                color: isDarkMode ? '#8A9A8E' : '#4A4943'
                              }}
                              className="line-clamp-2"
                            >
                              A: {h.response}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Natural Remedial Recipe Card Panel (Col 7) */}
                <div className="lg:col-span-7 flex flex-col gap-6 font-sans">
                  
                  {/* Dynamic Response Card */}
                  <div 
                    style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '400px'
                    }}
                  >
                    <div>
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '16px',
                          borderBottom: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                          paddingBottom: '12px'
                        }}
                      >
                        <h3 
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '15px',
                            fontWeight: 600,
                            color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" /> {localization[selectedLanguage].consultResponseTitle}
                        </h3>
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="w-2 h-2 rounded-full bg-emerald-600/60" />
                          <span className="w-2 h-2 rounded-full bg-emerald-700/30" />
                        </div>
                      </div>

                      {/* Display original crop image context if simulated */}
                      {uploadedImage && (
                        <div 
                          style={{
                            marginBottom: '16px',
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                            maxHeight: '192px'
                          }}
                        >
                          <img 
                            src={uploadedImage} 
                            alt="Active Diagnostic Image" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-3">
                            <span className="text-[10px] text-emerald-400 uppercase font-mono tracking-widest bg-stone-950/80 px-2 py-0.5 rounded border border-emerald-900/60">
                              Active Camera Scan Target
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Display Question if user asked one */}
                      {query && (
                        <div 
                          style={{
                            marginBottom: '16px',
                            background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                            padding: '12px',
                            borderRadius: '12px',
                            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`
                          }}
                        >
                          <span 
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '10px',
                              color: isDarkMode ? '#8A9A8E' : '#6B6860',
                              textTransform: 'uppercase',
                              display: 'block',
                              marginBottom: '4px'
                            }}
                          >
                            Active Query
                          </span>
                          <p 
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '13px',
                              fontWeight: 600,
                              color: isDarkMode ? '#E8E4DC' : '#1A1A18'
                            }}
                          >
                            {query}
                          </p>
                        </div>
                      )}

                      {/* Diagnostic response block */}
                      <div className="text-stone-300 leading-relaxed font-serif text-sm">
                        {isLoading ? (
                          <div className="py-20 flex flex-col items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full border-4 border-emerald-950 border-t-emerald-500 animate-spin" />
                            <p 
                              style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '12px',
                                color: isDarkMode ? '#8A9A8E' : '#6B6860'
                              }}
                              className="animate-pulse"
                            >
                              {selectedLanguage === "hi" ? "कृषि बुद्धिमत्ता विश्लेषण चल रहा है..." : selectedLanguage === "ta" ? "இயற்கை வேளாண் நுண்ணறிவு பகுப்பாய்வு..." : "Farming intelligence parsing..."}
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {response ? (
                              <>
                                <div className="space-y-4 mb-4">
                                  {response.split("\n\n").map((para, i) => (
                                    <p 
                                      key={i} 
                                      style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '15px',
                                        color: isDarkMode ? '#E8E4DC' : '#2D2D2A',
                                        lineHeight: '1.6'
                                      }}
                                    >
                                      {para}
                                    </p>
                                  ))}
                                </div>
                                <div 
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginTop: '16px',
                                    paddingTop: '12px',
                                    borderTop: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`
                                  }}
                                >
                                  <button
                                    onClick={() => {
                                      if (isSpeaking) {
                                        stopSpeaking();
                                      } else {
                                        speakResponse(response);
                                      }
                                    }}
                                    style={{
                                      background: isDarkMode ? '#1B4332' : '#EBF5EE',
                                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                      color: isDarkMode ? '#52B788' : '#1B4332',
                                      borderRadius: '8px',
                                      padding: '6px 12px',
                                      fontSize: '11px',
                                      fontWeight: 600,
                                      fontFamily: "'Inter', sans-serif",
                                      cursor: 'pointer',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '6px'
                                    }}
                                  >
                                    {isSpeaking ? (
                                      <>
                                        <VolumeX className="w-3.5 h-3.5" />
                                        <span>{selectedLanguage === "hi" ? "बोलना रोकें" : selectedLanguage === "ta" ? "நிறுத்து" : "Stop Speaking"}</span>
                                      </>
                                    ) : (
                                      <>
                                        <Volume2 className="w-3.5 h-3.5" />
                                        <span>{selectedLanguage === "hi" ? "ज़ोर से पढ़ें" : selectedLanguage === "ta" ? "உரக்கப் படிக்கவும்" : "Read Aloud"}</span>
                                      </>
                                    )}
                                  </button>

                                  <button
                                    onClick={() => {
                                      let shareText = "";
                                      if (selectedLanguage === "ta") {
                                        shareText = "🌱 பூமி விவசாய ஆலோசனை\nபயிர்: " + selectedCrop + "\n\n" + response.substring(0, 280) + "\n\nவிலையற்ற ஆலோசனை: bhoomi.app";
                                      } else if (selectedLanguage === "hi") {
                                        shareText = "🌱 भूमि कृषि सलाह\nफसल: " + selectedCrop + "\n\n" + response.substring(0, 280) + "\n\nमुफ्त सलाह: bhoomi.app";
                                      } else {
                                        shareText = "🌱 Bhoomi Farming Advice\nCrop: " + selectedCrop + "\n\n" + response.substring(0, 280) + "\n\nGet free advice at bhoomi.app";
                                      }
                                      window.open('https://wa.me/?text=' + encodeURIComponent(shareText));
                                    }}
                                    style={{
                                      background: isDarkMode ? '#1B4332' : '#EBF5EE',
                                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                      color: isDarkMode ? '#52B788' : '#1B4332',
                                      borderRadius: '8px',
                                      padding: '6px 12px',
                                      fontSize: '11px',
                                      fontWeight: 600,
                                      fontFamily: "'Inter', sans-serif",
                                      cursor: 'pointer',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '6px'
                                    }}
                                  >
                                    <Share2 className="w-3.5 h-3.5" />
                                    <span>
                                      {selectedLanguage === "hi" ? "WhatsApp पर भेजें" : selectedLanguage === "ta" ? "WhatsApp பகிர்" : "Share on WhatsApp"}
                                    </span>
                                  </button>
                                </div>
                              </>
                            ) : (
                              <p 
                                style={{
                                  fontFamily: "'Playfair Display', serif",
                                  fontSize: '14px',
                                  fontStyle: 'italic',
                                  color: isDarkMode ? '#8A9A8E' : '#6B6860',
                                  textAlign: 'center',
                                  padding: '80px 0'
                                }}
                              >
                                {selectedLanguage === "hi" 
                                  ? "सलाहकार जवाब के लिए कोई वॉयस सवाल पूछें या 'सलाह लें' बटन दबाएं।" 
                                  : selectedLanguage === "ta" 
                                  ? "ஆலோசனையைப் பெற ஏதேனும் கேள்வியைக் கேளுங்கள்." 
                                  : "Ask a question aloud or select a sample diagnosis target above to receive expert advisory."}
                              </p>
                            )}

                            {/* Organic Recipe Overlays inside the Advisor Response panel */}
                            {response && (
                              <div 
                                style={{
                                  borderTop: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                                  marginTop: '16px',
                                  paddingTop: '16px'
                                }}
                                className="space-y-3"
                              >
                                <span 
                                  style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '10px',
                                    fontWeight: 600,
                                    color: isDarkMode ? '#8A9A8E' : '#6B6860',
                                    textTransform: 'uppercase',
                                    display: 'block'
                                  }}
                                >
                                  {selectedLanguage === "hi" ? "संबंधित जैविक नुस्खा सहायक" : selectedLanguage === "ta" ? "தொடர்புடைய இயற்கை செய்முறை உதவியாளர்" : "Related Organic Recipe Assistant"}
                                </span>
                                
                                {/* Neemastra recipe helper */}
                                {(response.toLowerCase().includes("neemastra") || response.includes("नीमास्त्र") || response.includes("वेப்பங் கரைசல்")) && (
                                  <div 
                                    style={{
                                      background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                      borderRadius: '12px',
                                      padding: '12px'
                                    }}
                                  >
                                    <span 
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        color: '#1B4332',
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        marginBottom: '4px'
                                      }}
                                    >
                                      {selectedLanguage === "hi" ? "नीमास्त्र (Neemastra)" : selectedLanguage === "ta" ? "வேப்பங் கரைசல்" : "Neemastra (Sucking Pests)"}
                                    </span>
                                    <span 
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '12px',
                                        color: isDarkMode ? '#8A9A8E' : '#4A4943',
                                        lineHeight: '1.5',
                                        display: 'block'
                                      }}
                                    >
                                      {selectedLanguage === "hi" 
                                        ? "5 लीटर गोमूत्र + 1 किलो गोबर + 5 किलो नीम की पिसी पत्तियां। 100 लीटर पानी में मिलाकर 48 घंटे रखें। चूसक कीटों के लिए उपयोगी।" 
                                        : selectedLanguage === "ta" 
                                        ? "5 லிட்டர் கோமியம் + 1 கிலோ சாணம் + 5 கிலோ அரைத்த வேப்ப இலை. 100 லிட்டர் நீரில் 48 மணி நேரம் ஊற வைக்கவும்." 
                                        : "5L cow urine + 1kg cow dung + 5kg crushed neem leaves in 100L water. Ferment 48 hours for sucking pests & aphids."}
                                    </span>
                                  </div>
                                )}

                                {/* Agniastra recipe helper */}
                                {(response.toLowerCase().includes("agniastra") || response.includes("आग्नेयास्त्र") || response.includes("அக்னி அஸ்திரம்")) && (
                                  <div 
                                    style={{
                                      background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                      borderRadius: '12px',
                                      padding: '12px'
                                    }}
                                  >
                                    <span 
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        color: '#1B4332',
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        marginBottom: '4px'
                                      }}
                                    >
                                      {selectedLanguage === "hi" ? "आग्नेयास्त्र (Agniastra)" : selectedLanguage === "ta" ? "அக்னி அஸ்திரம்" : "Agniastra (Caterpillars)"}
                                    </span>
                                    <span 
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '12px',
                                        color: isDarkMode ? '#8A9A8E' : '#4A4943',
                                        lineHeight: '1.5',
                                        display: 'block'
                                      }}
                                    >
                                      {selectedLanguage === "hi" 
                                        ? "10 लीटर गोमूत्र को उबालें + 1 किलो नीम पत्ती चटनी + 500 ग्राम हरी मिर्च चटनी + 250 ग्राम लहसुन पेस्ट। ठंडा कर छानें।" 
                                        : selectedLanguage === "ta" 
                                        ? "10 லிட்டர் கோமியம் கொதிக்க வைத்து + 1 கிலோ வேப்ப இலை + 500 கிராம் மிளகாய் விழுது + 250 கிராம் பூண்டு விழுது சேர்க்கவும்." 
                                        : "Boil 10L cow urine with 1kg neem paste, 500g hot chili paste, and 250g garlic paste. Cool, strain, and spray against borers."}
                                    </span>
                                  </div>
                                )}

                                {/* Sour buttermilk recipe helper */}
                                {(response.toLowerCase().includes("buttermilk") || response.toLowerCase().includes("chach") || response.toLowerCase().includes("moru") || response.includes("मट्ठा") || response.includes("மோர்")) && (
                                  <div 
                                    style={{
                                      background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                                      borderRadius: '12px',
                                      padding: '12px'
                                    }}
                                  >
                                    <span 
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        color: '#1B4332',
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        marginBottom: '4px'
                                      }}
                                    >
                                      {selectedLanguage === "hi" ? "खट्टी छाछ (Sour Buttermilk)" : selectedLanguage === "ta" ? "புளித்த மோர் கரைசல்" : "Sour Buttermilk (Fungicide)"}
                                    </span>
                                    <span 
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '12px',
                                        color: isDarkMode ? '#8A9A8E' : '#4A4943',
                                        lineHeight: '1.5',
                                        display: 'block'
                                      }}
                                    >
                                      {selectedLanguage === "hi" 
                                        ? "5-10 दिन पुरानी खट्टी छाछ को तांबे के बर्तन में रखें। 2 लीटर छाछ को 100 लीटर पानी में मिलाकर फफूंदी रोगों पर छिड़कें।" 
                                        : selectedLanguage === "ta" 
                                        ? "5-10 நாட்கள் புளித்த மோர் கரைசலை செப்பு பாத்திரத்தில் வைக்கவும். 2 லிட்டரை 100 லிட்டர் நீரில் கலந்து தெளிக்கவும்." 
                                        : "Keep sour buttermilk in copper vessel for 5-10 days. Mix 2L in 100L water and spray as a natural organic fungicide."}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Weather & Market Intelligence */}
            {activeTab === "intelligence" && (
              <motion.div
                key="tab-intelligence"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-6"
              >
                {intelligenceData && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
                    
                    {/* Column 4: Left Climate Panel */}
                    <div className="md:col-span-4 flex flex-col justify-between" style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px 24px'
                    }}>
                      <div>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '10px',
                          fontWeight: 600,
                          color: isDarkMode ? '#8A9A8E' : '#6B6860',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '12px'
                        }}>
                          {selectedLanguage === "hi" ? "सूक्ष्म जलवायु सलाहकार" : selectedLanguage === "ta" ? "நுண்ணிய காலநிலை ஆலோசனை" : "Micro-Climate Advisory"}
                        </span>
                        
                        {/* Temp and Forecast Display */}
                        <div className="flex items-center gap-4 mb-5">
                          {getWeatherIcon(intelligenceData.weather.forecast)}
                          <div>
                            <p style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '36px',
                              fontWeight: 800,
                              color: '#D97706',
                              letterSpacing: '-0.02em',
                              margin: 0
                            }}>{intelligenceData.weather.temp}°C</p>
                            <span style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '12px',
                              fontWeight: 600,
                              color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                              display: 'block'
                            }}>
                              {selectedLanguage === "hi" && intelligenceData.weather.forecast.includes("Rain") ? "बारिश की संभावना" : selectedLanguage === "hi" && intelligenceData.weather.forecast.includes("Warm") ? "गर्म मौसम" : selectedLanguage === "hi" ? "सुहावना मौसम" : selectedLanguage === "ta" && intelligenceData.weather.forecast.includes("Rain") ? "மழைக்காலம்" : selectedLanguage === "ta" ? "மிதமான வெப்பம்" : intelligenceData.weather.forecast}
                            </span>
                            <span style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '10px',
                              textTransform: 'uppercase',
                              color: isDarkMode ? '#8A9A8E' : '#6B6860',
                              display: 'block',
                              marginTop: '2px'
                            }}>
                              {selectedLanguage === "hi" ? "पूर्वानुमान" : selectedLanguage === "ta" ? "வானிலை முன்னறிவிப்பு" : "Forecast"}
                            </span>
                          </div>
                        </div>

                        {/* Responsive Visual SVG Rings for Humidity and Rain Chance */}
                        <div style={{
                          borderTop: `1px solid ${isDarkMode ? '#243020' : '#EDE8DF'}`,
                          paddingTop: '16px',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '16px',
                          marginBottom: '16px'
                        }}>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '12px',
                            background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                            borderRadius: '12px',
                            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`
                          }}>
                            <span style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '9px',
                              color: isDarkMode ? '#8A9A8E' : '#6B6860',
                              textTransform: 'uppercase',
                              marginBottom: '8px',
                              textAlign: 'center'
                            }}>
                              {selectedLanguage === "hi" ? "आर्द्रता (नमी)" : selectedLanguage === "ta" ? "ஈரப்பதம்" : "Humidity"}
                            </span>
                            <div className="relative w-12 h-12 flex items-center justify-center">
                              <svg className="w-12 h-12 transform -rotate-90">
                                <circle cx="24" cy="24" r="20" stroke={isDarkMode ? '#243020' : '#EDE8DF'} strokeWidth="3" fill="transparent" />
                                <circle cx="24" cy="24" r="20" className="stroke-blue-500" strokeWidth="3" fill="transparent" strokeDasharray={`${2 * Math.PI * 20}`} strokeDashoffset={`${2 * Math.PI * 20 * (1 - (intelligenceData.weather.humidity || 65) / 100)}`} />
                              </svg>
                              <span style={{
                                position: 'absolute',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '12px',
                                fontWeight: 700,
                                color: isDarkMode ? '#E8E4DC' : '#1A1A18'
                              }}>{intelligenceData.weather.humidity || 65}%</span>
                            </div>
                          </div>

                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '12px',
                            background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                            borderRadius: '12px',
                            border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`
                          }}>
                            <span style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '9px',
                              color: isDarkMode ? '#8A9A8E' : '#6B6860',
                              textTransform: 'uppercase',
                              marginBottom: '8px',
                              textAlign: 'center'
                            }}>
                              {selectedLanguage === "hi" ? "वर्षा की संभावना" : selectedLanguage === "ta" ? "மழை வாய்ப்பு" : "Rain Chance"}
                            </span>
                            <div className="relative w-12 h-12 flex items-center justify-center">
                              <svg className="w-12 h-12 transform -rotate-90">
                                <circle cx="24" cy="24" r="20" stroke={isDarkMode ? '#243020' : '#EDE8DF'} strokeWidth="3" fill="transparent" />
                                <circle cx="24" cy="24" r="20" stroke="#10B981" strokeWidth="3" fill="transparent" strokeDasharray={`${2 * Math.PI * 20}`} strokeDashoffset={`${2 * Math.PI * 20 * (1 - parseInt(intelligenceData.weather.rainChance || "20") / 100)}`} />
                              </svg>
                              <span style={{
                                position: 'absolute',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '12px',
                                fontWeight: 700,
                                color: isDarkMode ? '#E8E4DC' : '#1A1A18'
                              }}>{intelligenceData.weather.rainChance || 20}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          let weatherSpoken = "";
                          if (selectedLanguage === "hi") {
                            let sugHi = intelligenceData.weather.suggestion;
                            let sugLower = sugHi.toLowerCase();
                            if (sugLower.includes("optimum")) {
                              sugHi = "इष्टतम नमी स्तर (वापसा)। केवल हल्की सिंचाई करें या पलवार बिछाएं।";
                            } else if (sugLower.includes("high heat") || sugLower.includes("evaporation") || sugLower.includes("sunlight")) {
                              sugHi = "अत्यधिक सूरज की रोशनी: वाष्पीकरण रोकने के लिए सूखे पत्तों की पलवार (आच्छादन) आवश्यक है।";
                            }
                            weatherSpoken = `${selectedRegion === "Central Plateau" ? "मध्य पठार" : selectedRegion === "Coastal Region" ? "तटीय क्षेत्र" : selectedRegion === "Hilly Areas" ? "पहाड़ी क्षेत्र" : "नदी घाटी"} क्षेत्र में वर्तमान तापमान ${intelligenceData.weather.temp} डिग्री सेल्सियस है। क्षेत्रीय मौसम सलाह: ${sugHi}`;
                          } else if (selectedLanguage === "ta") {
                            let sugTa = intelligenceData.weather.suggestion;
                            let sugLower = sugTa.toLowerCase();
                            let regionTa = selectedRegion;
                            if (selectedRegion === "Central Plateau") regionTa = "மத்திய பீடபூமி";
                            else if (selectedRegion === "Coastal Region") regionTa = "கடற்கரை பகுதி";
                            else if (selectedRegion === "Hilly Areas") regionTa = "மலைப்பகுதி";
                            else if (selectedRegion === "River Valley") regionTa = "நதி பள்ளத்தாக்கு";

                            if (sugLower.includes("optimum")) {
                              sugTa = "சரியான வாபசா ஈரப்பதம் உள்ளது. லேசான பாசனம் போதுமானது.";
                            } else if (sugLower.includes("high heat") || sugLower.includes("evaporation") || sugLower.includes("sunlight")) {
                              sugTa = "வெப்பம் அதிகம்: மூடாக்கு முறை மூலம் ஈரப்பதம் காக்கவும்.";
                            }
                            weatherSpoken = `${regionTa} பகுதியில் தற்போதைய வெப்பநிலை ${intelligenceData.weather.temp} டிகிரி செல்சியஸ் ஆகும். வட்டார வானிலை ஆலோசனை: ${sugTa}`;
                          } else {
                            weatherSpoken = `The current temperature in the ${selectedRegion} is ${intelligenceData.weather.temp} degrees Celsius. Local advisory recommends: ${intelligenceData.weather.suggestion}`;
                          }
                          speakResponse(weatherSpoken);
                        }}
                        style={{
                          width: '100%',
                          marginTop: '12px',
                          background: isDarkMode ? '#1B4332' : '#EBF5EE',
                          border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                          color: isDarkMode ? '#52B788' : '#1B4332',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>
                          {selectedLanguage === "hi" ? "मौसम सलाह सुनें" : selectedLanguage === "ta" ? "வானிலை ஆலோசனை கேட்க" : "Read Climate Advice"}
                        </span>
                      </button>
                    </div>

                    {/* Column 8: Right Climate Panel */}
                    <div className="md:col-span-8 flex flex-col justify-between" style={{
                      background: isDarkMode ? '#162318' : '#FFFFFF',
                      border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                      borderRadius: '14px',
                      padding: '20px 24px'
                    }}>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '11px',
                            fontWeight: 600,
                            color: isDarkMode ? '#8A9A8E' : '#6B6860',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                          }}>
                            {selectedLanguage === "hi" ? "प्राकृतिक नमी (वापसा) और पलवार (Mulch) की सलाह" : selectedLanguage === "ta" ? "இயற்கை ஈரப்பதம் (வாபசா) & மூடாக்கு பரிந்துரை" : "Natural Moisture (Whapasa) & Mulch Recommendation"}
                          </span>
                        </div>
                        <h4 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '15px',
                          fontWeight: 600,
                          color: isDarkMode ? '#E8E4DC' : '#1A1A18',
                          marginBottom: '8px'
                        }}>
                          {selectedLanguage === "hi" && intelligenceData.weather.suggestion.includes("Optimum") ? "इष्टतम नमी स्तर (वापसा)। केवल हल्की सिंचाई करें या पलवार बिछाएं।" : selectedLanguage === "hi" ? "अत्यधिक सूरज की रोशनी: वाष्पीकरण रोकने के लिए सूखे पत्तों की पलवार (Acchadana) आवश्यक है।" : selectedLanguage === "ta" && intelligenceData.weather.suggestion.includes("Optimum") ? "சரியான வாபசா ஈரப்பதம் உள்ளது. லேசான பாசனம் போதுமானது." : selectedLanguage === "ta" ? "வெப்பம் அதிகம்: மூடாக்கு முறை மூலம் ஈரப்பதம் காக்கவும்." : intelligenceData.weather.suggestion}
                        </h4>
                        <p style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          color: isDarkMode ? '#8A9A8E' : '#4A4943',
                          lineHeight: '1.5',
                          maxWidth: '36rem'
                        }}>
                          {selectedLanguage === "hi" 
                            ? "वापसा मिट्टी के छिद्रों में 50% जलवाष्प and 50% हवा की उपस्थिति की स्थिति है। जरूरत से ज्यादा पानी देने से ये छिद्र कीचड़ से भर जाते हैं जिससे मिट्टी के जीवाणु निष्क्रिय हो जाते हैं। नमी बनाए रखने के लिए सूखी सूखी घास की पलवार (आच्छादन) अवश्य करें।"
                            : selectedLanguage === "ta"
                            ? "வாபசா என்பது மண் துளைகளில் 50% நீராவி மற்றும் 50% காற்று கலந்திருக்கும் நிலை ஆகும். அதிக நீர் பாசனம் வேர்களை அழுகச் செய்யும். மரக்கழிவுகள் மற்றும் வைக்கோல் கொண்டு மூடாக்கு (Acchadana) செய்வதன் மூலம் ஈரப்பதத்தை பாதுகாக்கலாம்."
                            : "Whapasa is the microclimatic mix of 50% water vapour and 50% air molecules in the soil cavities. Overwatering floods these cavities, destroying natural microbial activity. Ensure permanent straw blanket covering (Acchadana) to preserve deep ground moisture natively."}
                        </p>
                      </div>

                      <div style={{
                        marginTop: '12px',
                        background: isDarkMode ? '#0F1A14' : '#F8F4EE',
                        padding: '12px',
                        borderRadius: '8px',
                        border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                        fontSize: '11px',
                        color: isDarkMode ? '#8A9A8E' : '#4A4943',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                        <span>
                          {selectedLanguage === "hi" 
                            ? "तेज गर्मी में कृत्रिम यूरिया डालने से मिट्टी के केंचुए और जीवाणु नष्ट हो जाते हैं। केवल प्राकृतिक आग्नेयास्त्र या जीवामृत का ही सहयोग लें।" 
                            : selectedLanguage === "ta"
                            ? "அதிக வெப்பத்தில் இரசாயன உரங்கள் பயன்படுத்துவது நன்மை செய்யும் நுண்ணுயிரிகளை அழிக்கும். ஜீவாமிர்தம் பயன்படுத்தவும்." 
                            : "Applying synthetic nitrogen under high heat leads to microbial burnout. Prefer organic neem-coated leaf matter."}
                        </span>
                      </div>
                    </div>

                  </div>
                )}



                {/* Crop Market Price List displaying Organic Premium indices */}
                {intelligenceData && (
                  <div className="font-sans" style={{
                    background: isDarkMode ? '#162318' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                    borderRadius: '14px',
                    padding: '20px 24px'
                  }}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-900 pb-3 mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-emerald-500" /> {selectedLanguage === "hi" ? "क्षेत्रीय जैविक बाजार दर पत्रक" : selectedLanguage === "ta" ? "வட்டார இயற்கை சந்தை விலை நிலவரம்" : "Regional Organic Market Ledger"}
                        </h3>
                        <p className="text-xs text-stone-400">
                          {selectedLanguage === "hi" ? "पारंपरिक रासायनिक खेती की तुलना में प्राकृतिक जैविक उपज के प्रीमियम दाम।" : selectedLanguage === "ta" ? "இரசாயன முறை வளர்ப்பை விட இயற்கை முறையில் விளையும் பயிர்களின் கூடுதல் லாபம்." : "Comparing standard prices against verified organic premium grades."}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400 bg-stone-900 border border-stone-800 px-2 py-0.5 rounded">
                        {selectedLanguage === "hi" ? "दरें: अनुमानित (±3% दैनिक उतार-चढ़ाव)" : selectedLanguage === "ta" ? "விலை: மதிப்பீடு (±3% தினசரி ஏற்ற இறக்கம்)" : "Prices: Estimated (±3% Daily Variation)"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {intelligenceData.marketPrices.map((p) => {
                        let localizedName = p.name;
                        if (selectedLanguage === "hi") {
                          localizedName = p.name.includes("Paddy") ? "जैविक चावल (धान)" : p.name.includes("Cotton") ? "देसी कपास" : p.name.includes("Turmeric") ? "हल्दी" : "फल (पपीता/केला)";
                        } else if (selectedLanguage === "ta") {
                          localizedName = p.name.includes("Paddy") ? "இயற்கை நெல்" : p.name.includes("Cotton") ? "நாட்டு பருத்தி" : p.name.includes("Turmeric") ? "மஞ்சள்" : "பழங்கள் (பப்பாளி/வாழை)";
                        }
                        const getAgmarknetUrl = (id: string) => {
                          const mapping: Record<string, string> = {
                            "Paddy(Dhan)(Common)": "https://agmarknet.gov.in/SearchCmmMkt.aspx?Cty=Paddy%28Dhan%29%28Common%29&State=Tamil+Nadu",
                            "Tomato": "https://agmarknet.gov.in/SearchCmmMkt.aspx?Cty=Tomato&State=Tamil+Nadu",
                            "Onion": "https://agmarknet.gov.in/SearchCmmMkt.aspx?Cty=Onion&State=Tamil+Nadu",
                            "Banana": "https://agmarknet.gov.in/SearchCmmMkt.aspx?Cty=Banana&State=Tamil+Nadu",
                            "Cotton": "https://agmarknet.gov.in/SearchCmmMkt.aspx?Cty=Cotton&State=Tamil+Nadu"
                          };
                          return mapping[id] || `https://agmarknet.gov.in/SearchCmmMkt.aspx?Cty=${encodeURIComponent(id)}&State=Tamil+Nadu`;
                        };
                        return (
                          <div key={p.id} className="p-3 bg-stone-900 rounded-xl border border-stone-800 hover:border-stone-750 transition flex items-center justify-between">
                            <div>
                              <span className="text-xs font-bold text-white block">{localizedName}</span>
                              <span className="text-[10px] text-stone-500 font-mono block">
                                {selectedLanguage === "hi" ? "इकाई" : selectedLanguage === "ta" ? "அலகு" : "Unit"}: {p.unit === "Quintal" && selectedLanguage === "hi" ? "क्विंटल" : p.unit === "Quintal" && selectedLanguage === "ta" ? "குவிண்டால்" : p.unit}
                              </span>
                              <a 
                                href={getAgmarknetUrl(p.id)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-emerald-400 hover:text-emerald-300 font-medium underline mt-1.5 inline-block"
                              >
                                {selectedLanguage === "hi" ? "APMC मूल्य →" : selectedLanguage === "ta" ? "APMC விலை →" : "Check APMC →"}
                              </a>
                            </div>
                            
                            <div className="text-right font-sans">
                              <div className="flex items-center justify-end gap-1.5">
                                <span className="text-sm font-bold text-emerald-400">₹{p.currentPrice.toLocaleString()}</span>
                                <span className="text-[9px] text-stone-500 font-mono uppercase tracking-wider select-none font-semibold">
                                  {selectedLanguage === "hi" ? "अनुमानित" : selectedLanguage === "ta" ? "மதிப்பீடு" : "Estimated"}
                                </span>
                              </div>
                              <span className="text-[10px] inline-flex items-center gap-0.5 bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase font-mono tracking-tight mt-1">
                                {selectedLanguage === "hi" ? "प्रीमियम" : selectedLanguage === "ta" ? "கூடுதல்" : "Premium"} {p.organicPremium}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 bg-emerald-950/25 p-3.5 rounded-xl border border-emerald-800/40 text-xs text-stone-300 leading-relaxed font-sans">
                      {selectedLanguage === "hi" ? (
                        <p>💡 **आर्थिक लाभ**: प्राकृतिक खेती शून्य लागत (कोई बाहरी उर्वरक कतई नहीं) के साथ तुरंत पीजीएस-भारत (PGS India) प्रमाणीकरण पर **18% से 40% अतिरिक्त प्रीमियम मुनाफा** देती है।</p>
                      ) : selectedLanguage === "ta" ? (
                        <p>💡 **பொருளாதார நன்மை**: இயற்கை முறையில் பூஜ்ஜிய செலவுடன் (உரக் கொள்முதல் இல்லை), PGS சான்றிதழ் பெறும்போது உடனடியாக **18% முதல் 40% வரை கூடுதல் விலையும்** நிகர லாபமும் கிடைக்கும்.</p>
                      ) : (
                        <p>💡 **Economic Edge**: Natural farming lowers input costs to zero (no chemical purchases), yielding an immediate **18% to 40% organic premium profit** margin upon PGS certification.</p>
                      )}
                    </div>
                  </div>
                )}

              </motion.div>
            )}            {/* TAB 3: Interactive Multilevel Cropping Model Canopy */}
            {activeTab === "education" && (
              <motion.div
                key="tab-education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex-1 flex flex-col gap-6"
              >
                
                {/* Model selector toggles */}
                <div style={{
                  background: isDarkMode ? '#162318' : '#FFFFFF',
                  border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                  borderRadius: '14px',
                  padding: '20px 24px'
                }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-stone-900">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-emerald-500" /> {selectedLanguage === "hi" ? "बहुस्तरीय कृषि वानिकी पाठशाला" : selectedLanguage === "ta" ? "பன்முக அடுக்கு வேளாண் காடு அறியும் பகுதி" : "Layered Agroforestry Classroom"}
                      </h3>
                      <p className="text-xs text-stone-400">
                        {selectedLanguage === "hi" ? "जड़ों और धूप के अनुकूलन के लिए विभिन्न स्तरों का पारस्परिक लाभ बढ़ाएं।" : selectedLanguage === "ta" ? "மண் வளம் மற்றும் சூரிய ஒளியின் தொடர்பை அதிகரிக்கவும்." : "Maximize multi-tier root and canopy sunlight interaction."}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {croppingModels.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => {
                            setSelectedModelId(m.id);
                            setActiveEduLayer(0); // reset active to top layer
                          }}
                          className={`py-1.5 px-3 text-[11px] font-bold uppercase rounded-lg border transition ${
                            selectedModelId === m.id
                              ? "bg-emerald-600 text-stone-950 border-emerald-500"
                              : "bg-stone-900 border-stone-800 text-stone-400 hover:text-white"
                          }`}
                        >
                          {selectedLanguage === "hi" ? (m.name.includes("Horticulture") ? "बागवानी मॉडल" : "अनाज/दाल मॉडल") : selectedLanguage === "ta" ? (m.name.includes("Horticulture") ? "தோட்டக்கலை" : "தானியம் & பருப்பு") : m.name.split(" ")[0] + " Model"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active selected model general details */}
                  {croppingModels.find((m) => m.id === selectedModelId) && (
                    <div>
                      <p className="text-xs text-stone-300 leading-relaxed font-semibold">
                        {selectedLanguage === "hi" && selectedModelId === "model_orchard" ? "5-स्तरीय बागवानी मॉडल: फलों के ऊंचे पेड़ों के साथ नीचे मसाले और कंद फसलों का प्राकृतिक सहजीवन।" : selectedLanguage === "hi" ? "3-स्तरीय अल्पकालिक अनाज फसल मॉडल: बाजरा, कपास, अरहर और कम दूरी की मटर का आदर्श चक्र।" : selectedLanguage === "ta" && selectedModelId === "model_orchard" ? "5 அடுக்கு தோட்டக்கலை: உயரமான பழ மரங்கள், மிளகு, மஞ்சள் மற்றும் கிழங்கு வகைகளின் கூட்டுப்பயிர்." : selectedLanguage === "ta" ? "3 அடுக்கு தானியப் பயிர்: பருத்தி, துவரை, உளுந்து ஆகியவற்றை ஒரே நிலத்தில் பயிரிடுதல்." : croppingModels.find((m) => m.id === selectedModelId)!.description}
                      </p>
                      <p className="text-[11px] mt-1 text-emerald-400 font-mono">
                        {selectedLanguage === "hi" ? "सर्वोत्तम मिट्टी:" : selectedLanguage === "ta" ? "சிறந்த மண் வளம்:" : "Ideal conditions:"} {selectedLanguage === "hi" && selectedModelId === "model_orchard" ? "उच्च नमी, गहरी दोमट या लाल बलुआ मिट्टी" : selectedLanguage === "hi" ? "कम पानी, काली कपासी या सामान्य शुष्क मिट्टी" : selectedLanguage === "ta" && selectedModelId === "model_orchard" ? "அதிக ஈரப்பதம் மற்றும் செம்மண் பகுதி" : selectedLanguage === "ta" ? "குறைந்த நீர், கரிசல் மண் அல்லது உலர் நிலங்கள்" : croppingModels.find((m) => m.id === selectedModelId)!.idealFor}
                      </p>
                    </div>
                  )}
                </div>

                {/* Multilevel Visual Stack Interactive Selector */}
                {croppingModels.find((m) => m.id === selectedModelId) && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
                    
                    {/* The Visual vertical stack representation (interactive canopy diagram) */}
                    <div className="md:col-span-6 flex flex-col gap-2 bg-stone-950 p-4 rounded-2xl border border-stone-800 shadow-xl">
                      <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase block mb-2 text-center">
                        {selectedLanguage === "hi" ? "↕ स्तर को छूकर जीवाणु सहजीवन की जानकारी पाएं" : selectedLanguage === "ta" ? "↕ அடுக்குகளைத் தொட்டு பயன்களை அறியவும்" : "↕ Tap Canopy Layer to Reveal Symbiosis"}
                      </span>
                      
                      <div className="space-y-1.5">
                        {croppingModels.find((m) => m.id === selectedModelId)!.layers.map((layer, index) => {
                          const isActive = activeEduLayer === index;
                          let levelName = layer.level;
                          let plantsName = layer.plants;
                          if (selectedLanguage === "hi") {
                            levelName = layer.level.includes("Overstory") ? "१. अति-ऊपरी स्तर (Overstory)" : layer.level.includes("Understory") ? "२. मध्यम पेड़ स्तर (Understory)" : layer.level.includes("Shrub") ? "३. झाड़ी और फल स्तर (Shrub/Bush)" : layer.level.includes("Herbaceous") ? "४. शाकीय मसाला स्तर (Herbaceous)" : "५. भूतल कंद स्तर (Root)";
                            plantsName = layer.plants.includes("Coconut") ? "नारियल, अखरोट और इमली" : layer.plants.includes("Banana") ? "केला, आम और पपीता" : layer.plants.includes("Coffee") ? "कॉफी, नींबू और ड्रमस्टिक" : layer.plants.includes("Turmeric") ? "हल्दी, अदरक और कंद" : layer.plants.includes("Arhar") ? "अरहर, बाजरा और लोबिया" : plantsName;
                          } else if (selectedLanguage === "ta") {
                            levelName = layer.level.includes("Overstory") ? "1. உயரடுக்கு (Overstory)" : layer.level.includes("Understory") ? "2. நடுத்தர அடுக்கு (Understory)" : layer.level.includes("Shrub") ? "3. புதர்ச்செடி அடுக்கு (Shrub/Bush)" : layer.level.includes("Herbaceous") ? "4. சிறுசெடி அடுக்கு (Herbaceous)" : "5. வேர்ப்பயிர் அடுக்கு (Root)";
                            plantsName = layer.plants.includes("Coconut") ? "தென்னை மற்றும் புளி" : layer.plants.includes("Banana") ? "வாழை மற்றும் பப்பாளி" : layer.plants.includes("Coffee") ? "காபி மற்றும் எலுமிச்சை" : layer.plants.includes("Turmeric") ? "மஞ்சள் மற்றும் இஞ்சி" : layer.plants.includes("Arhar") ? "துவரை மற்றும் உளுந்து" : plantsName;
                          }

                          return (
                            <button
                              key={index}
                              onClick={() => {
                                setActiveEduLayer(index);
                                speakResponse(selectedLanguage === "hi" ? `चयनित ${levelName}. मुख्य फसलें: ${plantsName}` : selectedLanguage === "ta" ? `தேர்ந்தெடுக்கப்பட்ட ${levelName}. முக்கிய பயிர்கள்: ${plantsName}` : `Selected ${levelName}. Key species: ${plantsName}`);
                              }}
                              className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between group ${
                                isActive
                                  ? "bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-950/20"
                                  : "bg-stone-900 border-stone-800 hover:border-stone-750"
                              }`}
                            >
                              <div className="flex-1">
                                <span className={`text-[10px] font-mono block ${isActive ? "text-emerald-400 font-bold" : "text-stone-500 group-hover:text-stone-400"}`}>
                                  {levelName}
                                </span>
                                <span className={`text-xs block ${isActive ? "text-emerald-400 font-bold" : "text-stone-300 group-hover:text-emerald-400"}`}>
                                  {plantsName}
                                </span>
                              </div>
                              <ChevronRight className={`w-4 h-4 shrink-0 transition ${isActive ? "text-emerald-400 translate-x-1" : "text-stone-600 group-hover:text-stone-300"}`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Detailed info panel for selected layer */}
                    <div className="md:col-span-6 bg-stone-950 p-5 rounded-2xl border border-stone-800 shadow-xl flex flex-col justify-between">
                      {activeEduLayer !== null ? (
                        <div>
                          <div className="border-b border-stone-900 pb-3 mb-3">
                            <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase block">
                              {selectedLanguage === "hi" ? "चयनित बहुस्तरीय स्तर" : selectedLanguage === "ta" ? "தேர்ந்தெடுக்கப்பட்ட அடுக்கு" : "Active Canopy Level"}
                            </span>
                            <h4 className="text-sm font-extrabold text-emerald-400 uppercase tracking-tight mt-0.5">
                              {selectedLanguage === "hi" 
                                ? (activeEduLayer === 0 ? "ऊपरी मंजिला" : activeEduLayer === 1 ? "मध्यम मंजिला" : activeEduLayer === 2 ? "झाड़ी मंजिला" : activeEduLayer === 3 ? "शाकीय मंजिला" : "भूमिगत जल/जड़ क्षेत्र")
                                : selectedLanguage === "ta"
                                ? (activeEduLayer === 0 ? "மேல் அடுக்கு" : activeEduLayer === 1 ? "நடு அடுக்கு" : activeEduLayer === 2 ? "புதர் அடுக்கு" : activeEduLayer === 3 ? "சிறுசெடி அடுக்கு" : "வேர் அடுக்கு")
                                : croppingModels.find((m) => m.id === selectedModelId)!.layers[activeEduLayer].level}
                            </h4>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <span className="text-[10px] text-stone-500 font-bold uppercase block tracking-wider">
                                {selectedLanguage === "hi" ? "सिफारिश की गई फसलें" : selectedLanguage === "ta" ? "பரிந்துரைக்கப்படும் பயிர்கள்" : "Recommended Species"}
                              </span>
                              <p className="text-sm font-semibold text-white mt-1">
                                {selectedLanguage === "hi"
                                  ? (activeEduLayer === 0 ? "नारियल, सुपारी और इमली" : activeEduLayer === 1 ? "पपीता, केला और सहजन" : activeEduLayer === 2 ? "नींबू, कॉफी और जंगली मिर्च" : activeEduLayer === 3 ? "हल्दी और अदरक" : "शकरकंद, रतालू और सूरन")
                                  : selectedLanguage === "ta"
                                  ? (activeEduLayer === 0 ? "தென்னை மற்றும் புளி" : activeEduLayer === 1 ? "வாழை மற்றும் பப்பாளி" : activeEduLayer === 2 ? "எலுமிச்சை, காபி மற்றும் முருங்கை" : activeEduLayer === 3 ? "மஞ்சள் மற்றும் இஞ்சி" : "கிழங்கு வகைகள்")
                                  : croppingModels.find((m) => m.id === selectedModelId)!.layers[activeEduLayer].plants}
                              </p>
                            </div>

                            <div>
                              <span className="text-[10px] text-stone-500 font-bold uppercase block tracking-wider">
                                {selectedLanguage === "hi" ? "कृषि वानिकी भूमिका और सहजीवी लाभ" : selectedLanguage === "ta" ? "வேளாண் பயன்கள் மற்றும் நன்மைகள்" : "Agro-Ecological Purpose & Benefits"}
                              </span>
                              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                                {selectedLanguage === "hi"
                                  ? "यह स्तर प्राकृतिक खेती के सिद्धांतों के अंतर्गत सूरज की तेज रोशनी से संवेदनशील छोटे पौधों की रक्षा करता है और पत्तियों के गिरने से पलवार (Acchadana) के लिए नाइट्रोजन युक्त पत्तियां प्रदान करता है।"
                                  : selectedLanguage === "ta"
                                  ? "சிறிய பயிர்களுக்கு நிழல் தந்து, உதிர்ந்த இலைகள் மூலம் இயற்கை உரம் மற்றும் ஈரப்பதத்தைக் காக்கிறது."
                                  : croppingModels.find((m) => m.id === selectedModelId)!.layers[activeEduLayer].purpose}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              const layer = croppingModels.find((m) => m.id === selectedModelId)!.layers[activeEduLayer];
                              setQuery(`Explain the planting and spacing recommendations for ${layer.plants} in ${croppingModels.find((m) => m.id === selectedModelId)!.name}.`);
                              setActiveTab("advisor");
                            }}
                            className="mt-6 w-full py-2.5 bg-stone-900 hover:bg-stone-850 border border-stone-800 text-xs text-stone-400 hover:text-white rounded-xl font-bold transition flex items-center justify-center gap-1.5"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> {selectedLanguage === "hi" ? "इस स्तर की विस्तृत जानकारी सलाहकार से पूछें" : selectedLanguage === "ta" ? "இந்த அடுக்கின் இடைவெளியைப் பற்றி கேளுங்கள்" : "Query details for this layer"}
                          </button>
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-stone-500 text-xs">
                          {selectedLanguage === "hi" ? "विस्तृत बहुस्तरीय मार्गदर्शन देखने के लिए किसी भी परत पर टैप करें।" : selectedLanguage === "ta" ? "விவரங்களைக் காண ஏதேனும் ஓர் அடுக்கைத் தொடவும்." : "Tap on any canopy layer to view detailed multi-tier guidance."}
                        </div>
                      )}

                      <div className="mt-4 pt-3 border-t border-stone-900">
                        <span className="text-[10px] font-bold uppercase text-stone-400 tracking-wider block mb-1">
                          {selectedLanguage === "hi" ? "दूरी और प्रकाश अनुकूलन सुझाव:" : selectedLanguage === "ta" ? "இடைவெளி மற்றும் ஒளி ஒழுங்குமுறை குறிப்பு:" : "Canopy Spacing & Light Tips:"}
                        </span>
                        <p className="text-[11px] text-stone-400 italic">
                          {selectedLanguage === "hi" ? "सुनिश्चित करें कि ऊंचे पेड़ दक्षिण-पश्चिम दिशा की ओर लगाए जाएं ताकि दोपहर के समय छोटे पौधों को आंशिक छाया मिल सके।" : selectedLanguage === "ta" ? "பூச்சி விரட்ட உயரமான பயிர்களை தென்மேற்கு திசையில் நடவு செய்யவும்." : croppingModels.find((m) => m.id === selectedModelId)!.spacingTips}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            )}

            {/* TAB 4: Planting, Seed Treatments & Government Subsidy Guidance */}
            {activeTab === "guidance" && (
              <motion.div
                key="tab-guidance"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex-1 flex flex-col gap-6 font-sans"
              >
                
                {/* Seed Protection (Beejamrita) guide */}
                <div style={{
                  background: isDarkMode ? '#162318' : '#FFFFFF',
                  border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                  borderRadius: '14px',
                  padding: '20px 24px'
                }}>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-900">
                    <Leaf className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {selectedLanguage === "hi" ? "प्राकृतिक बीज उपचार नियम (बीजामृत)" : selectedLanguage === "ta" ? "இயற்கை விதை நேர்த்தி முறைகள் (பீஜாமிர்தம்)" : "Organic Seed Treatment Protocols (Beejamrita)"}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {selectedLanguage === "hi" 
                      ? "बीजामृत नए पौधों और बीजों को मिट्टी से फैलने वाले फंगस और रोगों से बचाता है। इसे बुवाई से पहले बीजों पर कोटिंग के रूप में लगाया जाता है।" 
                      : selectedLanguage === "ta" 
                      ? "பீஜாமிர்தம் இளம் நாற்றுகளையும் விதைகளையும் மண்ணிலிருந்து பரவும் பூஞ்சை மற்றும் நோய் தொற்றுகளிலிருந்து பாதுகாக்கிறது. விதைப்பதற்கு முன் இது பயன்படுத்தப்படுகிறது." 
                      : "Beejamrita protects young seedlings and seeds from soil-borne and seed-borne fungal infections. This is applied as a coating before sowing."}
                  </p>

                  <div className="space-y-3">
                    <div className="bg-stone-900/50 p-3.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                        {selectedLanguage === "hi" ? "आवश्यक सामग्री" : selectedLanguage === "ta" ? "தேவையான பொருட்கள்" : "Required Materials"}
                      </span>
                      <p className="text-xs text-stone-300 mt-2">
                        {selectedLanguage === "hi" 
                          ? "• पानी: 20 लीटर | • देसी गाय का गोबर: 5 किलो | • गोमूत्र: 5 लीटर | • चूना: 50 ग्राम | • मेड़ की जीवाणुयुक्त मिट्टी: एक मुट्ठी" 
                          : selectedLanguage === "ta" 
                          ? "• தண்ணீர்: 20 லிட்டர் | • நாட்டு பசு சாணம்: 5 கிலோ | • கோமியம்: 5 லிட்டர் | • சுண்ணாம்பு (சுண்ணாம்பு): 50 கிராம் | • வரப்பு மண்: ஒரு கைப்பிடி" 
                          : "• Water: 20 Litres | • Local Cow Dung: 5 kg | • Cow Urine: 5 Litres | • Lime (Chuna): 50 g | • Virgin Handful Soil (from farm boundary)"}
                      </p>
                    </div>

                    <div className="bg-stone-900/50 p-3.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                        {selectedLanguage === "hi" ? "निर्माण और प्रयोग विधि" : selectedLanguage === "ta" ? "தயாரிப்பு முறை & பயன்பாடு" : "Preparation & Usage"}
                      </span>
                      <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                        {selectedLanguage === "hi" 
                          ? "गाय के गोबर को एक कपड़े में बांधकर 20 लीटर पानी में 12 घंटे तक लटकाए रखें। रस निकालें। फिर गोमूत्र, चूना और मिट्टी मिलाएं। अच्छी तरह से हिलाएं और रात भर छोड़ दें। उपयोग विधि: इस मिश्रण को अपने अनाज या दलहन के बीजों पर छिड़कें, हल्के हाथ से मिलाएं, छाया में सुखाएं और तुरंत बोएं।" 
                          : selectedLanguage === "ta" 
                          ? "பசு சாணத்தை துணியில் கட்டி 20 லிட்டர் தண்ணீரில் 12 மணி நேரம் ஊற வைக்கவும். பின்னர் அதை பிழிந்து சாற்றை எடுக்கவும். அதனுடன் கோமியம், சுண்ணாம்பு மற்றும் வரப்பு மண் சேர்த்து நன்கு கலக்கி இரவு முழுவதும் வைக்கவும். பயன்படுத்தும் முறை: பயறு அல்லது தானிய விதைகளின் மீது தெளித்து, நிழலில் உலர்த்தி, உடனடியாக விதைக்கவும்." 
                          : "Wrap cow dung in cloth and suspend in 20L water for 12 hours. Squeeze the extract out. Add cow urine, chuna (lime), and hand soil. Stir thoroughly and let rest overnight. **To Apply**: Sprinkle this over your legume or cereals seeds, mix gently, dry in native shade, and sow immediately."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subsidies, Organic Certifications & Government Initiatives */}
                <div style={{
                  background: isDarkMode ? '#162318' : '#FFFFFF',
                  border: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
                  borderRadius: '14px',
                  padding: '20px 24px'
                }}>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-900">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {selectedLanguage === "hi" ? "सरकारी जैविक सब्सिडी और पीजीएस सर्टिफिकेट" : selectedLanguage === "ta" ? "அரசு இயற்கை விவசாய மானியங்கள் & PGS சான்றிதழ்" : "Government Organic Subsidies & PGS Regulations"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                          <span>{selectedLanguage === "hi" ? "पीजीएस-भारत जैविक प्रमाणीकरण" : selectedLanguage === "ta" ? "PGS-இந்தியா இயற்கை சான்றிதழ்" : "PGS-India Certification"}</span>
                          <span className="text-[9px] bg-emerald-950 text-emerald-400 py-0.5 px-1.5 rounded">{selectedLanguage === "hi" ? "मुफ़्त" : selectedLanguage === "ta" ? "இலவசம்" : "Free"}</span>
                        </h4>
                        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                          {selectedLanguage === "hi" 
                            ? "कृषि मंत्रालय द्वारा समर्थित भागीदारी गारंटी प्रणाली (PGS) एक मुफ़्त जैविक प्रमाणन कार्यक्रम है। इसके तहत किसान स्थानीय समूह बनाकर एक-दूसरे के खेतों की जांच और प्रमाणित खुद ही करते हैं।" 
                            : selectedLanguage === "ta" 
                            ? "மத்திய விவசாய அமைச்சகத்தால் அங்கீகரிக்கப்பட்ட பயிரை விவசாயிகளே குழு அமைத்து சான்றளிக்கும் இலவச திட்டம் ஆகும். வணிக ரீதியான தணிக்கை கட்டணங்கள் எதுவும் இல்லாமல் சான்றிதழ் வழங்கப்படுகிறது." 
                            : "Participatory Guarantee System (PGS) is a peer-review organic certification program supported by the Ministry of Agriculture. Farmers form local groups to certify each other's soils to remove high commercial audit fees entirely."}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                          <span>{selectedLanguage === "hi" ? "परंपरागत कृषि विकास योजना (PKVY)" : selectedLanguage === "ta" ? "PKVY பாரம்பரிய விவசாயத் திட்டம்" : "PKVY Organic Scheme"}</span>
                          <span className="text-[9px] bg-emerald-950 text-emerald-400 py-0.5 px-1.5 rounded">{selectedLanguage === "hi" ? "अनुदान (सब्सिडी)" : selectedLanguage === "ta" ? "மானியம்" : "Subsidy"}</span>
                        </h4>
                        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                          {selectedLanguage === "hi" 
                            ? "पीकेवीवाई योजना जैविक खाद, सामग्री, ड्रम खरीद, और जैविक फसल मूल्य श्रृंखला एकीकरण के लिए प्रति हेक्टेयर ₹50,000 की वित्तीय सहायता प्रदान करती है।" 
                            : selectedLanguage === "ta" 
                            ? "பரம்பராகத் கிருஷி விகாஸ் யோஜனா மூலம் இயற்கை உரம், இடு பொருட்கள் வாங்குவதற்கும், விநியோக சங்கிலியை மேம்படுத்துவதற்கும் எக்டேருக்கு ₹50,000 வரை நிதி உதவி வழங்கப்படுகிறது." 
                            : "Paramparagat Krishi Vikas Yojana provides incentives up to ₹50,000 per hectare for organic inputs, custom drum purchases, compost transport, and regional organic bio-fertilizer supply chain integration."}
                        </p>
                      </div>
                    </div>

                    {/* Card 3: PM-KISAN */}
                    <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                          <span>
                            {selectedLanguage === "hi" ? "PM-KISAN प्रत्यक्ष आय सहायता" : selectedLanguage === "ta" ? "PM-KISAN நேரடி வருமான உதவி" : "PM-KISAN Direct Income Support"}
                          </span>
                          <span className="text-[9px] bg-emerald-950 text-emerald-400 py-0.5 px-1.5 rounded font-mono font-bold">
                            {selectedLanguage === "hi" ? "₹6,000/वर्ष" : selectedLanguage === "ta" ? "₹6,000/வருடம்" : "₹6,000/year"}
                          </span>
                        </h4>
                        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                          {selectedLanguage === "hi" 
                            ? "सभी भूमिधारक किसान परिवारों को बिना किसी बिचौलिए के सीधे उनके बैंक खाते में हर 4 महीने में ₹2,000 की वित्तीय सहायता मिलती है।" 
                            : selectedLanguage === "ta" 
                            ? "நிலமுள்ள அனைத்து விவசாய குடும்பங்களுக்கும் 4 மாதங்களுக்கு ஒருமுறை ₹2,000 நேரடியாக வங்கி கணக்கில் செலுத்தப்படும். இடைத்தரகர்கள் இல்லை." 
                            : "All landholding farmer families receive ₹2,000 every 4 months directly into their bank account. No middlemen."}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-950 flex items-center justify-between text-[10px] text-stone-500">
                        <span className="font-mono">Website:</span>
                        <a 
                          href="https://pmkisan.gov.in" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-emerald-400 hover:underline flex items-center gap-0.5 font-semibold"
                        >
                          pmkisan.gov.in <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>

                    {/* Card 4: Soil Health Card */}
                    <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                          <span>
                            {selectedLanguage === "hi" ? "मुफ्त मृदा स्वास्थ्य कार्ड" : selectedLanguage === "ta" ? "இலவச மண் ஆரோக்கிய அட்டை" : "Free Soil Health Card"}
                          </span>
                          <span className="text-[9px] bg-emerald-950 text-emerald-400 py-0.5 px-1.5 rounded">
                            {selectedLanguage === "hi" ? "मुफ़्त" : selectedLanguage === "ta" ? "இலவசம்" : "Free"}
                          </span>
                        </h4>
                        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                          {selectedLanguage === "hi" 
                            ? "हर 2 साल में मुफ्त मिट्टी की जांच। अपने खेत के लिए सटीक पोषक तत्व स्तर और जैविक उर्वरक सिफारिशें दिखाने वाला प्रिंटेड कार्ड प्राप्त करें।" 
                            : selectedLanguage === "ta" 
                            ? "2 ஆண்டுகளுக்கு ஒருமுறை இலவச மண் பரிசோதனை. உங்கள் நிலத்திற்கான துல்லியமான சத்து அளவுகள் மற்றும் இயற்கை பரிந்துரைகள் அடங்கிய அட்டை." 
                            : "Free soil testing every 2 years. Get a printed card showing exact nutrient levels and organic input recommendations for your specific plot."}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-950 flex items-center justify-between text-[10px] text-stone-500">
                        <span className="font-mono">Process:</span>
                        <span className="text-emerald-400 font-semibold text-right text-[9px] sm:text-[10px]">
                          {selectedLanguage === "hi" ? "नजदीकी KVK या कृषि कार्यालय में आवेदन करें" : selectedLanguage === "ta" ? "அருகிலுள்ள KVK அல்லது வேளாண் அலுவலகத்தில் விண்ணப்பங்கள் சமர்ப்பிக்கவும்" : "Apply at nearest KVK or Agriculture office"}
                        </span>
                      </div>
                    </div>

                    {/* Card 5: PM Fasal Bima */}
                    <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 flex items-center justify-between">
                          <span>
                            {selectedLanguage === "hi" ? "फसल बीमा योजना" : selectedLanguage === "ta" ? "பயிர் காப்பீடு திட்டம்" : "PM Fasal Bima — Crop Insurance"}
                          </span>
                          <span className="text-[9px] bg-emerald-950 text-emerald-400 py-0.5 px-1.5 rounded font-mono font-bold">
                            {selectedLanguage === "hi" ? "बीमा" : selectedLanguage === "ta" ? "காப்பீடு" : "Insurance"}
                          </span>
                        </h4>
                        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                          {selectedLanguage === "hi" 
                            ? "सूखा, बाढ़ and कीटों के नुकसान को कवर करने वाली कम प्रीमियम फसल बीमा योजना। खरीफ के लिए 2% और रबी फसलों के लिए 1.5% प्रीमियम।" 
                            : selectedLanguage === "ta" 
                            ? "வறட்சி, வெள்ளம் மற்றும் பூச்சித் தாக்குதலை உள்ளடக்கிய குறைந்த பிரீமியம் காப்பீடு. காரிஃப் பயிர்களுக்கு 2%, ரபி பயிர்களுக்கு 1.5% பிரீமியம்।" 
                            : "Low premium crop insurance covering drought, flood, and pest damage. Premium is 2% for Kharif, 1.5% for Rabi crops."}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-950 flex items-center justify-between text-[10px] text-stone-500">
                        <span className="font-mono">Website:</span>
                        <a 
                          href="https://pmfby.gov.in" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-emerald-400 hover:underline flex items-center gap-0.5 font-semibold"
                        >
                          pmfby.gov.in <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Ask AI about this scheme Row */}
                  <div className="mt-6 pt-5 border-t border-stone-900">
                    <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      {selectedLanguage === "hi" ? "कृषि योजना के बारे में वॉयस एआई से पूछें" : selectedLanguage === "ta" ? "இந்த திட்டம் குறித்து AI உதவியாளரிடம் கேளுங்கள்" : "Ask AI about this scheme"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        {
                          en: "How to apply for PM-KISAN?",
                          hi: "PM-KISAN के लिए आवेदन कैसे करें?",
                          ta: "PM-KISAN திட்டத்திற்கு எவ்வாறு விண்ணப்பிப்பது?"
                        },
                        {
                          en: "Tell me about PKVY subsidy for organic farming",
                          hi: "जैविक खेती के लिए PKVY सब्सिडी के बारे में बताएं",
                          ta: "இயற்கை விவசாயத்திற்கான PKVY மானியம் பற்றி கூறு"
                        },
                        {
                          en: "How does Fasal Bima work for my crop?",
                          hi: "मेरी फसल के लिए फसल बीमा कैसे काम करता है?",
                          ta: "எனது பயிருக்கு பயிர் காப்பீடு எவ்வாறு செயல்படுகிறது?"
                        }
                      ].map((item, idx) => {
                        const question = selectedLanguage === "hi" ? item.hi : selectedLanguage === "ta" ? item.ta : item.en;
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setQuery(question);
                              setActiveTab("advisor");
                              triggerConsultation(question);
                            }}
                            className="p-3 text-left rounded-xl border border-stone-850 bg-stone-900/40 hover:bg-stone-900 hover:border-emerald-800 text-xs text-stone-300 hover:text-white transition duration-200 flex items-center justify-between group"
                          >
                            <span className="line-clamp-2 leading-snug">{question}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition shrink-0 ml-1" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-stone-900 p-3 rounded-lg border border-stone-800 text-[11px] text-stone-400">
                    💡 **{selectedLanguage === "hi" ? "सलाहकार सुझाव" : selectedLanguage === "ta" ? "ஆலோசனை குறிப்பு" : "Consultation tip"}:** {selectedLanguage === "hi" ? "फसल चक्र या सरकारी सहायता के लिए ऊपर वॉयस असिस्टेंट से पूछें:" : selectedLanguage === "ta" ? "பயிர் சுழற்சி அல்லது அரசு உதவிக்கான கேள்விகளை எங்கள் குரல் உதவியாளரிடம் கேட்கலாம்:" : "For crop rotation planning or custom financial support questions, ask our voice assistant above like:"} <span className="text-emerald-400 italic font-medium">{selectedLanguage === "hi" ? '"मुझे पीकेवीवाई के तहत जैविक अदरक की खेती के लिए सब्सिडी नियम बताएं।"' : selectedLanguage === "ta" ? '"PKVY இயற்கை இஞ்சி விவசாய உதவித் தொகையை எனக்கு விளக்கு"' : '"Tell me the subsidy guidelines for organic ginger farming under PKVY."'}</span>
                  </div>
                </div>

                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>

      {/* Human, Literal Margins Footer */}
      <footer id="app-footer" className="mt-auto border-t border-stone-850 bg-stone-950 py-4 px-6 text-center text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p>© 2026 Bhoomi Voice AI. Empowering grassroots organic transition.</p>
          <div className="flex items-center gap-3">
            <span className="text-stone-500">Based on Subhash Palekar ZBFN guidelines</span>
            <span className="text-emerald-800">|</span>
            <span className="text-emerald-400 hover:underline cursor-pointer flex items-center gap-0.5">
              Farming Handbooks <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      </footer>

      {/* PERSISTENT BOTTOM NAVIGATION BAR (DOWN BAR) */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        background: isDarkMode ? '#0F1A14' : '#FFFFFF',
        borderTop: `1px solid ${isDarkMode ? '#243020' : '#DDD8CF'}`,
        paddingBottom: 'env(safe-area-inset-bottom)',
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        boxShadow: isDarkMode ? '0 -4px 20px rgba(0,0,0,0.4)' : '0 -4px 20px rgba(0,0,0,0.05)'
      }}>
        {[
          { tab: 'dashboard',    icon: <LayoutDashboard style={{width:'20px',height:'20px'}} />, en: 'Home',    hi: 'होम',    ta: 'முகப்பு' },
          { tab: 'advisor',      icon: <Mic style={{width:'20px',height:'20px'}} />,             en: 'Ask',     hi: 'पूछें',  ta: 'கேள்' },
          { tab: 'intelligence', icon: <CloudSun style={{width:'20px',height:'20px'}} />,        en: 'Weather', hi: 'मौसम',   ta: 'வானிலை' },
          { tab: 'education',    icon: <BookOpen style={{width:'20px',height:'20px'}} />,        en: 'Learn',   hi: 'सीखें', ta: 'கற்க' },
          { tab: 'guidance',     icon: <TrendingUp style={{width:'20px',height:'20px'}} />,      en: 'Schemes', hi: 'योजना', ta: 'திட்டம்' },
        ].map(item => {
          const isActive = activeTab === item.tab as any;
          const label = selectedLanguage === 'hi' ? item.hi : selectedLanguage === 'ta' ? item.ta : item.en;
          return (
            <button key={item.tab} onClick={() => setActiveTab(item.tab as any)} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              padding: '10px 4px', border: 'none', background: 'transparent', cursor: 'pointer',
              color: isActive ? '#1B4332' : (isDarkMode ? '#8A9A8E' : '#9A9488'),
              fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: isActive ? 600 : 400,
              gap: '3px'
            }}>
              <div style={{
                padding: '4px 14px', borderRadius: '20px',
                background: isActive ? (isDarkMode ? '#1B4332' : '#EBF5EE') : 'transparent',
                color: isActive ? (isDarkMode ? '#52B788' : '#1B4332') : 'inherit',
                transition: 'all 0.15s'
              }}>
                {item.icon}
              </div>
              {label}
            </button>
          );
        })}
      </div>

      {ttsUnavailableNotice && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: isDarkMode ? '#2D1B1B' : '#FEF2F2',
          border: `1px solid ${isDarkMode ? '#5C2D2D' : '#FCA5A5'}`,
          borderRadius: '12px',
          padding: '12px 16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          maxWidth: '90%',
          width: 'max-content',
        }}>
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            color: isDarkMode ? '#FCA5A5' : '#991B1B',
            lineHeight: 1.4
          }}>
            {selectedLanguage === "hi"
              ? "तमिल आवाज़ अभी उपलब्ध नहीं है। नीचे लिखित जवाब पढ़ें।"
              : selectedLanguage === "ta"
              ? "தமிழ் குரல் இப்போது கிடைக்கவில்லை. கீழே உள்ள பதிலைப் படிக்கவும்."
              : "Tamil voice isn't available right now. Please read the written answer below."}
          </span>
        </div>
      )}

    </div>
  );
}
