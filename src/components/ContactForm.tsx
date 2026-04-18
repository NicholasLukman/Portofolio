"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3500);
  };

  const disabled = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Nicholas Lukman" required disabled={disabled} />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="nicholaslukman87@gmail.com"
          required
          disabled={disabled}
        />
      </div>
      <Field
        label="Company (optional)"
        name="company"
        placeholder="—"
        disabled={disabled}
      />
      <div>
        <label
          htmlFor="message"
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          Your letter
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={disabled}
          placeholder=""
          className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 font-serif text-base outline-none transition placeholder:text-muted-foreground focus:border-foreground disabled:opacity-60"
        />
      </div>

      <div className="flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-11 items-center gap-2 border border-foreground bg-foreground px-6 text-sm text-background transition hover:bg-transparent hover:text-foreground disabled:opacity-60"
        >
          <span className="font-serif italic">
            {status === "submitting" ? "Sending…" : "Post letter"}
          </span>
        </button>
        <p
          className={`font-mono text-[11px] uppercase tracking-[0.22em] transition ${
            status === "sent"
              ? "text-accent"
              : status === "error"
                ? "text-red-600"
                : "text-muted-foreground"
          }`}
        >
          {status === "sent"
            ? "Received. Speak soon."
            : status === "error"
              ? "Something went wrong — try email."
              : "Your details stay private."}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

function Field({ label, name, type = "text", placeholder, required, disabled }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="mt-3 h-11 w-full border-b border-border bg-transparent font-serif text-base outline-none transition placeholder:text-muted-foreground focus:border-foreground disabled:opacity-60"
      />
    </div>
  );
}
