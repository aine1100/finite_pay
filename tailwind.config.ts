import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: '#0B4F6C',
        secondaryColor: '#2CBE18',
        headertext : '#013F16',
        footing : "#2CBE18",
        heroBg:"#e6f6e9",
        logoSection:"#E7E9EE",
        cardOneBg:"#C4DAD2",
        cardTwoBg:"#E9EFEC",
        safetyBg:"#F5EFE7",
        
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
