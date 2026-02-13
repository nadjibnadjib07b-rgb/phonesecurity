import en from "./en";
import fr from "./fr";
import ar from "./ar";
import ru from "./ru";

export const translations = {
  en,
  fr,
  ar,
  ru,
};

export type TranslationType = typeof en;
export type Lang = keyof typeof translations;
