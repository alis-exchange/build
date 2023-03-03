import{_ as r,o as c,c as u,e as n,w as t,a as o,r as s,b as l,d as e}from"./app.8e53ce43.js";const j=JSON.parse('{"title":"Command Line Interface","description":"","frontmatter":{"title":"Command Line Interface"},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"List of available CLI versions","slug":"list-of-available-cli-versions","link":"#list-of-available-cli-versions","children":[]},{"level":3,"title":"List of available CLI versions","slug":"list-of-available-cli-versions-1","link":"#list-of-available-cli-versions-1","children":[]},{"level":3,"title":"Alis Build Login","slug":"alis-build-login","link":"#alis-build-login","children":[]}]}],"relativePath":"guides/getting-started/command-line-interface.md"}'),d={name:"guides/getting-started/command-line-interface.md"},p=o("",7),h=l("ol",null,[l("li",null,[e("Run the following command to create an "),l("em",null,"alis.exchange"),e(" folder in your home directory with a sub-folder "),l("em",null,"cli"),e(".")])],-1),m=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",null,[l("span",{class:"token function"},"mkdir"),e(),l("span",{class:"token parameter variable"},"-p"),e(` ~/alis.exchange/cli
`)])])],-1),g=l("ol",{start:"2"},[l("li",null,[e("Add this folder to your "),l("code",null,"$PATH"),e(":")])],-1),f=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",null,[l("span",{class:"token builtin class-name"},"echo"),e(),l("span",{class:"token string"},"'export PATH=$PATH:~/alis.exchange/cli'"),e(),l("span",{class:"token operator"},">>"),e(` ~/.zshrc
`)])])],-1),_=l("ol",{start:"3"},[l("li",null,"Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).")],-1),b=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,[e("Not sure what your OS or ARCH is? Run "),l("code",null,"uname -a"),e(" to find out.")])],-1),v=l("h3",{id:"list-of-available-cli-versions",tabindex:"-1"},[e("List of available CLI versions "),l("a",{class:"header-anchor",href:"#list-of-available-cli-versions","aria-hidden":"true"},"#")],-1),k=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"macOS Architecture"),l("th",null,"Download links")])]),l("tbody",null,[l("tr",null,[l("td",null,"Darwin Arm64 (M1)"),l("td",null,[l("a",{href:"https://files.cli.alis.services/darwin/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])]),l("tr",null,[l("td",null,"Darwin Amd64"),l("td",null,[l("a",{href:"https://files.cli.alis.services/darwin/amd64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])])])],-1),y=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Linux Architecture"),l("th",null,"Download links")])]),l("tbody",null,[l("tr",null,[l("td",null,"Linux Arm"),l("td",null,[l("a",{href:"https://files.cli.alis.services/linux/arm/latest/alis",target:"_blank",rel:"noreferrer"},"download")])]),l("tr",null,[l("td",null,"Linux Arm64"),l("td",null,[l("a",{href:"https://files.cli.alis.services/linux/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])]),l("tr",null,[l("td",null,"Linux Amd64"),l("td",null,[l("a",{href:"https://files.cli.alis.services/linux/amd64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])])])],-1),w=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",null,[l("span",{class:"token comment"},"# macOS"),e(`
`),l("span",{class:"token function"},"curl"),e(" https://files.cli.alis.services/darwin/arm/latest/alis "),l("span",{class:"token parameter variable"},"--output"),e(),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis
`),l("span",{class:"token function"},"curl"),e(" https://files.cli.alis.services/darwin/arm64/latest/alis "),l("span",{class:"token parameter variable"},"--output"),e(),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis
`),l("span",{class:"token function"},"curl"),e(" https://files.cli.alis.services/darwin/amd64/latest/alis "),l("span",{class:"token parameter variable"},"--output"),e(),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis

`),l("span",{class:"token comment"},"# Linux"),e(`
`),l("span",{class:"token function"},"curl"),e(" https://files.cli.alis.services/linux/arm/latest/alis "),l("span",{class:"token parameter variable"},"--output"),e(),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis
`),l("span",{class:"token function"},"curl"),e(" https://files.cli.alis.services/linux/arm64/latest/alis "),l("span",{class:"token parameter variable"},"--output"),e(),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis
`),l("span",{class:"token function"},"curl"),e(" https://files.cli.alis.services/linux/amd64/latest/alis "),l("span",{class:"token parameter variable"},"--output"),e(),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis
`)])])],-1),C=l("ol",{start:"4"},[l("li",null,[e("Place the file in your "),l("em",null,"alis.exchange/cli"),e(" folder. Run the following command to give it execute permission:")])],-1),x=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",null,[l("span",{class:"token function"},"chmod"),e(" a+x "),l("span",{class:"token environment constant"},"$HOME"),e(`/alis.exchange/cli/alis
`)])])],-1),A=l("ol",{start:"5"},[l("li",null,"Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.")],-1),I=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},[l("strong",null,"Unidentified developer error?")]),l("p",null,[e("For macOS, open the CLI by right-clicking on the file and open. This will prompt you "),l("em",null,"The application is from an unidentified developer. Are you sure you want to open it?"),e(".")]),l("p",null,"Select open. This will allow macOS permission to always run the CLI, and therefore you only have to do it with your initial installation.")],-1),L=l("p",null,[e("You have successfully installed the "),l("strong",null,"alis.exchange"),e(" CLI!")],-1),T=l("ol",null,[l("li",null,"Open your Windows Command Prompt (i.e. your terminal) as administrator.")],-1),O=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,'Press the Windows Start button at the bottom left. Type in "Command Prompt". Right click on Command Prompt and click "Run as administrator".')],-1),P=l("ol",{start:"2"},[l("li",null,[e("Run the following command to create a folder in your home directory "),l("strong",null,"alis.exchange"),e(" with a sub-folder "),l("em",null,"cli"),e(".")])],-1),S=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",null,[l("span",{class:"token function"},"mkdir"),e(" %HOMEPATH%"),l("span",{class:"token punctuation"},"\\"),e("alis.exchange"),l("span",{class:"token punctuation"},"\\"),e(`cli
`)])])],-1),H=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"WARNING"),l("p",null,[e("If your "),l("code",null,"HOMEPATH"),e(" contains a space, you might need to manually create both a "),l("code",null,"alis.exchange"),e(" directory, as well as a "),l("code",null,"cli"),e(" directory therein.")])],-1),E=l("ol",{start:"3"},[l("li",null,[e("Add this folder to your "),l("code",null,"$PATH"),e(":")])],-1),R=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",null,[e("setx "),l("span",{class:"token environment constant"},"PATH"),e(),l("span",{class:"token string"},[e('"%PATH%;%HOMEPATH%'),l("span",{class:"token entity",title:"\\a"},"\\a"),e("lis.exchange"),l("span",{class:"token entity",title:"\\c"},"\\c"),e('li"')]),e(` /m
`)])])],-1),D=l("ol",{start:"4"},[l("li",null,"Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).")],-1),$=l("h3",{id:"list-of-available-cli-versions-1",tabindex:"-1"},[e("List of available CLI versions "),l("a",{class:"header-anchor",href:"#list-of-available-cli-versions-1","aria-hidden":"true"},"#")],-1),B=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Windows Architecture"),l("th",null,"Download links")])]),l("tbody",null,[l("tr",null,[l("td",null,"Windows Arm"),l("td",null,[l("a",{href:"https://files.cli.alis.services/windows/arm/latest/alis.exe",target:"_blank",rel:"noreferrer"},"download")])]),l("tr",null,[l("td",null,"Windows Arm64"),l("td",null,[l("a",{href:"https://files.cli.alis.services/windows/arm64/latest/alis.exe",target:"_blank",rel:"noreferrer"},"download")])]),l("tr",null,[l("td",null,"Windows Amd64"),l("td",null,[l("a",{href:"https://files.cli.alis.services/windows/amd64/latest/alis.exe",target:"_blank",rel:"noreferrer"},"download")])])])],-1),G=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,[e("Not sure what your OS or ARCH is? Run "),l("code",null,"set PROCESSOR"),e(" to find out.")])],-1),M=l("ol",{start:"5"},[l("li",null,[l("p",null,[e("Copy the downloaded "),l("code",null,"alis.exe"),e(" file to the "),l("code",null,"alis.exchange\\cli"),e(" folder created in step 2.")])]),l("li",null,[l("p",null,"Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.")])],-1),N=o("",5);function V(W,Y,F,q,z,J){const a=s("tab"),i=s("tabs");return c(),u("div",null,[p,n(i,null,{default:t(()=>[n(a,{name:"macOS/Linux"},{default:t(()=>[h,m,g,f,_,b,v,k,y,w,C,x,A,I,L]),_:1}),n(a,{name:"Windows"},{default:t(()=>[T,O,P,S,H,E,R,D,$,B,G,M]),_:1})]),_:1}),N])}const K=r(d,[["render",V]]);export{j as __pageData,K as default};