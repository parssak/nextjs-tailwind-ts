import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <footer className="bg-gray-50">
      <div className="container py-12">
        <p className="text-xl">&copy; John Doe 2021</p>
      </div>
    </footer>
  );
}
