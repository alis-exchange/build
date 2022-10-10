import{_ as i,o as r,c as p,b as o,w as n,a as c,d as e,e as s,r as a}from"./app.21e7e38b.js";const u="/assets/quick-start-autocomplete1.1e70829f.gif",d="/assets/quick-start-autocomplete2.e14f46e2.gif",M=JSON.parse('{"title":"Consumer experience","description":"","frontmatter":{"title":"Consumer experience"},"headers":[{"level":2,"title":"Definition-first approach","slug":"definition-first-approach","link":"#definition-first-approach","children":[]},{"level":2,"title":"Experience the simplicity","slug":"experience-the-simplicity","link":"#experience-the-simplicity","children":[{"level":3,"title":"Books.proto","slug":"books-proto","link":"#books-proto","children":[]},{"level":3,"title":"Run the example","slug":"run-the-example","link":"#run-the-example","children":[]}]},{"level":2,"title":"Next Steps","slug":"next-steps","link":"#next-steps","children":[]}],"relativePath":"guides/getting-started/consumer-experience.md"}'),h={name:"guides/getting-started/consumer-experience.md"},f=c('<h1 id="consumer-experience" tabindex="-1">Consumer experience <a class="header-anchor" href="#consumer-experience" aria-hidden="true">#</a></h1><p>We aim to ensure that the way software across the Alis Build platform operates, communicates and integrates is simple and consistent. Whether you are getting results from a model, updating a database or executing trades, all of these actions should feel familiar. This allows you to seamlessly adopt anything across the platform without spending hours in obscure documentation and the toil of attempting to integrate it in your code.</p><p>What does that experience feel like? In this section, we want to provide you with a few basic concepts and then allow you to experience the Alis Build platform for yourself. Below is a teaser of what you can expect \u{1F609}.</p><p><img src="'+u+'" alt=""></p><p><img src="'+d+`" alt=""></p><h2 id="definition-first-approach" tabindex="-1">Definition-first approach <a class="header-anchor" href="#definition-first-approach" aria-hidden="true">#</a></h2><p>The Alis Build platform leverages a core set of open-source technologies, all certified by the <a href="https://www.cncf.io/" target="_blank" rel="noreferrer">Cloud Native Computing Foundation</a>. An essential part of how we make the platform work is the strict adoption of <a href="https://developers.google.com/protocol-buffers" target="_blank" rel="noreferrer">Protocol Buffers</a>, also referred to as <em>Protobufs</em>.</p><p>From a technical perspective:</p><blockquote><p>Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data. <a href="https://developers.google.com/protocol-buffers" target="_blank" rel="noreferrer">Source</a></p></blockquote><p>What is important from a practical perspective however is that:</p><blockquote><p>You <strong>define how you want your data to be structured once</strong>, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages. <a href="https://developers.google.com/protocol-buffers" target="_blank" rel="noreferrer">Source</a></p></blockquote><p>Two things to take note of:</p><ol><li>Defining things is the first, essential part of building on the Alis Build platform. Everything that you will be working with (<em>resources</em>) and what you will be doing (<em>services</em>) is defined once in a <code>.proto</code> file.</li><li>The definitions of these resources and services are then used to generate source code in the language of your choice to implement, or work with, the resources and services you defined.</li></ol><p>Find out more about Protobufs, their usage and benefits on the platform in the <a href="/guides/references/core-technologies.html">core technologies article</a>.</p><h2 id="experience-the-simplicity" tabindex="-1">Experience the simplicity <a class="header-anchor" href="#experience-the-simplicity" aria-hidden="true">#</a></h2><h3 id="books-proto" tabindex="-1">Books.proto <a class="header-anchor" href="#books-proto" aria-hidden="true">#</a></h3><p>Let us consider a <code>Book</code> resource with <em>name</em>, <em>display name</em>, <em>authors</em> and <em>publishers</em> as fields. This is defined in a <code>books.proto</code> file as follows:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// The definition of a book resource.</span></span>
<span class="line"><span style="color:#A6ACCD;">message Book {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// The name of the book.</span></span>
<span class="line"><span style="color:#A6ACCD;">	// Format: books/{book}.</span></span>
<span class="line"><span style="color:#A6ACCD;">	string name = 1 [(google.api.field_behavior) = OUTPUT_ONLY];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// The display name of the book.</span></span>
<span class="line"><span style="color:#A6ACCD;">	string display_name = 2 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// The authors of the book.</span></span>
<span class="line"><span style="color:#A6ACCD;">	repeated string authors = 3 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// The publisher of the book</span></span>
<span class="line"><span style="color:#A6ACCD;">	string publisher = 4 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The builders of this product allows you to list all the books available, <code>ListBooks</code>, and to retrieve the details of a specific book, <code>GetBook</code>. These are also defined in the <code>books.proto</code> file as part of the <code>BooksService</code>:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// Book service for foo.br.</span></span>
<span class="line"><span style="color:#A6ACCD;">service BooksService {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// List all available books.</span></span>
<span class="line"><span style="color:#A6ACCD;">	rpc ListBooks(ListBooksRequest) returns (ListBooksResponse) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		option (google.api.http) = {</span></span>
<span class="line"><span style="color:#A6ACCD;">			get: &quot;/resources/books/v1/books&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		};</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// Get a specific book.</span></span>
<span class="line"><span style="color:#A6ACCD;">	rpc GetBook(GetBookRequest) returns (Book) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		option (google.api.http) = {</span></span>
<span class="line"><span style="color:#A6ACCD;">			get: &quot;/resources/store/v1/{name=books/*}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		};</span></span>
<span class="line"><span style="color:#A6ACCD;">		option (google.api.method_signature) = &quot;name&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Now that we know what resource is available, <code>Book</code>, and what we are able to do with it, <code>ListBooks</code> and <code>GetBook</code>, we can get practical.</p><h3 id="run-the-example" tabindex="-1">Run the example <a class="header-anchor" href="#run-the-example" aria-hidden="true">#</a></h3><p>Experience the simplicity in accessing these methods in any of the supported languages in using one of our preconfigured cloud IDEs:</p><div class="warning custom-block"><p class="custom-block-title"><strong>Warning</strong></p><p>We are in the process of building out new examples and moving over the existing demo services. The examples below may therefore result in errors when making requests.</p></div>`,24),g=e("p",null,[e("a",{href:"https://gitpod.io#snapshot/c1eafefa-0414-439e-a618-4089e1d50143",target:"_blank"},"Preconfigured Go cloud IDE")],-1),m=e("ol",null,[e("li",null,[e("p",null,[s("Open up the terminal (Mac: "),e("code",null,"\u2318 + j"),s(", Windows: "),e("code",null,"ctrl + j"),s(" ).")]),e("blockquote",null,[e("p",null,[s("If the terminal is already open run "),e("code",null,"$ clear"),s(" to clear the terminal window.")])])]),e("li",null,[e("p",null,[s("Make sure you are in the "),e("code",null,"playground"),s(" directory.")])])],-1),y=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"	"),e("span",{style:{color:"#82AAFF"}},"cd"),e("span",{style:{color:"#A6ACCD"}}," workspace/playground")]),s(`
`),e("span",{class:"line"})])])],-1),b=e("ol",{start:"3"},[e("li",null,"Run the code by running the terminal command:")],-1),A=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"	go run "),e("span",{style:{color:"#89DDFF"}},"*"),e("span",{style:{color:"#A6ACCD"}},".go")]),s(`
`),e("span",{class:"line"})])])],-1),C=e("h4",{id:"get-a-feel-for-the-alis-build-experience",tabindex:"-1"},[s("Get a feel for the Alis Build experience "),e("a",{class:"header-anchor",href:"#get-a-feel-for-the-alis-build-experience","aria-hidden":"true"},"#")],-1),_=e("p",null,"Interested in trying something for yourself?",-1),k=e("p",null,[s("We suggest creating your own function and incorporating a request to the "),e("code",null,"BooksClient"),s(". Some suggestions of things to try:")],-1),w=e("ol",null,[e("li",null,"Loop through all the books and print out the author."),e("li",null,"Get a book and wrangle the response to be printed out in a sentence structure."),e("li",null,[s("Use the response of "),e("code",null,"ListBooks"),s(" to make multiple "),e("code",null,"GetBook"),s(" requests.")])],-1),x=e("p",null,[e("a",{href:"https://gitpod.io#snapshot/c858a081-f9e0-4791-9330-606a568df6fd",target:"_blank"},"Preconfigured R cloud IDE")],-1),D=e("ol",null,[e("li",null,[e("p",null,[s("Open up the terminal (Mac: "),e("code",null,"\u2318 + j"),s(", Windows: "),e("code",null,"ctrl + j"),s(" ).")]),e("blockquote",null,[e("p",null,[s("If the terminal is already open run "),e("code",null,"$ clear"),s(" to clear the terminal window.")])])]),e("li",null,[e("p",null,[s("Make sure you are in the "),e("code",null,"playground"),s(" directory.")])])],-1),v=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"	"),e("span",{style:{color:"#82AAFF"}},"cd"),e("span",{style:{color:"#A6ACCD"}}," workspace/playground")]),s(`
`),e("span",{class:"line"})])])],-1),B=e("pre",null,[e("code",null,`3. Run the code
`)],-1),q=e("div",{class:"language-bash"},[e("button",{class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"	Rscript booksConsume.r")]),s(`
`),e("span",{class:"line"})])])],-1),T=e("h4",{id:"get-a-feel-for-the-alis-build-experience-1",tabindex:"-1"},[s("Get a feel for the Alis Build experience "),e("a",{class:"header-anchor",href:"#get-a-feel-for-the-alis-build-experience-1","aria-hidden":"true"},"#")],-1),R=e("p",null,"Interested in trying something for yourself?",-1),E=e("p",null,[s("We suggest creating your own function and incorporating a request to the "),e("code",null,"BooksClient"),s(". Some suggestions of things to try:")],-1),G=e("ol",null,[e("li",null,"Loop through all the books and print out the author."),e("li",null,"Get a book and wrangle the response to be printed out in a sentence structure."),e("li",null,[s("Use the response of "),e("code",null,"ListBooks"),s(" to make multiple "),e("code",null,"GetBook"),s(" requests.")])],-1),I=e("p",null,[s("If you are interested in recreating this example in your own development environment, we suggest that you check out the "),e("a",{href:"/guides/how-to-guides/make-your-first-request.html"},"Make your first request guide"),s(".")],-1),S=e("h2",{id:"next-steps",tabindex:"-1"},[s("Next Steps "),e("a",{class:"header-anchor",href:"#next-steps","aria-hidden":"true"},"#")],-1),L=e("p",null,[e("strong",null,"Ready to join Alis Build?"),s(),e("a",{href:"https://alis.exchange/signup",target:"_blank"},"Get in touch"),s(".")],-1);function N(F,P,W,U,V,$){const t=a("tab"),l=a("tabs");return r(),p("div",null,[f,o(l,null,{default:n(()=>[o(t,{name:"Go"},{default:n(()=>[g,m,y,b,A,C,_,k,w]),_:1}),o(t,{name:"R"},{default:n(()=>[x,D,v,B,q,T,R,E,G,I]),_:1})]),_:1}),S,L])}const O=i(h,[["render",N]]);export{M as __pageData,O as default};