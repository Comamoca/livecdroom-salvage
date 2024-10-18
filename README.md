<div align="center">

![Last commit](https://img.shields.io/github/last-commit/Comamoca/livecdroom-salvage?style=flat-square)
![Repository Stars](https://img.shields.io/github/stars/Comamoca/livecdroom-salvage?style=flat-square)
![Issues](https://img.shields.io/github/issues/Comamoca/livecdroom-salvage?style=flat-square)
![Open Issues](https://img.shields.io/github/issues-raw/Comamoca/livecdroom-salvage?style=flat-square)
![Bug Issues](https://img.shields.io/github/issues/Comamoca/livecdroom-salvage/bug?style=flat-square)

<img src="https://emoji2svg.deno.dev/api/🦊" alt="eyecatch" height="100">

# livecdroom-salvage 

陰謀論や政治思想を削除したLiveCDの部屋

<br>
<br>


</div>

<div align="center">

</div>

[こちらのサイト]()にあるように、今のLiveCDの部屋は陰謀論や政治思想でページの大半が埋まってしまっています。

詳しい経緯についてはこちらのサイトが詳しいです。
[ライブCDの部屋の陰謀論の影響と対策](https://old.hayao0819.com/blog/posts/20221123/livecd-room/)

このリポジトリではLiveCDの部屋のページをサルベージし、自動で更新するスクリプトを提供します。

## 自動更新スクリプトの仕様

自動更新スクリプトはDenoで記述されています。

スクリプトの内容として、以下のことを行っています。

- `fetch`関数でLiveCDのサイトのHTMLを取得。
- Dom操作で問題の箇所を削除。
- ミラーサイトである旨を記述した`<p>`要素を追加。
- 生成したHTMLを`./contents/index.html`ファイルに書き込み。

このスクリプトはGitHub Actionsにより毎日6時(日本標準時)に実行されます。

また、スクリプトが生成したHTMLファイルは同じくActionsによりGitHub Pagesにアップロードされます。

## 👏 謝辞

- [Hayao0819/hayao-old-website](https://github.com/Hayao0819/hayao-old-website/tree/master/livecdroom)  
画像ファイルはこちらのリポジトリの物を使用しています。

- [LiveCDの部屋](http://simosnet.com/livecdroom/)
