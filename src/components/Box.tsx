import { useContext } from "react";
import { ThemeContext } from "./state/ContextHook";

type boxProps = {
  borderRadius: number;
  padding: number;
};

export default function Box({ borderRadius, padding }: boxProps) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <div
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
          padding: padding,
          borderRadius: borderRadius,
        }}
      >
        Some Text Here
      </div>
    </div>
  );
}
