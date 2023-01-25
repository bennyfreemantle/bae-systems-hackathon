import Link from "next/link";
import React from "react";

export default function Tile({ title, desc, buttonText, hrefLink, className }) {
  return (
    <div
      className={`p-4 flex flex-col gap-2 border-2 rounded-md border-slate-900 h-44 md:w-80 ${className}`}
    >
      <h1 className="text-xl text-center font-semibold">{title}</h1>
      <p className="flex-1">{desc}</p>
      <Link href={hrefLink}>
        <button className="rounded bg-blue-700 p-2 text-white w-full hover:bg-blue-500">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
