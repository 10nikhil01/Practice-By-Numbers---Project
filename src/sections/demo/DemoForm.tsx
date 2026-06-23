"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const pmsOptions = [
  "Dentrix",
  "Eaglesoft",
  "Open Dental",
  "Dentrix Ascend",
  "Curve Dental",
  "Other",
];

const supportOptions = ["Customer Support", "New Features"];

type FormStatus = "idle" | "loading" | "success" | "error";

type NewCustomerFields = {
  firstName: string;
  lastName: string;
  email: string;
  practiceName: string;
  practicePhone: string;
  pms: string;
};

type ExistingCustomerFields = {
  supportType: string;
  firstName: string;
  email: string;
};

type FieldErrors<T> = Partial<Record<keyof T, string>>;

// ---------- validators ----------
const validateEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.";

const validatePhone = (v: string) =>
  /^[\d\s\-\+\(\)]{7,15}$/.test(v) ? "" : "Enter a valid phone number.";

const required = (v: string, label: string) =>
  v.trim() ? "" : `${label} is required.`;

function validateNewCustomer(
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

function validateExistingCustomer(
  f: ExistingCustomerFields,
): FieldErrors<ExistingCustomerFields> {
  return {
    supportType: f.supportType ? "" : "Please choose an option.",
    firstName: required(f.firstName, "First Name"),
    email: f.email.trim() ? validateEmail(f.email) : "Email is required.",
  };
}

// ---------- small helper ----------
const FieldError = ({ msg }: { msg?: string }) =>
  msg ? (
    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
      <AlertCircle size={12} /> {msg}
    </p>
  ) : null;

// ---------- component ----------
export const DemoForm = () => {
  const [isCurrentCustomer, setIsCurrentCustomer] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState("");

  // new customer state
  const [newFields, setNewFields] = useState<NewCustomerFields>({
    firstName: "",
    lastName: "",
    email: "",
    practiceName: "",
    practicePhone: "",
    pms: "",
  });
  const [newErrors, setNewErrors] = useState<FieldErrors<NewCustomerFields>>(
    {},
  );
  const [newTouched, setNewTouched] = useState<
    Partial<Record<keyof NewCustomerFields, boolean>>
  >({});

  // existing customer state
  const [existingFields, setExistingFields] = useState<ExistingCustomerFields>({
    supportType: "",
    firstName: "",
    email: "",
  });
  const [existingErrors, setExistingErrors] = useState<
    FieldErrors<ExistingCustomerFields>
  >({});
  const [existingTouched, setExistingTouched] = useState<
    Partial<Record<keyof ExistingCustomerFields, boolean>>
  >({});

  // ---- new customer handlers ----
  const handleNewChange = (field: keyof NewCustomerFields, value: string) => {
    const updated = { ...newFields, [field]: value };
    setNewFields(updated);
    if (newTouched[field]) {
      setNewErrors((e) => ({
        ...e,
        [field]: validateNewCustomer(updated)[field],
      }));
    }
  };

  const handleNewBlur = (field: keyof NewCustomerFields) => {
    setNewTouched((t) => ({ ...t, [field]: true }));
    setNewErrors((e) => ({
      ...e,
      [field]: validateNewCustomer(newFields)[field],
    }));
  };

  // ---- existing customer handlers ----
  const handleExistingChange = (
    field: keyof ExistingCustomerFields,
    value: string,
  ) => {
    const updated = { ...existingFields, [field]: value };
    setExistingFields(updated);
    if (existingTouched[field]) {
      setExistingErrors((e) => ({
        ...e,
        [field]: validateExistingCustomer(updated)[field],
      }));
    }
  };

  const handleExistingBlur = (field: keyof ExistingCustomerFields) => {
    setExistingTouched((t) => ({ ...t, [field]: true }));
    setExistingErrors((e) => ({
      ...e,
      [field]: validateExistingCustomer(existingFields)[field],
    }));
  };

  // ---- submit ----
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (isCurrentCustomer) {
      const errors = validateExistingCustomer(existingFields);
      setExistingErrors(errors);
      setExistingTouched({ supportType: true, firstName: true, email: true });
      if (Object.values(errors).some(Boolean)) return;
    } else {
      const errors = validateNewCustomer(newFields);
      setNewErrors(errors);
      setNewTouched({
        firstName: true,
        lastName: true,
        email: true,
        practiceName: true,
        practicePhone: true,
        pms: true,
      });
      if (Object.values(errors).some(Boolean)) return;
    }

    setStatus("loading");

    try {
      // Replace with your actual API call
      await new Promise((res) => setTimeout(res, 1500));

      // Simulate random error for demo — remove in production
      // if (Math.random() > 0.5) throw new Error("Server error");

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        "Something went wrong. Please try again or contact support.",
      );
    }
  };

  // ---- success state ----
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 bg-card border border-border rounded-2xl p-12 text-center min-h-80">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
          <CheckCircle2 className="text-indigo-600" size={36} />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          You&apos;re all set!
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Thanks for reaching out. A Practice Advisor will be in touch within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 bg-card border-border border md:max-w-md w-full m-auto p-5 rounded-2xl"
    >
      {/* Current customer checkbox */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="current-customer"
          className="size-6"
          checked={isCurrentCustomer}
          onCheckedChange={(v) => {
            setIsCurrentCustomer(!!v);
            setStatus("idle");
            setServerError("");
          }}
        />
        <Label htmlFor="current-customer" className="text-sm cursor-pointer">
          I am a current PbN Customer
        </Label>
      </div>

      {isCurrentCustomer ? (
        <>
          {/* Support type */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm inline-block mb-4">
              Choose one: Customer Support or Information on New Features
              <span className="text-red-500 ml-2">*</span>
            </Label>
            <Select
              value={existingFields.supportType}
              onValueChange={(v) => handleExistingChange("supportType", v)}
            >
              <SelectTrigger
                className={cn(
                  "bg-red-300, p-3",
                  existingErrors.supportType &&
                    existingTouched.supportType &&
                    "border-red-500",
                )}
                onBlur={() => handleExistingBlur("supportType")}
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
            {existingTouched.supportType && (
              <FieldError msg={existingErrors.supportType} />
            )}
          </div>

          {/* First name */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ex-first-name" className="text-sm">
              First Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="ex-first-name"
              value={existingFields.firstName}
              onChange={(e) =>
                handleExistingChange("firstName", e.target.value)
              }
              onBlur={() => handleExistingBlur("firstName")}
              className={cn(
                existingErrors.firstName &&
                  existingTouched.firstName &&
                  "border-red-500 focus-visible:ring-red-300",
              )}
            />
            {existingTouched.firstName && (
              <FieldError msg={existingErrors.firstName} />
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ex-email" className="text-sm">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="ex-email"
              type="email"
              value={existingFields.email}
              onChange={(e) => handleExistingChange("email", e.target.value)}
              onBlur={() => handleExistingBlur("email")}
              className={cn(
                existingErrors.email &&
                  existingTouched.email &&
                  "border-red-500 focus-visible:ring-red-300",
              )}
            />
            {existingTouched.email && <FieldError msg={existingErrors.email} />}
          </div>
        </>
      ) : (
        <>
          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="first-name" className="text-sm">
              First Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="first-name"
              value={newFields.firstName}
              onChange={(e) => handleNewChange("firstName", e.target.value)}
              onBlur={() => handleNewBlur("firstName")}
              className={` ${newErrors.firstName && newTouched.firstName ? "border-red-500 focus-visible:ring-red-300" : ""}`}
            />
            {newTouched.firstName && <FieldError msg={newErrors.firstName} />}
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="last-name" className="text-sm">
              Last Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="last-name"
              value={newFields.lastName}
              onChange={(e) => handleNewChange("lastName", e.target.value)}
              onBlur={() => handleNewBlur("lastName")}
              className={` ${newErrors.lastName && newTouched.lastName ? "border-red-500 focus-visible:ring-red-300" : ""}`}
            />
            {newTouched.lastName && <FieldError msg={newErrors.lastName} />}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-sm">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={newFields.email}
              onChange={(e) => handleNewChange("email", e.target.value)}
              onBlur={() => handleNewBlur("email")}
              className={` ${newErrors.email && newTouched.email ? "border-red-500 focus-visible:ring-red-300" : ""}`}
            />
            {newTouched.email && <FieldError msg={newErrors.email} />}
          </div>

          {/* Practice Name */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="practice-name" className="text-sm">
              Practice&apos;s Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="practice-name"
              value={newFields.practiceName}
              onChange={(e) => handleNewChange("practiceName", e.target.value)}
              onBlur={() => handleNewBlur("practiceName")}
              className={` ${newErrors.practiceName && newTouched.practiceName ? "border-red-500 focus-visible:ring-red-300" : ""}`}
            />
            {newTouched.practiceName && (
              <FieldError msg={newErrors.practiceName} />
            )}
          </div>

          {/* Practice Phone */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="practice-phone" className="text-sm">
              Practice&apos;s Phone<span className="text-red-500">*</span>
            </Label>
            <Input
              id="practice-phone"
              type="tel"
              value={newFields.practicePhone}
              onChange={(e) => handleNewChange("practicePhone", e.target.value)}
              onBlur={() => handleNewBlur("practicePhone")}
              className={` ${newErrors.practicePhone && newTouched.practicePhone ? "border-red-500 focus-visible:ring-red-300" : ""}`}
            />
            {newTouched.practicePhone && (
              <FieldError msg={newErrors.practicePhone} />
            )}
          </div>

          {/* PMS */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm">
              Current Practice Management Software
              <span className="text-red-500">*</span>
            </Label>
            <Select
              value={newFields.pms}
              onValueChange={(v) => handleNewChange("pms", v)}
            >
              <SelectTrigger
                className={cn(
                  "p-3",
                  newErrors.pms && newTouched.pms && "border-red-500",
                )}
                onBlur={() => handleNewBlur("pms")}
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
            {newTouched.pms && <FieldError msg={newErrors.pms} />}
          </div>
        </>
      )}

      {/* reCAPTCHA */}
      <div className="flex items-center w-fit overflow-hidden bg-foreground rounded-md">
        <div className="bg-blue-600 px-4 py-3">
          <span className="text-white text-xs font-medium">
            protected by <strong>reCAPTCHA</strong>
          </span>
        </div>
        <div className=" px-4 flex items-center justify-center w-14">
          <Image
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="reCAPTCHA"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>

      {/* Server error */}
      {status === "error" && serverError && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="text-red-500 shrink-0" size={16} />
          <p className="text-sm text-red-600">{serverError}</p>
        </div>
      )}

      {/* Submit */}
      <div className="flex max-sm:justify-center justify-end">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-indigo-600 hover:bg-indigo-700 text-base hover:text-zinc-200 text-white px-8 py-5 rounded-lg"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
};
