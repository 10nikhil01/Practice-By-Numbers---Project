"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormSuccess } from "@/sections/demo";
import type { FormStatus } from "@/types/demo";
import { useState } from "react";
import {
  ExistingCustomerForm,
  NewCustomerForm,
  ReCaptcha,
  ServerError,
  SubmitButton,
  useExistingCustomer,
  useNewCustomer,
} from "@/sections/demo/form";

export const DemoForm = () => {
  const [isCurrentCustomer, setIsCurrentCustomer] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState("");

  const newCustomer = useNewCustomer();
  const existingCustomer = useExistingCustomer();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    const isValid = isCurrentCustomer
      ? existingCustomer.validateAll()
      : newCustomer.validateAll();

    if (!isValid) return;

    setStatus("loading");

    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        "Something went wrong. Please try again or contact support.",
      );
      console.log("err-", err);
    }
  };

  if (status === "success") return <FormSuccess />;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 bg-card border-border border md:max-w-md w-full m-auto p-5 rounded-2xl"
    >
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
        <ExistingCustomerForm
          fields={existingCustomer.fields}
          errors={existingCustomer.errors}
          touched={existingCustomer.touched}
          onChange={existingCustomer.handleChange}
          onBlur={existingCustomer.handleBlur}
        />
      ) : (
        <NewCustomerForm
          fields={newCustomer.fields}
          errors={newCustomer.errors}
          touched={newCustomer.touched}
          onChange={newCustomer.handleChange}
          onBlur={newCustomer.handleBlur}
        />
      )}

      <ReCaptcha />
      <ServerError message={serverError} />
      <SubmitButton status={status} />
    </form>
  );
};
