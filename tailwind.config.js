/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    50: '#F0EEF8',
                    100: '#E8E5F2',
                    200: '#D4CEEA',
                    300: '#C0B7E2',
                    400: '#8B8A99',
                    500: '#6C63FF',
                    600: '#5D55FF',
                    700: '#4E47CC',
                    800: '#111118',
                    900: '#0A0A0F',
                },
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                sans: ['DM Sans', 'sans-serif'],
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(0.8)' },
                }
            },
            animation: {
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
