import { Document } from "jsr:@b-fuze/deno-dom";

export const note_dom = new Document().createElement("p")

note_dom.innerHTML = `このサイトは<a href="http://simosnet.com/livecdroom/">LiveCDの部屋</a>から陰謀論や政治思想を削除したLiveCDの部屋を取り除いたミラーサイトです。問題がありましたら<a href="https://github.com/comamoca/livecdroom-salvage">GitHub</a>のissueで報告してください。`
