import Link from "next/link";
import React from "react";

export default function Tile({ title, desc, buttonText, hrefLink, className }) {
  return (
    <div
      className={`p-4 flex flex-col gap-2 border-2 rounded-md border-slate-900 h-36 md:w-80 ${className}`}
    >
      <h1>{title}</h1>
      <p>{desc}</p>
      <Link href={hrefLink}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
}
