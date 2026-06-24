import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori (the renderer behind ImageResponse) requires display: "flex" on any
// container with multiple children. Each div below either has a single text
// child or explicitly sets display: "flex".
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #5b4ee8 45%, #7c6cf0 100%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Decorative concentric rings */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 440,
            height: 440,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.14)",
            display: "flex",
          }}
        />

        {/* Top brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ffffff",
              color: "#4f46e5",
              fontSize: 42,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            K
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 700 }}>Konnexa</div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 6,
                textTransform: "uppercase",
                opacity: 0.85,
                marginTop: 6,
              }}
            >
              innovations
            </div>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
              gap: "0 26px",
            }}
          >
            <div style={{ display: "flex" }}>Innovating Your</div>
            <div style={{ display: "flex", color: "#d6d2ff" }}>
              Digital Success
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              opacity: 0.92,
              maxWidth: 920,
            }}
          >
            HR Services · Digital Marketing · Software Training & Skill
            Development
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex" }}>konnexainnovations.com</div>
          <div style={{ display: "flex", gap: 22 }}>
            <div style={{ display: "flex" }}>Hyderabad</div>
            <div style={{ display: "flex" }}>·</div>
            <div style={{ display: "flex" }}>Jagtial</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
