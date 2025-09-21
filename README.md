# ZoneMS.github.io

ZoneMS の個人ウェブサイト - Next.js で構築され、GitHub Pages でホストされています。

## 開発環境のセットアップ

### 前提条件
- Node.js 18以上
- npm

### ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

## GitHub Pages へのデプロイ

### 自動デプロイ

このリポジトリは GitHub Actions を使用した自動デプロイが設定されています。

- `main` ブランチへのプッシュ時に自動的にビルドとデプロイが実行されます
- デプロイされたサイトは `https://zonems.github.io` で確認できます

### 手動ビルド

ローカルでビルドを実行する場合：

```bash
# 静的ファイルの生成
npm run build

# 生成されたファイルは out/ ディレクトリに出力されます
```

### GitHub Pages の設定

1. リポジトリの Settings > Pages に移動
2. Source を "GitHub Actions" に設定
3. main ブランチへのプッシュで自動デプロイが開始されます

## プロジェクト構成

- `pages/` - Next.js のページコンポーネント
- `styles/` - CSS スタイルファイル
- `public/` - 静的ファイル（画像、アイコンなど）
- `out/` - ビルド出力ディレクトリ（GitHub Pages デプロイ用）

## 技術スタック

- [Next.js](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [GitHub Pages](https://pages.github.com/) - 静的サイトホスティング
- [GitHub Actions](https://github.com/features/actions) - CI/CD