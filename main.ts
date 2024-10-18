import { DOMParser } from "jsr:@b-fuze/deno-dom";
import { is } from "jsr:@core/unknownutil";
import { note_dom } from "./note.ts";

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

  console.log(doc.body.outerHTML)

  Deno.writeTextFile("./content/index.html", doc.body.outerHTML);
  console.log("Done!");
} else {
  throw Error("Got something error.");
}
