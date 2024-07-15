"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function Submit({text,className}:{text:string,className?:string}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} ${
        pending ? " text-gray-500" : null
      }`}
    >
      {pending ? `${text}...` : text}
    </button>
  );
}

export default Submit;
