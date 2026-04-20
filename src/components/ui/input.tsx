import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-[1rem] border border-[var(--line-soft)] bg-white/80 px-4 py-2 text-base text-[var(--text-strong)] shadow-[0_10px_24px_rgba(18,23,33,0.04)] transition-[border-color,box-shadow,background-color] outline-none placeholder:text-[var(--text-muted)] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[rgba(154,106,47,0.34)] focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-[rgba(154,106,47,0.16)]",
        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/12",
        className
      )}
      {...props}
    />
  )
}

export { Input }
