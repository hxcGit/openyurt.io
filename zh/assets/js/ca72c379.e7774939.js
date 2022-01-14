"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3622],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=i(n),m=u,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:u,l[1]=a;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=n(7462),u=n(3366),o=(n(7294),n(3905)),l=["components"],a={title:"OpenYurt\u662f\u4ec0\u4e48",slug:"/"},p=void 0,i={unversionedId:"introduction",id:"version-v0.5.0/introduction",isDocsHomePage:!1,title:"OpenYurt\u662f\u4ec0\u4e48",description:"\u6b22\u8fce\u6765\u5230OpenYurt\u7684\u4e16\u754c!",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/v0.5.0/",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/introduction.md",tags:[],version:"v0.5.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1641807407,formattedLastUpdatedAt:"2022/1/10",frontMatter:{title:"OpenYurt\u662f\u4ec0\u4e48",slug:"/"},sidebar:"version-v0.5.0/docs",next:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/v0.5.0/installation/summary"}},c=[{value:"\u6838\u5fc3\u80fd\u529b",id:"\u6838\u5fc3\u80fd\u529b",children:[],level:2},{value:"\u5173\u7cfb\u5bf9\u6bd4",id:"\u5173\u7cfb\u5bf9\u6bd4",children:[{value:"OpenYurt vs. Kubernetes",id:"openyurt-vs-kubernetes",children:[],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,u.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b22\u8fce\u6765\u5230OpenYurt\u7684\u4e16\u754c!"),(0,o.kt)("p",null,"OpenYurt\u4e2d\u7684Yurt(/j\u025c\u02d0rt/)\u610f\u8bd1\u4e3a\u8499\u53e4\u5305\uff0c\u671f\u671b\u4ee5\u5176\u201c\u5f62\u201d\u6765\u8868\u793a\u8fb9\u7f18\u8ba1\u7b97\u4fa7\u91cd\u4e8e\u521b\u5efa\u4e00\u4e2a\u96c6\u4e2d\u7ba1\u7406\u4f46\u7269\u7406\u5206\u5e03\u7684\u5f00\u653e\u57fa\u7840\u8bbe\u65bd\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OpenYurt \u662f\u4e1a\u754c\u9996\u4e2a\u975e\u4fb5\u5165\u7684\u8fb9\u7f18\u8ba1\u7b97\u4e91\u539f\u751f\u5e73\u53f0\u5f00\u6e90\u9879\u76ee\u3002\u4e3b\u63a8\u201cKubernetes\u96f6\u4fee\u6539\u201d\uff0c\u201c\u4e91\u8fb9\u7aef\u4e00\u4f53\u5316\u201d\u7b49\u8bbe\u8ba1\u7406\u5ff5"),"\uff0c\u63d0\u4f9b\u8bf8\u5982\u8fb9\u7f18\u81ea\u6cbb\u3001\n\u8de8\u7f51\u7edc\u57df\u7684\u4e91\u8fb9\u6d41\u91cf\u6cbb\u7406\u3001\u5927\u89c4\u6a21\u8fb9\u7f18\u4e1a\u52a1\u7ba1\u7406\u3001\u8fb9\u7f18\u8bbe\u5907\u7684\u4e91\u539f\u751f\u7ba1\u7406\uff0c\u5f02\u6784\u8d44\u6e90\u652f\u6301\u7b49\u80fd\u529b\u3002OpenYurt \u65e8\u5728\u5e2e\u52a9\u7528\u6237\u89e3\u51b3\u5728\u6d77\u91cf\u8fb9\u3001\n\u7aef\u8d44\u6e90\u4e0a\u5b8c\u6210\u5927\u89c4\u6a21\u5e94\u7528\u4ea4\u4ed8\u3001\u8fd0\u7ef4\u3001\u7ba1\u63a7\u7684\u95ee\u9898\uff0c\u540c\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u4e0e\u4e91\u4e0aKubernetes\u96c6\u7fa4\u4e00\u81f4\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"),(0,o.kt)("h2",{id:"\u6838\u5fc3\u80fd\u529b"},"\u6838\u5fc3\u80fd\u529b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f53\u9a8c\u4e00\u81f4\u6027"))),(0,o.kt)("p",null,"\u8fb9\u7f18\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u7684\u4e1a\u52a1Pod\u65e0\u6cd5\u76f4\u63a5\u901a\u8fc7InClusterConfig\u8bbf\u95ee\u4e91\u7aef\u7684kube-apiserver\uff0c\u5bfc\u81f4\u4e91\u539f\u751f\u793e\u533a\u8f83\u591a\u7684\u5e94\u7528(\u5982kube-proxy\uff0ccoredns\u7b49)\u65e0\u6cd5\n\u76f4\u63a5\u8fd0\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u3002OpenYurt\u96c6\u7fa4\u4ee5\u975e\u4fb5\u5165\u5f62\u5f0f\u5728\u8fb9\u7f18\u5f15\u5165\u6570\u636e\u8fc7\u6ee4\u4ee5\u53ca\u6743\u9650\u7ba1\u63a7\u6a21\u5757\uff0c\u4f7f\u7528\u6237\u53ef\u4ee5\u5728\u65e0\u611f\u77e5\u72b6\u6001\u4e0b\u4eab\u53d7\u5230\u4e0e\u4e91\u4e0aKubernetes\u96c6\u7fa4\u7684\u4e00\u81f4\u4f53\u9a8c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8fb9\u7f18\u81ea\u6cbb"))),(0,o.kt)("p",null,"\u5728\u539f\u751fKubernetes\u4e2d\uff0c\u5f53\u8fb9\u4e91\u8fb9\u7f51\u7edc\u5f02\u5e38(\u5982\u7f18\u8282\u70b9\u79bb\u7ebf\u6216\u8fb9\u7f18\u8282\u70b9\u4e0e\u4e91\u7aef\u7ba1\u63a7\u95f4\u7684\u7f51\u7edc\u4e0d\u7a33\u5b9a)\u65f6\uff0c\u53ef\u80fd\u4f1a\u89e6\u53d1\u5bf9\u8fb9\u7f18\u8282\u70b9\u4e0a\u4e1a\u52a1\u7684\u9a71\u9010\u4e0e\u91cd\u5efa\uff0c\n\u540c\u65f6\u8fb9\u7f18\u8282\u70b9\u91cd\u542f\u65f6\u7531\u4e8e\u65e0\u6cd5\u4ece\u4e91\u7aef\u7ba1\u63a7\u83b7\u53d6\u4e1a\u52a1Pod\u5143\u6570\u636e\u5bfc\u81f4\u65e0\u6cd5\u6062\u590d\u8fb9\u7f18\u4e1a\u52a1\u3002\u901a\u8fc7OpenYurt\u7684\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\uff0c\u53ef\u4ee5\u8f7b\u677e\u7684\u89e3\u51b3\u4e91\u8fb9\u7f51\u7edc\u5f02\u5e38\u5bf9\u8fb9\u7f18\u4e1a\u52a1\u7684\u5f71\u54cd\uff0c\n\u786e\u4fdd\u8fb9\u7f18\u4e1a\u52a1\u53ef\u4ee57*24\u5c0f\u65f6\u63d0\u4f9b\u670d\u52a1\u3002\u540c\u65f6\u5f53\u4e91\u8fb9\u7f51\u7edc\u6062\u590d\u540e\uff0c\u8fb9\u7f18\u5de5\u4f5c\u8d1f\u8f7d\u7684\u72b6\u6001\u5c06\u4e0e\u4e91\u7aef\u7ba1\u63a7\u540c\u6b65\u5e76\u4fdd\u6301\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8fb9\u7f18\u7f51\u7edc"))),(0,o.kt)("p",null,"\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\uff0c\u7531\u4e8e\u5927\u591a\u6570\u8fb9\u7f18\u8282\u70b9\u6ca1\u6709\u66b4\u9732\u5728\u516c\u7f51\u4e4b\u4e0a\uff0c\u4e91\u7aef\u7ba1\u63a7\u65e0\u6cd5\u548c\u8fb9\u7f18\u8282\u70b9\u4e3b\u52a8\u5efa\u7acb\u7f51\u7edc\u94fe\u63a5\uff0c\u5bfc\u81f4\u539f\u751fKubernetes\u7684\u5e94\u7528\u8fd0\u7ef4 APIs(logs/exec/port-forward)\u65e0\u6cd5\u5de5\u4f5c\u3002\n\u901a\u8fc7OpenYurt\u7684\u8fb9\u7f18\u7f51\u7edc\u6cbb\u7406\u80fd\u529b\uff0c\u53ef\u4ee5\u5728\u65e0\u611f\u77e5\u72b6\u6001\u4e0b\u6ee1\u8db3\u8fb9\u7f18\u7684\u8fd0\u7ef4\u9700\u6c42\uff0c\u540c\u65f6\u4e5f\u5c06\u652f\u6301\u8de8\u516c\u7f51\u7684\u4e91\u8fb9\uff0c\u8fb9\u8fb9\u4e4b\u95f4\u7684\u4e1a\u52a1\u8bbf\u95ee\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8fb9\u7f18\u5b58\u50a8"))),(0,o.kt)("p",null,"\u901a\u8fc7OpenYurt\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.5.0/core-concepts/node-resource-manager"},"NodeResourceManager"),"\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5c06\u5bbf\u4e3b\u673a\u4e0a\u5df2\u6709\u7684\u5757\u8bbe\u5907\u6216\u8005\u6301\u4e45\u5316\u5185\u5b58\u8bbe\u5907\u521d\u59cb\u5316\u4e3a\u8fb9\u7f18\u672c\u5730\u5b58\u50a8\uff0c\u540c\u65f6\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u7684\u901a\u8fc7ConfigMap\u6765\u52a8\u6001\u914d\u7f6e\n\u96c6\u7fa4\u5185\u5bbf\u4e3b\u673a\u4e0a\u7684\u8fb9\u7f18\u5b58\u50a8\u8d44\u6e90\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8fb9\u7f18\u5e94\u7528"))),(0,o.kt)("p",null,"\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u901a\u5e38\u5177\u5907\u5f88\u5f3a\u7684\u533a\u57df\u6027\u3001\u5730\u57df\u6027\u3001\u6216\u8005\u5176\u4ed6\u903b\u8f91\u4e0a\u7684\u5206\u7ec4\u7279\u6027\uff08\u6bd4\u5982\u76f8\u540c CPU \u67b6\u6784\u3001\u540c\u4e00\u4e2a\u8fd0\u8425\u5546\u3001\u4e91\u63d0\u4f9b\u5546\uff09\uff0c\n\u4e0d\u540c\u5206\u7ec4\u7684\u8282\u70b9\u95f4\u5f80\u5f80\u5b58\u5728\u7f51\u7edc\u4e0d\u4e92\u901a\u3001\u8d44\u6e90\u4e0d\u5171\u4eab\u3001\u8d44\u6e90\u5f02\u6784\u3001\u5e94\u7528\u72ec\u7acb\u7b49\u660e\u663e\u7684\u9694\u79bb\u5c5e\u6027\u3002\u5728OpenYurt\u4e2d\u4ece\u5355\u5143\u5316\u7ba1\u7406\u89c6\u89d2\uff0c\n\u62bd\u8c61\u4e86NodePool(3\u5c42\u5185\u7f51\u4e92\u901a\u7684\u4e00\u7ec4\u8282\u70b9)/YurtAppSet/YurtAppDaemon\u7b49\u5355\u5143\u5316\u8d44\u6e90\uff0c\u63d0\u4f9b\u8fb9\u7f18\u573a\u666f\u4e0b\u8282\u70b9\u548c\u5e94\u7528\u7684\u5927\u89c4\u6a21\u7ba1\u7406\u80fd\u529b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8fb9\u7f18\u8bbe\u5907"))),(0,o.kt)("p",null,"\u63d0\u51fa kubernetes-native\u975e\u4fb5\u5165\u3001\u53ef\u6269\u5c55\u7684\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u6807\u51c6\uff0c\u4f7f Kubernetes \u4e1a\u52a1\u8d1f\u8f7d\u6a21\u578b\u548c IoT \u8bbe\u5907\u7ba1\u7406\u6a21\u578b\u65e0\u7f1d\u878d\u5408\u3002\n\u76ee\u524dEdgeX Foundry \u4f5c\u4e3a\u4e91\u539f\u751f\u8bbe\u5907\u7ba1\u7406\u6a21\u578b\u7684\u9996\u4e2a\u5b9e\u73b0\u5e76\u6210\u529f\u5728OpenYurt\u7cfb\u7edf\u4e2d\u843d\u5730\uff0c\u5927\u5927\u964d\u4f4e EdgeX Foundry \u5728 Kubernetes \u4e0a\u7684\u90e8\u7f72\u7ba1\u7406\u7684\u590d\u6742\u5ea6\u540c\u65f6\u4e5f\u63d0\u5347\u4e86\u8fb9\u7f18\u8bbe\u5907\u7684\u7ba1\u7406\u6548\u7387\u3002"),(0,o.kt)("h2",{id:"\u5173\u7cfb\u5bf9\u6bd4"},"\u5173\u7cfb\u5bf9\u6bd4"),(0,o.kt)("h3",{id:"openyurt-vs-kubernetes"},"OpenYurt vs. Kubernetes"),(0,o.kt)("p",null,"Kubernetes\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u4e2d\u5fc3\u4e2d\u5bb9\u5668\u5316\u4e1a\u52a1\u7684\u7f16\u6392\u53ca\u8c03\u5ea6\uff0c\u5bf9\u8282\u70b9\u95f4\u7f51\u7edc\u8fde\u63a5\u6709\u6bd4\u8f83\u9ad8\u7684\u8981\u6c42\uff0c\u540c\u65f6Kubernetes\u4e5f\u4e0d\u6d89\u53ca\u8fb9\u7f18\u8bbe\u5907\u7684\u7ba1\u7406\u3002OpenYurt\u901a\u8fc7\u975e\u4fb5\u5165\uff0c\n\u63d2\u4ef6\u5f62\u5f0f\u589e\u5f3aKubernetes\uff0c\u53ef\u4ee5\u7b80\u5355\u8ba4\u4e3aOpenYurt=Kubernetes + \u5404\u4e2aYurt\u7ec4\u4ef6(\u5982Yurthub\uff0cYurt-tunnel\uff0cYurt-app-manager\u7b49)\u3002\nOpenYurt\u89e3\u51b3\u4e86\u8fb9\u7f18\u573a\u666f\u4e0b\u5e38\u89c1\u6311\u6218\uff0c\u5982\u7f51\u7edc\u8fde\u63a5\u4e0d\u7a33\u5b9a\uff0c\u8fb9\u7f18\u81ea\u6cbb\uff0c\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u7b49\u95ee\u9898\uff0c\u4f7fKubernetes\u53ef\u4ee5\u4ee5\u4e91\u8fb9\u4e00\u4f53\u5316\u67b6\u6784\u8fd0\u884c\u5728\u8fb9\u7f18\u573a\u666f\u3002"))}d.isMDXComponent=!0}}]);