"use client";

import { TabId } from "@/types/skill";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS: { id: TabId; label: string }[] = [
  { id: "all-time", label: "All Time" },
  { id: "trending", label: "Trending (24h)" },
  { id: "hot", label: "Hot" },
];

interface TabBarProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export default function TabBar({ activeTab, onChange }: TabBarProps) {
  return (
    <Tabs value={activeTab} onValueChange={(v) => onChange(v as TabId)}>
      <TabsList className="rounded-none bg-transparent">
        {TABS.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
