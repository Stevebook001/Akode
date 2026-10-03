import Script from "next/script";

export default function AdSlot({ slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT }: { slot?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client || !slot) return null;
  return (
    <>
      <Script
        async
        src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + client}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90 }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}
