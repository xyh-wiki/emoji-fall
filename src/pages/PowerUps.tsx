
import React from "react";

const PowerUps: React.FC = () => {
  return (
    <div style={{ padding: "32px 20px", maxWidth: 800, margin: "0 auto" }}>
      <h1>Emoji Fall Power-Ups Guide</h1>
      <p>
        Emoji Fall includes several cute power-up items that can completely change how a run feels.
        Learning what each emoji does is the fastest way to survive longer and reach higher scores.
      </p>

      <h2>🍬 Candy &mdash; speed boost</h2>
      <p>
        Candy temporarily increases your movement speed. It is perfect for escaping boss attacks or
        weaving through dense patterns of obstacles. Use it when you see a wall of ghosts or bombs
        heading toward you.
      </p>

      <h2>🍭 Lollipop &mdash; slow motion</h2>
      <p>
        Lollipop slows down the entire game, not just your character. This makes it much easier to
        read patterns and dodge tight gaps. It is ideal for newer players and for surviving the
        most chaotic moments.
      </p>

      <h2>💝 Heart &mdash; shield</h2>
      <p>
        The heart power-up grants temporary invincibility. While active, colliding with obstacles
        or even the boss will not end your run. Use this time to reposition safely or collect extra
        loot such as stars and ribbons.
      </p>

      <h2>⭐ Star &mdash; bonus score</h2>
      <p>
        Stars instantly add bonus points to your score. They work best when combined with other
        buffs such as slow motion so that you can safely grab them without dying.
      </p>

      <h2>🎁 Gift &mdash; screen clear</h2>
      <p>
        Gift boxes trigger a bomb that clears all current obstacles on the screen. Save them for
        the scariest moments when the board is nearly full and escape routes are limited.
      </p>

      <h2>🌀 Mystery &mdash; random effect</h2>
      <p>
        Mystery orbs are high risk and high reward. They can grant any of the above effects, from
        powerful invincibility to a dramatic speed change. Use them when you are comfortable with
        chaos and ready for surprises.
      </p>

      <h2>🎀 Ribbon &mdash; boss bonus loot</h2>
      <p>
        Ribbons are mainly dropped by the Ribbon boss. They are safe to collect and usually grant
        extra score. If you can stay close to the boss without colliding, you can farm a lot of
        points in a short time.
      </p>

      <p style={{ marginTop: 24, fontSize: 13, color: "#666" }}>
        Keywords: emoji power ups explained, candy speed boost, slow motion lollipop, invincibility
        shield, random mystery loot, bonus score items.
      </p>
    </div>
  );
};

export default PowerUps;
