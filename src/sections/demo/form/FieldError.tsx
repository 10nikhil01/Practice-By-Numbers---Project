import { AlertCircle } from "lucide-react";

export const FieldError = ({ msg }: { msg?: string }) =>
  msg ? (
    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
      <AlertCircle size={12} />
      {msg}
    </p>
  ) : null;
