import{_ as s,c as n,o as a,a as o}from"./app.70ec3866.js";const i=JSON.parse('{"title":"Make a request to a product in your local environment","description":"","frontmatter":{"title":"Make a request to a product in your local environment","sidebarDepth":0},"headers":[{"level":2,"title":"Book repository example","slug":"book-repository-example","link":"#book-repository-example","children":[{"level":3,"title":"1. Establish the client connection","slug":"_1-establish-the-client-connection","link":"#_1-establish-the-client-connection","children":[]},{"level":3,"title":"2. Make a request","slug":"_2-make-a-request","link":"#_2-make-a-request","children":[]},{"level":3,"title":"Full code example","slug":"full-code-example","link":"#full-code-example","children":[]}]},{"level":2,"title":"Get a feel for the alis.exchange experience","slug":"get-a-feel-for-the-alis-exchange-experience","link":"#get-a-feel-for-the-alis-exchange-experience","children":[]}],"relativePath":"guides/consume/make-your-first-request.md"}'),l={name:"guides/consume/make-your-first-request.md"},p=o(`<h1 id="make-a-request-to-a-product-in-your-local-environment" tabindex="-1">Make a request to a product in your local environment <a class="header-anchor" href="#make-a-request-to-a-product-in-your-local-environment" aria-hidden="true">#</a></h1><blockquote><p>\u{1F6A9} This section is supplementary to the <a href="./quick-start.html">quick start</a>. We recommend that you first complete the quickstart before attempting this section.</p></blockquote><p>Given the underlying technologies used, <strong>alis.exchange</strong> provides the ability to generate client libraries for various supported coding languages. For users of the product, it allows you to programmatically access products natively in your code without having to wrangle obscure, unpredictable data objects (see the <a href="./quick-start.html">quick start</a>).</p><p>Irrespective of the language, this is done in two steps:</p><ol><li>Establishing a client connection with the server.</li><li>Using the connection to make a request.</li></ol><p>Following the same Book example as the quickstart, this guide will step you through making requests in your own developer environment.</p><blockquote><p>We currently only provide the guide for Go. Want to help us expand this to other languages? <a href="https://github.com/alis-x/docs/edit/main/docs/guides/consume/make-your-first-request.md" target="_blank" rel="noreferrer">Make a contribution</a>.</p></blockquote><h2 id="book-repository-example" tabindex="-1">Book repository example <a class="header-anchor" href="#book-repository-example" aria-hidden="true">#</a></h2><p>Play is an organisation that builds products on <strong>alis.exchange</strong>. Their flagship book repository product,<code>ME</code>, provides details on digital books which they have available. The product defines a <code>book</code> resource as follows and has a <code>BookService</code> with two primary client facing methods that allows clients to list all available books and to get details on a specific book.</p><p>The full <code>Books.proto</code> file is shown for reference purposes.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package play.me.resources.books.v1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/protobuf/empty.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/api/resource.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/api/field_behavior.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/api/client.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/api/annotations.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/protobuf/timestamp.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/protobuf/field_mask.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;google/type/date.proto&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">option go_package = &quot;go.protobuf.play.alis.exchange/play/me/resources/books/v1&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// Book service for play.me.</span></span>
<span class="line"><span style="color:#A6ACCD;">// Book service for play.me.</span></span>
<span class="line"><span style="color:#A6ACCD;">service BooksService {</span></span>
<span class="line"><span style="color:#A6ACCD;">     // Create a book.</span></span>
<span class="line"><span style="color:#A6ACCD;">     rpc CreateBook(CreateBookRequest) returns (Book) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     	option (google.api.http) = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     		post: &quot;/resources/store/v1/books&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     		body: &quot;book&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     	};</span></span>
<span class="line"><span style="color:#A6ACCD;">     	option (google.api.method_signature) = &quot;book&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Get a book.</span></span>
<span class="line"><span style="color:#A6ACCD;">    rpc GetBook(GetBookRequest) returns (Book) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        option (google.api.http) = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            get: &quot;/resources/store/v1/{name=books/*}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        option (google.api.method_signature) = &quot;name&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">     // Delete a book.</span></span>
<span class="line"><span style="color:#A6ACCD;">     rpc DeleteBook(DeleteBookRequest) returns (google.protobuf.Empty) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     	option (google.api.http) = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     		delete: &quot;/resources/store/v1/{name=books/*}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     	};</span></span>
<span class="line"><span style="color:#A6ACCD;">     	option (google.api.method_signature) = &quot;name&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // List books.</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Features are listed in Descending order.</span></span>
<span class="line"><span style="color:#A6ACCD;">    rpc ListBooks(ListBooksRequest) returns (ListBooksResponse) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        option (google.api.http) = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            get: &quot;/resources/store/v1/books&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// The definition of a book resource.</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Request message for [play.me.resources.books.v1.BooksService.CreateBook].</span></span>
<span class="line"><span style="color:#A6ACCD;">message CreateBookRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// The book to create</span></span>
<span class="line"><span style="color:#A6ACCD;">	Book book = 1 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Request message for [play.me.resources.books.v1.BooksService.GetBook].</span></span>
<span class="line"><span style="color:#A6ACCD;">message GetBookRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// The book name is the unique identifier across organisations.</span></span>
<span class="line"><span style="color:#A6ACCD;">	// Format: books/{book}</span></span>
<span class="line"><span style="color:#A6ACCD;">	string name = 1 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Request message for [play.me.resources.books.v1.BooksService.ListBooks].</span></span>
<span class="line"><span style="color:#A6ACCD;">message ListBooksRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// The maximum number of books to return. The service may return fewer than</span></span>
<span class="line"><span style="color:#A6ACCD;">	// this value.</span></span>
<span class="line"><span style="color:#A6ACCD;">	// If unspecified, at most 100 books will be returned.</span></span>
<span class="line"><span style="color:#A6ACCD;">	// The maximum value is 1000; values above 1000 will be coerced to 1000.</span></span>
<span class="line"><span style="color:#A6ACCD;">	int32 page_size = 1 [(google.api.field_behavior) = OPTIONAL];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Request message for [play.me.resources.books.v1.BooksService.DeleteBook].</span></span>
<span class="line"><span style="color:#A6ACCD;">message DeleteBookRequest {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// The resource name of the Book.</span></span>
<span class="line"><span style="color:#A6ACCD;">	// Format: books/{book}.</span></span>
<span class="line"><span style="color:#A6ACCD;">	string name = 1 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">message ListBooksResponse {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// The books</span></span>
<span class="line"><span style="color:#A6ACCD;">	repeated Book books = 1 [(google.api.field_behavior) = REQUIRED];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>We will be making requests to both the <code>ListBooks</code> and <code>GetBook</code> method by following the two steps provided in the introduction section.</p><h3 id="_1-establish-the-client-connection" tabindex="-1">1. Establish the client connection <a class="header-anchor" href="#_1-establish-the-client-connection" aria-hidden="true">#</a></h3><p>Prior to making the requests, a client connection needs to be established to the server.</p><p>The <code>NewConn</code> function is generated by the alis.exchange CLI when a new neuron is created. This is typically placed in a separate <code>Conn.go</code> file but is included as function in this example.</p><p>The <code>NewConn</code> function requires the specification of a host URL which can be obtained by:</p><ol><li>Navigating to the specific Cloud Run instance in the GCP Console.</li><li>Obtaining the URL from the product owner.</li></ol><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">crypto/tls</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">crypto/x509</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">log</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/api/idtoken</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/api/option</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/codes</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/credentials</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/credentials/oauth</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/status</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	pb </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">go.protobuf.play.alis.exchange/play/me/resources/books/v1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// The booksClient is defined as a global variable. It is declared once on init and used to call the various methods of the BooksService</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	booksClient pb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BooksServiceClient</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Pre-declare err to avoid shadowing.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> err </span><span style="color:#C792EA;">error</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Declare the server host url and port.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// This follows the format {{neuronID}}-{{majorVersion}}-{{hash}}-{{region}}.a.run.app:{{port}}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Typical predefined values are:</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//  - region: &quot;ew&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//	- port: &quot;443&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	serverHost </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resources-books-v1-z5x5ywf7za-ew-443.a.run.app</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Initialise connection to the books service.</span></span>
<span class="line"><span style="color:#A6ACCD;">	conn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">NewConn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> serverHost</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fatal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Initialise the booksClient.</span></span>
<span class="line"><span style="color:#A6ACCD;">	booksClient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewBooksServiceClient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grpcTokenSource</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	oauth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TokenSource</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Code generated by alis.exchange CLI. DO NOT EDIT.</span></span>
<span class="line"><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#676E95;">// NewConn creates a new gRPC connection.</span></span>
<span class="line"><span style="color:#676E95;">// host should be of the form domain:port, e.g., example.com:443</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">NewConn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> host </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> insecure </span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">grpc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ClientConn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> opts </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">grpc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DialOption</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> host </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		opts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithAuthority</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> insecure </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		opts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithInsecure</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		systemRoots</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> x509</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SystemCertPool</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil,</span><span style="color:#A6ACCD;"> err</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		cred </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> credentials</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewTLS</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">tls</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			RootCAs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> systemRoots</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">		opts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithTransportCredentials</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cred</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Dial</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> opts</span><span style="color:#89DDFF;">...)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-make-a-request" tabindex="-1">2. Make a request <a class="header-anchor" href="#_2-make-a-request" aria-hidden="true">#</a></h3><p>The <code>booksClient</code> provides you all the methods available, with descriptions of the methods and a specification of what the request and responses are. Most IDEs allow you to explore these by hovering over client and method names, similar to the example shown below.</p><p>Let us make our requests.</p><h4 id="list-books" tabindex="-1">List books <a class="header-anchor" href="#list-books" aria-hidden="true">#</a></h4><p>Firstly we will get a list of all the books calling the <code>ListBooks</code> methods and then print their display names in the console.</p><p>Add the <code>printBookNames</code> function to the bottom of your Go file and make a call to the function from <code>main</code>.</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(...)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the printBookNames function</span></span>
<span class="line"><span style="color:#A6ACCD;">	result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookNames</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// function makes a call to the books service to get a list of books</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookNames</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the ListBooks method on the client library</span></span>
<span class="line"><span style="color:#A6ACCD;">	allBooks</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> booksClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ListBooks</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">pb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ListBooksRequest</span><span style="color:#89DDFF;">{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Errorf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">could not list books: %v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Print the list of books from the response</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> book </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> allBooks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Books </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> book</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DisplayName</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Done!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="get-book" tabindex="-1">Get book <a class="header-anchor" href="#get-book" aria-hidden="true">#</a></h4><p>Secondly, we will get a specific book and print all of its information in the console.</p><p>Add the <code>printBookDetails</code> function to the bottom of your Go file and make a call to the function from <code>main</code> with the provided book name.</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the printBookDetails function</span></span>
<span class="line"><span style="color:#A6ACCD;">	result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookDetails</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">books/c4a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// function makes a call to the books service to get a book details</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookDetails</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bookName </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//Create a request to get a book details</span></span>
<span class="line"><span style="color:#A6ACCD;">	req </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> pb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">GetBookRequest</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bookName</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the GetBook method on the client library</span></span>
<span class="line"><span style="color:#A6ACCD;">	book</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> booksClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetBook</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Errorf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">could not get book: %v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Print the book details</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> book</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Done!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="full-code-example" tabindex="-1">Full code example <a class="header-anchor" href="#full-code-example" aria-hidden="true">#</a></h3><p>The complete code for both examples are available below.</p><details class="details custom-block"><summary>Click here to view full code example.</summary><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">crypto/tls</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">crypto/x509</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">log</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/api/idtoken</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/api/option</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/codes</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/credentials</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/credentials/oauth</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">google.golang.org/grpc/status</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	pb </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">go.protobuf.play.alis.exchange/play/me/resources/books/v1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// The booksClient is defined as a global variable. It is declared once on init and used to call the various methods of the BooksService</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	booksClient pb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BooksServiceClient</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Pre-declare err to avoid shadowing.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> err </span><span style="color:#C792EA;">error</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Declare the server host url and port.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// This follows the format {{neuronID}}-{{majorVersion}}-{{hash}}-{{region}}.a.run.app:{{port}}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Typical predefined values are:</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//  - region: &quot;ew&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//	- port: &quot;443&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	serverHost </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resources-books-v1-z5x5ywf7za-ew-443.a.run.app</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Initialise connection to the books service.</span></span>
<span class="line"><span style="color:#A6ACCD;">	conn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">NewConn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> serverHost</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fatal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Initialise the booksClient.</span></span>
<span class="line"><span style="color:#A6ACCD;">	booksClient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewBooksServiceClient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the printBookNames function</span></span>
<span class="line"><span style="color:#A6ACCD;">	result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookNames</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the printBookDetails function</span></span>
<span class="line"><span style="color:#A6ACCD;">	result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookDetails</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">books/c4a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// function makes a call to the books service to get a list of books</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookNames</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the ListBooks method on the client library</span></span>
<span class="line"><span style="color:#A6ACCD;">	allBooks</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> booksClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ListBooks</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">pb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ListBooksRequest</span><span style="color:#89DDFF;">{})</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Errorf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">could not list books: %v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Print the list of books from the response</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> book </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> allBooks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Books </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> book</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DisplayName</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Done!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// function makes a call to the books service to get a book details</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printBookDetails</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bookName </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//Create a request to get a book details</span></span>
<span class="line"><span style="color:#A6ACCD;">	req </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> pb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">GetBookRequest</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bookName</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Call the GetBook method on the client library</span></span>
<span class="line"><span style="color:#A6ACCD;">	book</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> booksClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetBook</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Background</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Errorf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">could not get book: %v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Print the book details</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> book</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Done!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grpcTokenSource</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	oauth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TokenSource</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Code generated by alis.exchange CLI. DO NOT EDIT.</span></span>
<span class="line"><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#676E95;">// NewConn creates a new gRPC connection.</span></span>
<span class="line"><span style="color:#676E95;">// host should be of the form domain:port, e.g., example.com:443</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">NewConn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> host </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> insecure </span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">grpc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ClientConn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> opts </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">grpc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DialOption</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> host </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		opts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithAuthority</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> insecure </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		opts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithInsecure</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		systemRoots</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> x509</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SystemCertPool</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil,</span><span style="color:#A6ACCD;"> err</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		cred </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> credentials</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewTLS</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">tls</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			RootCAs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> systemRoots</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">		opts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithTransportCredentials</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cred</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> grpc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Dial</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> opts</span><span style="color:#89DDFF;">...)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="get-a-feel-for-the-alis-exchange-experience" tabindex="-1">Get a feel for the <strong>alis.exchange</strong> experience <a class="header-anchor" href="#get-a-feel-for-the-alis-exchange-experience" aria-hidden="true">#</a></h2><p>Try your hands creating your own function and incorporating a request to the <code>BooksClient</code>. Some suggestions of things to try:</p><ul><li>Loop through all the books and print out the author.</li><li>Get a book and wrangle the response to be printed out in a sentence structure.</li><li>Use the response of <code>ListBooks</code> to make multiple <code>GetBook</code> requests.</li></ul>`,35),e=[p];function t(c,r,D,y,F,A){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{i as __pageData,u as default};
