export const runtime="nodejs";

export async function POST(req:Request){
  try{
    const {message}=await req.json();
    if(!message||typeof message!=="string") return Response.json({error:"Message is required."},{status:400});

    const system="You are Aelia, the AI assistant for Ibrahim Akanni Ahmad's official digital headquarters. Answer accurately and helpfully about his projects, books, articles, technology and public portfolio information. Do not invent private facts. When the user asks for an action, explain what you can safely do and what permission is required.";

    const base=process.env.AELIA_MODEL_BASE_URL;
    const model=process.env.AELIA_MODEL_NAME||"aelia-local";
    if(base){
      const endpoint=base.replace(/\/$/,"")+"/v1/chat/completions";
      const r=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model,messages:[{role:"system",content:system},{role:"user",content:message}],temperature:.7,stream:false})});
      const data=await r.json();
      if(!r.ok) return Response.json({error:data?.error?.message||"Self-hosted Aelia model failed."},{status:r.status});
      return Response.json({answer:data?.choices?.[0]?.message?.content||"No answer returned.",backend:"self-hosted"});
    }

    const key=process.env.OPENAI_API_KEY;
    if(!key) return Response.json({error:"Aelia is not connected to a model server yet. Configure AELIA_MODEL_BASE_URL for the self-hosted model."},{status:503});
    const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-4o-mini",messages:[{role:"system",content:system},{role:"user",content:message}],temperature:.7})});
    const data=await r.json();
    if(!r.ok) return Response.json({error:data?.error?.message||"Fallback model request failed."},{status:r.status});
    return Response.json({answer:data?.choices?.[0]?.message?.content||"No answer returned.",backend:"fallback"});
  }catch{return Response.json({error:"Invalid request or server error."},{status:500})}
}