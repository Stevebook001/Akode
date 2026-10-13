"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";
declare global { interface Window { adsbygoogle?: unknown[] } }
export default function AdSlot({slot=process.env.NEXT_PUBLIC_ADSENSE_SLOT}:{slot?:string}){
 const client=process.env.NEXT_PUBLIC_ADSENSE_CLIENT||"ca-pub-2372165856534213";
 const insRef=useRef<HTMLElement|null>(null);
 const pushed=useRef(false);
 useEffect(()=>{if(!slot||!insRef.current||pushed.current)return;try{(window.adsbygoogle=window.adsbygoogle||[]).push({});pushed.current=true;}catch(e){console.error("AdSense slot initialization failed",e)}},[slot]);
 if(!client)return null;
 return <><Script id="adsense-library" async src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+client} crossOrigin="anonymous" strategy="afterInteractive"/>{slot?<ins ref={el=>{insRef.current=el}} className="adsbygoogle" style={{display:"block",minHeight:90}} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true"/>:<span className="ad-auto-status">AdSense Auto ads can serve here when enabled and the site is approved.</span>}</>
}