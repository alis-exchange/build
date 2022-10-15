import{_ as r,o as c,c as u,b as t,w as a,a as s,r as o,d as e,e as l}from"./app.acf76c56.js";const K=JSON.parse('{"title":"Command Line Interface","description":"","frontmatter":{"title":"Command Line Interface"},"headers":[{"level":2,"title":"Install Prerequisites","slug":"install-prerequisites","link":"#install-prerequisites","children":[{"level":3,"title":"Google Cloud SDK","slug":"google-cloud-sdk","link":"#google-cloud-sdk","children":[]},{"level":3,"title":"Git","slug":"git","link":"#git","children":[]},{"level":3,"title":"Connect Git with Google Cloud","slug":"connect-git-with-google-cloud","link":"#connect-git-with-google-cloud","children":[]}]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"List of available CLI binaries","slug":"list-of-available-cli-binaries","link":"#list-of-available-cli-binaries","children":[]},{"level":3,"title":"List of available CLI binaries","slug":"list-of-available-cli-binaries-1","link":"#list-of-available-cli-binaries-1","children":[]},{"level":3,"title":"Try out alis_ CLI","slug":"try-out-alis-cli","link":"#try-out-alis-cli","children":[]}]}],"relativePath":"guides/getting-started/command-line-interface.md"}'),d={name:"guides/getting-started/command-line-interface.md"},h=s("",15),p=e("ol",null,[e("li",null,[l("Run the following command to create an "),e("em",null,"alis.exchange"),l(" folder in your home directory with a sub-folder "),e("em",null,"cli"),l(".")])],-1),g=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token function"},"mkdir"),l(),e("span",{class:"token parameter variable"},"-p"),l(` ~/alis.exchange/cli
`)])])],-1),f=e("ol",{start:"2"},[e("li",null,[l("Add this folder to your "),e("code",null,"$PATH"),l(":")])],-1),m=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token builtin class-name"},"echo"),l(),e("span",{class:"token string"},"'export PATH=$PATH:~/alis.exchange/cli'"),l(),e("span",{class:"token operator"},">>"),l(` ~/.zshrc
`)])])],-1),_=e("ol",{start:"3"},[e("li",null,"Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).")],-1),b=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[l("Not sure what your OS or ARCH is? Run "),e("code",null,"uname -a"),l(" to find out.")])],-1),v=e("h3",{id:"list-of-available-cli-binaries",tabindex:"-1"},[l("List of available CLI binaries "),e("a",{class:"header-anchor",href:"#list-of-available-cli-binaries","aria-hidden":"true"},"#")],-1),y=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"macOS"),e("th",null,"Linux")])]),e("tbody",null,[e("tr",null,[e("td"),e("td",null,[e("a",{href:"https://files.cli.alis.services/linux/arm/latest/alis",target:"_blank",rel:"noreferrer"},"Linux Arm")])]),e("tr",null,[e("td",null,[e("a",{href:"https://files.cli.alis.services/darwin/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"Darwin Arm64 (M1)")]),e("td",null,[e("a",{href:"https://files.cli.alis.services/linux/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"Linux Arm64")])]),e("tr",null,[e("td",null,[e("a",{href:"https://files.cli.alis.services/darwin/amd64/latest/alis",target:"_blank",rel:"noreferrer"},"Darwin Amd64")]),e("td",null,[e("a",{href:"https://files.cli.alis.services/linux/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"Linux Amd64")])])])],-1),w=e("ol",{start:"4"},[e("li",null,[l("Place the file in your "),e("em",null,"alis.exchange/cli"),l(" folder. Run the following command to give it execute permission:")])],-1),k=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token function"},"chmod"),l(" a+x "),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`)])])],-1),C=e("ol",{start:"5"},[e("li",null,"Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.")],-1),A=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},[e("strong",null,"Unidentified developer error?")]),e("p",null,[l("For macOS, open the CLI by right-clicking on the file and open. This will prompt you "),e("em",null,"The application is from an unidentified developer. Are you sure you want to open it?"),l(".")]),e("p",null,"Select open. This will allow macOS permission to always run the CLI, and therefore you only have to do it with your initial installation.")],-1),x=e("p",null,[l("You have successfully installed the "),e("strong",null,"alis.exchange"),l(" CLI!")],-1),I=e("ol",null,[e("li",null,"Open command prompt as administrator."),e("li",null,[l("Run the following command to create a folder in your home directory "),e("strong",null,"alis.exchange"),l(" with a sub-folder "),e("em",null,"cli"),l(".")])],-1),T=e("div",{class:"language-"},[e("button",{class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",null,`md %HOMEPATH%\\alis.exchange\\cli
`)])],-1),L=e("ol",{start:"3"},[e("li",null,[l("Add this folder to your "),e("code",null,"$PATH"),l(":")])],-1),S=e("div",{class:"language-"},[e("button",{class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",null,`setx PATH "%PATH%;%PATH%;%HOMEPATH%\\alis.exchange\\cli" /m
`)])],-1),P=e("ol",{start:"4"},[e("li",null,"Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).")],-1),G=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[l("Not sure what your OS or ARCH is? Run "),e("code",null,"set PROCESSOR"),l(" to find out.")])],-1),O=e("h3",{id:"list-of-available-cli-binaries-1",tabindex:"-1"},[l("List of available CLI binaries "),e("a",{class:"header-anchor",href:"#list-of-available-cli-binaries-1","aria-hidden":"true"},"#")],-1),D=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Windows")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("a",{href:"https://files.cli.alis.services/windows/arm/4.0.96/alis.exe",target:"_blank",rel:"noreferrer"},"Windows Arm")])]),e("tr",null,[e("td",null,[e("a",{href:"https://files.cli.alis.services/windows/arm64/4.0.96/alis.exe",target:"_blank",rel:"noreferrer"},"Windows Arm64")])]),e("tr",null,[e("td",null,[e("a",{href:"https://files.cli.alis.services/windows/amd64/4.0.96/alis.exe",target:"_blank",rel:"noreferrer"},"Windows Amd64")])])])],-1),H=e("ol",{start:"5"},[e("li",null,[e("p",null,[l("Place the file in your "),e("em",null,"alis.exchange/cli"),l(" folder. Ensure the file name and extension is "),e("code",null,"alis.exe"),l(".")])]),e("li",null,[e("p",null,"Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.")])],-1),R=s("",3);function E(N,q,V,$,B,M){const i=o("tab"),n=o("tabs");return c(),u("div",null,[h,t(n,null,{default:a(()=>[t(i,{name:"macOS/Linux"},{default:a(()=>[p,g,f,m,_,b,v,y,w,k,C,A,x]),_:1}),t(i,{name:"Windows"},{default:a(()=>[I,T,L,S,P,G,O,D,H]),_:1})]),_:1}),R])}const Y=r(d,[["render",E]]);export{K as __pageData,Y as default};
