import { type Option } from "@/shared/types/common";
import type { ChangeEvent } from "react";

type SelectProps<T extends string | number> = {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
};

export function Select<T extends string | number>({
  value,
  options,
  onChange,
  disabled,
  className,
}: SelectProps<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find(
      (option) => String(option.value) === e.target.value,
    );

    if (selected) {
      onChange(selected.value);
    }
  };

  return (
    <select
      value={String(value)}
      onChange={handleChange}
      disabled={disabled}
      className={className}
    >
      {options.map((option) => (
        <option key={option.value} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
