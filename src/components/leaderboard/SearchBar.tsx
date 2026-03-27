"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25"
        size={16}
        aria-hidden="true"
      />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search skills, tools, or technologies..."
        className="pl-9 border-0 border-b border-[#2A2A2A] rounded-none bg-transparent py-3 font-light tracking-wide focus-visible:border-white/40"
      />
    </div>
  );
}
