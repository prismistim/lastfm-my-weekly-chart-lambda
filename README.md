# lastfm-my-weekly-chart-lambda

## これはなに
- Last.fmに記録している snowsphere が聴いた曲の中で、1週間で聴いた上位5曲をSNSに投稿するためのもの
- 月曜の0時に投稿
- 今のところ 投稿先は `misskey.io` のみ

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
