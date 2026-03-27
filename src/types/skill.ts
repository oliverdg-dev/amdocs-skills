export interface Skill {
  id: string;
  rank: number;
  name: string;
  source: string;
  usageCount: number;
  description: string;
  category: string;
  trendingScore: number;
}

export type TabId = "all-time" | "trending" | "hot";
