---
title: Alis Build Quickstart
---

# Welcome to the Alis Build platform

As builders, we use software to solve problems, to innovate, to do things in a better way. 

> **Our mission is to make building software as easy and delightful as possible so that you can focus on the problem you are trying to solve**.

The platform makes it easy to start building and easier to keep on doing it. It also provides a structure for organisations and teams. 

The core building blocks that you will come across are shown in the table below. You will be exposed to them as you start building and will feel more familiar with it. <br>


| Building block     | Description                                                                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organisation       | An organisation is a top-level resource on the platform. It is responsible for billing and managing users in the organisation along with access management.                                                                                  |
| Product            | A product is a digital product built on the platform. The majority of these adopt an API-first strategy.                                                                                                                                     |
| Protocol Buffer    | A protocol buffer is a resource that leverages the original Protocol Buffers design by Sanjay Ghemawat, Jeff Dean, and others. It is used to clearly define all the functionality and data structures of the services you want to build out. |
| Microservice       | A modular piece of logic, written as code and executed in the cloud.                                                                                                                                                                         |
| Alis Build Console | You will use the Console to manage resources, explore University modules and get started.                                                                                                                                                    |
| Alis Build CLI     | You will use the CLI as part of your workflow within your development environment.                                                                                                                                                           |

Using the console and CLI, Alis Build kick-starts and accelerates software-driven innovation by providing an opinionated approach to building systems.

# DBD Steps

Our aim is to make is simple and accessible for you to build software that solves real-world problems by following the three easy steps:
_define_, _build_ and _deploy_. These are introduced in the following sections.

## Step 1. Define

![](https://storage.googleapis.com/media.v1.modules.resources.alis-un-dev-zma.un.alis.services/orientation/define.png)

Your productivity as a Builder starts with writing the definitions associated with the problem you are trying to innovate against.

For example, if you are Building a service to provide information on Books, on Alis Build you will start by writing a definition of a Book resource including the attributes of the Book that are important.

Or, if you are building a service to perform a complicated piece of business logic, such as pricing a derivative, on Alis Build you will start by writing the definitions of the request and response resources.

Once you have defined what you care about, you will use the Alis CLI to run `alis define`, which will formally publish your definitions.

All of an organisation’s definitions are stored centrally, which provides observability across an organisation and allows for simpler communication and collaboration.

[//]: # (TODO: add something about the console?)

## Step 2. Build

![](https://storage.googleapis.com/media.v1.modules.resources.alis-un-dev-zma.un.alis.services/orientation/build.png)

Alis Build uses the things you have defined in the previous step to accelerate implementing the code that you will need to write. This is achieved by providing the scaffolding you require to start, as well as auto-generated code based on your environment.

Whether you would prefer to develop in Golang, Python or Javascript, the experience of writing the code to implement your business logic will feel very similar.

Once you have implemented the logic in your language of choice, you will use the Alis CLI to run `alis build`. This facilitates packaging up your code such that it is ready to be deployed to the cloud and ready for people to use.

[//]: # (TODO: add something about the console?)

## Step 3. Deploy

![](https://storage.googleapis.com/media.v1.modules.resources.alis-un-dev-zma.un.alis.services/orientation/deploy.png)

Alis Build makes it delightfully easy to take your logic and deploy it to one or more Cloud environment.

_Deploying_ a service simply means that you:

- Configure Cloud hardware to run your business logic, and
- Configure the necessary accompanying infrastructure needed by the service, such as databases, authentication or networking.

Again, Alis Build provides all the scaffolding and tooling required for you to simply deploy! This is done by leveraging an open source technology, called [Terraform](https://www.terraform.io/use-cases/infrastructure-as-code), to make sure that your cloud deployments are properly configured.

With the Terraform in place, you will simply run `alis deploy` to either deploy to an existing deployment or creating a new deployment.

When you create a deployment, you will be able to designate it as either a:

- **Development environment** (`DEV`). which will allow you to test things out and play around; and a
- **Production environment** (`PROD`)  which will lock the configuration of the Cloud Environment and provide a stable version of your logic to be used.

## Start building

We understand that it may seem daunting to take on new technologies. We believe that, using Alis Build, we will make it simple and accessible for you to build digital solutions to any problem you face.

To reemphasise, the concepts spoken about in this text will be reinforced as you go through the University and start building yourself.

We are excited to have you part of the builder community!

:::warning Take note
Building software using Alis Build currently requires an enterprise account. To get started, <a href="/contact" target="_blank">get in touch</a> for a free consultation
:::

## Want to see more?

### Define and build digital services

The Alis Build platform gives you and your organisation software development superpowers. [Experience what we make possible](developer-flow.md).

### Consume digital services
We aim to ensure that how software across the platform operates, communicates and integrates is simple and consistent. [Find out more and experience it yourself](consumer-experience.md).

### Configure your device
Already joined Alis Build? Follow the guides to set up your local environment, starting off with our [command line interface](command-line-interface.md).

## Get in touch
Have any further questions? Or want to schedule a demo? <a href="/contact" target="_blank">Get in touch</a>.
