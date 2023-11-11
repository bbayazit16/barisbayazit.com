import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        {
            pattern: /hljs+/,
        },
    ],
    theme: {
        hljs: {
            theme: "night-owl",
        },
    },
    plugins: [require("@tailwindcss/typography"), require("tailwind-highlightjs")],
}
export default config
