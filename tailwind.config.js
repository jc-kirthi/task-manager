/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['"Space Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
                sans: ['"Space Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'], // Force mono everywhere
            },
            colors: {
                cyber: {
                    black: '#050505',
                    dark: '#0a0a0a',
                    gray: '#1a1a1a',
                    light: '#2a2a2a',
                },
                neon: {
                    green: '#00ff41',
                    blue: '#00f3ff',
                    pink: '#ff00ff',
                    red: '#ff003c',
                    yellow: '#fcee0a',
                },
            },
            boxShadow: {
                'neon-green': '0 0 5px #00ff41, 0 0 10px #00ff41',
                'neon-blue': '0 0 5px #00f3ff, 0 0 10px #00f3ff',
                'neon-red': '0 0 5px #ff003c, 0 0 10px #ff003c',
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'scanline': 'scanline 8s linear infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
            },
        },
    },
    plugins: [],
}
