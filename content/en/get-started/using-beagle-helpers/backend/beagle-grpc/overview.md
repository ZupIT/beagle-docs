---
title: "Beagle gRPC"
weight: 1
description: >-
    It is a backend Library that provides a gRPC service allowing your gRPC application to support Beagle Screens.
---

## What is gRPC?

gRPC is a new and fast growing technology to communicate different systems through a network connection. It's based on 
**HTTP 2** and is an alternative to the more common standard **REST**. The gRPC proposal is that the client interacts with the 
server through simple function calls. These functions are code automatically generated via the gRPC tool.

[Learn more...](https://grpc.io/)

## How Beagle gRPC works?

This library allows you to create Beagle applications using gRPC. It acts as a translator, converting the beagle's JSON contract 
to a protocol buffer, allowing your BFF to connect with any gRPC application. The lib provides an abstraction that implements a 
gRPC service that makes it possible to register your screens and a method that returns them to a gRPC client.
