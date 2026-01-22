/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        'apex-display': ['Cormorant Garamond', 'serif'],
        'apex-body': ['DM Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        border: 'hsl(0 20% 90%)',
        input: 'hsl(0 20% 90%)',
        ring: 'hsl(0 75% 82%)',
        background: {
          DEFAULT: 'hsl(0 40% 98%)',
          secondary: 'hsl(0 60% 96%)',
        },
        foreground: 'hsl(0 10% 20%)',
        primary: {
          DEFAULT: 'hsl(0 75% 82%)',
          foreground: 'hsl(0 10% 20%)',
        },
        secondary: {
          DEFAULT: 'hsl(0 70% 92%)',
          foreground: 'hsl(0 10% 25%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        muted: {
          DEFAULT: 'hsl(0 30% 94%)',
          foreground: 'hsl(0 10% 45%)',
        },
        accent: {
          DEFAULT: 'hsl(28 93% 69%)',
          foreground: 'hsl(0 10% 15%)',
        },
        popover: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(0 10% 20%)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(0 10% 20%)',
        },
        // APEX Magazine colors
        'apex-bg': 'hsl(220 30% 7%)',
        'apex-bg-secondary': 'hsl(220 25% 12%)',
        'apex-foreground': 'hsl(45 20% 95%)',
        'apex-muted': 'hsl(220 15% 25%)',
        'apex-accent': 'hsl(35 100% 60%)',
        'apex-accent-warm': 'hsl(15 90% 55%)',
        'apex-border': 'hsl(220 20% 20%)',
      },
      borderRadius: {
        lg: '0.75rem',
        md: 'calc(0.75rem - 2px)',
        sm: 'calc(0.75rem - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        progress: 'progress 4s linear',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
