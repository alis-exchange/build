import{_ as e,o,c as r,a as s}from"./app.1672d676.js";const m=JSON.parse('{"title":"Design","description":"","frontmatter":{"title":"Design"},"headers":[{"level":2,"title":"Create protocol buffer","slug":"create-protocol-buffer","link":"#create-protocol-buffer","children":[]},{"level":2,"title":"Define methods and messages","slug":"define-methods-and-messages","link":"#define-methods-and-messages","children":[]},{"level":2,"title":"Release protocol buffer","slug":"release-protocol-buffer","link":"#release-protocol-buffer","children":[]}],"relativePath":"guides/how-to-guides/build-a-service/design.md"}'),t={name:"guides/how-to-guides/build-a-service/design.md"},n=s(`<h1 id="design-the-books-service" tabindex="-1">Design the Books Service <a class="header-anchor" href="#design-the-books-service" aria-hidden="true">#</a></h1><p>The simple <code>BooksService</code> used as an example is the same as that specified in the <a href="./../../getting-started/consumer-experience.html">consumer experience docs</a> and used extensively throughout Google&#39;s <a href="https://google.aip.dev/" target="_blank" rel="noreferrer">API Improvement Proposals(AIPs)</a>.</p><h2 id="create-protocol-buffer" tabindex="-1">Create protocol buffer <a class="header-anchor" href="#create-protocol-buffer" aria-hidden="true">#</a></h2><p>To create a new proto run <code>alis proto create {orgID}.{productID}.{resources|services}-{neuronName}-{neuronVersion}</code> from your terminal (e.g. <code>alis proto create xmpl.br.resources-books-v1</code>).</p><p>This will create a new <code>.proto</code> file, which you will then populate with the services, methods and messages you require. This file will be located in the <code>alis.exchange</code> directory at &quot;{orgID}/proto/{orgID}/{productID}/{resources|services}/{neuronName}/{neuronVersion}&quot;</p><h2 id="define-methods-and-messages" tabindex="-1">Define methods and messages <a class="header-anchor" href="#define-methods-and-messages" aria-hidden="true">#</a></h2><p>The <code>.proto</code> file for the Books service consists of a service with methods, and the various messages as specified below:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>// The Books service
service Books {
  // Get a specific book.
  rpc GetBook(GetBookRequest) returns (Book) {}
  // Create a book
  rpc CreateBook(CreateBookRequest) returns (Book) {}
}

// The definition of a book resource.
message Book {
  // The name of the book.
  // Format: books/{book}.
  string name = 1;

  // The display name of the book.
  string display_name = 2;

  // The authors of the book.
  repeated string authors = 3;

  // The publisher of the book
  string publisher = 4;
}

// Request message for the GetBook method
message GetBookRequest {
  // The name of the book to retrieve.
  // Format: books/{book}
  string name = 1;
}
</code></pre></div><p>The proto definition is the building block upon which our server implementation will depend. It is important to think carefully about your API definition and adopt a resource-oriented, API-first design approach when building out your own service.</p><h2 id="release-protocol-buffer" tabindex="-1">Release protocol buffer <a class="header-anchor" href="#release-protocol-buffer" aria-hidden="true">#</a></h2><p>Once you are happy with your proto definition, run <code>alis proto release {orgID}.{productID}.{resources|services}-{neuronName}-{neuronVersion}</code>. This will publish the protobuf package in various languages, for use by clients and by your server when it is in production, and will be used for code generation when commencing server implementation.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The Alis OS generates boilerplate code to kick off your server implementation based off of the contents of your <code>.proto</code> files. By putting effort into deciding on a robust API definition up-front, it helps the Alis Build platform to relieve you of redundant tasks.</p></div>`,12),i=[n];function a(c,d,l,h,u,p){return o(),r("div",null,i)}const g=e(t,[["render",a]]);export{m as __pageData,g as default};
