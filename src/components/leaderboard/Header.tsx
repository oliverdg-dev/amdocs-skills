import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-[#1A1A1A] py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/25080526.png"
              alt="Amdocs"
              width={56}
              height={48}
              priority
            />
          </div>
          <div className="w-px h-10 bg-[#2A2A2A]" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Skills Leaderboard
            </h1>
            <p className="text-xs text-white/40 tracking-widest uppercase mt-0.5 font-medium">
              Internal Skills Intelligence Platform
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
