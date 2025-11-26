
import React from 'react';
export default function BossWarning({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div style={{
      position:'absolute', top:20, left:0, right:0,
      textAlign:'center', fontSize:'32px',
      color:'#ff4d4f', fontWeight:'bold',
      animation:'blink 0.5s infinite'
    }}>
      ⚠️ BOSS INCOMING!
    </div>
  );
}
