import { DOMParser, Document } from "jsr:@b-fuze/deno-dom";
import { ensure, is } from "jsr:@core/unknownutil";
import { note_dom } from "./note.ts";
import { title as title_tag } from "./title.ts"

// fetching HTML.
const resp = await fetch("http://simosnet.com/livecdroom/");
const html = await resp.text();

const doc = new DOMParser().parseFromString(html, "text/html");

const i = doc.querySelector(
  "body > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1)",
);
const img = doc.querySelector(
  "body > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > a:nth-child(5) > img:nth-child(1)",
);

if (!is.Nullish(i) && !is.Nullish(img)) {
  // Delete elements
  img.remove();
  i.remove();

  doc.body.prepend(note_dom)

  // タイトルを変更
  const title = doc.querySelector("title")

  if (!is.Null(title)) {
	  title.innerText = "陰謀論や政治思想を削除したLiveCDの部屋"
  } else {
	  // もしタイトルが存在しなかったら追加する
	  doc.head.append(title_tag)
  }

  Deno.writeTextFile("./content/index.html", ensure(doc.documentElement?.outerHTML, is.String));
} else {
  throw Error("Got something error.");
}
