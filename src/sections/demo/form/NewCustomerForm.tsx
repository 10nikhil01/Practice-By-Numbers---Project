import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib";
import { FieldError, FieldWrapper } from "@/sections/demo/form";
import type { FieldErrors, NewCustomerFields } from "@/types/demo";

const pmsOptions = [
  "Dentrix",
  "Eaglesoft",
  "Open Dental",
  "Dentrix Ascend",
  "Curve Dental",
  "Other",
];

type Props = {
  fields: NewCustomerFields;
  errors: FieldErrors<NewCustomerFields>;
  touched: Partial<Record<keyof NewCustomerFields, boolean>>;
  onChange: (field: keyof NewCustomerFields, value: string) => void;
  onBlur: (field: keyof NewCustomerFields) => void;
};

export const NewCustomerForm = ({
  fields,
  errors,
  touched,
  onChange,
  onBlur,
}: Props) => {
  const inputClass = (field: keyof NewCustomerFields) =>
    cn(
      errors[field] && touched[field]
        ? "border-red-500 focus-visible:ring-red-300"
        : "",
    );

  return (
    <>
      <FieldWrapper
        htmlFor="first-name"
        label="First Name"
        required
        error={touched.firstName && <FieldError msg={errors.firstName} />}
      >
        <Input
          id="first-name"
          value={fields.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          onBlur={() => onBlur("firstName")}
          className={inputClass("firstName")}
        />
      </FieldWrapper>

      <FieldWrapper
        htmlFor="last-name"
        label="Last Name"
        required
        error={touched.lastName && <FieldError msg={errors.lastName} />}
      >
        <Input
          id="last-name"
          value={fields.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          onBlur={() => onBlur("lastName")}
          className={inputClass("lastName")}
        />
      </FieldWrapper>

      <FieldWrapper
        htmlFor="email"
        label="Email"
        required
        error={touched.email && <FieldError msg={errors.email} />}
      >
        <Input
          id="email"
          type="email"
          value={fields.email}
          onChange={(e) => onChange("email", e.target.value)}
          onBlur={() => onBlur("email")}
          className={inputClass("email")}
        />
      </FieldWrapper>

      <FieldWrapper
        htmlFor="practice-name"
        label="Practice's Name"
        required
        error={touched.practiceName && <FieldError msg={errors.practiceName} />}
      >
        <Input
          id="practice-name"
          value={fields.practiceName}
          onChange={(e) => onChange("practiceName", e.target.value)}
          onBlur={() => onBlur("practiceName")}
          className={inputClass("practiceName")}
        />
      </FieldWrapper>

      <FieldWrapper
        htmlFor="practice-phone"
        label="Practice's Phone"
        required
        error={
          touched.practicePhone && <FieldError msg={errors.practicePhone} />
        }
      >
        <Input
          id="practice-phone"
          type="tel"
          value={fields.practicePhone}
          onChange={(e) => onChange("practicePhone", e.target.value)}
          onBlur={() => onBlur("practicePhone")}
          className={inputClass("practicePhone")}
        />
      </FieldWrapper>

      <FieldWrapper
        label="Current Practice Management Software"
        required
        error={touched.pms && <FieldError msg={errors.pms} />}
      >
        <Select value={fields.pms} onValueChange={(v) => onChange("pms", v)}>
          <SelectTrigger
            className={cn("p-3", errors.pms && touched.pms && "border-red-500")}
            onBlur={() => onBlur("pms")}
          >
            <SelectValue placeholder="Choose Current PMS" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            sideOffset={10}
            className="p-2 rounded-lg"
          >
            {pmsOptions.map((pms) => (
              <SelectItem key={pms} value={pms} className="p-2 rounded-sm">
                {pms}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>
    </>
  );
};
