export interface Recommendation {
  id: string;
  text: string;
  priority: "High" | "Medium" | "Low";
}

export interface WinnabilityData {
  score: number;
  factors: {
    label: string;
    value: number;
  }[];
  recommendations: Recommendation[];
}
