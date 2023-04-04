/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-scale': 'spin-scale 10s linear infinite',
                'wave-spin': 'wave-spin 10s linear infinite',
            },
            keyframes: {
                'spin-scale': {
                '0%': { transform: 'rotate(0deg) scale(0.8)' },
                '50%': { transform: 'rotate(180deg) scale(1)' },
                '100%': { transform: 'rotate(360deg) scale(0.8)' },
                },
                'wave-spin': {
                    '0%': { transform: 'rotate(0deg)', borderRadius: '80%' },
                    '25%': { transform: 'rotate(90deg)', borderRadius: '90% 70% 70% 90%' },
                    '80%': { transform: 'rotate(180deg)', borderRadius: '80%' },
                    '75%': { transform: 'rotate(270deg)', borderRadius: '70% 90% 90% 70%' },
                    '100%': { transform: 'rotate(360deg)', borderRadius: '80%' },
                },
            },
        },
    },
    plugins: [],
}
