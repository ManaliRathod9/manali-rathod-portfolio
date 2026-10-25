import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent font-sans font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 select-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Mocha lit from above with a chrome top edge, so it still reads as solid on the dark sections.
        default:
          "border-platinum/30 bg-mocha bg-gradient-to-b from-mocha-light to-mocha text-ivory shadow-[inset_0_1px_0_rgb(255_255_255/0.22),0_8px_20px_-10px_rgb(20_12_8/0.8)] hover:from-mocha hover:to-mocha-hover hover:glow-lavender-strong",
        secondary:
          "border-mocha/70 bg-platinum bg-metal-soft text-mocha card-shadow hover:border-mocha hover:text-mocha-hover hover:glow-lavender",
        outline:
          "border-mocha/40 bg-transparent text-mocha hover:border-mocha hover:bg-mocha/[0.05]",
        ghost: "text-ink hover:bg-ink/[0.05]",
        contrast: "border-white/40 bg-platinum bg-metal-soft text-espresso hover:glow-lavender-strong",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-mocha underline underline-offset-4 hover:text-mocha-hover",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-10 rounded-md",
        "icon-lg": "size-12",
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
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
