
import React from 'react';

interface Props {
  show: boolean;
  score: number;
  onRestart: () => void;
}

const GameOverOverlay: React.FC<Props> = ({ show, score, onRestart }) => {
  if (!show) return null;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20
      }}
    >
      <div
        style={{
          background: '#fffaf3',
          borderRadius: 20,
          padding: '22px 24px',
          width: 320,
          textAlign: 'center',
          boxShadow: '0 14px 40px rgba(0,0,0,0.25)'
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 4 }}>😭</div>
        <h2 style={{ margin: '4px 0 10px', fontSize: 22 }}>You got bonked!</h2>
        <p style={{ margin: 0, fontSize: 16 }}>Score: {score.toFixed(0)}</p>
        <button
          style={{
            marginTop: 16,
            padding: '10px 18px',
            borderRadius: 999,
            border: 'none',
            background: '#FFB347',
            color: '#fff',
            fontSize: 16,
            cursor: 'pointer'
          }}
          onClick={onRestart}
        >
          Restart 🎮
        </button>
      </div>
    </div>
  );
};

export default GameOverOverlay;
