import{_ as l,o as r,c as d,b as t,w as a,a as i,r as o,d as e,e as n}from"./app.acf76c56.js";const p="/assets/docs-folder-structure.af0f1c35.png",I=JSON.parse('{"title":"Leveraging auto-generated documentation","description":"","frontmatter":{"title":"Leveraging auto-generated documentation"},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Updating reference documentation","slug":"updating-reference-documentation","link":"#updating-reference-documentation","children":[]},{"level":2,"title":"Writing guides and samples","slug":"writing-guides-and-samples","link":"#writing-guides-and-samples","children":[]},{"level":2,"title":"Customizing documentation","slug":"customizing-documentation","link":"#customizing-documentation","children":[{"level":3,"title":"Tabs for multiple language code blocks","slug":"tabs-for-multiple-language-code-blocks","link":"#tabs-for-multiple-language-code-blocks","children":[]},{"level":3,"title":"Custom ordering in navigation bar","slug":"custom-ordering-in-navigation-bar","link":"#custom-ordering-in-navigation-bar","children":[]},{"level":3,"title":"Redirect to a different page","slug":"redirect-to-a-different-page","link":"#redirect-to-a-different-page","children":[]}]},{"level":2,"title":"Deploying documentation","slug":"deploying-documentation","link":"#deploying-documentation","children":[{"level":3,"title":"Auto-generated nightly release","slug":"auto-generated-nightly-release","link":"#auto-generated-nightly-release","children":[]},{"level":3,"title":"Manual release","slug":"manual-release","link":"#manual-release","children":[]}]}],"relativePath":"guides/how-to-guides/auto-generated-docs.md"}'),u={name:"guides/how-to-guides/auto-generated-docs.md"},g=i(`<h1 id="leveraging-auto-generated-documentation" tabindex="-1">Leveraging auto-generated documentation <a class="header-anchor" href="#leveraging-auto-generated-documentation" aria-hidden="true">#</a></h1><p>The Alis Build platform provides out-of-the-box documentation for products built on the platform. This documentation consists of API reference documentation auto-generated directly from the protocol buffers, custom user guides and code samples which teams may compile to provide greater assistance to clients.</p><p>In this guide, we aim to give you the necessary background to leverage this documentation service.</p><div class="tip custom-block"><p class="custom-block-title"><strong>Before you start</strong></p><ol><li>Download and install the <a href="/guides/getting-started/command-line-interface.html">Alis CLI</a>;</li><li>Ensure you are part of an existing organisation and product on the platform;</li><li>Have pulled the latest version of your organisation&#39;s protos by running <code>alis org get {yourOrg}</code>.</li></ol></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>The product documentation is generated by parsing the following files in the relevant product directory of your organisation&#39;s <code>proto</code> repo:</p><ol><li>The <code>resources</code> and <code>services</code> proto files which are used to generate the reference documentation based on the contents of each proto file as per their latest release (<code>alis proto release</code>).</li><li>The custom markdown files contained within the <code>docs</code> folder, used to generate the landing page, guides and samples.</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>proto
\u251C\u2500\u2500{orgID}
\u2502   \u2514\u2500\u2500 {productID}
\u2502       \u251C\u2500\u2500 docs/.../*.md
\u2502       \u251C\u2500\u2500 resources/.../*.proto
\u2502       \u2514\u2500\u2500 services/.../*.proto
</code></pre></div><p>Once the documentation has been released, it will be publicly available at <a href="https://docs.de.alis.services" target="_blank" rel="noreferrer">https://docs.{productID}.{orgDomain}</a> (e.g. <a href="https://docs.de.alis.services" target="_blank" rel="noreferrer">https://docs.de.alis.services</a>).</p><h2 id="updating-reference-documentation" tabindex="-1">Updating reference documentation <a class="header-anchor" href="#updating-reference-documentation" aria-hidden="true">#</a></h2><p>The reference documentation component is generated from the proto files. The emphasis on the definition first-approach ensures that the effort is focussed on the design of the protos with detailed comments above the various services, methods, messages and fields and this design is then propagated into the reference documentation for the APIs.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is important to note that this auto-generated documentation is publicly available. Any protocol buffer content that should not be publicly available should be specified as <code>hidden</code>. The <a href="/guides/how-to-guides/proto-visibility-scopes.html">specifying proto visibility scopes guide</a> explains how to implement visibility scopes.</p></div><div class="danger custom-block"><p class="custom-block-title"><strong>Caveats</strong></p><p>A current caveat is that the use of certain Markdown syntax in your comments may result in invalid Markdown syntax in the generated documentation, causing the build of your documentation to fail. This is primarily the usage of the \u201C|\u201D character in your proto comments as well as using line breaks in links.</p></div><h2 id="writing-guides-and-samples" tabindex="-1">Writing guides and samples <a class="header-anchor" href="#writing-guides-and-samples" aria-hidden="true">#</a></h2><p>The initial state (after a product creation) of the <code>docs</code> directory should resemble the folder structure depicted below, i.e. must then have an <code>index.md</code> file at the root of <code>docs</code> as well as <code>guides</code>, <code>reference</code> and <code>samples</code> subdirectories each containing an <code>index.md</code> directory.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>docs
\u251C\u2500\u2500 index.md
\u251C\u2500\u2500 guides
\u2502   \u2514\u2500\u2500index.md
\u251C\u2500\u2500 reference
\u2502   \u2514\u2500\u2500 index.md
\u2514\u2500\u2500 samples
\u2502   \u2514\u2500\u2500 index.md
\u2514\u2500\u2500 index.md
</code></pre></div><p>The <code>index.md</code> file at the root directory, serves as the landing page for the documentation site and can be customised using the <a href="https://vitepress.vuejs.org/guide/theme-home-page#home-page" target="_blank" rel="noreferrer">VitePress Home Page theme</a>. Alternatively, a redirect to another existing page can be specified by using the <a href="#redirect-to-a-different-page">redirect functionality</a>.</p><p>The other <code>index.md</code> files is the respective page that will be opened when the <code>guides</code>, <code>reference</code> and <code>samples</code> navigation tab is opened on the site.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The <code>index.md</code> is REQUIRED for all three of the <code>guides</code>, <code>reference</code> and <code>samples</code> directories.</p></div><p>Any subdirectory added under <code>guides</code> and <code>samples</code> will be converted into a heading in the documentation navigation sidebar, it&#39;s depth being determined by the file structure. Markdown files can then be placed inside either the root or any of the subdirectories of <code>guides</code> and <code>samples</code> and will be added to the documentation sidebar. An example file structure and the resulting documentation navigation sidebar for the <code>guides</code> section is depicted below. By default, the navigation bar structures directories in alphabetical order, see the <a href="#custom-ordering-in-navigation-bar">customization section</a> below on how to specify a custom order.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>\u251C\u2500\u2500 guides
\u2502   \u251C\u2500\u2500 how-to-guides
\u2502   \u2502   \u251C\u2500\u2500 first_screening.md
\u2502   \u2502   \u2514\u2500\u2500 getting_started.md
\u2502   \u251C\u2500\u2500 index.md
\u2502   \u251C\u2500\u2500 quick-starts
\u2502   \u2502   \u2514\u2500\u2500 some_quick_start.md
\u2502   \u251C\u2500\u2500 some-cool-directory
\u2502   \u2502   \u2514\u2500\u2500 cool-content.md
\u2502   \u2514\u2500\u2500 tutorials
\u2502       \u251C\u2500\u2500 advanced
\u2502       \u2502   \u251C\u2500\u2500 sub_file1.md
\u2502       \u2502   \u2514\u2500\u2500 sub_file2.md
\u2502       \u251C\u2500\u2500 main_file.md
\u2502       \u2514\u2500\u2500 sub_file1.md
\u251C\u2500\u2500 index.md
\u251C\u2500\u2500 reference
\u2502   \u2514\u2500\u2500 index.md
\u2514\u2500\u2500 samples
    \u251C\u2500\u2500 code_sample_1.md
    \u251C\u2500\u2500 index.md
</code></pre></div><p><img src="`+p+`" alt=""></p><p>The titles used in the sidebar is derived from the <code>title</code> field in the <a href="https://vitepress.vuejs.org/guide/frontmatter" target="_blank" rel="noreferrer">file&#39;s YAML Frontmatter</a>. For example, the <code>guides/how-to-guides/first_screening.md</code> file, the YAML Frontmatter would be:</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Conduct your first screening
<span class="token punctuation">---</span>

<span class="token punctuation">{</span>Your file content<span class="token punctuation">}</span>
<span class="token punctuation">...</span>
</code></pre></div><p>Content to be generated on the documentation page should follow the Frontmatter.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Since our documentation uses <a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">VitePress</a> under the hood, you can leverage the functionality of VitePress <a href="https://vitepress.vuejs.org/guide/markdown" target="_blank" rel="noreferrer">Markdown Extensions</a> and to get the most out of your documentation.</p></div><h2 id="customizing-documentation" tabindex="-1">Customizing documentation <a class="header-anchor" href="#customizing-documentation" aria-hidden="true">#</a></h2><p>In addition to the <a href="https://vitepress.vuejs.org/guide/markdown#markdown-extensions" target="_blank" rel="noreferrer">standard <em>Markdown Extensions</em></a>, markdown files may incorporate the customization features demonstrated in this section to improve documentation flow and readability.</p><h3 id="tabs-for-multiple-language-code-blocks" tabindex="-1">Tabs for multiple language code blocks <a class="header-anchor" href="#tabs-for-multiple-language-code-blocks" aria-hidden="true">#</a></h3><p>A custom <code>tabs</code> tag may be used to introduce a section in which a set of tabs can be used, each <code>tab</code> containing its own content. This is typically used when providing code blocks for multiple languages, such as in the example below.</p>`,30),h=e("div",{class:"language-go"},[e("button",{class:"copy"}),e("span",{class:"lang"},"go"),e("pre",null,[e("code",null,[n("fmt"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Println"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Hello World"'),e("span",{class:"token punctuation"},")"),n(`
`)])])],-1),m=e("div",{class:"language-python"},[e("button",{class:"copy"}),e("span",{class:"lang"},"python"),e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"print"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Hello World"'),e("span",{class:"token punctuation"},")"),n(`
`)])])],-1),f=e("div",{class:"language-javascript"},[e("button",{class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",null,[e("code",null,[e("span",{class:"token console class-name"},"console"),e("span",{class:"token punctuation"},"."),e("span",{class:"token method function property-access"},"log"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Hello World"'),e("span",{class:"token punctuation"},")"),n(`
`)])])],-1),b=i(`<p>To use this feature, a parent <code>&lt;tabs&gt;...&lt;/tabs&gt;</code> tag is required, containing individual <code>&lt;tab name=&quot;{TAB_NAME}&quot;&gt;...&lt;/tab&gt;</code> tags. The script used to build the former example is shown in the code block below.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The <code>tabs</code> functionality requires that all the tags (<code>tabs</code> and <code>tab</code>) as well as the content of each <code>tab</code> does <strong>not</strong> have any indentations.</p></div><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tabs</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tab</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Go<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    \`\`\`go
    fmt.Println(&quot;Hello World&quot;)
    \`\`\`
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tab</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tab</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Python<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    \`\`\`python
    print(&quot;Hello World&quot;)
    \`\`\`
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tab</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tab</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JS<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    \`\`\`javascript
    console.log(&quot;Hello World&quot;)
    \`\`\`
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tab</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tabs</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="custom-ordering-in-navigation-bar" tabindex="-1">Custom ordering in navigation bar <a class="header-anchor" href="#custom-ordering-in-navigation-bar" aria-hidden="true">#</a></h3><p>The navigation bar structures the hierarchy in alphabetical order based on the directory names. To customise the order, a <em>prefix</em> may be used.</p><p>A prefix is seen as any leading alpha-numeric characters (a-z 0-9) ending with an underscore (_). This allows for a specific ordering without the prefix appearing as part of the name in the navigation bar. Examples can be seen below:</p><table><thead><tr><th style="text-align:left;">Directory name</th><th style="text-align:left;">Prefix</th><th style="text-align:left;">Navigation bar title</th></tr></thead><tbody><tr><td style="text-align:left;">01_getting-started</td><td style="text-align:left;"><em>01_</em></td><td style="text-align:left;">Getting started</td></tr><tr><td style="text-align:left;">10additional_reference-patterns</td><td style="text-align:left;"><em>10additional_</em></td><td style="text-align:left;">Reference patterns</td></tr><tr><td style="text-align:left;">99z_additional-resources</td><td style="text-align:left;"><em>99z_</em></td><td style="text-align:left;">Additional resources</td></tr></tbody></table><h3 id="redirect-to-a-different-page" tabindex="-1">Redirect to a different page <a class="header-anchor" href="#redirect-to-a-different-page" aria-hidden="true">#</a></h3><p>A number of cases may exist where an automatic redirect is required. This may include redirecting directly to:</p><ul><li>A getting started page rather than the home landing page; or</li><li>A specific page in a section (ie. <code>guides</code>, <code>samples</code> and <code>reference</code>).</li></ul><p>This can be accomplished by adding the following code in the body of the <code>index.md</code> page.</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span>useRouter<span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">&quot;vitepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token maybe-class-name">Router</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token maybe-class-name">Router</span><span class="token punctuation">.</span><span class="token method function property-access">go</span><span class="token punctuation">(</span><span class="token string">&#39;/guides/{YourPath}&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Example:  Router.go(&#39;/guides/getting-started/introduction&#39;)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="deploying-documentation" tabindex="-1">Deploying documentation <a class="header-anchor" href="#deploying-documentation" aria-hidden="true">#</a></h2><p>The platform runs a nightly build and release of all product documentation as well as provides a means to manually update documentation. These are discussed in the following sections.</p><h3 id="auto-generated-nightly-release" tabindex="-1">Auto-generated nightly release <a class="header-anchor" href="#auto-generated-nightly-release" aria-hidden="true">#</a></h3><p>The nightly build of all product documentation will reflect:</p><ol><li>The reference documentation of the last released protocol buffers;</li><li>The state of the documentation in the repo&#39;s <code>master</code> branch when the build is kicked off.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is essential that documentation that is present in the master branch is production ready.</p></div><h3 id="manual-release" tabindex="-1">Manual release <a class="header-anchor" href="#manual-release" aria-hidden="true">#</a></h3><p>Cases exist where teams may want to deploy a new version of the documentation, such as: adding new documentation pages, updating protocol buffers or making fixes to existing pages. To run a manual release, the <a href="/guides/getting-started/command-line-interface.html">Alis Build CLI</a> will be used and the following steps can be followed:</p><ol><li>Ensure the all the markdown files in the docs folder have been committed and pushed to the master branch;</li><li>Ensure you have released the most up-to-date protos in terms of their content and commentary;</li><li>In your terminal, run the <code>alis docs release</code> command and specify the product (<code>{orgID}.{productID}</code>). Example:</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code>$ alis docs release play.dm
</code></pre></div><ol start="4"><li>The documentation will be available at: <code>https://docs.{productID}.{orgDomain}</code> (e.g. <a href="https://docs.de.alis.services" target="_blank" rel="noreferrer">https://docs.de.alis.services</a>)</li></ol>`,23);function k(v,y,w,_,x,T){const s=o("tab"),c=o("tabs");return r(),d("div",null,[g,t(c,null,{default:a(()=>[t(s,{name:"Go"},{default:a(()=>[h]),_:1}),t(s,{name:"Python"},{default:a(()=>[m]),_:1}),t(s,{name:"JS"},{default:a(()=>[f]),_:1})]),_:1}),b])}const q=l(u,[["render",k]]);export{I as __pageData,q as default};
