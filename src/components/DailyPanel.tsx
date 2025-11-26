
import React from 'react';
export default function DailyPanel({ objective, progress, target, onClose }: any){
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'rgba(0,0,0,0.4)',
      display:'flex', alignItems:'center', justifyContent:'center'
    }}>
      <div style={{
        background:'#fff', padding:20, borderRadius:16,
        width:300, textAlign:'center'
      }}>
        <h2>Daily Challenge</h2>
        <p>Objective: {objective}</p>
        <p>Progress: {(progress/1000).toFixed(1)}s</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
