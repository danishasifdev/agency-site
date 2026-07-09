"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { CONTACT_API } from "@/lib/config";

const SERVICE_OPTIONS = [
  "Website",
  "Web App",
  "SEO",
  "AI Feature",
  "Not sure yet",
];

const TOTAL_STEPS = 4; // name, email, service, message

export default function Contact() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [values, setValues] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const isLastStep = step === TOTAL_STEPS - 1;
  const percent = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  const canAdvance =
    (step === 0 && values.name.trim()) ||
    (step === 1 && values.email.trim()) ||
    (step === 2 && values.service) ||
    (step === 3 && values.message.trim());

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function goNext() {
    if (!canAdvance || isLastStep) return;
    setDirection(1);
    setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey && !isLastStep) {
      e.preventDefault();
      goNext();
    }
  }

  async function handleSubmit() {
    if (!canAdvance) return;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMsg(
        "This form isn't connected yet - add a free Web3Forms access key to .env.local (see .env.local.example).",
      );
      return;
    }

    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("service", values.service);
      formData.append("message", values.message);
      formData.append(
        "subject",
        `New message from ${values.name || "website"}`,
      );

      const res = await fetch(CONTACT_API.endpoint, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong - please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error - please try again.");
    }
  }

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section id="contact" className="w-full px-6 py-28">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">
            Send us a message!
          </h2>
          {/* <p className="mt-4 text-lg text-black/60">
            No forms full of dropdowns - just tell us about it, a step at a
            time.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-12 rounded-3xl p-8 md:p-10"
        >
          {status === "success" ? (
            <div className="py-10 text-center">
              <p className="font-serif text-2xl">
                Thanks, {values.name.split(" ")[0] || "there"} - got it.
              </p>
              <p className="mt-2 text-black/60">
                We&apos;ll reply to {values.email || "your email"} shortly,
                personally - not an autoresponder.
              </p>
            </div>
          ) : (
            <>
              {/* Progress - percentage only */}
              <div className="mb-10">
                <div className="flex items-center justify-between text-xs text-black/45">
                  <span>
                    Step {step + 1} of {TOTAL_STEPS}
                  </span>
                  <span>{percent}%</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-black/10">
                  <motion.div
                    className="h-full rounded-full bg-[#c17f3e]"
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="relative min-h-40" onKeyDown={handleKeyDown}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {step === 0 && (
                      <label className="flex flex-col gap-2 text-sm font-medium text-black/70">
                        What should we call you?
                        <input
                          type="text"
                          value={values.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="rounded-xl border border-black/12 bg-white/70 px-4 py-3 text-base outline-none backdrop-blur-sm focus:border-[#c17f3e]"
                          placeholder="Your name"
                        />
                      </label>
                    )}

                    {step === 1 && (
                      <label className="flex flex-col gap-2 text-sm font-medium text-black/70">
                        What&apos;s your email?
                        <input
                          type="email"
                          value={values.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="rounded-xl border border-black/12 bg-white/70 px-4 py-3 text-base outline-none backdrop-blur-sm focus:border-[#c17f3e]"
                          placeholder="you@company.com"
                        />
                      </label>
                    )}

                    {step === 2 && (
                      <div>
                        <p className="mb-4 text-sm font-medium text-black/70">
                          What are you looking for?
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {SERVICE_OPTIONS.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => update("service", option)}
                              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                                values.service === option
                                  ? "border-[#14110f] bg-[#14110f] text-[#faf8f5]"
                                  : "border-black/15 bg-white/60 text-black/70 hover:bg-black/5"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <label className="flex flex-col gap-2 text-sm font-medium text-black/70">
                        Tell us about the project
                        <textarea
                          rows={5}
                          value={values.message}
                          onChange={(e) => update("message", e.target.value)}
                          className="rounded-xl border border-black/12 bg-white/70 px-4 py-3 text-base outline-none backdrop-blur-sm focus:border-[#c17f3e]"
                          placeholder="What are you trying to build? Any timeline or budget in mind?"
                        />
                      </label>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">{errorMsg}</p>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="text-sm font-medium text-black/50 transition-opacity disabled:opacity-0"
                >
                  &larr; Back
                </button>

                {isLastStep ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canAdvance || status === "loading"}
                    className="inline-flex items-center gap-2 rounded-full bg-[#14110f] px-7 py-3 text-base font-medium text-[#faf8f5] transition-transform hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      "Sending…"
                    ) : (
                      <>
                        Send message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canAdvance}
                    className="rounded-full bg-[#14110f] px-7 py-3 text-base font-medium text-[#faf8f5] transition-transform hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
                  >
                    Next &rarr;
                  </button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
