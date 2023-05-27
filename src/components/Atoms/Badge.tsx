"use client";

import React from "react";

interface Props {
  text: string;
  click?: (val: string) => void;
}

const Badge = ({ click, text }: Props) => {
  return (
    <span
      className="px-3 py-1 rounded-lg bg-black text-white cursor-pointer"
      onClick={() => {
        if (click) click(text);
      }}
    >
      {text}
    </span>
  );
};

export { Badge };
