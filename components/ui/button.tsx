import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border border-transparent font-sans font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 select-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white shadow-[0_6px_16px_-8px_rgb(49_87_246/0.7)] hover:bg-brand-dark hover:shadow-[0_10px_22px_-8px_rgb(49_87_246/0.6)]",
        secondary:
          "border-hairline bg-white text-ink card-shadow hover:border-brand/45 hover:text-brand",
        outline:
          "border-ink/15 bg-transparent text-ink hover:border-ink/35 hover:bg-ink/[0.04]",
        ghost: "text-ink hover:bg-ink/[0.05]",
        contrast: "bg-white text-ink hover:bg-white/90",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-brand underline underline-offset-4 hover:text-brand-dark",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-10 rounded-lg",
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
