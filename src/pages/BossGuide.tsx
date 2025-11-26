
import React from "react";

const BossGuide: React.FC = () => {
  return (
    <div style={{ padding: "32px 20px", maxWidth: 800, margin: "0 auto" }}>
      <h1>Boss Guide for Emoji Fall</h1>
      <p>
        Emoji Fall features several cute but dangerous bosses. Each boss changes how obstacles are
        spawned for a short period of time. Learning their patterns makes the game feel fair and
        skill-based instead of random.
      </p>

      <h2>🧸 Teddy Boss &mdash; falling bear rain</h2>
      <p>
        Teddy falls from the top of the screen while dropping ghosts and the occasional gift box.
        Stay slightly off-center from its vertical path and be ready to step aside when new ghosts
        spawn under it. Use screen-clearing gifts and slow motion to stay safe.
      </p>

      <h2>🐰 Bunny Boss &mdash; horizontal bomb trail</h2>
      <p>
        Bunny dashes horizontally across the screen and leaves a trail of bombs behind. Never stand
        directly behind it. Move ahead of its path early and watch out for the delayed explosions
        caused by falling bombs.
      </p>

      <h2>🌩️ Thunder Boss &mdash; lightning lanes</h2>
      <p>
        Thunder Boss marks a vertical lane and then sends down several fast lightning bolts. As soon
        as you see the warning, shift to a neighboring column. Slow motion power-ups make this much
        less stressful.
      </p>

      <h2>🎀 Ribbon Boss &mdash; reward pattern</h2>
      <p>
        Ribbon Boss moves in a wavy pattern near the top of the screen and drops ribbons and gifts.
        This is a high-reward phase if you position yourself carefully and avoid overlapping with the
        boss itself. Invincibility and speed boosts help you grab more loot safely.
      </p>

      <p style={{ marginTop: 24, fontSize: 13, color: "#666" }}>
        Keywords: emoji boss guide, teddy boss pattern, bunny boss bombs, thunder lightning lanes,
        ribbon boss rewards, browser mini game strategy.
      </p>
    </div>
  );
};

export default BossGuide;
