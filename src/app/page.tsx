export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="container pt-24 md:pt-48">
      This is a Next 13 App with TailwindCSS 3.2
      {children}
    </div>
  );
}
