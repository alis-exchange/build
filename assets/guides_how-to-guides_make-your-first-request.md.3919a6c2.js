import{_ as n,o as s,c as a,O as t}from"./chunks/framework.600d1dda.js";const g=JSON.parse('{"title":"Make a request to a product in your local environment","description":"","frontmatter":{"title":"Make a request to a product in your local environment","sidebarDepth":0},"headers":[],"relativePath":"guides/how-to-guides/make-your-first-request.md","filePath":"guides/how-to-guides/make-your-first-request.md"}'),o={name:"guides/how-to-guides/make-your-first-request.md"},p=t(`<h1 id="make-a-request-to-a-product-in-your-local-environment" tabindex="-1">Make a request to a product in your local environment <a class="header-anchor" href="#make-a-request-to-a-product-in-your-local-environment" aria-label="Permalink to &quot;Make a request to a product in your local environment&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We are in the process of building out new examples and moving over the existing demo services. The examples below may therefore result in errors when making requests.</p></div><blockquote><p>🚩 This section is supplementary to the <a href="./../getting-started/consumer-experience.html">consumer experience</a>. We recommend completing it before attempting this section.</p></blockquote><p>Given the underlying technologies used, the platform provides the ability to generate client libraries for various supported programing languages. For users of the product, it allows you to programmatically access products natively in your code without having to wrangle obscure, unpredictable data objects (see the <a href="./../getting-started/consumer-experience.html">consumer experience</a>).</p><p>Irrespective of the language, this is done in two steps:</p><ol><li>Establishing a client connection with the server.</li><li>Using the connection to make a request.</li></ol><p>Following the same Book example as the quickstart, this guide will step you through making requests in your own developer environment.</p><blockquote><p>We currently only provide the guide for Go. Want to help us expand this to other languages? <a href="https://github.com/alis-x/docs/edit/main/docs/guides/how-to-guides/make-your-first-request.md" target="_blank" rel="noreferrer">Make a contribution</a>.</p></blockquote><h2 id="book-repository-example" tabindex="-1">Book repository example <a class="header-anchor" href="#book-repository-example" aria-label="Permalink to &quot;Book repository example&quot;">​</a></h2><p>Play is an organisation that builds products on <strong>alis.exchange</strong>. Their flagship book repository product,<code>ME</code>, provides details on digital books which they have available. The product defines a <code>book</code> resource as follows and has a <code>BookService</code> with two primary client facing methods that allows clients to list all available books and to get details on a specific book.</p><p>The full <code>Books.proto</code> file is shown for reference purposes.</p><div class="language-protobuf"><button title="Copy Code" class="copy"></button><span class="lang">protobuf</span><pre><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> play<span class="token punctuation">.</span>me<span class="token punctuation">.</span>resources<span class="token punctuation">.</span>books<span class="token punctuation">.</span>v1<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;google/protobuf/empty.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/api/resource.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/api/field_behavior.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/api/client.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/api/annotations.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/protobuf/timestamp.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/protobuf/field_mask.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/type/date.proto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;go.protobuf.play.alis.exchange/play/me/resources/books/v1&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Book service for play.me.</span>
<span class="token comment">// Book service for play.me.</span>
<span class="token keyword">service</span> <span class="token class-name">BooksService</span> <span class="token punctuation">{</span>
     <span class="token comment">// Create a book.</span>
     <span class="token keyword">rpc</span> <span class="token function">CreateBook</span><span class="token punctuation">(</span><span class="token class-name">CreateBookRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     	<span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>http<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
     		post<span class="token punctuation">:</span> <span class="token string">&quot;/resources/store/v1/books&quot;</span>
     		body<span class="token punctuation">:</span> <span class="token string">&quot;book&quot;</span>
     	<span class="token punctuation">}</span><span class="token punctuation">;</span>
     	<span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>method_signature<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token comment">// Get a book.</span>
    <span class="token keyword">rpc</span> <span class="token function">GetBook</span><span class="token punctuation">(</span><span class="token class-name">GetBookRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>http<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            get<span class="token punctuation">:</span> <span class="token string">&quot;/resources/store/v1/{name=books/*}&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>method_signature<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token comment">// Delete a book.</span>
     <span class="token keyword">rpc</span> <span class="token function">DeleteBook</span><span class="token punctuation">(</span><span class="token class-name">DeleteBookRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">google.protobuf.Empty</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     	<span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>http<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
     		delete<span class="token punctuation">:</span> <span class="token string">&quot;/resources/store/v1/{name=books/*}&quot;</span>
     	<span class="token punctuation">}</span><span class="token punctuation">;</span>
     	<span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>method_signature<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token comment">// List books.</span>
    <span class="token comment">// Features are listed in Descending order.</span>
    <span class="token keyword">rpc</span> <span class="token function">ListBooks</span><span class="token punctuation">(</span><span class="token class-name">ListBooksRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">ListBooksResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">option</span> <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>http<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            get<span class="token punctuation">:</span> <span class="token string">&quot;/resources/store/v1/books&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// The definition of a book resource.</span>
<span class="token keyword">message</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>

	<span class="token comment">// The name of the book.</span>
	<span class="token comment">// Format: books/{book}.</span>
	<span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> OUTPUT_ONLY<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// The display name of the book.</span>
	<span class="token builtin">string</span> display_name <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// The authors of the book.</span>
	<span class="token keyword">repeated</span> <span class="token builtin">string</span> authors <span class="token operator">=</span> <span class="token number">3</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// The publisher of the book</span>
	<span class="token builtin">string</span> publisher <span class="token operator">=</span> <span class="token number">4</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Request message for [play.me.resources.books.v1.BooksService.CreateBook].</span>
<span class="token keyword">message</span> <span class="token class-name">CreateBookRequest</span> <span class="token punctuation">{</span>
	<span class="token comment">// The book to create</span>
	<span class="token positional-class-name class-name">Book</span> book <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Request message for [play.me.resources.books.v1.BooksService.GetBook].</span>
<span class="token keyword">message</span> <span class="token class-name">GetBookRequest</span> <span class="token punctuation">{</span>
	<span class="token comment">// The book name is the unique identifier across organisations.</span>
	<span class="token comment">// Format: books/{book}</span>
	<span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Request message for [play.me.resources.books.v1.BooksService.ListBooks].</span>
<span class="token keyword">message</span> <span class="token class-name">ListBooksRequest</span> <span class="token punctuation">{</span>
	<span class="token comment">// The maximum number of books to return. The service may return fewer than</span>
	<span class="token comment">// this value.</span>
	<span class="token comment">// If unspecified, at most 100 books will be returned.</span>
	<span class="token comment">// The maximum value is 1000; values above 1000 will be coerced to 1000.</span>
	<span class="token builtin">int32</span> page_size <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> OPTIONAL<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Request message for [play.me.resources.books.v1.BooksService.DeleteBook].</span>
<span class="token keyword">message</span> <span class="token class-name">DeleteBookRequest</span> <span class="token punctuation">{</span>
	<span class="token comment">// The resource name of the Book.</span>
	<span class="token comment">// Format: books/{book}.</span>
	<span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">ListBooksResponse</span> <span class="token punctuation">{</span>
	<span class="token comment">// The books</span>
	<span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Book</span> books <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>field_behavior<span class="token punctuation">)</span> <span class="token operator">=</span> REQUIRED<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>We will be making requests to both the <code>ListBooks</code> and <code>GetBook</code> method by following the two steps provided in the introduction section.</p><h2 id="_1-establish-the-client-connection" tabindex="-1">1. Establish the client connection <a class="header-anchor" href="#_1-establish-the-client-connection" aria-label="Permalink to &quot;1. Establish the client connection&quot;">​</a></h2><p>Prior to making the requests, a client connection needs to be established to the server.</p><p>The <code>NewConn</code> function is generated by the alis.exchange CLI when a new neuron is created. This is typically placed in a separate <code>Conn.go</code> file but is included as function in this example.</p><p>The <code>NewConn</code> function requires the specification of a host URL which can be obtained by:</p><ol><li>Navigating to the specific Cloud Run instance in the GCP Console.</li><li>Obtaining the URL from the product owner.</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;crypto/tls&quot;</span>
	<span class="token string">&quot;crypto/x509&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;strings&quot;</span>

	<span class="token string">&quot;google.golang.org/api/idtoken&quot;</span>
	<span class="token string">&quot;google.golang.org/api/option&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/codes&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/credentials&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/credentials/oauth&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/status&quot;</span>

	pb <span class="token string">&quot;go.protobuf.play.alis.exchange/play/me/resources/books/v1&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// The booksClient is defined as a global variable. It is declared once on init and used to call the various methods of the BooksService</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	booksClient pb<span class="token punctuation">.</span>BooksServiceClient
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// Pre-declare err to avoid shadowing.</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span>

	<span class="token comment">// Declare the server host url and port.</span>
	<span class="token comment">// This follows the format {{neuronID}}-{{majorVersion}}-{{hash}}-{{region}}.a.run.app:{{port}}</span>
	<span class="token comment">// Typical predefined values are:</span>
	<span class="token comment">//  - region: &quot;ew&quot;</span>
	<span class="token comment">//	- port: &quot;443&quot;</span>
	serverHost <span class="token operator">:=</span> <span class="token string">&quot;resources-books-v1-z5x5ywf7za-ew.a.run.app:443&quot;</span>

	<span class="token comment">// Initialise connection to the books service.</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">NewConn</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> serverHost<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Initialise the booksClient.</span>
	booksClient <span class="token operator">=</span> pb<span class="token punctuation">.</span><span class="token function">NewBooksServiceClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> grpcTokenSource <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	oauth<span class="token punctuation">.</span>TokenSource
<span class="token punctuation">}</span>

<span class="token comment">// Code generated by alis.exchange CLI. DO NOT EDIT.</span>
<span class="token comment">//</span>
<span class="token comment">// NewConn creates a new gRPC connection.</span>
<span class="token comment">// host should be of the form domain:port, e.g., example.com:443</span>
<span class="token keyword">func</span> <span class="token function">NewConn</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> host <span class="token builtin">string</span><span class="token punctuation">,</span> insecure <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>grpc<span class="token punctuation">.</span>ClientConn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opts <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>DialOption
	<span class="token keyword">if</span> host <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithAuthority</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> insecure <span class="token punctuation">{</span>
		opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		systemRoots<span class="token punctuation">,</span> err <span class="token operator">:=</span> x509<span class="token punctuation">.</span><span class="token function">SystemCertPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
		<span class="token punctuation">}</span>
		cred <span class="token operator">:=</span> credentials<span class="token punctuation">.</span><span class="token function">NewTLS</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>tls<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
			RootCAs<span class="token punctuation">:</span> systemRoots<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>cred<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> opts<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_2-make-a-request" tabindex="-1">2. Make a request <a class="header-anchor" href="#_2-make-a-request" aria-label="Permalink to &quot;2. Make a request&quot;">​</a></h2><p>The <code>booksClient</code> provides you all the methods available, with descriptions of the methods and a specification of what the request and responses are. Most IDEs allow you to explore these by hovering over client and method names, similar to the example shown below.</p><p>Let us make our requests.</p><h4 id="list-books" tabindex="-1">List books <a class="header-anchor" href="#list-books" aria-label="Permalink to &quot;List books&quot;">​</a></h4><p>Firstly we will get a list of all the books by calling the <code>ListBooks</code> method and then print their display names in the console.</p><p>Add the <code>printBookNames</code> function to the bottom of your Go file and make a call to the function from <code>main</code>.</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Call the printBookNames function</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">printBookNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// function makes a call to the books service to get a list of books</span>
<span class="token keyword">func</span> <span class="token function">printBookNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Call the ListBooks method on the client library</span>
	allBooks<span class="token punctuation">,</span> err <span class="token operator">:=</span> booksClient<span class="token punctuation">.</span><span class="token function">ListBooks</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>ListBooksRequest<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;could not list books: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// Print the list of books from the response</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> book <span class="token operator">:=</span> <span class="token keyword">range</span> allBooks<span class="token punctuation">.</span>Books <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span>DisplayName<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token string">&quot;Done!&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="get-book" tabindex="-1">Get book <a class="header-anchor" href="#get-book" aria-label="Permalink to &quot;Get book&quot;">​</a></h4><p>Secondly, we will get a specific book and print all of its information in the console.</p><p>Add the <code>printBookDetails</code> function to the bottom of your Go file and make a call to the function from <code>main</code> with the provided book name.</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Call the printBookDetails function</span>
	result<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">printBookDetails</span><span class="token punctuation">(</span><span class="token string">&quot;books/c4a2&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// function makes a call to the books service to get a book details</span>
<span class="token keyword">func</span> <span class="token function">printBookDetails</span><span class="token punctuation">(</span>bookName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//Create a request to get a book details</span>
	req <span class="token operator">:=</span> pb<span class="token punctuation">.</span>GetBookRequest<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> bookName<span class="token punctuation">}</span>

	<span class="token comment">// Call the GetBook method on the client library</span>
	book<span class="token punctuation">,</span> err <span class="token operator">:=</span> booksClient<span class="token punctuation">.</span><span class="token function">GetBook</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>req<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;could not get book: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Print the book details</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token string">&quot;Done!&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="full-code-example" tabindex="-1">Full code example <a class="header-anchor" href="#full-code-example" aria-label="Permalink to &quot;Full code example&quot;">​</a></h3><p>The complete code for both examples is available below.</p><details class="details custom-block"><summary>Click here to view full code example.</summary><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;crypto/tls&quot;</span>
	<span class="token string">&quot;crypto/x509&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;strings&quot;</span>

	<span class="token string">&quot;google.golang.org/api/idtoken&quot;</span>
	<span class="token string">&quot;google.golang.org/api/option&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/codes&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/credentials&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/credentials/oauth&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/status&quot;</span>

	pb <span class="token string">&quot;go.protobuf.play.alis.exchange/play/me/resources/books/v1&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// The booksClient is defined as a global variable. It is declared once on init and used to call the various methods of the BooksService</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
	booksClient pb<span class="token punctuation">.</span>BooksServiceClient
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// Pre-declare err to avoid shadowing.</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span>

	<span class="token comment">// Declare the server host url and port.</span>
	<span class="token comment">// This follows the format {{neuronID}}-{{majorVersion}}-{{hash}}-{{region}}.a.run.app:{{port}}</span>
	<span class="token comment">// Typical predefined values are:</span>
	<span class="token comment">//  - region: &quot;ew&quot;</span>
	<span class="token comment">//	- port: &quot;443&quot;</span>
	serverHost <span class="token operator">:=</span> <span class="token string">&quot;resources-books-v1-z5x5ywf7za-ew-443.a.run.app&quot;</span>

	<span class="token comment">// Initialise connection to the books service.</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">NewConn</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> serverHost<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Initialise the booksClient.</span>
	booksClient <span class="token operator">=</span> pb<span class="token punctuation">.</span><span class="token function">NewBooksServiceClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Call the printBookNames function</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">printBookNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

	<span class="token comment">// Call the printBookDetails function</span>
	result<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">printBookDetails</span><span class="token punctuation">(</span><span class="token string">&quot;books/c4a2&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// function makes a call to the books service to get a list of books</span>
<span class="token keyword">func</span> <span class="token function">printBookNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Call the ListBooks method on the client library</span>
	allBooks<span class="token punctuation">,</span> err <span class="token operator">:=</span> booksClient<span class="token punctuation">.</span><span class="token function">ListBooks</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>ListBooksRequest<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;could not list books: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// Print the list of books from the response</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> book <span class="token operator">:=</span> <span class="token keyword">range</span> allBooks<span class="token punctuation">.</span>Books <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span>DisplayName<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token string">&quot;Done!&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// function makes a call to the books service to get a book details</span>
<span class="token keyword">func</span> <span class="token function">printBookDetails</span><span class="token punctuation">(</span>bookName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//Create a request to get a book details</span>
	req <span class="token operator">:=</span> pb<span class="token punctuation">.</span>GetBookRequest<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> bookName<span class="token punctuation">}</span>

	<span class="token comment">// Call the GetBook method on the client library</span>
	book<span class="token punctuation">,</span> err <span class="token operator">:=</span> booksClient<span class="token punctuation">.</span><span class="token function">GetBook</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>req<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;could not get book: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Print the book details</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token string">&quot;Done!&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> grpcTokenSource <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	oauth<span class="token punctuation">.</span>TokenSource
<span class="token punctuation">}</span>

<span class="token comment">// Code generated by alis.exchange CLI. DO NOT EDIT.</span>
<span class="token comment">//</span>
<span class="token comment">// NewConn creates a new gRPC connection.</span>
<span class="token comment">// host should be of the form domain:port, e.g., example.com:443</span>
<span class="token keyword">func</span> <span class="token function">NewConn</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> host <span class="token builtin">string</span><span class="token punctuation">,</span> insecure <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>grpc<span class="token punctuation">.</span>ClientConn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> opts <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>DialOption
	<span class="token keyword">if</span> host <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithAuthority</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> insecure <span class="token punctuation">{</span>
		opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		systemRoots<span class="token punctuation">,</span> err <span class="token operator">:=</span> x509<span class="token punctuation">.</span><span class="token function">SystemCertPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
		<span class="token punctuation">}</span>
		cred <span class="token operator">:=</span> credentials<span class="token punctuation">.</span><span class="token function">NewTLS</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>tls<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
			RootCAs<span class="token punctuation">:</span> systemRoots<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		opts <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>opts<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>cred<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> opts<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="get-a-feel-for-the-alis-exchange-experience" tabindex="-1">Get a feel for the <strong>alis.exchange</strong> experience <a class="header-anchor" href="#get-a-feel-for-the-alis-exchange-experience" aria-label="Permalink to &quot;Get a feel for the **alis.exchange** experience&quot;">​</a></h2><p>Try your hands creating your own function and incorporating a request to the <code>BooksClient</code>. Some suggestions of things to try:</p><ul><li>Loop through all the books and print out the author.</li><li>Get a book and wrangle the response to be printed out in a sentence structure.</li><li>Use the response of <code>ListBooks</code> to make multiple <code>GetBook</code> requests.</li></ul>`,36),e=[p];function c(u,l,i,k,r,m){return s(),a("div",null,e)}const h=n(o,[["render",c]]);export{g as __pageData,h as default};
