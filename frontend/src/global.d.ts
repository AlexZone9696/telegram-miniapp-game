// src/types/global.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        openTelegramLink: (url: string) => void;
        close: () => void;
      };
    };
  }
}