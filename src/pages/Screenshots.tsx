
import React from "react";

const screenshots = [
  { src: "/screenshots/shot-gameplay-1.png", alt: "Emoji Fall gameplay screenshot 1" },
  { src: "/screenshots/shot-gameplay-2.png", alt: "Emoji Fall gameplay screenshot 2" },
  { src: "/screenshots/shot-boss-1.png", alt: "Emoji Fall boss fight screenshot" }
];

export default function Screenshots(){
  return (
    <div style={{ padding:"20px" }}>
      <h1>Emoji Fall Screenshots</h1>
      <p>Here are a few preview images of the Emoji Fall browser game. You can replace these PNG files with real screenshots from your deployment.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:"16px", marginTop:"16px" }}>
        {screenshots.map(s => (
          <figure key={s.src} style={{ margin:0 }}>
            <img src={s.src} alt={s.alt} style={{ width:"100%", borderRadius:12, border:"1px solid #eee" }} />
            <figcaption style={{ fontSize:12, marginTop:6, color:"#666" }}>{s.alt}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
