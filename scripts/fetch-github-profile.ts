import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

interface ProfileMeta {
  title: string;
  description: string;
  updatedAt: string;
  source: string;
}

interface FetchResult {
  success: boolean;
  content?: string;
  meta?: ProfileMeta;
  error?: string;
}

const GITHUB_USERNAME = 'p-nasimonan';
const README_URL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_USERNAME}/main/README.md`;
const OUTPUT_PATH = './src/content/github-profile.md';

async function fetchGitHubProfile(): Promise<FetchResult> {
  try {
    console.log('📥 GitHubプロフィールを取得中...');
    
    const response = await fetch(README_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const markdown = await response.text();
    
    const meta: ProfileMeta = {
      title: 'GitHubプロフィール',
      description: 'GitHubプロフィールREADME',
      updatedAt: new Date().toISOString(),
      source: README_URL
    };
    
    return {
      success: true,
      content: markdown,
      meta
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ GitHubプロフィールの取得に失敗しました:', errorMessage);
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

function createMarkdownFile(content: string, meta: ProfileMeta): void {
  // 出力ディレクトリを作成
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  
  writeFileSync(OUTPUT_PATH, content, 'utf8');
  
  console.log('✅ GitHubプロフィールを取得しました:', OUTPUT_PATH);
  console.log(`📊 サイズ: ${Math.round(content.length / 1024 * 100) / 100}KB`);
}

function createFallbackFile(error?: string): void {
  const meta: ProfileMeta = {
    title: 'GitHubプロフィール',
    description: 'GitHubプロフィールREADME（フォールバック）',
    updatedAt: new Date().toISOString(),
    source: 'fallback'
  };

  const fallbackContent = `# プロフィール

GitHubプロフィールの取得に失敗しました。
${error ? `エラー: ${error}` : ''}

手動で更新してください。

- GitHub: [${GITHUB_USERNAME}](https://github.com/${GITHUB_USERNAME})
- Profile README: [リポジトリ](https://github.com/${GITHUB_USERNAME}/${GITHUB_USERNAME})
`;

  try {
    createMarkdownFile(fallbackContent, meta);
    console.log('📝 フォールバックファイルを作成しました');
  } catch (fallbackError) {
    console.error('❌ フォールバックファイルの作成も失敗しました:', fallbackError);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  const result = await fetchGitHubProfile();
  
  if (result.success && result.content && result.meta) {
    createMarkdownFile(result.content, result.meta);
  } else {
    createFallbackFile(result.error);
  }
}

// スクリプト実行
main().catch((error) => {
  console.error('❌ 予期しないエラーが発生しました:', error);
  process.exit(1);
});

export { fetchGitHubProfile, createMarkdownFile, createFallbackFile };
