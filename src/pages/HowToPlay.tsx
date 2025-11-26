
import React from "react";

const HowToPlay: React.FC = () => {
  return (
    <div style={{ padding: "32px 20px", maxWidth: 800, margin: "0 auto" }}>
      <h1>How to Play Emoji Fall</h1>
      <p>
        Emoji Fall is a tiny HTML5 browser game where you move a smiley emoji left and right to
        dodge falling ghosts, bombs and other obstacles. The goal is simple: survive as long as
        possible while collecting candy power-ups to boost your score.
      </p>

      <h2>Basic controls</h2>
      <ul>
        <li><strong>Desktop:</strong> use the left and right arrow keys to move.</li>
        <li><strong>Mobile:</strong> swipe left or right on the game area to move your emoji.</li>
        <li>You can pause the game using the Pause button or the spacebar.</li>
      </ul>

      <h2>How a run works</h2>
      <ol>
        <li>Click Play in the top navigation or on the home page.</li>
        <li>Your emoji starts near the bottom of the screen while obstacles and loot fall from above.</li>
        <li>Dodge obstacles such as ghosts, bombs and lightning. One hit usually means game over unless you are invincible.</li>
        <li>Collect power-ups like candy, hearts and gifts to gain temporary advantages.</li>
        <li>Bosses appear from time to time and change the pattern of attacks for a few seconds.</li>
        <li>When you finally get hit, your score is recorded on the local leaderboard.</li>
      </ol>

      <h2>Winning, losing and high scores</h2>
      <p>
        Emoji Fall is an endless survival game. There is no final level: the challenge is to beat
        your previous best score and survive longer than before. Small decisions, like when to pick
        up a risky mystery power-up, can make the difference between a short run and a new personal
        record.
      </p>

      <p style={{ marginTop: 24, fontSize: 13, color: "#666" }}>
        Keywords: how to play emoji game, emoji falling game tutorial, browser dodging game guide,
        casual HTML5 game controls.
      </p>
    </div>
  );
};

export default HowToPlay;
