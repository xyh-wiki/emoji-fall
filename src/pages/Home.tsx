
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: 720, margin: "0 auto" }}>
      <h1>Emoji Fall - Cute Browser Emoji Game</h1>
      <p>
        Emoji Fall is a tiny HTML5 dodging game where you move a smiling emoji to avoid ghosts,
        collect candy power-ups and survive boss attacks. Play directly in your browser with no
        download required.
      </p>
      <p>
        Click the button below to start playing, or explore the guides and blog posts to learn more
        tips and tricks.
      </p>
      <p style={{ marginTop: 24 }}>
        <Link
          to="/game"
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            background: "#4a4fff",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          Play Emoji Fall now →
        </Link>
      </p>
    </div>
  );
}
