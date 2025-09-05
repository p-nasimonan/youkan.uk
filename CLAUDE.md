# CLAUDE.md

## YOU MUST: 
- 全てのTODO完了またはユーザー のアクションが必要な際は最後に一度だけ `afplay /System/Library/Sounds/Sosumi.aiff` コマンドを実行して通知する
- 回答は日本語で行ってください
- TODOには必ずブランチ作成・実装内容のテスト・コミット・push・PR作成（まだ作成されていない場合）が含まれるべきです
  
## Project Overview
ようかんのプロフィールサイトでとてもモダンで可愛いデザイン、高速なサイトを目指してastro,pandacssを使っています。アクセスするユーザーに合わせた自己紹介をするサイトです。レスポンシブデザイン・ダークモードの対応やカラーパレットを設定するなどUI/UX、デザインに富んだサイトにしたい

## 手順
- 探索
  - 重要！今の状況を把握して依存関係や機能を理解する
- 計画
- 実装(ブランチ)
- コミット
- PR作成

## 曖昧な指示の場合
具体的な指示ではなく、推測する可能性があるものやユーザーが理解できていないと判断した場合は質問するようにしてください

## Repository 設定
- **リポジトリ名**: youkan.uk
- **MCP GitHub API**:常にこのリポジトリを使用する。
https://github.com/p-nasimonan/youkan.uk

### MCPサーバー
- github
- Playwright

## Development Commands

### npmの使い方
package.jsonを見ればわかります。`npm run dev`等の開発サーバー起動コマンドは複数回実行しないで手動でもいい。一方`npm run prepare`はprepareを設定した部分を更新すべき時のみ行なってください

## 修正機能追加の際の作業開始時・終了時に必ず実施すること。必ず毎回全てtodoに含めてください。
- 以下の操作は作業開始時に必ず行ってください
  - **作業開始時**: 必ず専用ブランチを作成する（feat: <機能名>、fix: <修正内容>等）
  - **mainブランチでの直接作業は絶対禁止**: いかなる変更もmainブランチに直接コミットしない
- 以下を必ず作業終了時に実行してください。
  1. 作業内容をコミット(コミット名もできるだけ日本語でfeat: <機能名>,update: <更新内容>, doc: <ドキュメント>, content: <コンテンツ内容>)
  2. リモートブランチにpush (`git push -u origin <ブランチ名>`)
  3. PR作成 (MCPでPR作成) 

## 修正の際の注意点
- 修正を行う際には必ず以下のことに順守してください
  - 該当修正によって他の処理に問題がないか慎重に確認を行って作業を行ってください。
  - 他の動作に関しても修正が必要な場合は既存の期待値の動作が正常に起動するように修正してください。

## Architecture

### Framework Stack
- **Astro**: Static site generator with component islands
- **PandaCSS**: Build-time CSS-in-JS with utility generation
- **TypeScript**: Type safety across the codebase
- **View Transitions**: SPA-like navigation without JavaScript framework overhead

### Project Structure
```
src/
├── components/          # Reusable Astro components
│   ├── meta/           # SEO and meta tag components
│   │   ├── HeadMeta.astro      # Main meta component
│   │   └── internals/          # Internal meta components
│   ├── Avatar.astro    # Avatar display component
│   ├── GitHubProfile.astro     # GitHub profile renderer
│   └── SelectionScreen.astro   # Personality selection UI
├── layouts/
│   └── Layout.astro    # Base layout with HeadMeta integration
├── pages/              # Astro file-based routing
│   ├── index.astro     # Landing page
│   ├── engineer/       # エンジニアようかん persona
│   ├── vrc/           # かわいいようかん persona  
│   └── aircraft/      # 空飛ぶようかん persona
├── content/           # Content files (markdown, etc.)
├── assets/            # Static assets
├── lib/               # Utility functions
└── styles/            # PandaCSS generated files (auto-generated)
```

### エイリアス
astro.config.mjsやtsconfig.jsonを確認してください
- `@layouts/*` → `./src/layouts/*`
- `@components/*` → `./src/components/*`
- `@styles/*` → `./src/styles/*`
- `@assets/*` → `./src/assets/*`
- `@images/*` → `./src/assets/images/*`

### PandaCSS Integration
- Configuration: `panda.config.ts`
- Output directory: `./src/styles/`
- Dark mode support via media queries
- Custom animations and transitions defined in global CSS
- Watch mode integrated with development workflow
- 
### SEO and Meta Management
The `HeadMeta.astro` component provides comprehensive meta tag management:
- Basic meta tags (title, description, keywords, author)
- Open Graph Protocol (OGP) support
- Twitter Card integration  
- Multiple favicon format support
- Security headers for production
- Google Tag Manager integration
- Astro View Transitions support

Usage in layouts:
```astro
---
const metaProps = {
  title: 'Page Title | youkan.uk',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  author: 'youkan',
  ogp: {
    title: 'OGP Title',
    description: 'OGP description',
    type: 'website',
    siteName: 'youkan.uk'
  }
};
---

<Layout {...metaProps}>
  <!-- Page content -->
</Layout>
```

## Environment Configuration

Create `.env` file for environment variables:
```env
# Google Tag Manager ID (production only)
PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Build Process Notes
- PandaCSS must be built before Astro build
- The `prepare` script runs GitHub profile fetch and PandaCSS codegen
- Development uses concurrent processes for both Panda and Astro
- Production builds minify PandaCSS output

## GitHub Integration
The site integrates with GitHub profile data:
- Profile README fetched from `https://github.com/p-nasimonan/p-nasimonan`
- Content cached in `src/content/github-profile.md`
- Fallback content generated on fetch failures
- Manual refresh available via `npm run fetch:github`

## ファイル作成時の注意点（ファイル作成時必ず確認）
- ファイル作成時に、そのファイルがGithubにアップロードすべきではないと判断した場合は必ず.gitignoreに指定してください。


## 動作確認・テスト時の必須確認事項（コミット前に必ず実施されるべきです）
- テスト・動作確認の際はplaywrightのMCPツールを使用して動作確認を行ってください。
- テスト・動作確認は修正を行って際は必ず行ってください。
- E2Eテストとしてユーザ目線での動作が問題ないかしっかりと確認してください。