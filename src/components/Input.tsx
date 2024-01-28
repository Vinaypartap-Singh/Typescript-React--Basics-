import React from "react";

type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ handleChange, value }: inputProps) {
  return (
    <input
      placeholder="Enter Your Name"
      onChange={handleChange}
      value={value}
    />
  );
}
