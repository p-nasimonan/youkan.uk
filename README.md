# youkan.uk

モダンで高速な自己紹介サイト（Astro + PandaCSS）

## 📖 概要

3つの異なる個性から選んで自己紹介を見ることができるサイトです：

- � **かわいいようかん**: キュートで愛らしい一面
- 💻 **エンジニアようかん**: 技術スキル、開発経験
- 🚀 **空飛ぶようかん**: 夢や冒険、創造的な活動

## 🚀 技術スタック

- **Astro**: 静的サイト生成器
- **PandaCSS**: Build-time CSS-in-JS
- **TypeScript**: 型安全な開発
- **View Transitions**: SPA風のナビゲーション

## 🛠️ セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 🎨 HeadMeta コンポーネント

SEOとメタデータ管理のための統合コンポーネントです。

### 使用方法

```astro
---
import Layout from '../layouts/Layout.astro';

const metaProps = {
  title: 'ページタイトル | youkan.uk',
  description: 'ページの説明文',
  keywords: ['キーワード1', 'キーワード2'],
  author: 'youkan',
  ogp: {
    title: 'OGPタイトル',
    description: 'OGP説明文',
    type: 'website',
    siteName: 'youkan.uk'
  }
};
---

<Layout {...metaProps}>
  <!-- ページコンテンツ -->
</Layout>
```

### 機能

- ✅ **基本メタデータ**: title, description, keywords, author
- ✅ **OGP**: Open Graph Protocol対応
- ✅ **Twitter Card**: ソーシャルメディア対応
- ✅ **Favicon**: 複数形式対応
- ✅ **セキュリティ**: 本番環境でのセキュリティヘッダー
- ✅ **GTM**: Google Tag Manager統合
- ✅ **View Transitions**: SPA風ナビゲーション

## � 環境変数

`.env`ファイルを作成して以下を設定：

```env
# Google Tag Manager ID (本番環境でのみ使用)
PUBLIC_GTM_ID=GTM-XXXXXXX
```
