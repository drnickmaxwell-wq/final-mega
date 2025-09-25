"use client";
import { useState } from "react";
export default function ChatDockAi24(){
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(""); const [log, setLog] = useState<string[]>([]);
  const send = async ()=>{
    const q=text.trim(); if(!q) return;
    setLog(l=>[...l, "You: "+q]); setText("");
    try{
      const r = await fetch("/api/chat",{method:"POST", headers:{ "content-type":"application/json"}, body:JSON.stringify({ q })});
      const d = await r.json(); setLog(l=>[...l, "Assistant: "+(d.a||"Thanks!")]);
    }catch{ setLog(l=>[...l, "Assistant: (connection issue)"]); }
  };
  return (
    <>
      <button onClick={()=>setOpen(o=>!o)} className="fixed bottom-6 right-6 rounded-full px-5 py-3 text-white"
              style={{ background:"var(--magenta)", boxShadow:"var(--glow-magenta)"}}>{open?"Close":"Chat"}</button>
      {open && (
        <div className="fixed bottom-20 right-6 w-[320px] rounded-2xl theme-border theme-glass backdrop-blur p-3 shadow-2xl">
          <div className="h-[220px] overflow-auto rounded-md bg-white/80 p-2 text-sm text-black">
            {log.map((l,i)=><div key={i} className="mb-1">{l}</div>)}
          </div>
          <div className="mt-2 flex gap-2">
            <input className="flex-1 rounded-md border px-2 py-2 text-sm"
                   placeholder="Ask me something…" value={text} onChange={e=>setText(e.target.value)}
                   onKeyDown={e=>e.key==="Enter"&&send()}/>
            <button onClick={send} className="rounded-md px-4 py-2 text-white" style={{ background:"var(--turquoise)", boxShadow:"var(--glow-turquoise)"}}>Send</button>
          </div>
          <p className="mt-2 text-xs opacity-70">No diagnosis; we can book or escalate.</p>
        </div>
      )}
    </>
  );
}
