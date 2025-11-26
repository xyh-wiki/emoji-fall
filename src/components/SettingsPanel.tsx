
import React from 'react';
export default function SettingsPanel({ sound, setSound, onClose }: any){
  return (
    <div style={{
      position:'absolute',top:0,left:0,right:0,bottom:0,
      background:'rgba(0,0,0,0.4)',
      display:'flex',alignItems:'center',justifyContent:'center'
    }}>
      <div style={{background:'#fff',padding:20,borderRadius:16,width:260}}>
        <h2>Settings</h2>
        <label>
          <input type="checkbox" checked={sound} onChange={e=>setSound(e.target.checked)}/>
          Enable Sound
        </label>
        <br/>
        <button onClick={onClose} style={{marginTop:12}}>Close</button>
      </div>
    </div>
  );
}
