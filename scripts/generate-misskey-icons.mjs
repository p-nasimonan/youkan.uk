import sharp from 'sharp';
import fs from 'fs';

const input = 'public/misskey/assets/icon.png';
const output192 = 'public/misskey/assets/icon-192.png';
const output512 = 'public/misskey/assets/icon-512.png';

async function main() {
    if (!fs.existsSync(input)) {
        console.warn(`[Icons] Source ${input} not found! Skipping generation.`);
        return;
    }

    // PWAやアプリアイコン用に、白背景で余白を持たせてリサイズする設定
    const bg = { r: 255, g: 255, b: 255, alpha: 1 };

    console.log(`[Icons] Generating 192x192 icon...`);
    await sharp(input)
        .resize({
            width: 192,
            height: 192,
            fit: 'contain',
            background: bg
        })
        .toFile(output192);

    console.log(`[Icons] Generating 512x512 icon...`);
    await sharp(input)
        .resize({
            width: 512,
            height: 512,
            fit: 'contain',
            background: bg
        })
        .toFile(output512);

    console.log("[Icons] Successfully generated 192x192 and 512x512 icons!");
}

main().catch(err => {
    console.error(`[Icons] Failed to generate icons:`, err);
    process.exit(1);
});
