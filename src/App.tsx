
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import PowerUps from "./pages/PowerUps";
import BossGuide from "./pages/BossGuide";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Game from "./pages/Game";
import Screenshots from "./pages/Screenshots";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { LanguageProvider, useLang } from "./i18n/LanguageContext";

const NavBar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  return (
    <nav style={{padding:"12px 20px",display:"flex",gap:"16px",alignItems:"center",borderBottom:"1px solid #eee"}}>
      <Link to="/">{t("nav_home")}</Link>
      <Link to="/game">{t("nav_play")}</Link>
      <Link to="/how-to-play">{t("nav_how")}</Link>
      <Link to="/powerups">{t("nav_powerups")}</Link>
      <Link to="/boss-guide">{t("nav_boss")}</Link>
      <Link to="/faq">{t("nav_faq")}</Link>
      <Link to="/blog">{t("nav_blog")}</Link>
      <Link to="/screenshots">{t("nav_screenshots")}</Link>
      <Link to="/about">{t("nav_about")}</Link>
      <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"6px",fontSize:"13px"}}>
        <span>{t("lang_label")}:</span>
        <button onClick={()=>setLang("en")} style={{padding:"3px 8px",borderRadius:8,border: lang==="en"?"1px solid #333":"1px solid #ccc",background: lang==="en"?"#f5f5f5":"#fff"}}>EN</button>
        <button onClick={()=>setLang("zh")} style={{padding:"3px 8px",borderRadius:8,border: lang==="zh"?"1px solid #333":"1px solid #ccc",background: lang==="zh"?"#f5f5f5":"#fff"}}>中文</button>
      </div>
    </nav>
  );
};

const AppInner: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Game/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/how-to-play" element={<HowToPlay/>} />
        <Route path="/powerups" element={<PowerUps/>} />
        <Route path="/boss-guide" element={<BossGuide/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/blog/*" element={<Blog/>} />
        <Route path="/screenshots" element={<Screenshots/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App(){
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
