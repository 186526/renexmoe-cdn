import mdui from"../../_snowpack/pkg/mdui.js";import cookies from"./lib/cookies.js";const $=mdui.$,func={mutation:()=>{if($("body").removeClass("mdui-theme-layout-auto"),window.disableddarkmode){mdui.$("li[onclick^=renexmoe]").remove(),cookies.setItem("darkmode",!1,1200,"/");return}cookies.getItem("darkmode")||(window.matchMedia("(prefers-color-scheme: dark)").matches?(cookies.setItem("darkmode",!0,1200,"/"),$("body").addClass("mdui-theme-layout-dark")):(cookies.setItem("darkmode",!1,1200,"/"),$("body").removeClass("mdui-theme-layout-dark"))),eval(cookies.getItem("darkmode"))?$("body").addClass("mdui-theme-layout-dark"):$("body").removeClass("mdui-theme-layout-dark")},toggle:()=>{eval(cookies.getItem("darkmode"))?($("body").removeClass("mdui-theme-layout-dark"),cookies.setItem("darkmode",!1,1200,"/")):($("body").addClass("mdui-theme-layout-dark","/"),cookies.setItem("darkmode",!0,1200,"/"))}};export default func;
