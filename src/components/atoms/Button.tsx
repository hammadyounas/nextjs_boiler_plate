import { clsx } from "@/libs/utils/helper";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, ...props }) => {
  const classes = clsx("px-4 py-2 bg-blue-500 text-white rounded bg-danger", className);

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};

export default Button;
