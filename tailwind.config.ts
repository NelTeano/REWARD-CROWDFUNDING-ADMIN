import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'darkGray': '#232321', // Assuming Dark Gray from previous config
        'blue': '#003F62', // Assuming cyan as Blue
        'white': '#FFFFFF', // FA White
        'baseShade': '#212121', // Base Shade/100 (Assumed a light gray shade)
        'pureWhite': '#FFFFFF', // Pure/White
        'yellow': '#FFA52F', // Assuming a standard yellow
        'gray': '#E7E7E3', // Gray Main
        'dividerFAWhite': '#FAFAFA', // FA White (Assumed for Dividers)
        'neutralGray6': '#79767C', // Neutrals/Gray 6 (Assumed a mid-gray shade)
        'neutralGray10': '#1F1A24', // Neutrals/Gray 10 (Assumed a dark gray shade)
        'grayMaybe': '#232321', // Gray Maybe (Assumed a light gray shade)
        'neutralGray9': '#36323B', // Neutrals/Gray 9 (Assumed a dark gray shade)
        'neutralGray1': '#E9E9EA', // Neutrals/Gray 1 (Assumed a very light gray shade)
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
