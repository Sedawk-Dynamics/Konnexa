import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<string, React.ReactNode> = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  wallet: (
    <>
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-2" />
      <path d="M3 7h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3" />
      <circle cx="16" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M14 7s3 1.5 3 5-3 5-3 5" />
      <path d="M18 4s4 2.5 4 8-4 8-4 8" />
    </>
  ),
  code: (
    <>
      <path d="m8 16-4-4 4-4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 5-2 14" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 .8Z" />
      <path d="M12 15 9 12a13 13 0 0 1 9-9 13 13 0 0 1-1 9 13 13 0 0 1-5 5Z" />
      <path d="M15 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  badge: (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  graduation: (
    <>
      <path d="M22 9 12 5 2 9l10 4 10-4Z" />
      <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
      <path d="M22 9v5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  map: (
    <>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 8 19.35L3 21Zm6-12c0 4 6 6 6.5 4.5.2-.6-.5-1-1.2-1.4-.4-.2-.7-.1-1 .2-.5.6-1 .3-1.7-.3-.5-.4-1-1.1-1.2-1.6-.2-.4 0-.6.2-.9.3-.3.3-.5.2-.8-.1-.4-.5-1.3-1-1.3-.4 0-.8.4-.8 1.6Z" />
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m20 6-11 11-5-5" />,
  spark: (
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {paths[name]}
    </svg>
  );
}
