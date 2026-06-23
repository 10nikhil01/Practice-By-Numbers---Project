import type { FieldErrors, NewCustomerFields } from "@/types/demo";
import { useState } from "react";
import { validateNewCustomer } from "@/sections/demo/form";

export const useNewCustomer = () => {
  const [fields, setFields] = useState<NewCustomerFields>({
    firstName: "",
    lastName: "",
    email: "",
    practiceName: "",
    practicePhone: "",
    pms: "",
  });
  const [errors, setErrors] = useState<FieldErrors<NewCustomerFields>>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof NewCustomerFields, boolean>>
  >({});

  const handleChange = (field: keyof NewCustomerFields, value: string) => {
    const updated = { ...fields, [field]: value };
    setFields(updated);
    if (touched[field]) {
      setErrors((e) => ({
        ...e,
        [field]: validateNewCustomer(updated)[field],
      }));
    }
  };

  const handleBlur = (field: keyof NewCustomerFields) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({
      ...e,
      [field]: validateNewCustomer(fields)[field],
    }));
  };

  const validateAll = () => {
    const errs = validateNewCustomer(fields);
    setErrors(errs);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      practiceName: true,
      practicePhone: true,
      pms: true,
    });
    return !Object.values(errs).some(Boolean);
  };

  return { fields, errors, touched, handleChange, handleBlur, validateAll };
};
