export function GET() {
  const publisher = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";
  const body = publisher ? `google.com, ${publisher.replace(/^ca-pub-/, "")}, DIRECT, f08c47fec0942fa0\n` : "# Configure NEXT_PUBLIC_ADSENSE_CLIENT after AdSense approval.\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
