"use client";
import { useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { useTelegram } from "@/providers/telegram";
import AppContext from "@/providers/context";
import { cssVariables } from "@/assets/styles/variables";
import { Toaster } from "react-hot-toast";

const navPages = ["/tasks", "/friends", "/marketplace", "/gems"];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { webApp } = useTelegram();
  const { loading } = useContext(AppContext);

  useEffect(() => {
    webApp?.ready();
    webApp?.expand();
    if (webApp) {
      document.body.classList.add(webApp?.colorScheme);
    }
    webApp?.onEvent("themeChanged", () => {
      if (webApp?.colorScheme === "dark") {
        document.body.classList.remove("light");
        document.body.classList.add(webApp?.colorScheme);
      }
      if (webApp?.colorScheme === "light") {
        document.body.classList.remove("dark");
        document.body.classList.add(webApp?.colorScheme);
      }
    });
    // if (pathname !== "/") {
    //   document.body.classList.add("show");
    // }
    document.body.classList.add("show");
  }, [webApp]);

  return (
    <>
      <main>{children}</main>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          icon: null,
          style: {
            backgroundColor: cssVariables.gray00,
            color: cssVariables.white,
            fontWeight: 600,
            minWidth: "100%",
            border: `1px solid ${cssVariables.gray10}`,
          },
          success: {
            style: {
              color: cssVariables.green,
            },
          },
          error: {
            style: {
              color: cssVariables.red,
            },
          },
        }}
      />
    </>
  );
}
