import { defineCollection, z } from "astro:content";

const works = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** 絶対URL or public/ 相対パス (/works/xxx.png)。未設定時はサイト OGP 画像を使用 */
		image: z.string().optional(),
		url: z.string().url().optional(),
		githubUrl: z.string().url().optional(),
		tags: z.array(z.string()).default([]),
		/** 表示順（小さいほど前） */
		order: z.number().default(0),
	}),
});

export const collections = { works };
