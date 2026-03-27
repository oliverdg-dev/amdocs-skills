import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full rounded-md border border-[#2A2A2A] bg-transparent px-3 py-2 text-sm text-white shadow-sm transition-colors",
        "placeholder:text-white/25",
        "focus-visible:outline-none focus-visible:border-white/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
