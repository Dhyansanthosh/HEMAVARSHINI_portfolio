export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(94, 189, 255, 0.2)',
        soft: '0 24px 80px rgba(9, 20, 63, 0.28)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(82, 152, 255, 0.16), transparent 38%), radial-gradient(circle at 20% 20%, rgba(150, 88, 255, 0.14), transparent 25%)',
      },
      colors: {
        midnight: '#071234',
        nebula: '#0d1638',
        aura: '#7c6aff',
        cyanGlow: '#5ce1ff',
        violetGlow: '#a53bff',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulse: {
          '0%,100%': { opacity: '0.4', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulse: 'pulse 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
