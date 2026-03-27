import { Skill } from "@/types/skill";
import SkillRow from "./SkillRow";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";

interface LeaderboardTableProps {
  skills: Skill[];
}

export default function LeaderboardTable({ skills }: LeaderboardTableProps) {
  if (skills.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-white/25 text-sm tracking-wide">
          No skills match your search.
        </p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent cursor-default">
          <TableHead className="pl-6 pr-4 w-20">#</TableHead>
          <TableHead>Skill</TableHead>
          <TableHead className="hidden md:table-cell">Source</TableHead>
          <TableHead className="pl-4 pr-6 text-right">Usage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skills.map((skill, index) => (
          <SkillRow key={skill.id} skill={skill} isTopSkill={index === 0} />
        ))}
      </TableBody>
    </Table>
  );
}
