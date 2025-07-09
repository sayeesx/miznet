"use client";
import React from "react";
import PageContainer from "../../components/PageContainer";
import { cn } from "../../../lib/utils";

// Minimal Label component
const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="text-sm font-medium text-[#111827]">
    {children}
  </label>
);

// Minimal Input component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-[#111827] placeholder-[#888] shadow-sm focus:border-[#fc0404] focus:outline-none focus:ring-0 transition-colors duration-200 hover:border-[#fc0404]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);

export default function ContactPage() {
  const [formType, setFormType] = React.useState<'personal' | 'enterprise'>('enterprise');
  const [showAlert, setShowAlert] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
    // You can handle form submission here
    console.log("Form submitted");
  };

  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center relative bg-white pt-16 pb-8 px-2 md:px-0 text-[#111827]">
        {showAlert && (
          <div className="fixed top-0 left-0 w-full flex justify-center z-50 animate-fade-down-up">
            <div className="bg-white text-black px-4 py-2 font-medium text-sm shadow-none rounded-lg flex items-center gap-2">
              <span role="img" aria-label="confetti">🎉</span>
              Your request has been sent, you&apos;ll get a reply from Miznet team shortly, thank you for reaching out.
            </div>
          </div>
        )}
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 flex flex-col items-center shadow-md shadow-black/10 relative">
          <h2 className="text-xl font-bold text-[#111827]">Contact Us</h2>
          <p className="mt-2 max-w-sm text-sm text-[#111827] text-center">
            Fill out the form below to get in touch with us.
          </p>
          {/* Toggle for form type with flex indicator */}
          <div className="w-full flex justify-center my-6">
            <div className="relative flex w-full max-w-xs bg-[#F9FAFB] rounded-lg p-1 overflow-hidden">
              <div className="flex w-full h-8">
                <div className={cn("transition-all duration-300 h-full rounded-md", formType === 'personal' ? 'bg-[#fc0404] w-1/2' : 'w-1/2')} />
                <div className={cn("transition-all duration-300 h-full rounded-md", formType === 'enterprise' ? 'bg-[#fc0404] w-1/2' : 'w-1/2')} />
              </div>
              <div className="absolute inset-0 flex w-full h-full">
                <button
                  type="button"
                  className={cn(
                    "flex-1 z-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none",
                    formType === 'personal'
                      ? "text-white"
                      : "text-[#111827]"
                  )}
                  onClick={() => setFormType('personal')}
                  tabIndex={0}
                >
                  Personal
                </button>
                <button
                  type="button"
                  className={cn(
                    "flex-1 z-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none",
                    formType === 'enterprise'
                      ? "text-white"
                      : "text-[#111827]"
                  )}
                  onClick={() => setFormType('enterprise')}
                  tabIndex={0}
                >
                  Enterprise
                </button>
              </div>
            </div>
          </div>
          <form className="my-4 w-full" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Your first name" type="text" required />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Your last name" type="text" required />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="you@example.com" type="email" required />
            </LabelInputContainer>
            {/* Conditional fields */}
            {formType === 'personal' && (
              <LabelInputContainer className="mb-4">
                <Label htmlFor="issue">Issue</Label>
                <Input id="issue" placeholder="Describe your issue" type="text" required />
              </LabelInputContainer>
            )}
            {formType === 'enterprise' && (
              <>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" placeholder="Your company name" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="companyEmail">Company Email <span className='text-xs text-neutral-400'>(optional)</span></Label>
                  <Input id="companyEmail" placeholder="company@example.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Company address" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="hearAbout">How did you hear about us? <span className='text-xs text-neutral-400'>(optional)</span></Label>
                  <Input id="hearAbout" placeholder="Optional" type="text" />
                </LabelInputContainer>
              </>
            )}
            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
}

// Add animation for alert
// Add this to your global CSS or in a style tag if using CSS-in-JS
// .animate-drop-in {
//   animation: drop-in 0.5s cubic-bezier(0.23, 1, 0.32, 1);
// }
// @keyframes drop-in {
//   0% { transform: translateY(-100%); opacity: 0; }
//   100% { transform: translateY(0); opacity: 1; }
// } 