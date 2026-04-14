/**
 * URL から og:image を取得するユーティリティ。
 * タイムアウト 3 秒、失敗時は undefined を返す。
 */
export async function fetchOgpImage(url: string): Promise<string | undefined> {
	try {
		const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
		const html = await res.text();
		const m =
			html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
			html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
		return m?.[1] ?? undefined;
	} catch {
		return undefined;
	}
}
