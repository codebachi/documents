(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),c=(t(0),t(89)),l={slug:"cpp",title:"CPP - enum vs enum class",author:"hyus",author_title:"Docusaurus Core Team",author_url:"https://github.com/wgao19",author_image_url:"https://avatars1.githubusercontent.com/u/2055384?v=4",tags:["cpp","enum"]},u={permalink:"/documents/blog/cpp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-05-28-enum.md",source:"@site/blog\\2019-05-28-enum.md",description:"C++ enum class - \uc548\uc804\ud558\uace0 \uc4f0\uae30 \uc26c\uc6b4 enum",date:"2019-05-28T00:00:00.000Z",tags:[{label:"cpp",permalink:"/documents/blog/tags/cpp"},{label:"enum",permalink:"/documents/blog/tags/enum"}],title:"CPP - enum vs enum class",readingTime:2.315,truncated:!1,prevItem:{title:"Hello",permalink:"/documents/blog/hello-world"}},o=[{value:"C++ enum class - \uc548\uc804\ud558\uace0 \uc4f0\uae30 \uc26c\uc6b4 enum",id:"c-enum-class---\uc548\uc804\ud558\uace0-\uc4f0\uae30-\uc26c\uc6b4-enum",children:[]}],s={rightToc:o};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"c-enum-class---\uc548\uc804\ud558\uace0-\uc4f0\uae30-\uc26c\uc6b4-enum"},"C++ enum class - \uc548\uc804\ud558\uace0 \uc4f0\uae30 \uc26c\uc6b4 enum"),Object(c.b)("p",null,"C++ 03\uae4c\uc9c0\uc758 enum\uc740 \uc5ec\ub7ec \uac00\uc9c0 \ubb38\uc81c\ub97c \uac00\uc9c0\uace0 \uc788\uc5c8\ub2e4. \uadf8\ub798\uc11c \uadf8 \ubb38\uc81c\ub4e4\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 C++ 11\uc740 ",Object(c.b)("inlineCode",{parentName:"p"},"enum class")," \ub77c\ub294 \uac83\uc744 \uc0c8\ub85c \ub9cc\ub4e4\uc5c8\ub2e4.\n\uc774\uc81c\ubd80\ud130 \uae30\uc874\uc758 enum\uc5d0 \uc5b4\ub5a4 \ubb38\uc81c\uac00 \uc788\uc5c8\uace0, \uc774\uac83\uc744 enum class\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ud574\uacb0\ud558\uc600\ub294\uc9c0 \uc0b4\ud3b4\ubcfc \uac83\uc774\ub2e4."),Object(c.b)("p",null,"\uc6b0\uc120 \uae30\uc874\uc758 enum \uc740 \uc804\ubc29 \uc120\uc5b8\ud560 \uc218 \uc5c6\uc5c8\ub2e4. \uadf8 \uc774\uc720\ub294 enumerator\uc5d0 \uc5b4\ub5a4 \uac12\uc774 \ub4e4\uc5b4\uc788\uc744\uc9c0 \uc54c \uc218 \uc5c6\uc73c\uba74 \uadf8 \ud06c\uae30\ub97c \uc815\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc774\ub2e4. \ud558\uc9c0\ub9cc ",Object(c.b)("inlineCode",{parentName:"p"},"enum class")," \ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"underlying type")," \uc744 \uba85\uc2dc\ud558\uc9c0 \uc54a\uc73c\uba74 ",Object(c.b)("inlineCode",{parentName:"p"},"int")," \ud0c0\uc785\uacfc \uac19\uc740 \ud06c\uae30\uc758 \ubcc0\uc218\ub85c \uc120\uc5b8\ub418\uace0, ",Object(c.b)("inlineCode",{parentName:"p"},"int")," \uac12 \uc548\uc5d0 \ub4e4\uc5b4\uac00\uc9c0 \ubabb\ud560 \uac12\uc744 \uc9c0\uc815\ud558\uba74 \ucef4\ud30c\uc77c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"enum class Flag {\n Flag1 = 0x7FFFFFFF,\n Flag2, //enumerator value 2147483648u is outside the range of underlying type \u2018int\u2019\n Flag3 = 0xFFFFFFFF // error: enumerator value 4294967295u is outside the range of underlying type \u2018int\u2019\n};\n")),Object(c.b)("p",null,"\ub9cc\uc57d int\ub97c \ubc97\uc5b4\ub09c \ubc94\uc704\uc758 \uac12\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74, underlying type\uc744 \uba85\uc2dc\ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"enum class Flag: unsigned int {\n  Flag1 = 0x7FFFFFFF,\n  Flag2,\n  Flag3 = 0xFFFFFFFF\n};\n")),Object(c.b)("p",null," \uae30\uc874 enum\uc758 \ub610 \ub2e4\ub978 \ubb38\uc81c\ub294 enumerator\uc758 \uc774\ub984\uc758 \ubc94\uc704\uac00 \ud55c\uc815\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \ubcf4\uc790."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"enum IOResult {\n Error,\n Ok\n};\n")),Object(c.b)("p",null,"ddd"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"enum ParseResult {\n  Error,\n  Ok\n};\n")),Object(c.b)("p",null,"IO \ud568\uc218\uc758 \uacb0\uacfc\uc640 Parse \ud568\uc218\uc758 \uacb0\uacfc\ub97c enum\uc73c\ub85c \ud45c\ud604\ud574 \ubcf4\uc558\ub2e4. \ud558\uc9c0\ub9cc \uc774 \ucf54\ub4dc\ub294 \ucef4\ud30c\uc77c\ub418\uc9c0 \uc54a\ub294\ub2e4. IOResult\uc758 Error, Ok\uac00 ParseResult\uc758 Error, Ok\uc640 \uacb9\uce58\uae30 \ub54c\ubb38\uc774\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 enumerator\uc758 \uc774\ub984\uc744 \ub2e4\ub974\uac8c \ud558\uac70\ub098"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"enum IOResult {\n  IOError,\n  IOOk\n};\n")),Object(c.b)("p",null,"dd"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"enum ParseResult {\n  ParseError,\n  ParseOk\n};\n")),Object(c.b)("p",null,"\uc544\ub798\uc640 \uac19\uc774 namespace\ub97c \uc774\uc6a9\ud574\uc57c \ud588\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"namespace IO {\nenum Result {\n Error,\n Ok\n};\n}\n\nnamespace Parse {\nenum Result {\n Error,\n Ok\n};\n}\n")),Object(c.b)("p",null,"\ud558\uc9c0\ub9cc enum class\ub294 enumerator\uc758 \uc774\ub984\uc774 enum class \uc548\uc73c\ub85c \ud55c\uc815\ub418\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7f0 \ubcf5\uc7a1\ud55c \uacfc\uc815\uc774 \ud544\uc694 \uc5c6\uc774 \uadf8\uc800 enum class\ub97c \uc120\uc5b8\ud558\uc5ec \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"enum class IOResult {\n  Error,\n  Ok\n};\n\nenum class ParseResult {\n  Error,\n  Ok\n};\n")),Object(c.b)("p",null,"auto io_result = IOResult::Error;\nauto parse_result = ParseResult::Ok;"),Object(c.b)("p",null," \ubb34\uc5c7\ubcf4\ub2e4 \uae30\uc874 enum\uc758 \uac00\uc7a5 \ud070 \ubb38\uc81c\ub294 \uc815\uc218\ud615 \ubcc0\uc218\ub85c \uc554\uc2dc\uc801\uc73c\ub85c \ubcc0\ud658\ub418\ub294 \uc57d \ud0c0\uc785(weak type) \ubcc0\uc218\ub77c\ub294 \uac83\uc774\ub2e4. \ud558\uc9c0\ub9cc enum class\ub294 \uc815\uc218\ud615 \ubcc0\uc218\ub85c \uc554\uc2dc\uc801 \ubcc0\ud658\uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4. enum class\ub97c \uc815\uc218\ud615 \ubcc0\uc218\ucc98\ub7fc \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\uba74 \ucef4\ud30c\uc77c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4. \ub9cc\uc57d \uc815\uc218\ud615 \ubcc0\uc218\ub85c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc73c\uba74 static_cast\ub97c \uc774\uc6a9\ud574 \uba85\uc2dc\uc801\uc73c\ub85c \uce90\uc2a4\ud305\ud574\uc11c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"enum class Color {\n  Red, Green, Blue\n};\n\nColor color = Color::Red;\nswitch (color) {\n  case 0: // error: could not convert '0' from 'int' to 'Color'\n    break;\n  case Color::Green:\n    break;\n  case Color::Blue:\n    break;\n}\n\nif (color) { // error: could not convert 'r' from 'Color' to 'bool'\n  // ...\n}\n")),Object(c.b)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \ub300\ub85c \uae30\uc874\uc758 enum\uc740 \uc804\ubc29 \uc120\uc5b8\ud560 \uc218 \uc5c6\uace0, enumerator \uc774\ub984\uc758 \ubc94\uc704\uac00 \ud55c\uc815\ub418\uc9c0 \uc54a\uace0, \uc815\uc218\ud615 \ubcc0\uc218\ub85c \uc554\uc2dc\uc801\uc73c\ub85c \ubcc0\ud658\ub418\uc9c0\ub3c4 \uc54a\ub294\ub2e4. \uc0ac\uc2e4 enum\uc758 \uc0ac\uc6a9\ubc95\uc744 \uc0dd\uac01\ud574\ubcf4\uba74 enum class\uac00 \uc62c\ubc14\ub978 \ubc29\uc2dd\uc774\ub2e4. \ud558\uc9c0\ub9cc C++ 11\uc740 backward compatibility\ub97c \uc704\ud574\uc11c \uae30\uc874\uc758 enum\uc744 \uadf8\ub300\ub85c \ub450\uace0, enum class\ub97c \uc0c8\ub85c \ucd94\uac00\ud558\ub294 \uac83\uc744 \uc120\ud0dd\ud588\ub2e4. \uc774\uc81c\ub294 compatibility\ub97c \uc704\ud574\uc11c\uac00 \uc544\ub2c8\uba74 enum\uc758 \uc874\uc7ac\ub294 \uc78a\uace0 \ub300\uc2e0\uc5d0 enum class\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."))}p.isMDXComponent=!0},89:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},i=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),i=r,O=m["".concat(l,".").concat(i)]||m[i]||b[i]||c;return t?a.a.createElement(O,u(u({ref:n},s),{},{components:t})):a.a.createElement(O,u({ref:n},s))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=i;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<c;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"}}]);