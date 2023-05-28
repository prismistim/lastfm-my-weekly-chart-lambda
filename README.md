# lastfm-my-weekly-chart-lambda

## これはなに
- Last.fmにて記録した曲の中で、1週間で聴いた上位5曲をMisskeyに投稿するためのもの
- 月曜の0時に投稿

## つかってるもの
- Serverless Framework
  - AWS Lambda
  - AWS EventBridge
- TypeScript (素)
- ESBuild
- ESLint
- Prettier
- dotenv
- misskey-js

## 使い方
1. プロジェクトのルートディレクトリに `.env` ファイルを作成する
2. 以下の4つの環境変数を `.env` ファイル内に定義する
  - `LF_USERNAME` Last.fm のユーザー名
  - `LF_API_TOKEN` Last.fm のAPIトークン
  - `MISSKEY_ORIGIN` 投稿先の Misskey サーバのドメイン
  - `MISSKEY_TOKEN` 投稿先の Misskey サーバで発行したトークン
3. 下記のメモを参考にデプロイする

## Serverless Frameworkのメモ

### cron
- UTC基準なのでJSTで使いたい場合は要注意

```pseudo
cron(分 時 日 月 曜日 年)
```
[AWS docs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions).

### CLI
#### ログイン
```sh
$ sls login
```

#### デプロイ
```sh
$ sls deploy
```

#### 全てのデプロイを削除
```sh
$ sls remove
```
