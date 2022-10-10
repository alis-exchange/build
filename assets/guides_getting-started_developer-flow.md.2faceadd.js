import{_ as e,o as t,c as r,a as o}from"./app.21e7e38b.js";const i="/assets/overview-build-process.d1670ab6.svg",g=JSON.parse('{"title":"Overview","description":"","frontmatter":{"title":"Overview","sidebarDepth":2,"next":"Build: Using Auto-generated Docs"},"headers":[{"level":2,"title":"Create protocol buffer","slug":"create-protocol-buffer","link":"#create-protocol-buffer","children":[]},{"level":2,"title":"Define methods and message","slug":"define-methods-and-message","link":"#define-methods-and-message","children":[]},{"level":2,"title":"Release protocol buffer","slug":"release-protocol-buffer","link":"#release-protocol-buffer","children":[]},{"level":2,"title":"Create neuron","slug":"create-neuron","link":"#create-neuron","children":[]},{"level":2,"title":"Specify infrastructure","slug":"specify-infrastructure","link":"#specify-infrastructure","children":[]},{"level":2,"title":"Implement code","slug":"implement-code","link":"#implement-code","children":[]},{"level":2,"title":"Release neuron","slug":"release-neuron","link":"#release-neuron","children":[]},{"level":2,"title":"Deploy neuron","slug":"deploy-neuron","link":"#deploy-neuron","children":[]},{"level":2,"title":"Experience it for yourself","slug":"experience-it-for-yourself","link":"#experience-it-for-yourself","children":[]}],"relativePath":"guides/getting-started/developer-flow.md"}'),a={name:"guides/getting-started/developer-flow.md"},n=o('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h1><p>The Alis Build platform enables individuals and organisations to move from simply writing code to building enterprise-grade software. In this section we provide an overview of the process to build products on the platform.</p><p>A product on the platform is what is offered to the world and consists of one or more underlying services which provide the functionality of the product.</p><p>In this overview, it is the building of these underlying services which we are interested in. The high-level process that is followed when creating services is depicted below.</p><p><img src="'+i+'" alt=""></p><p>Each of the steps is explained in the following sections and follow the structure:<br></p><ul><li>Overview of the step; <br></li><li>\u{1F468}\u200D\u{1F4BB} <strong>User actions</strong> - the actions that are required from the user; and<br></li><li>\u{1F3D7} <strong>Alis Build</strong> - what is facilitated by us in the background<br></li></ul><blockquote><p>\u203C\uFE0F The build example provides detailed steps for the user actions whereas this section aims to communicate the high-level overview of what would be done.</p></blockquote><h2 id="create-protocol-buffer" tabindex="-1">Create protocol buffer <a class="header-anchor" href="#create-protocol-buffer" aria-hidden="true">#</a></h2><p>Protocol buffers (proto) is the cornerstone of what we build on the platform. Creating the proto is the starting point for building out the functionality for your product.</p><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions" aria-hidden="true">#</a></h4><p>Simply run the <code>alis proto create</code> command from the terminal.</p><h4 id="\u{1F3D7}-alis-build" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build" aria-hidden="true">#</a></h4><p>In the background, the platform creates a protocol buffer resource within the product and provides a boilerplate proto file which is to be defined in the following step.</p><h2 id="define-methods-and-message" tabindex="-1">Define methods and message <a class="header-anchor" href="#define-methods-and-message" aria-hidden="true">#</a></h2><p>Defining the methods and messages in the proto is one of the most important aspects of the build process as it serves as the source of truth for the functionality of the products. The <a href="./../references/resource-oriented-design.html">Resource-oriented design</a> pattern is widely adopted and provides detailed guidelines on how to approach the definitions and best practices for writing APIs.</p><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-1" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-1" aria-hidden="true">#</a></h4><p>The user is required to flesh out the proto, which should be consistent with <a href="https://google.aip.dev/1" target="_blank" rel="noreferrer">Google&#39;s API Improvement Proposals</a>. Various tooling, such as linters, exists to aid this process.</p><p>The primary questions that developers aim to answer during this step is:</p><ol><li>What are the resources that we are considering?<br> These will be translated into the <code>messages</code> in the proto.<br><em>e.g. In the asset management space this may be a <code>porfolio</code> and <code>holdings</code>.</em></li><li>What are the potential relationships and hierarchy between the resources?<br><em>e.g. <code>portfolio</code> is the parent of <code>holdings</code>.</em></li><li>What operations are to be performed?<br> These will be translated into the <code>methods</code> of the proto, housed in a <code>service</code>.<br><em>e.g. <a href="https://google.aip.dev/131" target="_blank" rel="noreferrer">Standard methods</a> such as <code>CreatePortfolio</code>, <code>UpdatePortfolio</code> or <a href="https://google.aip.dev/136" target="_blank" rel="noreferrer">custom methods</a> such as <code>CheckPortfolioCompliance</code>.</em></li></ol><p>Since the protos sit within a version control repo, multiple developers may collaborate and iterate on the proto design. Once the proto is defined and ready to be implemented, it can be <code>released</code>.</p><h2 id="release-protocol-buffer" tabindex="-1">Release protocol buffer <a class="header-anchor" href="#release-protocol-buffer" aria-hidden="true">#</a></h2><p>Releasing a protocol buffer is a big thing in our world. It communicates that the current state of the proto is the source of truth. In other words, it is what should be implemented on your side and what clients can expect to consume. There is a lot that also happens in the background which we will unpack in the following section.</p><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-2" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-2" aria-hidden="true">#</a></h4><p>Simply run the <code>alis proto release</code> command from the terminal.</p><h4 id="\u{1F3D7}-alis-build-1" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build-1" aria-hidden="true">#</a></h4><p>The release of the proto automatically kicks off a lot of processes on Alis Build platform, which include:</p><ul><li>Auto-generating internal and client facing client libraries for a range of supported languages (currently Go, Python and JavaScript). This allows for easy implementation of the methods and allows clients to easily consume your services in their own development environment.</li><li>Autoconfiguring API gateways for the services specified in the protos. This provides HTTP endpoints for the gRPC methods, allowing for traditional REST calls to be made to the endpoints.</li><li><a href="./../how-to-guides/auto-generated-docs.html">Auto-generating documentation</a> for your product directly from your proto definitions.</li></ul><p>This single source of truth also sets the foundation for additional auto-generated aspects, which are discussed in the following sections.</p><h2 id="create-neuron" tabindex="-1">Create neuron <a class="header-anchor" href="#create-neuron" aria-hidden="true">#</a></h2><p>A neuron is a <em>unit of compute</em> within a product, i.e. the infrastructure and code that executes the logic. This therefore consists of a set of cloud infrastructure and, in most cases, some form of code implementation. The cloud infrastructure is specified using Terraform and the code implementation may be done in any language.</p><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-3" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-3" aria-hidden="true">#</a></h4><p>Simply run the <code>alis neuron create</code> command from the terminal and follow the prompts.</p><h4 id="\u{1F3D7}-alis-build-2" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build-2" aria-hidden="true">#</a></h4><p>In the background, the platform will provide pre-populated Terraform files based on the neuron requirements. Furthermore, code template files are also available which use a templating engine along with the latest protocol buffer release to auto-generate server implementation code in the supported languages.</p><h2 id="specify-infrastructure" tabindex="-1">Specify infrastructure <a class="header-anchor" href="#specify-infrastructure" aria-hidden="true">#</a></h2><p>The Terraform files define the required infrastructure needs that will be applied in the respective cloud environments.</p><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-4" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-4" aria-hidden="true">#</a></h4><p>When creating the neuron, the platform provides a set of Terraform files. These can either be customised or additional specifications may be added based on the needs of your implementation. The <a href="https://registry.terraform.io/providers/hashicorp/google/latest/docs" target="_blank" rel="noreferrer">documentation on the Terraform site</a> serves as an excellent reference for this.</p><h4 id="\u{1F3D7}-alis-build-3" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build-3" aria-hidden="true">#</a></h4><p>The Alis CLI has the command available <code>alis gen terraform</code> which is able to generate commonly used Terraform specs out of the box.</p><h2 id="implement-code" tabindex="-1">Implement code <a class="header-anchor" href="#implement-code" aria-hidden="true">#</a></h2><p>In the majority of cases, there is some form of code implementation which realises the methods defined in protocol buffer, referred to as the implementation of the server. In this step, one effectively builds out the APIs to process the request, execute logic in the code and return a response.</p><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-5" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-5" aria-hidden="true">#</a></h4><ol><li>Using either the auto-generated template files or your own custom files, implement the logic of the protocol buffers by using the auto-generated client libraries.</li><li>If necessary, customise the <code>Dockerfile</code> to ensure that the containerisation of the code will be correct.</li></ol><h4 id="\u{1F3D7}-alis-build-4" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build-4" aria-hidden="true">#</a></h4><p>The Alis CLI has the command available <code>alis gen code</code> which is able to generate files in various languages.</p><h2 id="release-neuron" tabindex="-1">Release neuron <a class="header-anchor" href="#release-neuron" aria-hidden="true">#</a></h2><p>Releasing a neuron does two primary things:</p><ol><li>It tags the latest committed state of the infrastructure specification for the neuron, which will be applied to the environment on deploy.</li><li>The neuron code is containerised and the image is saved in the Cloud.</li></ol><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-6" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-6" aria-hidden="true">#</a></h4><p>Simply run the <code>alis neuron release</code> command from the terminal and follow the prompts.</p><h4 id="\u{1F3D7}-alis-build-5" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build-5" aria-hidden="true">#</a></h4><p>The tagging of the infrastructure is facilitated by us. Furthermore, the Alis Build platform looks for one or more Dockerfile in the neuron&#39;s repos which are then built on <a href="https://cloud.google.com/build" target="_blank" rel="noreferrer">Cloud Build</a>.</p><h2 id="deploy-neuron" tabindex="-1">Deploy neuron <a class="header-anchor" href="#deploy-neuron" aria-hidden="true">#</a></h2><p>The deployment of the neuron applies the infrastructure specification to a specified deployment environment(s) (e.g. staging or production). A typical example of the outcome would be that a deployment environment has:</p><ul><li>A fully managed instance of the neuron&#39;s containerised code (<a href="https://cloud.google.com/run" target="_blank" rel="noreferrer">Cloud Run</a> instance) which provides clients a means of accessing its methods.</li><li>A <a href="https://cloud.google.com/bigtable" target="_blank" rel="noreferrer">Cloud BigTable NoSQL database</a>, or other form of storage, which stores information about the resources.</li><li>A <a href="https://cloud.google.com/pubsub" target="_blank" rel="noreferrer">PubSub</a> topic to which messages are published when certain resources are interacted with.</li></ul><h4 id="\u{1F468}\u200D\u{1F4BB}-user-actions-7" tabindex="-1">\u{1F468}\u200D\u{1F4BB} User actions <a class="header-anchor" href="#\u{1F468}\u200D\u{1F4BB}-user-actions-7" aria-hidden="true">#</a></h4><p>Simply run the <code>alis neuron release</code> command from the terminal and follow the prompts.</p><h4 id="\u{1F3D7}-alis-build-6" tabindex="-1">\u{1F3D7} Alis Build <a class="header-anchor" href="#\u{1F3D7}-alis-build-6" aria-hidden="true">#</a></h4><p>Using the tag that was added when releasing the neuron, the infrastructure specification is applied in the deployment environment specified.</p><p>With the former example, this would result in:</p><ul><li>Creating a new Cloud Run instance that hosts the container from the <code>release</code> step;</li><li>Adding the various environmental variables to the instance;</li><li>Creating a new BigTable table with the specified table design; and</li><li>Creating a new topic in PubSub with the various policies required.</li></ul><p>Leveraging Terraform allows developers to only care about correctly defining the specification, the Alis Build platform will facilitate the implementation thereof.</p><h2 id="experience-it-for-yourself" tabindex="-1">Experience it for yourself <a class="header-anchor" href="#experience-it-for-yourself" aria-hidden="true">#</a></h2><p>We are advocates of learning by doing and are currently working on a comprehensive build example. In the meantime, <a href="https://alis.exchange/signup" target="_blank" rel="noreferrer">schedule a demo</a> by filling out the form, and we will take you through the process.</p>',66),s=[n];function l(d,h,c,u,p,f){return t(),r("div",null,s)}const b=e(a,[["render",l]]);export{g as __pageData,b as default};