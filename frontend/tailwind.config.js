/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
        typewriter: "typewriter 2s steps(16) forwards infinite",
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
    },
  },
  plugins: [],
}

