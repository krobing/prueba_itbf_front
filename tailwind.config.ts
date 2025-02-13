import { type Config } from 'tailwindcss'
import flowbite from 'flowbite-react/tailwind'
import { makeAppTheme, overTheme } from './src/styles/themes'

const {
  colors: themeColors,
  fontFamily,
  borderRadius,
  breakpoints: { content, ...restBreakpoints },
} = makeAppTheme(overTheme)

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html}', flowbite.content()],
  theme: {
    screens: restBreakpoints,
    extend: {
      screens: { content },
      colors: themeColors,
      fontFamily,
      borderRadius,
      spacing: {
        '5.5': '1.375rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '26': '6.25rem',
        '33.5': '8.375rem',
        '45': '11.25rem',
        '52.5': '13.125rem',
        '62.5': '15.625rem',
        '65': '16.25rem',
        '70': '17.5rem',
      },
      margin: {
        '26': '6.25rem',
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config
