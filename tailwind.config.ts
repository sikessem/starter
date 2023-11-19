import defaultTheme from "tailwindcss/defaultTheme";
import UIPlugin from "./vendor/sikessem/ui/plugin";
import UIConfig from "./vendor/sikessem/ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [UIConfig],

  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./templates/**/*.blade.php",
    "./app/View/**/*.php",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require("@tailwindcss/nesting"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    UIPlugin,
  ],
};
