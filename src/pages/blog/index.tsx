
import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { slug:"why-emoji-fall-relaxing", title:"Why Emoji Fall Is the Perfect 1-Minute Relaxing Game" },
  { slug:"top-survival-tips", title:"Top 7 Tips to Survive Longer in Emoji Fall" },
  { slug:"powerups-explained", title:"Every Emoji Power-Up Explained" },
  { slug:"boss-dodge-guide", title:"How to Dodge Every Boss Attack" },
  { slug:"daily-challenges", title:"Why Daily Challenges Make Emoji Fall Addictive" },
  { slug:"game-story", title:"The Story Behind Emoji Fall" },
  { slug:"best-powerup-combos", title:"Best Power-Up Combos in Emoji Fall" },
  { slug:"psychology-of-minigames", title:"Why Mini Games Feel Satisfying" },
  { slug:"mobile-vs-desktop", title:"Mobile vs Desktop – Which Is Better?" },
  { slug:"compare-to-other-games", title:"How Emoji Fall Compares to Other Mini Games" }
];

export default function Blog(){
  return (
    <div style={{padding:'20px'}}>
      <h1>Blog</h1>
      <ul>
        {posts.map(p=>(
          <li key={p.slug}>
            <Link to={"/blog/"+p.slug}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
