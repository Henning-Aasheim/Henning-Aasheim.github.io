import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["no", "en-GB", "ja"],
    defaultLocale: "no",
    localePrefix: "always",
});
