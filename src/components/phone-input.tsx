import * as React from "react";

import type * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import { Input } from "~/components/ui/input";
import { type InputProps } from "~/components/ui/input"; // Adjust the import path if necessary
// import { Button } from "~/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "~/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "~/components/ui/popover";
// import { ScrollArea } from "~/components/ui/scroll-area";

import { parsePhoneNumber, type E164Number } from "libphonenumber-js";

import { cn } from "~/lib/utils"; // Add this import at the top of the file

interface PhoneInputProps extends Omit<InputProps, "onChange"> {
  onChange?: (value: E164Number | null) => void;
  // ... other props ...
}

export function PhoneInput({
  onChange,
  // ... other props
}: PhoneInputProps) {
  // ... existing code ...

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const phoneNumber = parsePhoneNumber(value, "US");
      if (phoneNumber?.isValid()) {
        onChange?.(phoneNumber.number);
      } else {
        onChange?.(null);
      }
    } else {
      onChange?.(null);
    }
  };

  return (
    <Input
      // ... other props
      onChange={handleChange}
      // ... rest of the component
    />
  );
}

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn("rounded-e-lg rounded-s-none", className)}
      {...props}
      ref={ref}
    />
  ),
);
InputComponent.displayName = "InputComponent";

// Remove or comment out unused type definition
// type CountrySelectOption = { value: string; label: string; phone: string }

// Remove or comment out unused type
// type CountrySelectProps = {
//   disabled?: boolean;
//   value: RPNInput.Country;
//   onChange: (value: RPNInput.Country) => void;
//   options: CountrySelectOption[];
// };

// Remove or comment out the CountrySelect component if not used
// const CountrySelect = React.forwardRef<
//   HTMLButtonElement,
//   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
// >(({ className, ...props }, ref) => (
//   // Component definition
// ));

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
FlagComponent.displayName = "FlagComponent";

export default PhoneInput;
