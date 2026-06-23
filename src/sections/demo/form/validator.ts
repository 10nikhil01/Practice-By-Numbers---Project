import type {
  ExistingCustomerFields,
  FieldErrors,
  NewCustomerFields,
} from "@/types/demo";

const validateEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.";

const validatePhone = (v: string) =>
  /^[\d\s\-\+\(\)]{7,15}$/.test(v) ? "" : "Enter a valid phone number.";

const required = (v: string, label: string) =>
  v.trim() ? "" : `${label} is required.`;

export function validateNewCustomer(
  f: NewCustomerFields,
): FieldErrors<NewCustomerFields> {
  return {
    firstName: required(f.firstName, "First Name"),
    lastName: required(f.lastName, "Last Name"),
    email: f.email.trim() ? validateEmail(f.email) : "Email is required.",
    practiceName: required(f.practiceName, "Practice Name"),
    practicePhone: f.practicePhone.trim()
      ? validatePhone(f.practicePhone)
      : "Phone is required.",
    pms: f.pms ? "" : "Please select your current PMS.",
  };
}

export function validateExistingCustomer(
  f: ExistingCustomerFields,
): FieldErrors<ExistingCustomerFields> {
  return {
    supportType: f.supportType ? "" : "Please choose an option.",
    firstName: required(f.firstName, "First Name"),
    email: f.email.trim() ? validateEmail(f.email) : "Email is required.",
  };
}
