import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./app/res/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./app/res/views/**/*.blade.php",
    "./app/src/Views/**/*.php",
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
  ],
};
