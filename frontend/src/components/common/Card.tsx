import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl p-6 shadow-glass",
        className
      )}
    >
      {children}
    </div>
  );
}