"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function SubmitButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={className} {...props}>
      {children}
    </button>
  );
}
