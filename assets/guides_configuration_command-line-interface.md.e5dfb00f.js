import{_ as e,c as a,o as l,a as t}from"./app.2878acf3.js";const f=JSON.parse('{"title":"Command Line Interface","description":"","frontmatter":{"title":"Command Line Interface","sidebarDepth":0,"next":"/guides/configuration/set-up-your-favourite-IDE"},"headers":[{"level":2,"title":"Install Prerequisites","slug":"install-prerequisites","link":"#install-prerequisites","children":[{"level":3,"title":"Google Cloud SDK","slug":"google-cloud-sdk","link":"#google-cloud-sdk","children":[]},{"level":3,"title":"Git","slug":"git","link":"#git","children":[]},{"level":3,"title":"Connect Git with Google Cloud","slug":"connect-git-with-google-cloud","link":"#connect-git-with-google-cloud","children":[]}]},{"level":2,"title":"MacOS/Linux Installation","slug":"macos-linux-installation","link":"#macos-linux-installation","children":[{"level":3,"title":"List of available CLI binaries","slug":"list-of-available-cli-binaries","link":"#list-of-available-cli-binaries","children":[]}]},{"level":2,"title":"Windows Installation","slug":"windows-installation","link":"#windows-installation","children":[{"level":3,"title":"List of available CLI binaries","slug":"list-of-available-cli-binaries-1","link":"#list-of-available-cli-binaries-1","children":[]},{"level":3,"title":"Try out alis_ CLI","slug":"try-out-alis-cli","link":"#try-out-alis-cli","children":[]}]}],"relativePath":"guides/configuration/command-line-interface.md"}'),s={name:"guides/configuration/command-line-interface.md"},i=t(`<h1 id="command-line-interface" tabindex="-1">Command Line Interface <a class="header-anchor" href="#command-line-interface" aria-hidden="true">#</a></h1><p>The <strong>alis.exchange</strong> command-line interface (CLI) is a powerful tool for managing resources on <strong>alis.exchange</strong>. You can use this tool to perform many common platform tasks either from the command line or in scripts and other automations. Some example use cases for the CLI:</p><ul><li>Create a new product / organisation;</li><li>Deploy new versions of your product;</li><li>Manage the build and deploy steps of your services; and</li><li>Auto-generate infrastructure and implementation code.</li></ul><h2 id="install-prerequisites" tabindex="-1">Install Prerequisites <a class="header-anchor" href="#install-prerequisites" aria-hidden="true">#</a></h2><p>Before you install the <strong>alis.exchange</strong> CLI, install the following prerequisites:</p><h3 id="google-cloud-sdk" tabindex="-1">Google Cloud SDK <a class="header-anchor" href="#google-cloud-sdk" aria-hidden="true">#</a></h3><p>The CLI makes use of Google Cloud SDK authentication to seamlessly authenticate your requests to <strong>alis.exchange</strong>.</p><ol><li>Install the latest version of Cloud SDK for your device by following the <a href="https://cloud.google.com/sdk/docs/install" target="_blank" rel="noreferrer">instructions</a>.</li><li>Run <code>gcloud auth login</code> from your terminal to authenticate your local environment with Google user account via a web-based authorization flow. <em>NOTE</em> Ensure that you login using your account associated with alis.exchange.</li><li>Run <code>gcloud auth application-default login</code> to acquire new user credentials to use for Application Default Credentials (<a href="https://developers.google.com/identity/protocols/application-default-credentials" target="_blank" rel="noreferrer">ADC</a>). These are used in calling Google APIs.</li></ol><h3 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h3><p>Git may already be installed on your device. Check by running <code>git --version</code>. A successful response should look similar to <code>git version 2.30.0</code>. If the command was not found, follow the <a href="https://www.atlassian.com/git/tutorials/install-git" target="_blank" rel="noreferrer">installation instructions</a>.</p><h3 id="connect-git-with-google-cloud" tabindex="-1">Connect Git with Google Cloud <a class="header-anchor" href="#connect-git-with-google-cloud" aria-hidden="true">#</a></h3><p>Your Git needs to be configured with Google Cloud Source repositories. Credential helper scripts provide the information that Git needs to connect securely to Cloud Source Repositories using your Google Account credentials.</p><ol><li>Access <a href="https://source.developers.google.com/auth/start?scopes=https://www.googleapis.com/auth/cloud-platform&amp;state=" target="_blank" rel="noreferrer">this link</a> and log in with your Google credentials</li><li>Copy the relevant script into your terminal</li></ol><p>\u2611\uFE0F Check if this was successful by opening the <code>.gitcookies</code> file in Vim: <code>vim ~/.gitcookies</code>. If successful, the file should contain a <code>source.developers.google.com</code> entry.</p><h2 id="macos-linux-installation" tabindex="-1">MacOS/Linux Installation <a class="header-anchor" href="#macos-linux-installation" aria-hidden="true">#</a></h2><ol><li>Run the following command to create a folder in your home directory <strong>alis.exchange</strong> with a sub-folder <em>cli</em>.</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -p </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/alis.exchange/cli</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Add this folder to your <code>$PATH</code>:</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">export PATH=$PATH:~/alis.exchange/cli</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zshrc</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li><p>Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).</p><blockquote><p>Not sure what your OS or ARCH is, run <code>uname -a</code> to find out.</p></blockquote><h3 id="list-of-available-cli-binaries" tabindex="-1">List of available CLI binaries <a class="header-anchor" href="#list-of-available-cli-binaries" aria-hidden="true">#</a></h3><table><thead><tr><th>MacOS</th><th>Linux</th></tr></thead><tbody><tr><td></td><td><a href="https://files.cli.alis.services/linux/arm/latest/alis" target="_blank" rel="noreferrer">Linux Arm</a></td></tr><tr><td><a href="https://files.cli.alis.services/darwin/arm64/latest/alis" target="_blank" rel="noreferrer">Darwin Arm64 (M1)</a></td><td><a href="https://files.cli.alis.services/linux/arm64/latest/alis" target="_blank" rel="noreferrer">Linux Arm64</a></td></tr><tr><td><a href="https://files.cli.alis.services/darwin/amd64/latest/alis" target="_blank" rel="noreferrer">Darwin Amd64</a></td><td><a href="https://files.cli.alis.services/linux/arm64/latest/alis" target="_blank" rel="noreferrer">Linux Amd64</a></td></tr></tbody></table></li><li><p>Place the file in your <em>alis.exchange/cli</em> folder. Run the following command to give it execute permission:</p></li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">chmod a+x </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">HOME/alis.exchange/cli/alis</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li><p>Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.</p><blockquote><p>\u{1F6A9} For MacOs, open the CLI by right clicking on the file and open. This will prompt you &#39;The application is from an unidentified developer. Are you sure you want to open it?&#39;. Select open. This will allow MacOs permission to always run the CLI and therefore you only have to do it with your initial installation.</p></blockquote></li></ol><p>You have successfully installed the <strong>alis.exchange</strong> CLI!</p><h2 id="windows-installation" tabindex="-1">Windows Installation <a class="header-anchor" href="#windows-installation" aria-hidden="true">#</a></h2><ol><li>Open command prompt as administrator.</li><li>Run the following command to create a folder in your home directory <strong>alis.exchange</strong> with a sub-folder <em>cli</em>.</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">md %HOMEPATH%\\alis.exchange\\cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>Add this folder to your <code>$PATH</code>:</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">setx PATH &quot;%PATH%;%PATH%;%HOMEPATH%\\alis.exchange\\cli&quot; /m</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><p>Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).</p><blockquote><p>Not sure what your OS or ARCH is, run <code>set PROCESSOR</code> to find out.</p></blockquote><h3 id="list-of-available-cli-binaries-1" tabindex="-1">List of available CLI binaries <a class="header-anchor" href="#list-of-available-cli-binaries-1" aria-hidden="true">#</a></h3><table><thead><tr><th>Windows</th></tr></thead><tbody><tr><td><a href="https://files.cli.alis.services/windows/arm/4.0.96/alis.exe" target="_blank" rel="noreferrer">Windows Arm</a></td></tr><tr><td><a href="https://files.cli.alis.services/windows/arm64/4.0.96/alis.exe" target="_blank" rel="noreferrer">Windows Arm64</a></td></tr><tr><td><a href="https://files.cli.alis.services/windows/amd64/4.0.96/alis.exe" target="_blank" rel="noreferrer">Windows Amd64</a></td></tr></tbody></table></li><li><p>Place the file in your <em>alis.exchange/cli</em> folder. Ensure the file name and extension is <code>alis.exe</code>.</p></li><li><p>Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.</p></li></ol><p>You have successfully installed the <strong>alis.exchange</strong> CLI!</p><h3 id="try-out-alis-cli" tabindex="-1">Try out alis_ CLI <a class="header-anchor" href="#try-out-alis-cli" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># Show help </span></span>
<span class="line"><span style="color:#A6ACCD;">alis -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># list available organisations</span></span>
<span class="line"><span style="color:#A6ACCD;">alis org list</span></span>
<span class="line"></span></code></pre></div>`,32),o=[i];function n(r,c,d,p,h,u){return l(),a("div",null,o)}const m=e(s,[["render",n]]);export{f as __pageData,m as default};