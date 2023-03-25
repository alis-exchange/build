import{_ as r,o as c,c as u,e as t,w as n,a as o,r as s,b as e,d as l}from"./app.88e698c3.js";const Y=JSON.parse('{"title":"Command Line Interface","description":"","frontmatter":{"title":"Command Line Interface"},"headers":[{"level":3,"title":"Step 1: Define","slug":"step-1-define","link":"#step-1-define","children":[]},{"level":3,"title":"Step 2: Build","slug":"step-2-build","link":"#step-2-build","children":[]},{"level":3,"title":"Step 3: Deploy","slug":"step-3-deploy","link":"#step-3-deploy","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"Alis Build Login","slug":"alis-build-login","link":"#alis-build-login","children":[]}]}],"relativePath":"guides/getting-started/command-line-interface.md"}'),d={name:"guides/getting-started/command-line-interface.md"},p=o('<h1 id="alis-build-cli-installation" tabindex="-1">Alis.Build CLI Installation <a class="header-anchor" href="#alis-build-cli-installation" aria-hidden="true">#</a></h1><p>Experience the thrill of seamless collaboration with Alis Build&#39;s command line interface - the ultimate tool for simplifying the building and deployment of your innovative solutions! Get ready to embark on an exciting journey with just 3 simple steps:</p><h3 id="step-1-define" tabindex="-1">Step 1: Define <a class="header-anchor" href="#step-1-define" aria-hidden="true">#</a></h3><p>Unleash your creativity and articulate your vision with ease, while our expert guidance ensures consistency across your entire organization.</p><h3 id="step-2-build" tabindex="-1">Step 2: Build <a class="header-anchor" href="#step-2-build" aria-hidden="true">#</a></h3><p>Bring your business logic to life in any language you desire, as we handle all the heavy lifting with our support for scaffolding, infrastructure, security, scaling, distribution, and much more!</p><h3 id="step-3-deploy" tabindex="-1">Step 3: Deploy <a class="header-anchor" href="#step-3-deploy" aria-hidden="true">#</a></h3><p>Get your solutions in the hands of your audience in no time, with support for multiple languages to ensure that everyone can interact with your solution in the way they prefer. Are you ready to take your ideas to the next level?</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2>',9),h=e("ol",null,[e("li",null,[l("Run the following command to create an "),e("em",null,"alis.exchange"),l(" folder in your home directory with a sub-folder "),e("em",null,"cli"),l(".")])],-1),m=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token function"},"mkdir"),l(),e("span",{class:"token parameter variable"},"-p"),l(` ~/alis.exchange/cli
`)])])],-1),g=e("ol",{start:"2"},[e("li",null,[l("Add this folder to your "),e("code",null,"$PATH"),l(":")])],-1),f=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[l(`// macOS
`),e("span",{class:"token builtin class-name"},"echo"),l(),e("span",{class:"token string"},"'export PATH=$PATH:~/alis.exchange/cli'"),l(),e("span",{class:"token operator"},">>"),l(` ~/.zshrc
// Linux
`),e("span",{class:"token builtin class-name"},"echo"),l(),e("span",{class:"token string"},"'export PATH=$PATH:~/alis.exchange/cli'"),l(),e("span",{class:"token operator"},">>"),l(` ~/.bashrc

`)])])],-1),_=e("ol",{start:"3"},[e("li",null,"Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).")],-1),y=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"macOS Architecture"),e("th",null,"Download links")])]),e("tbody",null,[e("tr",null,[e("td",null,"Darwin Arm64 (M1)"),e("td",null,[e("a",{href:"https://files.cli.alis.services/darwin/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])]),e("tr",null,[e("td",null,"Darwin Amd64"),e("td",null,[e("a",{href:"https://files.cli.alis.services/darwin/amd64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])])])],-1),b=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Linux Architecture"),e("th",null,"Download links")])]),e("tbody",null,[e("tr",null,[e("td",null,"Linux Arm"),e("td",null,[e("a",{href:"https://files.cli.alis.services/linux/arm/latest/alis",target:"_blank",rel:"noreferrer"},"download")])]),e("tr",null,[e("td",null,"Linux Arm64"),e("td",null,[e("a",{href:"https://files.cli.alis.services/linux/arm64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])]),e("tr",null,[e("td",null,"Linux Amd64"),e("td",null,[e("a",{href:"https://files.cli.alis.services/linux/amd64/latest/alis",target:"_blank",rel:"noreferrer"},"download")])])])],-1),k=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[l("Not sure what your Architecture is? Run "),e("code",null,"uname -a"),l(" to find out.")])],-1),w=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token comment"},"# macOS"),l(`
`),e("span",{class:"token function"},"curl"),l(" https://files.cli.alis.services/darwin/arm/latest/alis "),e("span",{class:"token parameter variable"},"--output"),l(),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`),e("span",{class:"token function"},"curl"),l(" https://files.cli.alis.services/darwin/arm64/latest/alis "),e("span",{class:"token parameter variable"},"--output"),l(),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`),e("span",{class:"token function"},"curl"),l(" https://files.cli.alis.services/darwin/amd64/latest/alis "),e("span",{class:"token parameter variable"},"--output"),l(),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis

`),e("span",{class:"token comment"},"# Linux"),l(`
`),e("span",{class:"token function"},"curl"),l(" https://files.cli.alis.services/linux/arm/latest/alis "),e("span",{class:"token parameter variable"},"--output"),l(),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`),e("span",{class:"token function"},"curl"),l(" https://files.cli.alis.services/linux/arm64/latest/alis "),e("span",{class:"token parameter variable"},"--output"),l(),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`),e("span",{class:"token function"},"curl"),l(" https://files.cli.alis.services/linux/amd64/latest/alis "),e("span",{class:"token parameter variable"},"--output"),l(),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`)])])],-1),v=e("ol",{start:"4"},[e("li",null,[l("Place the file in your "),e("em",null,"alis.exchange/cli"),l(" folder. Run the following command to give it execute permission:")])],-1),x=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token function"},"chmod"),l(" a+x "),e("span",{class:"token environment constant"},"$HOME"),l(`/alis.exchange/cli/alis
`)])])],-1),C=e("ol",{start:"5"},[e("li",null,"Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.")],-1),A=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},[e("strong",null,"Unidentified developer error?")]),e("p",null,[l("For macOS, open the CLI by right-clicking on the file and open. This will prompt you "),e("em",null,"The application is from an unidentified developer. Are you sure you want to open it?"),l(".")]),e("p",null,"Select open. This will allow macOS permission to always run the CLI, and therefore you only have to do it with your initial installation.")],-1),I=e("p",null,[l("You have successfully installed the "),e("strong",null,"alis.exchange"),l(" CLI!")],-1),T=e("ol",null,[e("li",null,"Open your Windows Command Prompt (i.e. your terminal) as administrator.")],-1),S=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,'Press the Windows Start button at the bottom left; type in "Command Prompt"; and right click on Command Prompt and click "Run as administrator".')],-1),P=e("ol",{start:"2"},[e("li",null,[l("Run the following command to create a folder in your home directory "),e("strong",null,"alis.exchange"),l(" with a sub-folder "),e("em",null,"cli"),l(".")])],-1),O=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"token function"},"mkdir"),l(" %HOMEPATH%"),e("span",{class:"token punctuation"},"\\"),l("alis.exchange"),e("span",{class:"token punctuation"},"\\"),l(`cli
`)])])],-1),H=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"WARNING"),e("p",null,[l("If your "),e("code",null,"HOMEPATH"),l(" contains a space, you might need to manually create both a "),e("code",null,"alis.exchange"),l(" directory, as well as a "),e("code",null,"cli"),l(" directory therein.")])],-1),L=e("ol",{start:"3"},[e("li",null,[l("Add this folder to your "),e("code",null,"$PATH"),l(":")])],-1),E=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[l("setx "),e("span",{class:"token environment constant"},"PATH"),l(),e("span",{class:"token string"},[l('"%PATH%;%HOMEPATH%'),e("span",{class:"token entity",title:"\\a"},"\\a"),l("lis.exchange"),e("span",{class:"token entity",title:"\\c"},"\\c"),l('li"')]),l(` /m
`)])])],-1),D=e("ol",{start:"4"},[e("li",null,"Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).")],-1),R=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Windows Architecture"),e("th",null,"Download links")])]),e("tbody",null,[e("tr",null,[e("td",null,"Windows Arm"),e("td",null,[e("a",{href:"https://files.cli.alis.services/windows/arm/latest/alis.exe",target:"_blank",rel:"noreferrer"},"download")])]),e("tr",null,[e("td",null,"Windows Arm64"),e("td",null,[e("a",{href:"https://files.cli.alis.services/windows/arm64/latest/alis.exe",target:"_blank",rel:"noreferrer"},"download")])]),e("tr",null,[e("td",null,"Windows Amd64"),e("td",null,[e("a",{href:"https://files.cli.alis.services/windows/amd64/latest/alis.exe",target:"_blank",rel:"noreferrer"},"download")])])])],-1),$=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[l("Not sure what your OS or ARCH is? Run "),e("code",null,"set PROCESSOR"),l(" to find out.")])],-1),G=e("ol",{start:"5"},[e("li",null,[e("p",null,[l("Copy the downloaded "),e("code",null,"alis.exe"),l(" file to the "),e("code",null,"alis.exchange\\cli"),l(" folder created in step 2.")])]),e("li",null,[e("p",null,"Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.")])],-1),B=o(`<p>You have successfully installed the Alis CLI!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are a Build Premium or Enterprise user, you will need to ensure the following:</p><ol><li><strong>Ensure Git is installed</strong></li></ol><p>Git may already be installed on your device. Check by running <code>git --version</code>. A successful response should look similar to <code>git version 2.30.0</code>.</p><p>If the command was not found, follow the <a href="https://www.atlassian.com/git/tutorials/install-git" target="_blank" rel="noreferrer">installation instructions</a>.</p><ol start="2"><li><strong>Connect the CLI with Google Cloud and Google Cloud Source Repositories</strong></li></ol><p>From your terminal, run <code>alis login</code>. This will open your browser and require you to grant access to the Alis Exchange CLI to manage your Google Cloud.</p><p>Once you have granted access, you will be redirected to a similar login page for Google Cloud Source Repositories. Granting access allows for the CLI to manage your repositories. Once you have logged in, follow the instructions in copying the relevant script into your terminal.</p></div><h3 id="alis-build-login" tabindex="-1">Alis Build Login <a class="header-anchor" href="#alis-build-login" aria-hidden="true">#</a></h3><p>If you are registered as a Build Premium or Enterprise user, you can run the <code>alis login</code> command to login and enable additional functionality for the CLI.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="token comment"># Show help</span>
alis <span class="token parameter variable">-h</span>

<span class="token comment"># Get the Google common protos</span>
alis get google

<span class="token comment"># Get your organisation definitions</span>
alis get <span class="token punctuation">{</span>yourOrg<span class="token punctuation">}</span>
</code></pre></div>`,5);function M(N,V,W,j,z,F){const a=s("tab"),i=s("tabs");return c(),u("div",null,[p,t(i,null,{default:n(()=>[t(a,{name:"macOS/Linux"},{default:n(()=>[h,m,g,f,_,y,b,k,w,v,x,C,A,I]),_:1}),t(a,{name:"Windows"},{default:n(()=>[T,S,P,O,H,L,E,D,R,$,G]),_:1})]),_:1}),B])}const q=r(d,[["render",M]]);export{Y as __pageData,q as default};