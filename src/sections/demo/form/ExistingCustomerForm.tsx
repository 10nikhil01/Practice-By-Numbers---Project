import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib";
import { FieldError, FieldWrapper } from "@/sections/demo/form";
import type { ExistingCustomerFields, FieldErrors } from "@/types/demo";

const supportOptions = ["Customer Support", "New Features"];

type Props = {
  fields: ExistingCustomerFields;
  errors: FieldErrors<ExistingCustomerFields>;
  touched: Partial<Record<keyof ExistingCustomerFields, boolean>>;
  onChange: (field: keyof ExistingCustomerFields, value: string) => void;
  onBlur: (field: keyof ExistingCustomerFields) => void;
};

export const ExistingCustomerForm = ({
  fields,
  errors,
  touched,
  onChange,
  onBlur,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <Label className="text-sm inline-block mb-4">
          Choose one: Customer Support or Information on New Features
          <span className="text-red-500 ml-2">*</span>
        </Label>
        <Select
          value={fields.supportType}
          onValueChange={(v) => onChange("supportType", v)}
        >
          <SelectTrigger
            className={cn(
              "p-3",
              errors.supportType && touched.supportType && "border-red-500",
            )}
            onBlur={() => onBlur("supportType")}
          >
            <SelectValue placeholder="Choose One" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            sideOffset={10}
            className="rounded-lg p-2"
          >
            {supportOptions.map((opt) => (
              <SelectItem key={opt} value={opt} className="py-2">
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {touched.supportType && <FieldError msg={errors.supportType} />}
      </div>

      <FieldWrapper
        htmlFor="ex-first-name"
        label="First Name"
        required
        error={touched.firstName && <FieldError msg={errors.firstName} />}
      >
        <Input
          id="ex-first-name"
          value={fields.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          onBlur={() => onBlur("firstName")}
          className={cn(
            errors.firstName &&
              touched.firstName &&
              "border-red-500 focus-visible:ring-red-300",
          )}
        />
      </FieldWrapper>

      <FieldWrapper
        htmlFor="ex-email"
        label="Email"
        required
        error={touched.email && <FieldError msg={errors.email} />}
      >
        <Input
          id="ex-email"
          type="email"
          value={fields.email}
          onChange={(e) => onChange("email", e.target.value)}
          onBlur={() => onBlur("email")}
          className={cn(
            errors.email &&
              touched.email &&
              "border-red-500 focus-visible:ring-red-300",
          )}
        />
      </FieldWrapper>
    </>
  );
};
