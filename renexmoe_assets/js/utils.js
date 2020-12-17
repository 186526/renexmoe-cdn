import s from"../../web_modules/mdui.js";export default{$:s.$};export async function refresh(r){const e=new URL(r);e.search="?RefreshCache";const t=await fetch(e.href);return t.status===302}
