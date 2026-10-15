/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        graphite: '#141416',
        steel: '#1E1F22',
        line: '#2A2B2F',
        bone: '#F2EEE6',
        ash: '#9A9A9F',
        amber: {
          DEFAULT: '#D4A24C',
          light: '#E6B966',
          dark: '#B08030',
          glow: 'rgba(212, 162, 76, 0.35)'
        },
        ember: {
          DEFAULT: '#B8452A',
          hover: '#CD5437'
        },
        gaucho: {
          DEFAULT: '#2F5D50',
          dark: '#214339'
        }
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        editorial: ['"Playfair Display"', 'serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        tightest: '-0.03em'
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        lg: '4px'
      },
      boxShadow: {
        'amber-glow': '0 0 25px rgba(212, 162, 76, 0.22)',
        'amber-border': '0 0 15px rgba(212, 162, 76, 0.35)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'industrial': '0 4px 20px rgba(0,0,0,0.5)'
      },
      backgroundImage: {
        'radial-amber': 'radial-gradient(ellipse at 50% 0%, rgba(212,162,76,0.08) 0%, transparent 70%)',
        'radial-spotlight': 'radial-gradient(circle at center, rgba(212,162,76,0.12) 0%, transparent 60%)'
      }
    },
  },
  plugins: [],
}
