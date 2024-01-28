import React from "react";

// Event Handling
type buttonEventProps = {
  // To define event on button click
  buttonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  //   Style Props in Typescript
  styles: React.CSSProperties;
};

export default function Button({
  buttonClick,
  title,
  styles,
}: buttonEventProps) {
  return (
    <div>
      <button style={styles} onClick={buttonClick}>
        {title}
      </button>
    </div>
  );
}
