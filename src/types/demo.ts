export type FormStatus = "idle" | "loading" | "success" | "error";

export type NewCustomerFields = {
  firstName: string;
  lastName: string;
  email: string;
  practiceName: string;
  practicePhone: string;
  pms: string;
};

export type ExistingCustomerFields = {
  supportType: string;
  firstName: string;
  email: string;
};

export type FieldErrors<T> = Partial<Record<keyof T, string>>;
