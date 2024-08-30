import React, { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type {
  FormFieldType,
  LabelType,
  ButtonIconType,
  ErrorMessageType,
} from "./index.d";

export const Root = ({ children }: { children: ReactNode }) => {
  return <div className="relative">{children}</div>;
};

export const FormField = forwardRef<HTMLInputElement, FormFieldType>(
  (
    {
      initialBorderColor,
      focusedBorderColor,
      hasError = false,
      className,
      value,
      ...props
    },
    ref
  ) => {
    const initialBorderColorVariants = {
      gray: "border-gray-300",
      white: "border-white",
    };

    const focusedBorderColorVariants = {
      sky: {
        default: "border-sky-600",
        focus: "focus:border-sky-600",
      },
    };

    const borderColorBasedOnValue =
      value === ""
        ? initialBorderColorVariants[initialBorderColor]
        : focusedBorderColorVariants[focusedBorderColor].default;

    const borderErrorStyles = hasError
      ? "border-red-500 focus:border-red-500"
      : "";

    return (
      <input
        ref={ref}
        value={value}
        type="text"
        className={twMerge(
          `peer bg-transparent w-full pl-3 pr-10 py-2 text-white rounded-md outline-none border 
            ${focusedBorderColorVariants[focusedBorderColor].focus}`,
          borderColorBasedOnValue,
          borderErrorStyles,
          className
        )}
        {...props}
      />
    );
  }
);

export const Label = ({
  label,
  hasInputValue,
  bgColor,
  initialTextColor,
  focusedTextColor,
  hasError = false,
  className,
  ...props
}: LabelType) => {
  const backgroundColorVariants = {
    zinc: "bg-zinc-800 peer-focus:bg-zinc-800",
    white: "bg-white peer-focus:bg-white",
    gray: "bg-gray-300 peer-focus:bg-gray-300",
  };

  const initialTextColorVariants = {
    gray: "text-gray-400",
    white: "text-white",
  };

  const focusedTextColorVariants = {
    sky: {
      default: "text-sky-600",
      peer_focus: "peer-focus:text-sky-600",
    },
  };

  const labelWhenInputHasValue = hasInputValue
    ? `-translate-y-[50%] text-xs ${focusedTextColorVariants[focusedTextColor].default}`
    : "";

  const labelWhenInputHasError = hasError
    ? `-translate-y-[50%] text-xs text-red-500 peer-focus:text-red-500`
    : "";

  return (
    <label
      className={twMerge(
        `absolute translate-y-[25%] left-2 px-1 transition-transform duration-300 transform pointer-events-none peer-focus:text-xs peer-focus:-translate-y-[50%] 
          ${initialTextColorVariants[initialTextColor]} 
          ${backgroundColorVariants[bgColor]} 
          ${focusedTextColorVariants[focusedTextColor].peer_focus}`,
        labelWhenInputHasValue,
        labelWhenInputHasError,
        className
      )}
      {...props}
    >
      {label}
    </label>
  );
};

export const ButtonIcon = ({
  className,
  children,
  ...props
}: ButtonIconType) => {
  return (
    <button
      className={twMerge("absolute translate-y-[75%] right-3", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export const ErrorMessage = ({
  errorMessage,
  className,
  ...props
}: ErrorMessageType) => {
  return (
    <p className={twMerge("text-red-500 text-xs mt-1", className)} {...props}>
      {errorMessage}
    </p>
  );
};
