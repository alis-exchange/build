---
title: Alis Build Quickstart
---

# Welcome to the Alis Build platform

>**_"Our job as builders is to create the world as it could be."_** - <a href="https://farmerandfarmer.org/mastery/builder.html" target="_blank">Sep Kamvar</a>

The Alis Build platform enables individuals and teams to build their own digital innovations.

Developing high-quality software requires meeting several demanding requirements such as scalability, accessibility, security, usability, and interoperability with other digital services. However, these requirements entail significant costs and expertise, particularly at a larger scale, which can create daunting barriers to entry for both individuals and organizations.

While there are existing technologies and standards that could reduce these barriers, they are currently disjointed and require considerable effort to consolidate and effectively leverage before their benefits can be realized. To address this issue, we have carefully analyzed these complex problems and identified the best open-source technologies and standards. By integrating these resources, we aim to make it easier for users to build innovative solutions by following three simple steps: define, build, and deploy.

Our aim is to make it accessible for you to build your own innovation by following the three easy steps: _define, build and deploy_.

## Experience it yourself

Experience the simplicity of _define_, _build_ and _deploy_ that Alis Build enables by following
the example.

This example is derived from the [gRPC quickstart documentation](https://grpc.io/docs/languages/go/quickstart/).

### Before you start

1. Ensure that you have installed the [Alis CLI](command-line-interface.md)
2. Ensure that you have [installed Go](https://go.dev/doc/install)
3. From your terminal, create a new directory and navigate to it

<tabs>
<tab name="MacOS/Linux">

```bash
mkdir helloworld
cd helloworld
```
</tab>
<tab name="Windows">

```bash
mkdir helloworld
cd helloworld
```
</tab>
</tabs>

## Step 1. Define

Defining things properly is the cornerstone of what we build. We make use of
[Protocol Buffers](../references/core-technologies.md#protocol-buffers) to define everything that we do (`services` and `methods`)
and interact with (_data structures_ specified as `messages`).

From your terminal, run the command:
```bash
alis define helloworld.v1
```

The response should be similar to that shown below.
![](img/introduction-proto-init.gif)

The above command added a `service.proto` file in the `helloworld` directory. Edit this file to contain
the content shown below.

```protobuf
syntax = "proto3";

package helloworld.v1;

option go_package = "google.golang.org/grpc/examples/helloworld/helloworld/v1";

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  // The name of the user
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  // The greeting message
  string message = 1;
}
```

Now that everything is defined, we can _build_ the service.

## Step 2. Build

Having a well-defined source of truth in the form of the proto file,
allows for the auto-generation of language-specific type definitions and scaffolding
for adding business logic, amongst other benefits. These features make it simple for
developers to only focus on adding business logic.

We will leverage these to build the `Greeter` service by running the following command
and selecting one or more of the auto-generated options provided.

```bash
alis build
```

:::warning
The above command requires you to be in a directory containing a single proto file,
ie. the `helloworld` directory containing the `service.proto` file.
:::

The flow should be similar to that depicted below, in which only `Go` was selected.
![](img/introduction-proto-gen.gif)

This commands adds a set of `server` and `client` boilerplate files in the `helloworld` directory,
under the selected languages that contains boilerplate code such as to only add the business logic.

To build the logic, open the desired language directory in your IDE and follow the steps below.

<tabs>
<tab name="Go">

1. Ensure that you have executed `go mod tidy` in the `server` directory

2. Open the `server/methods.go` file and fill in the logic as follows:

![](img/introduction-implementation-go.gif)

:::details Complete file

```go
	package main

	import (
		"context"

		pb "helloworld.v1/internal/protobufs"
	)

	type myGreeter struct {
		pb.UnimplementedGreeterServer
	}

	func (s *myGreeter) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
		msg := "Hello, " + req.GetName()

		return &pb.HelloReply{Message: msg}, nil
	}

```

:::

</tab>
</tabs>

Notice how the definitions from the `service.proto` file travels with the code. This
greatly boosts developer productivity as:
1. The _define_ step, which contains the documentation, is not an afterthought but is integral to the development process.
2. These definitions are shipped with the code, providing developers with the types and documentation they require in their IDE.

Both these factors contribute to enforcing good development practices and greatly improves
developer and business productivity.

## Step 3. Deploy

Once built, the logic can be deployed and consumed by clients in the way that they want.

Similar to the server, Alis Build also auto-generates type definitions for the supported languages,
making consumption of services feel native.

Add simple logic in your language of choice to consume the `greeter` service.

<tabs>
<tab name="Go">

1. Ensure that you have executed `go mod tidy` in the `client` directory

2. Open the `client/main.go` file and fill in the logic as follows:

![](img/introduction-consumption-go.gif)

:::details Complete file

```go
package main

import (
	"context"
	"fmt"
	"log"

	pb "client/internal/protobufs"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:8080", grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	GreeterClient := pb.NewGreeterClient(conn)
	resp, _ := GreeterClient.SayHello(context.Background(), &pb.HelloRequest{Name: "Bob"})

	fmt.Println(resp.GetMessage())

}

```

:::

</tab>
</tabs>


## Test it out

Now that we have _defined_ our service; _built_ the logic; and added code to demonstrate the consumption experience on _deploy_, we can now
spin up the server and make a hit from the client to see this in action.

<tabs>
<tab name="Go">

### Start the server

1. Open the terminal in the `helloworld/go/server` directory
2. Run the command `go run main.go`, which should give a response similar to that below.

![](img/introduction-test-server.gif)

### Consume the service

1. Open the terminal in the `helloworld/go/client` directory
2. Run the command `go run main.go`, which should give a response similar to that below.

![](img/introduction-test-client.gif)

</tab>
</tabs>


[//]: # (TODO: Add back once CLI is updated to reflect other languages)
[//]: # (## Support for additional languages)

[//]: # ()
[//]: # (We are constantly working on expanding the auto-generated functionality such as demonstrated above.)

[//]: # ()
[//]: # (While we may not have full code boilerplate generation support for all available languages, you are still able)

[//]: # (to generate type definitions for a wider range of languages.)

[//]: # ()
[//]: # (### Test it out)

[//]: # ()
[//]: # (In the directory containing a `.proto` file, run the following command to generate the types:)

[//]: # ()
[//]: # (```bash)

[//]: # (alis define)

[//]: # (```)

[//]: # ()
[//]: # (::: hint)

[//]: # (The `define` command generates a new `.proto` file if none are found in the working directory.)

[//]: # (If a `.proto` file does exist, the command will use it to generate types.)

[//]: # (:::)

[//]: # ()
[//]: # (The flow should be similar to that below.)

[//]: # ()
[//]: # (![]&#40;img/introduction-proto-gen-types.gif&#41;)

[//]: # ()
[//]: # (These can now be imported in your codebase to leverage the power of the definition-first approach.)

## Want to see more?

### Define and build digital services
Check out our tutorial series on [setting up a gRPC server in Go locally](../how-to-guides/setting-up-gRPC-server.md).

**Ready for the cloud?**<br>
The Alis Build platform gives you and your organisation software development superpowers. [Experience what we make possible](developer-flow.md).

### Consume digital services
We aim to ensure that how software across the platform operates, communicates and integrates is simple and consistent. [Find out more and experience it yourself](consumer-experience.md).

### Configure your device
Already joined Alis Build? Follow the guides to set up your local environment, starting off with our [command line interface](command-line-interface.md).

#### Get in touch
Have any further questions? Or want to schedule a demo? <a href="https://alisx.com/#contact" target="_blank">Get in touch</a>.
