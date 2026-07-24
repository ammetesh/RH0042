import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "glass rounded-3xl p-8",
        className
      )}
    >
      {children}
    </div>
  );
}