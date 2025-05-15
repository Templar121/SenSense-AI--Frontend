/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bafc',
          400: '#8196f9',
          500: '#6371f1',
          600: '#4f4ce2',
          700: '#3e3cc8',
          800: '#3333a2',
          900: '#2d2e7e',
          950: '#1c1b4b'
        },
        secondary: {
          50: '#f2fdf9',
          100: '#d5f6ee',
          200: '#abecde',
          300: '#74dcc8',
          400: '#43c4ae',
          500: '#26a794',
          600: '#1d867a',
          700: '#1c6963',
          800: '#1a5450',
          900: '#1a4543',
          950: '#0a2a2a'
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d'
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309'
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c'
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};