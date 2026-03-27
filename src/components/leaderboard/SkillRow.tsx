"use client";

import { Skill } from "@/types/skill";
import { Badge } from "@/components/ui/badge";
import { TableRow, TableCell } from "@/components/ui/table";

interface SkillRowProps {
  skill: Skill;
  isTopSkill: boolean;
}

export default function SkillRow({ skill, isTopSkill }: SkillRowProps) {
  return (
    <TableRow title={skill.description}>
      {/* Rank */}
      <TableCell className="pl-6 pr-4 w-20">
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-sm font-mono w-6 text-right">
            {skill.rank}
          </span>
          {isTopSkill && (
            <Badge variant="default">Top Skill</Badge>
          )}
        </div>
      </TableCell>

      {/* Skill Name + Category */}
      <TableCell>
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-semibold text-sm tracking-wide">
            {skill.name}
          </span>
          <span className="text-white/30 text-xs font-medium tracking-wide">
            {skill.category}
          </span>
        </div>
      </TableCell>

      {/* Source / Team */}
      <TableCell className="hidden md:table-cell">
        <span className="text-white/40 text-sm">{skill.source}</span>
      </TableCell>

      {/* Usage Count */}
      <TableCell className="pl-4 pr-6 text-right">
        <span className="text-white/75 text-sm font-mono tabular-nums">
          {skill.usageCount.toLocaleString()}
        </span>
      </TableCell>
    </TableRow>
  );
}
