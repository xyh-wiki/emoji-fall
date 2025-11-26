
import React from 'react';
export default function SkinSelector({ skins, current, onSelect, onClose }: any){
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'rgba(0,0,0,0.4)',
      display:'flex', alignItems:'center', justifyContent:'center'
    }}>
      <div style={{
        background:'#fff', padding:20, borderRadius:16,
        width:340
      }}>
        <h2>Select Skin</h2>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          {skins.map((s:string)=>(
            <div key={s} onClick={()=>onSelect(s)}
              style={{
                fontSize:'40px', cursor:'pointer',
                border: s===current ? '2px solid #ffb347':'2px solid transparent',
                borderRadius:12, padding:8
              }}>{s}</div>
          ))}
        </div>
        <button onClick={onClose} style={{marginTop:12}}>Close</button>
      </div>
    </div>
  );
}
