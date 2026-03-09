import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/ui/utils/cn";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center border rounded-lg text-base leading-4 tracking-wide-05 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-bold transition-colors duration-150 ease-in-out",
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground border-primary",
          "hover:bg-primary/90 hover:border-primary/90",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground border-secondary",
          "hover:bg-secondary/80 hover:border-secondary/80",
        ],
        outline: [
          "bg-background text-foreground border-border",
          "hover:bg-accent hover:text-accent-foreground hover:border-accent",
        ],
        ghost: [
          "bg-transparent text-foreground border-transparent",
          "hover:bg-accent hover:text-accent-foreground",
        ],
        destructive: [
          "bg-destructive text-destructive-foreground border-destructive",
          "hover:bg-destructive/90 hover:border-destructive/90",
        ],
        success: [
          "bg-success text-success-foreground border-success",
          "hover:bg-success/90 hover:border-success/90",
        ],
        warning: [
          "bg-warning text-warning-foreground border-warning",
          "hover:bg-warning/90 hover:border-warning/90",
        ],
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      type={type}
      {...props}
    />
  );
};
