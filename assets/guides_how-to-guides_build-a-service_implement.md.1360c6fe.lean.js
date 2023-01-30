import{_ as l,o as u,c as i,e as t,w as a,a as c,b as n,d as s,r as p}from"./app.46e1ed38.js";const nn=JSON.parse('{"title":"Implement the Books Service","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create neuron","slug":"create-neuron","link":"#create-neuron","children":[]},{"level":2,"title":"Specify infrastructure","slug":"specify-infrastructure","link":"#specify-infrastructure","children":[]},{"level":2,"title":"Implement code","slug":"implement-code","link":"#implement-code","children":[{"level":3,"title":"Local development and testing","slug":"local-development-and-testing","link":"#local-development-and-testing","children":[]},{"level":3,"title":"Implementing the methods","slug":"implementing-the-methods","link":"#implementing-the-methods","children":[]}]}],"relativePath":"guides/how-to-guides/build-a-service/implement.md"}'),r={name:"guides/how-to-guides/build-a-service/implement.md"},k=c("",13),d=n("div",{class:"language-go"},[n("button",{class:"copy"}),n("span",{class:"lang"},"go"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"net"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`

	`),n("span",{class:"token string"},'"cloud.google.com/go/firestore"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// client is a global client, initialized once per cloud run instance."),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
	firestoreClient  `),n("span",{class:"token operator"},"*"),s("firestore"),n("span",{class:"token punctuation"},"."),s(`Client
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

	`),n("span",{class:"token comment"},"// Pre-declare err to avoid shadowing."),s(`
	`),n("span",{class:"token keyword"},"var"),s(" err "),n("span",{class:"token builtin"},"error"),s(`

	`),n("span",{class:"token comment"},"// Disable log prefixes such as the default timestamp."),s(`
	`),n("span",{class:"token comment"},"// Prefix text prevents the message from being parsed as JSON."),s(`
	`),n("span",{class:"token comment"},"// A timestamp is added when shipping logs to Cloud Logging."),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetFlags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// Ensure required envs are set."),s(`
	`),n("span",{class:"token keyword"},"if"),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ALIS_OS_PROJECT"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ALIS_OS_PROJECT env not set."'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// TODO: add/remove required clients."),s(`
	`),n("span",{class:"token comment"},"// Initialise Firestore client"),s(`
	firestoreProject`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},"="),s(" firestore"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewClient"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" projectID"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatalf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"firestore.NewClient: %v"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("Entry"),n("span",{class:"token punctuation"},"{"),s("Message"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"starting server..."'),n("span",{class:"token punctuation"},","),s(" Severity"),n("span",{class:"token punctuation"},":"),s(" LogSeverity_NOTICE"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

	port `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"PORT"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" port "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		port `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"8080"'),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("Entry"),n("span",{class:"token punctuation"},"{"),s("Message"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"Defaulting to port "'),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},","),s(" Severity"),n("span",{class:"token punctuation"},":"),s(" LogSeverity_WARNING"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	listener`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" net"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Listen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tcp"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":"'),n("span",{class:"token operator"},"+"),s("port"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatalf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"net.Listen: %v"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	grpcServer `),n("span",{class:"token operator"},":="),s(" grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewServer"),n("span",{class:"token punctuation"},"("),s("grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UnaryInterceptor"),n("span",{class:"token punctuation"},"("),s("serverInterceptor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	pb`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"RegisterServiceServer"),n("span",{class:"token punctuation"},"("),s("grpcServer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("myService"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"="),s(" grpcServer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Serve"),n("span",{class:"token punctuation"},"("),s("listener"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// serverInterceptor is an example of a Server Interceptor which could be used to 'inject'"),s(`
`),n("span",{class:"token comment"},"// for example logs and/or tracing details to incoming server requests."),s(`
`),n("span",{class:"token comment"},"// Add this method to your grpc server connection, for example"),s(`
`),n("span",{class:"token comment"},"// grpcServer := grpc.NewServer(grpc.UnaryInterceptor(serverInterceptor))"),s(`
`),n("span",{class:"token comment"},"//	pb.RegisterServiceServer(grpcServer, &myService{})"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"serverInterceptor"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" info "),n("span",{class:"token operator"},"*"),s("grpc"),n("span",{class:"token punctuation"},"."),s("UnaryServerInfo"),n("span",{class:"token punctuation"},","),s(" handler grpc"),n("span",{class:"token punctuation"},"."),s("UnaryHandler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

	`),n("span",{class:"token comment"},"// Calls the handler"),s(`
	h`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"handler"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("Entry"),n("span",{class:"token punctuation"},"{"),s("Message"),n("span",{class:"token punctuation"},":"),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%v"'),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" Severity"),n("span",{class:"token punctuation"},":"),s(" LogSeverity_DEBUG"),n("span",{class:"token punctuation"},","),s(" Trace"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"getTrace"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("Entry"),n("span",{class:"token punctuation"},"{"),s(`
			Message`),n("span",{class:"token punctuation"},":"),s("  err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
			Severity`),n("span",{class:"token punctuation"},":"),s(" LogSeverity_WARNING"),n("span",{class:"token punctuation"},","),s(`
			Trace`),n("span",{class:"token punctuation"},":"),s("    "),n("span",{class:"token function"},"getTrace"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" h"),n("span",{class:"token punctuation"},","),s(` err
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),m=n("div",{class:"language-python"},[n("button",{class:"copy"}),n("span",{class:"lang"},"python"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"from"),s(" concurrent "),n("span",{class:"token keyword"},"import"),s(` futures
`),n("span",{class:"token keyword"},"import"),s(` grpc
`),n("span",{class:"token keyword"},"import"),s(` logging

`),n("span",{class:"token comment"},"# import methods for service"),s(`
`),n("span",{class:"token keyword"},"import"),s(` methods

`),n("span",{class:"token comment"},"# protobuf imports"),s(`

`),n("span",{class:"token keyword"},"from"),s(" xmpl"),n("span",{class:"token punctuation"},"."),s("br"),n("span",{class:"token punctuation"},"."),s("resources"),n("span",{class:"token punctuation"},"."),s("books"),n("span",{class:"token punctuation"},"."),s("v1 "),n("span",{class:"token keyword"},"import"),s(" books_pb2_grpc "),n("span",{class:"token keyword"},"as"),s(` books_pb_grpc


MAX_MESSAGE_SIZE `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2000000000"),s(`

`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"serve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# creates a Server with which RPCs can be serviced"),s(`
    server `),n("span",{class:"token operator"},"="),s(" grpc"),n("span",{class:"token punctuation"},"."),s("server"),n("span",{class:"token punctuation"},"("),s("futures"),n("span",{class:"token punctuation"},"."),s("ThreadPoolExecutor"),n("span",{class:"token punctuation"},"("),s("max_workers"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token comment"},"# ('grpc.max_send_message_length', MAX_MESSAGE_LENGTH),"),s(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'grpc.max_receive_message_length'"),n("span",{class:"token punctuation"},","),s(" MAX_MESSAGE_SIZE"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`


    books_pb_grpc`),n("span",{class:"token punctuation"},"."),s("add_BooksServiceServicer_to_server"),n("span",{class:"token punctuation"},"("),s("methods"),n("span",{class:"token punctuation"},"."),s("BooksService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" server"),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token comment"},"# open an insecure port for accepting RPCs"),s(`
    server`),n("span",{class:"token punctuation"},"."),s("add_insecure_port"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'0.0.0.0:8080'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"# start the server"),s(`
    server`),n("span",{class:"token punctuation"},"."),s("start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    logging`),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Listening on %s."'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0.0.0.0:8080'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"# block current thread until the server stops"),s(`
    server`),n("span",{class:"token punctuation"},"."),s("wait_for_termination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"if"),s(" __name__ "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},"'__main__'"),n("span",{class:"token punctuation"},":"),s(`
    logging`),n("span",{class:"token punctuation"},"."),s("basicConfig"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token operator"},"="),s("logging"),n("span",{class:"token punctuation"},"."),s("INFO"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"# begin serving traffic"),s(`
        serve`),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"except"),s(" BaseException "),n("span",{class:"token keyword"},"as"),s(" e"),n("span",{class:"token punctuation"},":"),s(`
        logging`),n("span",{class:"token punctuation"},"."),s("error"),n("span",{class:"token punctuation"},"("),s("stacklevel"),n("span",{class:"token operator"},"="),s("logging"),n("span",{class:"token punctuation"},"."),s("INFO"),n("span",{class:"token punctuation"},","),s(" msg"),n("span",{class:"token operator"},"="),n("span",{class:"token builtin"},"str"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"raise"),s(" Exception"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"str"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`)])])],-1),g=n("p",null,[n("strong",null,"Methods")],-1),f=n("p",null,[s("The "),n("code",null,"methods"),s(" is where we implement the service interface and write the business logic that sits behind our methods.")],-1),h=n("div",{class:"language-go"},[n("button",{class:"copy"}),n("span",{class:"lang"},"go"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"context"'),s(`

	`),n("span",{class:"token string"},'"google.golang.org/genproto/googleapis/longrunning"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc/codes"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc/status"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/protobuf/types/known/emptypb"'),s(`

	pb `),n("span",{class:"token string"},'"go.protobuf.example.domain/xmpl/br/resources/books/v1"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Create a Service object which we'll register with the Server"),s(`
`),n("span",{class:"token keyword"},"type"),s(" myService "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    pb`),n("span",{class:"token punctuation"},"."),s(`UnimplementedBooksServiceServer
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("myService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("GetBookRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//TODO: Implement logic here."),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("myService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"ListBooks"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("ListBooksRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("ListBooksResponse"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//TODO: Implement logic here."),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s("pb"),n("span",{class:"token punctuation"},"."),s("ListBooksResponse"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("myService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"CreateBook"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("CreateBookRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//TODO: Implement logic here."),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),b=n("div",{class:"language-python"},[n("button",{class:"copy"}),n("span",{class:"lang"},"python"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(` grpc
`),n("span",{class:"token keyword"},"import"),s(` logging

`),n("span",{class:"token comment"},"# import alis_ os module and attaches the cloud logging handler to the python logging if run in production."),s(`
`),n("span",{class:"token comment"},"# from alis.os import os as alis_os"),s(`
`),n("span",{class:"token comment"},'# alis_os = alis_os.Os(org_project="alis-os", org_domain="alis.capital", log_level="DEBUG")'),s(`

`),n("span",{class:"token comment"},"# protobuf imports"),s(`

`),n("span",{class:"token keyword"},"from"),s(" xmpl"),n("span",{class:"token punctuation"},"."),s("br"),n("span",{class:"token punctuation"},"."),s("resources"),n("span",{class:"token punctuation"},"."),s("books"),n("span",{class:"token punctuation"},"."),s("v1 "),n("span",{class:"token keyword"},"import"),s(" books_pb2_grpc "),n("span",{class:"token keyword"},"as"),s(` books_pb_grpc
`),n("span",{class:"token keyword"},"import"),s(" google"),n("span",{class:"token punctuation"},"."),s("cloud"),n("span",{class:"token punctuation"},"."),s("firestore "),n("span",{class:"token keyword"},"as"),s(` firestore

firestore_client `),n("span",{class:"token operator"},"="),s(" firestore"),n("span",{class:"token punctuation"},"."),s("Client"),n("span",{class:"token punctuation"},"("),s("project"),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ALIS_OS_PROJECT'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BooksService"),n("span",{class:"token punctuation"},"("),s("books_pb_grpc"),n("span",{class:"token punctuation"},"."),s("BooksService"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"__init__"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
            logging`),n("span",{class:"token punctuation"},"."),s("basicConfig"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token operator"},"="),s("logging"),n("span",{class:"token punctuation"},"."),s("INFO"),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" request"),n("span",{class:"token punctuation"},":"),s("books_pb"),n("span",{class:"token punctuation"},"."),s("GetBookRequest"),n("span",{class:"token punctuation"},","),s(" context"),n("span",{class:"token punctuation"},":"),s(" grpc"),n("span",{class:"token punctuation"},"."),s("ServicerContext"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),s(` \\
            `),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"return"),s(" books_pb"),n("span",{class:"token punctuation"},"."),s(`Book
          `),n("span",{class:"token comment"},"# TODO: implement logic here."),s(`
          `),n("span",{class:"token keyword"},"return"),s(" books_pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"ListBooks"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" request"),n("span",{class:"token punctuation"},":"),s("books_pb"),n("span",{class:"token punctuation"},"."),s("ListBooksRequest"),n("span",{class:"token punctuation"},","),s(" context"),n("span",{class:"token punctuation"},":"),s(" grpc"),n("span",{class:"token punctuation"},"."),s("ServicerContext"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),s(` \\
            `),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"return"),s(" books_pb"),n("span",{class:"token punctuation"},"."),s(`ListBooksResponse
          `),n("span",{class:"token comment"},"# TODO: implement logic here."),s(`
          `),n("span",{class:"token keyword"},"return"),s(" books_pb"),n("span",{class:"token punctuation"},"."),s("ListBooksResponse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"CreateBook"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},","),s(" request"),n("span",{class:"token punctuation"},":"),s("books_pb"),n("span",{class:"token punctuation"},"."),s("CreateBookRequest"),n("span",{class:"token punctuation"},","),s(" context"),n("span",{class:"token punctuation"},":"),s(" grpc"),n("span",{class:"token punctuation"},"."),s("ServicerContext"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),s(` \\
            `),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"return"),s(" books_pb"),n("span",{class:"token punctuation"},"."),s(`Book
          `),n("span",{class:"token comment"},"# TODO: implement logic here."),s(`
          `),n("span",{class:"token keyword"},"return"),s(" books_pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),y=n("p",null,[n("strong",null,"Test")],-1),_=n("p",null,[s("The "),n("code",null,"test"),s(" is where we call the methods as specified in the "),n("code",null,"methods"),s(" to ensure they behave as we expect them to.")],-1),v=n("div",{class:"language-go"},[n("button",{class:"copy"}),n("span",{class:"lang"},"go"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"context"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"testing"'),s(`

	pb `),n("span",{class:"token string"},'"go.protobuf.example.domain/xmpl/br/resources/books/v1"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Simulate a client object"),s(`
`),n("span",{class:"token keyword"},"var"),s(` client myService

`),n("span",{class:"token comment"},"// This init() function will only run when running Go tests."),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// Include a link to the file location of where the log originated from"),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetFlags"),n("span",{class:"token punctuation"},"("),s("log"),n("span",{class:"token punctuation"},"."),s("Lshortfile"),n("span",{class:"token punctuation"},")"),s(`

	client `),n("span",{class:"token operator"},"="),s(" myService"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"TestMyService_GetBook"),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"*"),s("testing"),n("span",{class:"token punctuation"},"."),s("T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// Construct a request message"),s(`
	req `),n("span",{class:"token operator"},":="),s(" pb"),n("span",{class:"token punctuation"},"."),s("GetBookRequest"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// Run a method"),s(`
	res`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("req"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		t`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"TestMyService_ListBooks"),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"*"),s("testing"),n("span",{class:"token punctuation"},"."),s("T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// Construct a request message"),s(`
	req `),n("span",{class:"token operator"},":="),s(" pb"),n("span",{class:"token punctuation"},"."),s("ListBooksRequest"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// Run a method"),s(`
	res`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ListBooks"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("req"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		t`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"TestMyService_CreateBook"),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"*"),s("testing"),n("span",{class:"token punctuation"},"."),s("T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// Construct a request message"),s(`
	req `),n("span",{class:"token operator"},":="),s(" pb"),n("span",{class:"token punctuation"},"."),s("CreateBookRequest"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// Run a method"),s(`
	res`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateBook"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("req"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		t`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`)])])],-1),w=n("div",{class:"language-python"},[n("button",{class:"copy"}),n("span",{class:"lang"},"python"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),s(` unittest
`),n("span",{class:"token keyword"},"from"),s(" grpc "),n("span",{class:"token keyword"},"import"),s(` StatusCode
`),n("span",{class:"token keyword"},"import"),s(` grpc_testing

`),n("span",{class:"token comment"},"# protobuf imports"),s(`

`),n("span",{class:"token keyword"},"from"),s(" xmpl"),n("span",{class:"token punctuation"},"."),s("br"),n("span",{class:"token punctuation"},"."),s("resources"),n("span",{class:"token punctuation"},"."),s("books"),n("span",{class:"token punctuation"},"."),s("v1 "),n("span",{class:"token keyword"},"import"),s(" books_pb2_grpc "),n("span",{class:"token keyword"},"as"),s(` books_pb_grpc



`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BooksServiceTest"),n("span",{class:"token punctuation"},"("),s("unitbooks"),n("span",{class:"token punctuation"},"."),s("TestCase"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"setUp"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
            self`),n("span",{class:"token punctuation"},"."),s("_real_time "),n("span",{class:"token operator"},"="),s(" grpc_booksing"),n("span",{class:"token punctuation"},"."),s("strict_real_time"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            descriptors_to_servicers `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
                books_pb`),n("span",{class:"token punctuation"},"."),s("DESCRIPTOR"),n("span",{class:"token punctuation"},"."),s("services_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BooksService'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(" methods"),n("span",{class:"token punctuation"},"."),s("BooksService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            self`),n("span",{class:"token punctuation"},"."),s("books_server "),n("span",{class:"token operator"},"="),s(" grpc_booksing"),n("span",{class:"token punctuation"},"."),s("server_from_dictionary"),n("span",{class:"token punctuation"},"("),s("descriptors_to_servicers"),n("span",{class:"token punctuation"},","),s(" self"),n("span",{class:"token punctuation"},"."),s("_real_time"),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"books_get_book"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token comment"},"# TODO: add custom logic here"),s(`
          request `),n("span",{class:"token operator"},"="),s(" books_pb"),n("span",{class:"token punctuation"},"."),s("GetBookRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          rpc `),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("books_server"),n("span",{class:"token punctuation"},"."),s("invoke_unary_unary"),n("span",{class:"token punctuation"},"("),s(`
              books_pb`),n("span",{class:"token punctuation"},"."),s("DESCRIPTOR"),n("span",{class:"token punctuation"},"."),s("services_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BooksService'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("methods_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'GetBook'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              invocation_metadata`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              request`),n("span",{class:"token operator"},"="),s("request"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"None"),s(`
          `),n("span",{class:"token punctuation"},")"),s(`
          response`),n("span",{class:"token punctuation"},","),s(" metadata"),n("span",{class:"token punctuation"},","),s(" code"),n("span",{class:"token punctuation"},","),s(" details "),n("span",{class:"token operator"},"="),s(" rpc"),n("span",{class:"token punctuation"},"."),s("termination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          self`),n("span",{class:"token punctuation"},"."),s("assertIs"),n("span",{class:"token punctuation"},"("),s("code"),n("span",{class:"token punctuation"},","),s(" StatusCode"),n("span",{class:"token punctuation"},"."),s("OK"),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"books_list_books"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token comment"},"# TODO: add custom logic here"),s(`
          request `),n("span",{class:"token operator"},"="),s(" books_pb"),n("span",{class:"token punctuation"},"."),s("ListBooksRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          rpc `),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("books_server"),n("span",{class:"token punctuation"},"."),s("invoke_unary_unary"),n("span",{class:"token punctuation"},"("),s(`
              books_pb`),n("span",{class:"token punctuation"},"."),s("DESCRIPTOR"),n("span",{class:"token punctuation"},"."),s("services_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BooksService'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("methods_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ListBooks'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              invocation_metadata`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              request`),n("span",{class:"token operator"},"="),s("request"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"None"),s(`
          `),n("span",{class:"token punctuation"},")"),s(`
          response`),n("span",{class:"token punctuation"},","),s(" metadata"),n("span",{class:"token punctuation"},","),s(" code"),n("span",{class:"token punctuation"},","),s(" details "),n("span",{class:"token operator"},"="),s(" rpc"),n("span",{class:"token punctuation"},"."),s("termination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          self`),n("span",{class:"token punctuation"},"."),s("assertIs"),n("span",{class:"token punctuation"},"("),s("code"),n("span",{class:"token punctuation"},","),s(" StatusCode"),n("span",{class:"token punctuation"},"."),s("OK"),n("span",{class:"token punctuation"},")"),s(`


    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"books_create_book"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token comment"},"# TODO: add custom logic here"),s(`
          request `),n("span",{class:"token operator"},"="),s(" books_pb"),n("span",{class:"token punctuation"},"."),s("CreateBookRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          rpc `),n("span",{class:"token operator"},"="),s(" self"),n("span",{class:"token punctuation"},"."),s("books_server"),n("span",{class:"token punctuation"},"."),s("invoke_unary_unary"),n("span",{class:"token punctuation"},"("),s(`
              books_pb`),n("span",{class:"token punctuation"},"."),s("DESCRIPTOR"),n("span",{class:"token punctuation"},"."),s("services_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BooksService'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("methods_by_name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'CreateBook'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              invocation_metadata`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              request`),n("span",{class:"token operator"},"="),s("request"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"None"),s(`
          `),n("span",{class:"token punctuation"},")"),s(`
          response`),n("span",{class:"token punctuation"},","),s(" metadata"),n("span",{class:"token punctuation"},","),s(" code"),n("span",{class:"token punctuation"},","),s(" details "),n("span",{class:"token operator"},"="),s(" rpc"),n("span",{class:"token punctuation"},"."),s("termination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          self`),n("span",{class:"token punctuation"},"."),s("assertIs"),n("span",{class:"token punctuation"},"("),s("code"),n("span",{class:"token punctuation"},","),s(" StatusCode"),n("span",{class:"token punctuation"},"."),s("OK"),n("span",{class:"token punctuation"},")"),s(`

`)])])],-1),S=n("p",null,[n("strong",null,"Dockerfile")],-1),x=n("p",null,[s("The "),n("code",null,"Dockerfile"),s(" is where we containerize our application/server to be deployed to the cloud. At Alis, we make use of cloud run, which is why it is the terraform spec that comes as boilerplate code for deploying our Docker images to the cloud.")],-1),B=n("div",{class:"language-docker"},[n("button",{class:"copy"}),n("span",{class:"lang"},"docker"),n("pre",null,[n("code",null,[n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),s(" golang:1.17-buster "),n("span",{class:"token keyword"},"as"),s(" gobuilder")]),s(`

`),n("span",{class:"token comment"},"# We use the cloud-sdk image since it already has the correct git credential helper setup."),s(`
`),n("span",{class:"token comment"},"# Since go mod download uses git, this ensures that the go mod download finds our private repos stored on"),s(`
`),n("span",{class:"token comment"},"# Google Source Repository"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),s(" gcr.io/google.com/cloudsdktool/cloud-sdk "),n("span",{class:"token keyword"},"as"),s(" builder")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),s(),n("span",{class:"token options"},[n("span",{class:"token property"},"--from"),n("span",{class:"token punctuation"},"="),n("span",{class:"token string"},"gobuilder")]),s(" /usr/local/go/ /usr/local/go/")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"ENV"),s(" PATH="),n("span",{class:"token string"},'"/usr/local/go/bin:${PATH}"')]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"WORKDIR"),s(" /app")]),s(`

`),n("span",{class:"token comment"},"# Retrieve application dependencies."),s(`
`),n("span",{class:"token comment"},"# This allows the container build to reuse cached dependencies."),s(`
`),n("span",{class:"token comment"},"# Expecting to copy go.mod and if present go.sum."),s(`
`),n("span",{class:"token comment"},"# The .${_ORG}.dev packages are all private.  Configure GOPRIVATE as per:"),s(`
`),n("span",{class:"token comment"},"#   https://tip.golang.org/cmd/go/#hdr-Configuration_for_downloading_non_public_code"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" go env -w GOPRIVATE=go.protobuf.example.domain")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),s(" go.* ./")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" go mod download")]),s(`

`),n("span",{class:"token comment"},"# Copy local code to the container image."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),s(" . ./")]),s(`

`),n("span",{class:"token comment"},"# Build the binary."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" go build -mod=readonly -v -o server")]),s(`

`),n("span",{class:"token comment"},"# Use the official Debian slim image for a lean production container."),s(`
`),n("span",{class:"token comment"},"# https://hub.docker.com/_/debian"),s(`
`),n("span",{class:"token comment"},"# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),s(" debian:buster-slim")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y "),n("span",{class:"token operator"},"\\"),s(`
    ca-certificates && `),n("span",{class:"token operator"},"\\"),s(`
    rm -rf /var/lib/apt/lists/*`)]),s(`

`),n("span",{class:"token comment"},"# Copy the binary to the production image from the builder stage."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),s(),n("span",{class:"token options"},[n("span",{class:"token property"},"--from"),n("span",{class:"token punctuation"},"="),n("span",{class:"token string"},"builder")]),s(" /app/server /app/server")]),s(`

`),n("span",{class:"token comment"},"# Run the web service on container startup."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"CMD"),s(" ["),n("span",{class:"token string"},'"/app/server"'),s("]")]),s(`
`)])])],-1),T=n("div",{class:"language-docker"},[n("button",{class:"copy"}),n("span",{class:"lang"},"docker"),n("pre",null,[n("code",null,[n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),s(" python:3.8-slim")]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" apt-get update && apt-get upgrade -y && apt-get install -y git")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" apt-get install -y sudo && apt-get install -y build-essential")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" sudo apt-get install manpages-dev")]),s(`

`),n("span",{class:"token comment"},"# Copy local code to the container image."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"ENV"),s(" APP_HOME /app")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"WORKDIR"),s(),n("span",{class:"token variable"},"$APP_HOME")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),s(" . .")]),s(`

`),n("span",{class:"token comment"},"# Install production dependencies."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" pip3 install --upgrade setuptools")]),s(`

`),n("span",{class:"token comment"},"#RUN pip3 install other dependencies"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" pip3 install -r requirements.txt --no-cache")]),s(`

`),n("span",{class:"token comment"},"# Install the keyring library provides applications with a way to access keyring backends, meaning operating system"),s(`
`),n("span",{class:"token comment"},"# and third-party credential stores, and install the Artifact Registry backend."),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" pip3 install keyring")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" pip3 install keyrings.google-artifactregistry-auth")]),s(`

`),n("span",{class:"token comment"},"# install Alis Exchange protobufs"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" pip3 install --index-url https://europe-west1-python.pkg.dev/exmpl-org-projectid/protobuf-python/simple/ example-domain-protobuf")]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"EXPOSE"),s(" 8080")]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"CMD"),s(" ["),n("span",{class:"token string"},'"python"'),s(", "),n("span",{class:"token string"},'"server.py"'),s("]")]),s(`
`)])])],-1),R=n("h3",{id:"local-development-and-testing",tabindex:"-1"},[s("Local development and testing "),n("a",{class:"header-anchor",href:"#local-development-and-testing","aria-hidden":"true"},"#")],-1),C=n("p",null,[s("To generate stubs locally, "),n("a",{href:"https://grpc.io/docs/protoc-installation/",target:"_blank",rel:"noreferrer"},[s("install the "),n("code",null,"protoc"),s(" compiler")]),s(" and then install the language specific plugins:")],-1),I=n("ol",null,[n("li",null,[s("Ensure you have "),n("a",{href:"https://go.dev/doc/install",target:"_blank",rel:"noreferrer"},"Go installed")]),n("li",null,"Install the Go protoc plugins:")],-1),q=n("div",{class:"language-shell"},[n("button",{class:"copy"}),n("span",{class:"lang"},"shell"),n("pre",null,[n("code",null,[s("go "),n("span",{class:"token function"},"install"),s(` google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go `),n("span",{class:"token function"},"install"),s(` google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
`)])])],-1),O=n("ol",{start:"3"},[n("li",null,[s("Update your PATH so that the protoc compiler can find the plugins: "),n("code",null,'export PATH="$PATH:$(go env GOPATH)/bin"')])],-1),E=n("ol",null,[n("li",null,[s("Ensure you "),n("code",null,"python3.5"),s(" or higher installed and "),n("code",null,"pip"),s(" version 9.0.1 or higher")]),n("li",null,[s("Upgrade pip if necessary: "),n("code",null,"python -m pip install --upgrade pip")]),n("li",null,"Install gRPC and the python gRPC tools for interacting with the protoc compiler:")],-1),P=n("div",{class:"language-shell"},[n("button",{class:"copy"}),n("span",{class:"lang"},"shell"),n("pre",null,[n("code",null,[s("python "),n("span",{class:"token parameter variable"},"-m"),s(" pip "),n("span",{class:"token function"},"install"),s(` grpcio
python `),n("span",{class:"token parameter variable"},"-m"),s(" pip "),n("span",{class:"token function"},"install"),s(` grpcio-tools
`)])])],-1),G=c("",4),A=n("ol",null,[n("li",null,[s("Uncomment the line "),n("code",null,"//replace go.protobuf.example.domain => ../../../../../../xmpl/protobuf/go"),s(" in your "),n("code",null,"go.mod")]),n("li",null,[s("Delete the import for "),n("code",null,"go.protobuf.example.domain"),s(" if it exists")]),n("li",null,[s("Run "),n("code",null,"go mod tidy")])],-1),N=n("ol",null,[n("li",null,[s("Uncomment the line "),n("code",null,"# ../../../../../protobuf/python"),s(" in your requirements.txt")]),n("li",null,[s("Run "),n("code",null,"pip install -r requirements.txt")])],-1),D=n("p",null,"Otherwise, to make use of the protobufs as published in your protobuf package",-1),L=n("ol",null,[n("li",null,'Add "go.protobuf.example.domain" to your GOPRIVATE environment variable, where example.domain will be replaced by your organisations domain')],-1),U=n("div",{class:"language-shell"},[n("button",{class:"copy"}),n("span",{class:"lang"},"shell"),n("pre",null,[n("code",null,[s("go "),n("span",{class:"token function"},"env"),s(),n("span",{class:"token parameter variable"},"-w"),s(),n("span",{class:"token assign-left variable"},"GOPRIVATE"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),s("go "),n("span",{class:"token function"},"env"),s(" GOPRIVATE"),n("span",{class:"token variable"},")")]),s(`,go.protobuf.example.domain
`)])])],-1),F=n("ol",{start:"2"},[n("li",null,[s("Comment out the line "),n("code",null,"replace go.protobuf.example.domain => ../../../../../../xmpl/protobuf/go"),s(" in your "),n("code",null,"go.mod")]),n("li",null,[s("Delete the import for "),n("code",null,"go.protobuf.example.domain"),s(" if it exists")]),n("li",null,[s("Run "),n("code",null,"go mod tidy")])],-1),M=n("ol",null,[n("li",null,[s("Comment out the line "),n("code",null,"../../../../../protobuf/python"),s(" in your requirements.txt")]),n("li",null,"Run the following commands:")],-1),V=n("div",{class:"language-shell"},[n("button",{class:"copy"}),n("span",{class:"lang"},"shell"),n("pre",null,[n("code",null,[s("pip3 "),n("span",{class:"token function"},"install"),s(" keyring "),n("span",{class:"token operator"},"&&"),s(`
pip3 `),n("span",{class:"token function"},"install"),s(" keyrings.google-artifactregistry-auth "),n("span",{class:"token operator"},"&&"),s(`
pip3 `),n("span",{class:"token function"},"install"),s(` --index-url https://europe-west1-python.pkg.dev/uni-org-zkw/protobuf-python/simple/ alis-university-protobuf
`)])])],-1),j=c("",3),H=n("div",{class:"language-go"},[n("button",{class:"copy"}),n("span",{class:"lang"},"go"),n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"context"'),s(`
	pb `),n("span",{class:"token string"},'"go.protobuf.alis.university/uni/bb/services/test/v1"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc/codes"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc/status"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Create a Service object which we'll register with the Server"),s(`
`),n("span",{class:"token keyword"},"type"),s(" myService "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	pb`),n("span",{class:"token punctuation"},"."),s(`UnimplementedBooksServiceServer
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("myService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("GetBookRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// validate arguments"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// requires a name"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("InvalidArgument"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"name is a required field but was not provided"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// retrieve the object from firestore"),s(`
	object`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" firestoreClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Doc"),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("NotFound"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"book (%s) not found"'),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// the Book message to return"),s(`
	book `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
	err `),n("span",{class:"token operator"},"="),s(" object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"DataTo"),n("span",{class:"token punctuation"},"("),s("book"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// handle the error"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("AlreadyExists"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"err writing firestore data to book: %s"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" book"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("myService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"ListBooks"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("ListBooksRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("ListBooksResponse"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// obtain the books collection object"),s(`
	objects`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" firestoreClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Collection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"users"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Documents"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(` err
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// the User message to return"),s(`
	booksResponse `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("pb"),n("span",{class:"token punctuation"},"."),s("ListBooksResponse"),n("span",{class:"token punctuation"},"{"),s(`
		Books`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("objects"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(" i "),n("span",{class:"token operator"},"<"),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetPageSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		book `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
		err `),n("span",{class:"token operator"},"="),s(" objects"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"DataTo"),n("span",{class:"token punctuation"},"("),s("book"),n("span",{class:"token punctuation"},")"),s(`
		booksResponse`),n("span",{class:"token punctuation"},"."),s("Books "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("booksResponse"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBooks"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" book"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// TODO: this does not implement pagination"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" booksResponse"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("myService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"CreateBook"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("CreateBookRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("pb"),n("span",{class:"token punctuation"},"."),s("Book"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// validate arguments"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBookId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// requires a userId"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("InvalidArgument"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"book_id is a required field but was not provided"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// requires a user object"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("InvalidArgument"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"book is a required field but was not provided"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// set the resource name of the user"),s(`
	req`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"books/"'),s(),n("span",{class:"token operator"},"+"),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBookId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" firestoreClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Doc"),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Code"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" codes"),n("span",{class:"token punctuation"},"."),s("AlreadyExists "),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("AlreadyExists"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"the book (%s) already exists"'),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBookId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" status"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),s("codes"),n("span",{class:"token punctuation"},"."),s("AlreadyExists"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"failed to create book"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" req"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),$=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"INFO"),n("p",null,"Coming soon")],-1);function J(K,W,Y,z,X,Z){const o=p("tab"),e=p("tabs");return u(),i("div",null,[k,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[d]),_:1}),t(o,{name:"Python"},{default:a(()=>[m]),_:1})]),_:1}),g,f,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[h]),_:1}),t(o,{name:"Python"},{default:a(()=>[b]),_:1})]),_:1}),y,_,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[v]),_:1}),t(o,{name:"Python"},{default:a(()=>[w]),_:1})]),_:1}),S,x,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[B]),_:1}),t(o,{name:"Python"},{default:a(()=>[T]),_:1})]),_:1}),R,C,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[I,q,O]),_:1}),t(o,{name:"Python"},{default:a(()=>[E,P]),_:1})]),_:1}),G,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[A]),_:1}),t(o,{name:"Python"},{default:a(()=>[N]),_:1})]),_:1}),D,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[L,U,F]),_:1}),t(o,{name:"Python"},{default:a(()=>[M,V]),_:1})]),_:1}),j,t(e,null,{default:a(()=>[t(o,{name:"Go"},{default:a(()=>[H]),_:1}),t(o,{name:"Python"},{default:a(()=>[$]),_:1})]),_:1})])}const sn=l(r,[["render",J]]);export{nn as __pageData,sn as default};
