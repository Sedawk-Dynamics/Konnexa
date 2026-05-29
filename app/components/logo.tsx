import Image from "next/image";

export function Logo({
  className = "h-11",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/konnexa-logo.png"
      alt="Konnexa Innovations — Innovating Your Digital Success"
      width={1178}
      height={987}
      priority={priority}
      sizes="200px"
      className={`w-auto object-contain ${className}`}
    />
  );
}
