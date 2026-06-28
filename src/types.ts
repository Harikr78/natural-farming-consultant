export interface WeatherData {
  temp: number;
  humidity: number;
  forecast: string;
  rainChance: string;
  suggestion: string;
}

export interface MarketPrice {
  id: string;
  name: string;
  currentPrice: number;
  unit: string;
  trend: "up" | "down" | "stable";
  organicPremium: string;
  agmarkName?: string;
  source?: string;
}

export interface AgroIntelligence {
  region: string;
  weather: WeatherData;
  marketPrices: MarketPrice[];
  timestamp: string;
}

export interface CroppingLayer {
  level: string;
  plants: string;
  purpose: string;
}

export interface CroppingModel {
  id: string;
  name: string;
  idealFor: string;
  description: string;
  layers: CroppingLayer[];
  spacingTips: string;
}

export interface SavedConsultation {
  id: string;
  timestamp: string;
  query: string;
  response: string;
  cropContext?: string;
  image?: string;
}
