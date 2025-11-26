
import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "zh";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
}

const STRINGS: Record<Lang, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_play: "Play",
    nav_how: "How to Play",
    nav_powerups: "Power-Ups",
    nav_boss: "Boss Guide",
    nav_faq: "FAQ",
    nav_blog: "Blog",
    nav_about: "About",
    nav_screenshots: "Screenshots",
    nav_privacy: "Privacy",
    nav_terms: "Terms",
    lang_label: "Language",
  },
  zh: {
    nav_home: "首页",
    nav_play: "开始游戏",
    nav_how: "玩法说明",
    nav_powerups: "道具介绍",
    nav_boss: "Boss 指南",
    nav_faq: "常见问题",
    nav_blog: "博客",
    nav_about: "关于游戏",
    nav_screenshots: "截图展示",
    nav_privacy: "隐私政策",
    nav_terms: "使用条款",
    lang_label: "语言",
  }
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("emoji-fall-lang") as Lang | null;
    if (saved === "en" || saved === "zh") {
      setLangState(saved);
      document.documentElement.lang = saved === "en" ? "en" : "zh-CN";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("emoji-fall-lang", l);
    document.documentElement.lang = l === "en" ? "en" : "zh-CN";
  };

  const t = (k: string) => {
    return STRINGS[lang][k] || STRINGS["en"][k] || k;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
