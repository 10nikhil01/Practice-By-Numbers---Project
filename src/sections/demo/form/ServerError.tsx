import { AlertCircle } from "lucide-react";

export const ServerError = ({ message }: { message: string }) =>
  message ? (
    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
      <AlertCircle className="text-red-500 shrink-0" size={16} />
      <p className="text-sm text-red-600">{message}</p>
    </div>
  ) : null;
