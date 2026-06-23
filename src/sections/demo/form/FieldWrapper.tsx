import { Label } from "@/components/ui/label";
import type { ReactNode } from "react";

type Props = {
  htmlFor?: string;
  label: ReactNode;
  required?: boolean;
  children: ReactNode;
  error?: ReactNode;
};

export const FieldWrapper = ({
  htmlFor,
  label,
  required,
  children,
  error,
}: Props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor} className="text-sm">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>
      {children}
      {error}
    </div>
  );
};
