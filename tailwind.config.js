/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          heading: ['Outfit', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        colors: {
          // Primary colors
          primary: {
            DEFAULT: '#7469F7',
            light: '#9590FA',
            dark: '#5D52EB',
          },
          // Secondary colors
          secondary: {
            DEFAULT: '#4CB8FF',
            light: '#79C9FF',
            dark: '#2F9DFF',
          },
          // Accent color
          accent: {
            DEFAULT: '#FF63A1',
            light: '#FF86B8',
            dark: '#FF4A8E',
          },
          // Dark mode colors
          dark: {
            background: '#0F1624',
            surface: '#1A2333',
            'surface-2': '#232D42',
            gray: '#8B95AA',
            'light-gray': '#B6BFD3',
            white: '#F1F5FF',
            black: '#050A14',
          },
          // Light mode colors
          light: {
            background: '#dcf2fc',
            surface: '#FFFFFF',
            'surface-2': '#E4E9F5',
            gray: '#4D5B7C',
            'light-gray': '#8A96AB',
            white: '#FFFFFF',
            black: '#1C2942',
          },
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
          'gradient-cta': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        },
        borderRadius: {
          'xs': '4px',
          'sm': '8px',
          'md': '16px',
          'lg': '24px',
          'full': '9999px',
        },
        boxShadow: {
          'sm': '0 4px 12px rgba(0, 0, 0, 0.1)',
          'md': '0 8px 20px rgba(0, 0, 0, 0.15)',
          'lg': '0 12px 30px rgba(0, 0, 0, 0.2)',
          'highlight': '0 0 20px rgba(116, 105, 247, 0.25)',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideUp: {
            '0%': { transform: 'translateY(30px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          pulse: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          typing: {
            '0%': { width: '0' },
            '100%': { width: '100%' },
          },
          blink: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'currentColor' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.6s ease-out forwards',
          slideUp: 'slideUp 0.8s ease-out forwards',
          pulse: 'pulse 3s ease-in-out infinite',
          float: 'float 5s ease-in-out infinite',
          typing: 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        },
      },
    },
    plugins: [],
  };