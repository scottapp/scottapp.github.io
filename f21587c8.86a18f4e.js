(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(127)),c={title:"yfinance Downloader"},i={unversionedId:"quantitative_trading/yfinance-downloader",id:"quantitative_trading/yfinance-downloader",isDocsHomePage:!1,title:"yfinance Downloader",description:"my github//github.com/scottapp/yfinance-downloader",source:"@site/docs/quantitative_trading/yfinance-downloader.md",slug:"/quantitative_trading/yfinance-downloader",permalink:"/docs/quantitative_trading/yfinance-downloader",version:"current",sidebar:"Quantitative Trading",previous:{title:"Asyncio Prices Downloader",permalink:"/docs/"}},u=[{value:"Stacks",id:"stacks",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"my github: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/scottapp/yfinance-downloader"}),"https://github.com/scottapp/yfinance-downloader")),Object(o.b)("h2",{id:"stacks"},"Stacks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"google cloud run"),Object(o.b)("li",{parentName:"ul"},"google cloud storage"),Object(o.b)("li",{parentName:"ul"},"google pub/sub"),Object(o.b)("li",{parentName:"ul"},"python"),Object(o.b)("li",{parentName:"ul"},"docker"),Object(o.b)("li",{parentName:"ul"},"make tool")),Object(o.b)("p",null,"You need to setup a Google Cloud Run project and export the environment variables in order to run the code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"export PROJECT_ID=YOUR_PROJECT_ID\nexport GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/credential\nmake build\nmake run \n")))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,f=d["".concat(c,".").concat(s)]||d[s]||b[s]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);