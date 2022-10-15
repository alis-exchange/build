import{_ as e,o as i,c as t,a as o}from"./app.acf76c56.js";const g=JSON.parse('{"title":"Specifying proto visibility scopes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Implementing visibility restrictions","slug":"implementing-visibility-restrictions","link":"#implementing-visibility-restrictions","children":[{"level":3,"title":"Service Visibility Restriction","slug":"service-visibility-restriction","link":"#service-visibility-restriction","children":[]},{"level":3,"title":"Method Visibility Restriction","slug":"method-visibility-restriction","link":"#method-visibility-restriction","children":[]},{"level":3,"title":"Message Visibility Restriction","slug":"message-visibility-restriction","link":"#message-visibility-restriction","children":[]},{"level":3,"title":"Message Field Visibility Restriction","slug":"message-field-visibility-restriction","link":"#message-field-visibility-restriction","children":[]},{"level":3,"title":"Enum Visibility Restriction","slug":"enum-visibility-restriction","link":"#enum-visibility-restriction","children":[]},{"level":3,"title":"Enum Value Visibility Restriction","slug":"enum-value-visibility-restriction","link":"#enum-value-visibility-restriction","children":[]}]}],"relativePath":"guides/how-to-guides/proto-visibility-scopes.md"}'),s={name:"guides/how-to-guides/proto-visibility-scopes.md"},n=o(`<h1 id="specifying-proto-visibility-scopes" tabindex="-1">Specifying proto visibility scopes <a class="header-anchor" href="#specifying-proto-visibility-scopes" aria-hidden="true">#</a></h1><p>When releasing new versions of protocol buffers, multiple processes are kicked off in the background that generate client libraries, documentation, gateways and more.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>By default, everything specified in the protocol buffer is regarded <em>PUBLIC</em>, i.e. accessible to anyone. Any information in the protocol buffer that should not be publicly exposed (in documentation, client libraries, etc.), should be explicitly restricted.</p></div><p>This guide will provide an overview of how the visibility restrictions can be applied in the protocol buffers.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Many cases exist where organisations may want to keep certain APIs, resources or even individual fields internal only. This is achieved by using <em>visibility option tags</em> - which are defined in Google\u2019s <a href="https://github.com/googleapis/googleapis/blob/master/google/api/visibility.proto" target="_blank" rel="noreferrer">visibility.proto</a>, part of the standard <code>google.api</code> package. These tags are parsed on releasing new versions of a proto to exclude the restricted information from that which is public.</p><p>In summary, these visibility tags allow one to RESTRICT visibility to certain aspects of the protos. These are available for: <code>Services</code>; <code>Methods</code>; <code>Messages</code>; <code>Fields</code>; <code>Enums</code>; and <code>EnumValues</code>.</p><p>And follow a top-down restriction enforcement. This means that any child parts inherit the restriction of the parent. Ie If a restriction is provided to:</p><ul><li>A <code>service</code> then all of the <code>methods</code> part of that <code>service</code> inherits the restriction;</li><li>A <code>message</code> then all of the <code>fields</code>, <code>enums</code> and <code>sub messages</code> in the message inherits the restriction.</li></ul><p>To restrict visibility of an entire package requires slightly more work since there does not exist any visibility restriction tags on a package level. To achieve this, one would have to specify visibility restrictions on all of the highest level parts of the package. I.e. any: <code>Services</code>; <code>Messages</code>; <code>Enums</code>; and <code>Oneofs</code>.</p><p>In the following section, a tutorial is provided on how to implement these restrictions.</p><h2 id="implementing-visibility-restrictions" tabindex="-1">Implementing visibility restrictions <a class="header-anchor" href="#implementing-visibility-restrictions" aria-hidden="true">#</a></h2><p>Firstly, import the <code>visibility.proto</code> package in the proto you are working in:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>import &quot;google/api/visibility.proto&quot;;
</code></pre></div><p>Assign the relevant visibility restriction option tags to the parts of the proto that require it. Example implementations of these are shown below.</p><h3 id="service-visibility-restriction" tabindex="-1">Service Visibility Restriction <a class="header-anchor" href="#service-visibility-restriction" aria-hidden="true">#</a></h3><p>The entire <code>BooksService</code> is set to <code>\u201CINTERNAL\u201D</code>, therefore all methods (<em>Get</em> and <em>Create</em>) part of the <code>BooksService</code> will also be internal.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>service BooksService {
	option (google.api.api_visibility) = {
		restriction: &quot;INTERNAL&quot;,
	};
	// Create a book.
	rpc CreateBook(CreateBookRequest) returns (Book) {
			option (google.api.http) = {
			post: &quot;/resources/store/v1/books&quot;
			body: &quot;book&quot;
		};
		option (google.api.method_signature) = &quot;book&quot;;
	}
	// Get a book.
	rpc GetBook(GetBookRequest) returns (Book) {
			option (google.api.http) = {
			get: &quot;/resources/store/v1/{name=books/*}&quot;
		};
		option (google.api.method_signature) = &quot;name&quot;;
	}
}
</code></pre></div><h3 id="method-visibility-restriction" tabindex="-1">Method Visibility Restriction <a class="header-anchor" href="#method-visibility-restriction" aria-hidden="true">#</a></h3><p>The <code>CreateBook</code> method will be set to have an <code>\u201CINTERNAL\u201D</code> restriction but the <code>GetBook</code> method will be publicly visible.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>service BooksService {
	// Create a book.
	rpc CreateBook(CreateBookRequest) returns (Book) {
		option (google.api.http) = {
			post: &quot;/resources/store/v1/books&quot;
			body: &quot;book&quot;
		};
		option (google.api.method_signature) = &quot;book&quot;;
		option (google.api.method_visibility) = {
			restriction: &quot;INTERNAL&quot;
		};
	}
	// Get a book.
	rpc GetBook(GetBookRequest) returns (Book) {
			option (google.api.http) = {
			get: &quot;/resources/store/v1/{name=books/*}&quot;
		};
		option (google.api.method_signature) = &quot;name&quot;;
	}
}
</code></pre></div><h3 id="message-visibility-restriction" tabindex="-1">Message Visibility Restriction <a class="header-anchor" href="#message-visibility-restriction" aria-hidden="true">#</a></h3><p>The <code>CreateBookRequest</code> message has an <code>\u201CINTERNAL\u201D</code> restriction and therefore its fields (<code>book</code>) will also be restricted to <code>\u201CINTERNAL\u201D</code> visibility.</p><div class="warning custom-block"><p class="custom-block-title"><strong>Note</strong></p><p>It is important to note that this DOES NOT set the <code>Book</code> resource to <code>\u201CINTERNAL\u201D</code> , but simply the field in this message.</p></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>message CreateBookRequest {
	option (google.api.message_visibility) = {
		restriction: &quot;INTERNAL&quot;,
	};
	// The book to create
	Book book = 1 [(google.api.field_behavior) = REQUIRED];
}

message Book {
	//Name of the book in the format: books/{book}.
	string name = 1 [(google.api.field_behavior) = REQUIRED];
	//The display name of the book.
	string display_name = 2 [(google.api.field_behavior) = REQUIRED];
	//The authors of the book.
	repeated string authors = 3 [(google.api.field_behavior) = REQUIRED];
}
</code></pre></div><h3 id="message-field-visibility-restriction" tabindex="-1">Message Field Visibility Restriction <a class="header-anchor" href="#message-field-visibility-restriction" aria-hidden="true">#</a></h3><p>The <code>Book</code> resource is publicly visible but the <code>name</code> field of the Book will be restricted to <code>\u201CINTERNAL\u201D</code> visibility.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>message Book {
	//Name of the book in the format: books/{book}.
	string name = 1 [(google.api.field_visibility) = {
		restriction: &quot;INTERNAL&quot;,
	}];
	//The display name of the book.
	string display_name = 3 [(google.api.field_behavior) = REQUIRED];
	//The authors of the book.
	repeated string authors = 4 [(google.api.field_behavior) = REQUIRED];
}
</code></pre></div><h3 id="enum-visibility-restriction" tabindex="-1">Enum Visibility Restriction <a class="header-anchor" href="#enum-visibility-restriction" aria-hidden="true">#</a></h3><p>The entire <code>BookCategory</code> enum is restricted to <code>\u201CINTERNAL\u201D</code> visibility, therefore all of its values will also be restricted to <code>\u201CINTERNAL\u201D</code> visibility.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>enum BookCategory {
	option (google.api.enum_visibility) = {
		restriction: &quot;INTERNAL&quot;,
	};
	// Unknown
	UNKNOWN = 0;
	// Fiction
	FICTION = 1;
	// Non-fiction
	NON_FICTION = 2;
}
</code></pre></div><h3 id="enum-value-visibility-restriction" tabindex="-1">Enum Value Visibility Restriction <a class="header-anchor" href="#enum-value-visibility-restriction" aria-hidden="true">#</a></h3><p>The <code>BookCategory</code> enum is publicly visible but the <code>UNKNOWN</code> value is restricted to <code>\u201CINTERNAL\u201D</code> visibility.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code>enum BookCategory {
	// Unknown
	UNKNOWN = 0 [(google.api.value_visibility) = {
		restriction: &quot;INTERNAL&quot;,
	}];
	// Fiction
	FICTION = 1;
	// Non-fiction
	NON_FICTION = 2;
}
</code></pre></div>`,34),r=[n];function a(l,c,d,p,h,u){return i(),t("div",null,r)}const v=e(s,[["render",a]]);export{g as __pageData,v as default};
