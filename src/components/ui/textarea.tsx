import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-36 w-full rounded-[1.15rem] border border-[var(--line-soft)] bg-white/80 px-4 py-3 text-base text-[var(--text-strong)] shadow-[0_10px_24px_rgba(18,23,33,0.04)] transition-[border-color,box-shadow,background-color] outline-none placeholder:text-[var(--text-muted)] focus-visible:border-[rgba(154,106,47,0.34)] focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-[rgba(154,106,47,0.16)] aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/12 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
