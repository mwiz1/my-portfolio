import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <header className="pb-10 pt-10 md:pb-14 md:pt-20">
      <h1 className="font-kufi text-4xl font-semibold leading-tight text-fg md:text-6xl">{title}</h1>
      {lead && <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">{lead}</p>}
    </header>
  );
}

export function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="font-kufi text-2xl font-semibold text-fg md:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-2xl text-muted">{lead}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span dir="ltr" className="inline-block rounded-md border border-line bg-ink/60 px-2.5 py-1 text-[13px] leading-none text-fg/85">
      {children}
    </span>
  );
}
