"use client";
import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { randomBytes } from "crypto";

export interface ITelegramContext {
  webApp?: WebApp;
  user?: WebAppUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const nonce = randomBytes(128).toString("base64");
  const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`;
  const [webApp, setWebApp] = useState<WebApp | null>(null);

  useEffect(() => {
    const telegram: Telegram | null = (window as any).Telegram;
    const tg = telegram?.WebApp;
    if (tg) {
      tg.ready();
      setWebApp(tg);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      {children}
    </TelegramContext.Provider>
  );
}

export const useTelegram = () => useContext(TelegramContext);
