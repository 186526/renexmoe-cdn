import marked from '../../web_modules/marked.js';
//import $ from 'mdui.jq';
import mdui from '../../web_modules/mdui.js';
const $ = mdui.$;
export default async()=>{
    if (document.getElementById("head")) {
        $('#head').html(marked($('#head-md').html()));
    }
    if (document.getElementById("readme")) {
        $('#readme').html(marked($('#readme-md').html()));
    }
};