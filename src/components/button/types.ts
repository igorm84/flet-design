import React from "react";
import { RemoveT } from "../helpers";

export type SizeTypes = "small" | "sm" | "medium" | "md" | "large" | "lg";
export type ButtonIconConfigProps = {
  side?: "left" | "right";
};

export type ButtonIconProps = {
  icon: React.ReactNode;
  config?: ButtonIconConfigProps;
  children?: React.ReactNode;
};
export type HTMLButtonProps = RemoveT<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
>;
export type ButtonProps = {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default"
    | "dark";
  outlined?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
  iconConfig?: ButtonIconConfigProps;
  shape?: "square" | "rounded" | "fat";
  size?: SizeTypes;
  loading?: boolean;
  className?: string;
  ghost?: boolean;
  children?: React.ReactNode;
} & HTMLButtonProps;
