import mdui from '../../web_modules/mdui.js';
import pjax from './pjax.js';
import theme from './theme.js';
import toggle from './toggle.js';
import sort from './sort.js';
import menu from './menu.js';
import marked from './marked.js';
import flyingPages from './flyingpages.js';
window.mdui = mdui;
window.renexmoe = {
    toggle_theme: theme.toggle,
    mutation: ()=>{
        marked();
        toggle();
        theme.mutation();
        sort();
        mdui.mutation();
    },
    pjax: pjax(),
};
mdui.$(()=>{
    menu();
    flyingPages();
    window.renexmoe.mutation();
    document.addEventListener("pjax:success", window.renexmoe.mutation);
});
export default window.renexmoe;