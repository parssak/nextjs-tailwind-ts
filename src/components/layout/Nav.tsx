import React, { ReactElement } from "react";

export default function Nav(): ReactElement {
  return (
    <nav className="bg-gray-50 fixed top-0 left-0 right-0">
      <div className="container flex items-center py-6">
        <p className="text-2xl font-medium">
          Next.js + TailwindCSS + TypeScript
        </p>
      </div>
    </nav>
  );
}
