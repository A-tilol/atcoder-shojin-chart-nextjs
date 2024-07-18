# Memo

開発時につまづいたこととか

## ホスティング

### サブディレクトリに保存しているCSS等にサイトからアクセスできない

- github pagesではアンダースコアで始まるディレクトリはデフォルトではアクセスできなくなっている
- アクセスできるようにするにはルートディレクトリに`.nojekyll`を含める必要がある
- `.nojekyll`を含めるも、gh-pagesコマンドでデプロイするとデフォルトではドットファイルをアップロードしてくれない（ここで怒りがピーク）
- gh-pages --dotfiles オプションを指定することで無事`.nojekyll`がアップロードされた

### Googleにインデックスされない

- 毎回インデックスされないーをやっている気がする
- Google Searchコンソールの「URL検査」にサイトのURLを入力し実行
- 「公開URLテスト」ボタンを押すとまだインデックスされていませんと出る
- 「インデックス登録をリクエスト」を押して完了。

## Javascript

### クリップボードに画像とテキストを同時に保存したい

何か上手くいっていなかったが、結局以下で良かった

```typescript
const clipboardItem = new ClipboardItem({
    "image/png": imageBlob,
    "text/plain": new Blob([text], { type: "text/plain" }),
});
navigator.clipboard
    .write([clipboardItem])
    .then(() => console.log("copied."))
    .catch((error) => {
    console.error("クリップボードにコピーできませんでした。", error);
    });
```

## Plotlyjs

### Plotlyで描画したグラフを画像として取得したい

コンポーネントではなく`Plotly.newPlot`を使って\<div\>に描画すると以下のようにPlotlyのオブジェクトのみで完結できた。Canvasを使用する方法などあったがせっかくPlotlyを使ってるのでね

```typescript
const imageData = await Plotly.toImage(chartRef.current, {
    format: "png",
    width: 600,
    height: 400,
});
const response = await fetch(imageData);
const blob = await response.blob();
```
