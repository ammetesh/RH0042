import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

export default function Button({
  variant = "primary",
  loading,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-primary hover:bg-indigo-600 text-white shadow-glow",
    secondary:
      "bg-secondary hover:bg-violet-700 text-white",
    outline:
      "border border-border hover:border-primary bg-transparent",
    danger:
      "bg-danger hover:bg-red-600 text-white",
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "px-5 py-3 rounded-xl transition-all duration-300 font-medium",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        styles[variant],
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}