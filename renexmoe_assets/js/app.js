/*!
 * renexmoe v1.1.4.2 (https://github.com/186526/onemanager-theme-renexmoe)
 * Copyright 2020-2021 186526 <i@186526.xyz>
 * Licensed under GPL-3.0
 */import e from"./lib/mdui.js";import t from"./function/pjax.js";import o from"./theme.js";import r from"./function/toggle.js";import{drawertoggle as i}from"./function/toggle.js";import m from"./function/sort.js";import a from"./function/menu.js";import l from"./function/marked.js";import g from"./lib/flyingpages.js";import s from"./function/code.js";import n from"./pack.js";globalThis.mdui=e,globalThis.renexmoe={toggle_theme:o.toggle,mutation:()=>{console.log("renexmoe - pjax - Init Page"),console.log("renexmoe - marked - Update Marked"),l(),console.log("renexmoe - mdui - Update Theme"),o.mutation(),console.log("renexmoe - sort - Init Sort"),m(),e.mutation(),console.log("renexmoe - init - Start EventLister"),r(),s(),g()},pjax:t(),renexmoe:n,version:n},e.$(()=>{console.log(`
 %c OneManager-theme-renexmoe | Powered by OneManager-php && Webpack | 186526 
`,"color: #fff; background: #444; padding:5px 0;"),console.log("renexmoe - init - Start Load"),console.log("renexmoe - init - Start EventLister"),a(),i(),console.log("renexmoe - init - Start FlyingPages"),console.log("renexmoe - init - Init MDUI"),window.renexmoe.mutation(),document.addEventListener("pjax:success",window.renexmoe.mutation)});export default globalThis.renexmoe;
