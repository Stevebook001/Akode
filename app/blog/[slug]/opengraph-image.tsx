import { ImageResponse } from "next/og";
import { postMap } from "@/lib/posts";

export const runtime = "edge";
export const alt = "AKODE article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap[slug];
  const title = post?.title ?? "AKODE";
  const category = post?.category ?? "Knowledge Library";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg,#ffffff 0%,#f7f2ff 45%,#e8fbff 100%)",
          color: "#142033",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, fontWeight: 800 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#7b35e8" }} />
          AKODE · Ibrahim Akanni Ahmad
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 24, color: "#7b35e8", fontWeight: 800, textTransform: "uppercase", letterSpacing: 4 }}>{category}</div>
          <div style={{ fontSize: 58, lineHeight: 1.05, fontWeight: 900, maxWidth: 1060 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#667389" }}>
          <span>Founder · Builder · Author · CEO</span>
          <span>akode-nine.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
