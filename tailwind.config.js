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
                brand: {
                    bg: '#0A0E17',
                    'bg-elev': '#121826',
                    'bg-elev-2': '#161E2E',
                    border: '#232C40',
                    text: '#E9ECF3',
                    'text-dim': '#8A93A8',
                    'text-faint': '#5B6478',
                    'accent': '#3ECF8E',
                    'accent-dim': '#1F5C42',
                    'accent-2': '#F5A623',
                    'accent-3': '#5B8DEF',
                },
            },
            fontFamily: {
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                DEFAULT: '14px',
            },
            maxWidth: {
                app: '1120px',
            },
            keyframes: {
                floaty: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
                    '50%': { transform: 'translateY(-14px) rotate(1deg)' },
                },
            },
            animation: {
                floaty: 'floaty 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
