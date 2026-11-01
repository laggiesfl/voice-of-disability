'use client';
import {useEffect,useState} from 'react';
export default function AccessibilityToolbar(){
 const [size,setSize]=useState(100),[contrast,setContrast]=useState(false),[reduced,setReduced]=useState(false),[reading,setReading]=useState(false);
 useEffect(()=>{try{const a=JSON.parse(localStorage.getItem('vod-a11y')||'{}');setSize(a.size||100);setContrast(!!a.contrast);setReduced(!!a.reduced);}catch{}},[]);
 useEffect(()=>{document.documentElement.style.fontSize=size+'%';document.body.classList.toggle('vod-high-contrast',contrast);document.body.classList.toggle('vod-reduced-motion',reduced);try{localStorage.setItem('vod-a11y',JSON.stringify({size,contrast,reduced}));}catch{}},[size,contrast,reduced]);
 useEffect(()=>()=>{if('speechSynthesis' in window)window.speechSynthesis.cancel()},[]);
 function read(){if(!('speechSynthesis' in window))return;window.speechSynthesis.cancel();const main=document.getElementById('main-content');const msg=new SpeechSynthesisUtterance(main?.innerText||'');msg.lang='en-ZA';msg.onend=()=>setReading(false);msg.onerror=()=>setReading(false);window.speechSynthesis.speak(msg);setReading(true)}
 function stop(){if('speechSynthesis' in window)window.speechSynthesis.cancel();setReading(false)}
 return <div className="vod-a11y-toolbar" role="region" aria-label="Accessibility tools"><div className="container vod-a11y-row">
  <strong className="vod-a11y-label">Accessibility</strong>
  <button type="button" onClick={read}>Read page</button>
  <button type="button" onClick={()=>setSize(s=>Math.max(100,s-10))} aria-label="Decrease text size">A−</button>
  <button type="button" onClick={()=>setSize(s=>Math.min(160,s+10))} aria-label="Increase text size">A+</button>
  <button type="button" onClick={()=>setContrast(v=>!v)} aria-pressed={contrast}>High contrast</button>
  <details className="vod-a11y-extra"><summary>More options</summary><div className="vod-a11y-extra-controls">
   <button type="button" onClick={()=>{if('speechSynthesis' in window){window.speechSynthesis.pause()}}} disabled={!reading}>Pause reading</button>
   <button type="button" onClick={()=>{if('speechSynthesis' in window){window.speechSynthesis.resume()}}} disabled={!reading}>Resume reading</button>
   <button type="button" onClick={stop} disabled={!reading}>Stop reading</button>
   <button type="button" onClick={()=>setReduced(v=>!v)} aria-pressed={reduced}>Reduce motion</button>
   <button type="button" onClick={()=>{setSize(100);setContrast(false);setReduced(false)}}>Reset preferences</button>
  </div></details>
 </div></div>
}