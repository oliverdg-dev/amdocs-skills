"use client";

import { useState, useMemo } from "react";
import { skills as allSkills } from "@/data/skills";
import { TabId } from "@/types/skill";
import Header from "@/components/leaderboard/Header";
import SearchBar from "@/components/leaderboard/SearchBar";
import TabBar from "@/components/leaderboard/TabBar";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<TabId>("all-time");

  const filteredSkills = useMemo(() => {
    const query = search.toLowerCase().trim();

    let list = [...allSkills];

    if (activeTab === "trending") {
      list = list.sort((a, b) => b.trendingScore - a.trendingScore);
    } else if (activeTab === "hot") {
      const p75 = allSkills
        .map((s) => s.trendingScore)
        .sort((a, b) => b - a)[Math.floor(allSkills.length * 0.25)];
      list = list
        .filter((s) => s.trendingScore >= p75)
        .sort((a, b) => b.trendingScore - a.trendingScore);
    }

    if (!query) return list;

    return list.filter(
      (skill) =>
        skill.name.toLowerCase().includes(query) ||
        skill.source.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query)
    );
  }, [search, activeTab]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        <SearchBar value={search} onChange={setSearch} />
        <div className="space-y-0">
          <TabBar activeTab={activeTab} onChange={setActiveTab} />
          <div className="bg-[#0D0D0D] border border-[#1A1A1A] border-t-0 rounded-b-sm">
            <LeaderboardTable skills={filteredSkills} />
          </div>
        </div>
        <p className="text-white/20 text-xs text-center tracking-wide pb-6">
          {filteredSkills.length} skill{filteredSkills.length !== 1 ? "s" : ""}{" "}
          &mdash; Updated daily
        </p>
      </main>
    </div>
  );
}
