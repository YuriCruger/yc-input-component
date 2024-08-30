import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export type FormFieldType = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  hasError?: boolean;
  initialBorderColor: "gray" | "white";
  focusedBorderColor: "sky";
};

export type LabelType = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  hasInputValue: boolean;
  bgColor: "zinc" | "white" | "gray";
  initialTextColor: "gray" | "white";
  focusedTextColor: "sky";
  hasError?: boolean;
};

export type ButtonIconType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export type ErrorMessageType = HTMLAttributes<HTMLParagraphElement> & {
  errorMessage: string | undefined;
};
