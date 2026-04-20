import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--line-strong)] aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--surface-ink)] text-white shadow-[0_18px_36px_rgba(18,23,33,0.18)] hover:-translate-y-px hover:bg-[#27272a]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-[var(--line-strong)] bg-white/85 text-[var(--text-strong)] shadow-[0_10px_24px_rgba(18,23,33,0.06)] hover:-translate-y-px hover:border-[rgba(23,27,34,0.24)] hover:bg-white",
        secondary:
          "bg-[var(--accent-warm-soft)] text-[var(--text-strong)] hover:bg-[var(--line-soft)]",
        ghost: "text-[var(--text-body)] hover:bg-white/60 hover:text-[var(--text-strong)]",
        link: "text-[var(--text-strong)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 px-6 has-[>svg]:px-5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
