import { Button } from "@/components/ui/button";
import type { FormStatus } from "@/types/demo";
import { Loader2 } from "lucide-react";

export const SubmitButton = ({ status }: { status: FormStatus }) => (
  <div className="flex max-sm:justify-center justify-end">
    <Button
      type="submit"
      disabled={status === "loading"}
      className="bg-indigo-600 hover:bg-indigo-700 text-base hover:text-zinc-200 text-white px-8 py-5 rounded-lg"
    >
      {status === "loading" ? (
        <span className="flex items-center gap-2">
          <Loader2 size={16} className="animate-spin" />
        </span>
      ) : (
        "Submit"
      )}
    </Button>
  </div>
);
