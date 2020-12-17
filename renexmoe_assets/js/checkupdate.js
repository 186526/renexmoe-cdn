import e from"./pack.js";export default async function n(){let l=new URL("https://static.186526.top/api/renexmoe/checkupdate");l.search=`?version=${e.version}`;const i=await fetch(l.href);return i.json()}export async function click(){let l=new mdui.dialog({title:"Loading...",content:'<div class="mdui-spinner mdui-theme-pink"></div>',buttons:[],closeOnEsc:!1});mdui.mutation();const i=await n();l.close(),new mdui.alert(`
        <div class="mdui-typo">
        \u672C\u7248\u672C\u65E5\u5FD7: ${i.log}
        <ul>
            <li>
                \u4E3B\u7EBF\u7248\u672C
                <ul>
                    <li>\u7248\u672C: ${i.version.main.ver}</li>
                    <li>\u4E3B\u9898\u94FE\u63A5: <a href="${i.version.main.url}">This</a></li>
                    <li>LOG: ${i.version.main.log}</li>
                </ul>
            </li>
            <li>
                LTS\u7248\u672C
                <ul>
                    <li>\u7248\u672C: ${i.version.lts.ver}</li>
                    <li>\u4E3B\u9898\u94FE\u63A5: <a href="${i.version.lts.url}">This</a></li>
                    <li>LOG: ${i.version.lts.log}</li>
                </ul>
            </li>
        </ul>
        </div>
        `,`\u5F53\u524D\u7248\u672C\u662F ${e.version},${i.status}`)}
