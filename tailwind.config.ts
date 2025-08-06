import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			Bilio: {
    				yellow: '#FFC700',
    				'yellow-light': '#FFD633',
    				'yellow-dark': '#E6B300',
    				'yellow-soft': '#FFF9E6',
    				blue: '#002F6C',
    				'blue-light': '#1A4A8A',
    				'blue-dark': '#001F4A',
    				'blue-soft': '#E6F0FF',
    				green: '#0AAD6E',
    				'green-light': '#2BC085',
    				'green-dark': '#088A57',
    				'green-soft': '#E8F7F1',
    				'gray-50': '#FAFAFA',
    				'gray-100': '#F5F5F5',
    				'gray-200': '#E5E5E5',
    				'gray-300': '#D4D4D4',
    				'gray-400': '#A3A3A3',
    				'gray-500': '#737373',
    				'gray-600': '#525252',
    				'gray-700': '#404040',
    				'gray-800': '#262626',
    				'gray-900': '#171717',
    				'purple-deep': '#002F6C',
    				purple: '#1A4A8A',
    				pink: '#0AAD6E',
    				cyan: '#2BC085',
    				gold: '#FFC700',
    				orange: '#E6B300',
    				'deep-green': '#088A57',
    				emerald: '#0AAD6E',
    				teal: '#2BC085',
    				aqua: '#1A4A8A',
    				lime: '#FFC700',
    				'soft-yellow': '#FFF9E6',
    				light: '#FFFFFF',
    				dark: '#171717'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translateY(-10px) rotate(1deg)'
    				},
    				'66%': {
    					transform: 'translateY(-5px) rotate(-1deg)'
    				}
    			},
    			'pulse-soft': {
    				'0%, 100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				},
    				'50%': {
    					opacity: '0.8',
    					transform: 'scale(1.05)'
    				}
    			},
    			'slide-up': {
    				'0%': {
    					transform: 'translateY(30px)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			'slide-down': {
    				'0%': {
    					transform: 'translateY(-30px)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'scale-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.9)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			'gradient-shift': {
    				'0%, 100%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				}
    			},
    			shimmer: {
    				'0%': {
    					transform: 'translateX(-100%)'
    				},
    				'100%': {
    					transform: 'translateX(100%)'
    				}
    			},
    			glow: {
    				'0%, 100%': {
    					boxShadow: '0 0 20px rgba(255, 199, 0, 0.3)'
    				},
    				'50%': {
    					boxShadow: '0 0 40px rgba(255, 199, 0, 0.4)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			float: 'float 6s ease-in-out infinite',
    			'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
    			'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    			'slide-down': 'slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    			'fade-in': 'fade-in 1s cubic-bezier(0.16, 1, 0.3, 1)',
    			'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    			'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
    			shimmer: 'shimmer 2s infinite',
    			glow: 'glow 2s ease-in-out infinite'
    		}
    	}
    },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
