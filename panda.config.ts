import { defineConfig } from "@pandacss/dev";
import {
	SECTION_LIGHT_BG,
	SECTION_LIGHT_TOP,
	SECTION_LIGHT_BOT,
	SECTION_DARK_BG,
	WAVE_DOT,
	TEXT_PRIMARY,
	TEXT_SECONDARY,
} from "./src/consts/theme";

export default defineConfig({
	preflight: true,

	include: [
		"./src/**/*.{js,jsx,ts,tsx,astro}",
		"./pages/**/*.{js,jsx,ts,tsx,astro}",
	],

	exclude: [],

	theme: {
		extend: {
			tokens: {
				colors: {
					section: {
						lightBg:  { value: SECTION_LIGHT_BG },
						lightTop: { value: SECTION_LIGHT_TOP },
						lightBot: { value: SECTION_LIGHT_BOT },
						darkBg:   { value: SECTION_DARK_BG },
					},
					wave: {
						dot: { value: WAVE_DOT },
					},
					text: {
						primary:   { value: TEXT_PRIMARY },
						secondary: { value: TEXT_SECONDARY },
					},
				},
			},
			keyframes: {
				// カーソル水紋エフェクト（GlobalLayout.astro の is:global CSS でも定義）
				waterDrop: {
					"0%":   { transform: "translate(-50%, -50%) scale(0.2)", opacity: "0.6" },
					"100%": { transform: "translate(-50%, -50%) scale(3.5)", opacity: "0" },
				},
			},
		},
	},

	outdir: "styled-system",
});
