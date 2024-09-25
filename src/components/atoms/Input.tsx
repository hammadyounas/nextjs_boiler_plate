import { clsx } from "@/libs/utils/helper";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ className, label, ...props }) => {
  const classes = clsx(
    " border-none p-2 rounded outline-none w-full",
    className
  );
  return (
    <div>
      <label className="text-xl pb-3 font-normal text-primary inline-block">{label}</label>
      <input className={" border-none p-2 rounded outline-none w-full bg-secondary h-12"} {...props} />
    </div>
  );
};
