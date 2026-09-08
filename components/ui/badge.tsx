import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1 font-sans text-sm leading-5 font-medium whitespace-nowrap transition-colors duration-200 [&>svg]:pointer-events-none [&>svg]:size-3.5!",
  {
    variants: {
      variant: {
        default: "border-transparent bg-ink text-white",
        secondary: "border-hairline bg-white text-subtle",
        soft: "border-transparent bg-secondary text-subtle",
        brand: "border-brand/20 bg-brand/8 text-brand",
        teal: "border-teal/25 bg-teal/10 text-teal-ink",
        outline: "border-ink/15 bg-transparent text-subtle",
        destructive: "border-transparent bg-destructive/10 text-destructive",
        link: "border-transparent text-brand underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      { className: cn(badgeVariants({ variant }), className) },
      props
    ),
    render,
    state: { slot: "badge", variant },
  })
}

export { Badge, badgeVariants }
