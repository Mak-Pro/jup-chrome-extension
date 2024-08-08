"use client";
import React, { createContext, useState, useEffect } from "react";
import { useTelegram } from "./telegram";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

const AppContext = createContext({
  isLogined: false,
  setIsLogined: (val: boolean): void => {},
  telegramUser: {
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
  } as TelegramUser | null,
  telegramWebApp: undefined as WebApp | undefined,
  loading: false,
  loadingHandler: (val: boolean): void => {},
  dailyReward: 0,
  setDailyReward: (val: number): void => {},
  unfinishedTasks: 0,
  setUnfinishedTasks: (val: number): void => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { webApp, user } = useTelegram();
  const [isLogined, setIsLogined] = useState(false);
  const [dailyReward, setDailyReward] = useState(0);
  const [unfinishedTasks, setUnfinishedTasks] = useState(0);
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [telegramWebApp, setTelegramWebApp] = useState<WebApp | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.id) {
      setTelegramUser(user);
    }
    if (webApp) {
      setTelegramWebApp(webApp);
    }
  }, [isLogined, user]);

  const loadingHandler = (val: boolean) => {
    setLoading(val);
  };

  return (
    <AppContext.Provider
      value={{
        isLogined,
        setIsLogined,
        telegramUser,
        telegramWebApp,
        loading,
        loadingHandler,
        dailyReward,
        setDailyReward,
        unfinishedTasks,
        setUnfinishedTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
