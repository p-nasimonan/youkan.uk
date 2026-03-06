import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx,astro}",
		"./pages/**/*.{js,jsx,ts,tsx,astro}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					bg: {
						cream: { value: "#faf7f0" },
						night: { value: "#1a1a2e" },
					},
				},
				animations: {
					// Wave divider: wrapper is 200% wide, translateX(-50%) = 1 full loop
					slowWave: { value: "waveScroll 10s linear infinite" },
					// Section entrance triggered by IntersectionObserver (.is-visible)
					sectionEnter: {
						value: "sectionEnter 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
					},
				},
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				steam: {
					"0%": { transform: "translateY(0) scale(1)", opacity: "0.8" },
					"100%": { transform: "translateY(-20px) scale(1.5)", opacity: "0" },
				},
				pop: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.2)" },
					"100%": { transform: "scale(1)" },
				},
				waveScroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				sectionEnter: {
					"0%": { opacity: "0", transform: "translateY(60px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
