import type { ExistingCustomerFields, FieldErrors } from "@/types/demo";
import { useState } from "react";
import { validateExistingCustomer } from "@/sections/demo/form";

export const useExistingCustomer = () => {
  const [fields, setFields] = useState<ExistingCustomerFields>({
    supportType: "",
    firstName: "",
    email: "",
  });
  const [errors, setErrors] = useState<FieldErrors<ExistingCustomerFields>>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ExistingCustomerFields, boolean>>
  >({});

  const handleChange = (field: keyof ExistingCustomerFields, value: string) => {
    const updated = { ...fields, [field]: value };
    setFields(updated);
    if (touched[field]) {
      setErrors((e) => ({
        ...e,
        [field]: validateExistingCustomer(updated)[field],
      }));
    }
  };

  const handleBlur = (field: keyof ExistingCustomerFields) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({
      ...e,
      [field]: validateExistingCustomer(fields)[field],
    }));
  };

  const validateAll = () => {
    const errs = validateExistingCustomer(fields);
    setErrors(errs);
    setTouched({ supportType: true, firstName: true, email: true });
    return !Object.values(errs).some(Boolean);
  };

  return { fields, errors, touched, handleChange, handleBlur, validateAll };
};
