import { CheckCircle2 } from "lucide-react";

export const FormSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-card border border-border rounded-2xl p-12 text-center min-h-80">
      <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
        <CheckCircle2 className="text-indigo-600" size={36} />
      </div>
      <h3 className="text-xl font-bold text-foreground">
        You&apos;re all set!
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs">
        Thanks for reaching out. A Practice Advisor will be in touch within one
        business day.
      </p>
    </div>
  );
};
