// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gatwway_pb = require('./gatwway_pb.js');

function serialize_priorityconnect_gateway_v1_AttachmentRequest(arg) {
  if (!(arg instanceof gatwway_pb.AttachmentRequest)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.AttachmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_AttachmentRequest(buffer_arg) {
  return gatwway_pb.AttachmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_AttachmentResponse(arg) {
  if (!(arg instanceof gatwway_pb.AttachmentResponse)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.AttachmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_AttachmentResponse(buffer_arg) {
  return gatwway_pb.AttachmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_AuthProviderRequest(arg) {
  if (!(arg instanceof gatwway_pb.AuthProviderRequest)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.AuthProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_AuthProviderRequest(buffer_arg) {
  return gatwway_pb.AuthProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_AuthProviderResponse(arg) {
  if (!(arg instanceof gatwway_pb.AuthProviderResponse)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.AuthProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_AuthProviderResponse(buffer_arg) {
  return gatwway_pb.AuthProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_AuthUserRequest(arg) {
  if (!(arg instanceof gatwway_pb.AuthUserRequest)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.AuthUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_AuthUserRequest(buffer_arg) {
  return gatwway_pb.AuthUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_AuthUserResponse(arg) {
  if (!(arg instanceof gatwway_pb.AuthUserResponse)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.AuthUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_AuthUserResponse(buffer_arg) {
  return gatwway_pb.AuthUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_Customer2Gateway(arg) {
  if (!(arg instanceof gatwway_pb.Customer2Gateway)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.Customer2Gateway');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_Customer2Gateway(buffer_arg) {
  return gatwway_pb.Customer2Gateway.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_ExecuteCompiledRequest(arg) {
  if (!(arg instanceof gatwway_pb.ExecuteCompiledRequest)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.ExecuteCompiledRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_ExecuteCompiledRequest(buffer_arg) {
  return gatwway_pb.ExecuteCompiledRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_ExecuteCompiledResponse(arg) {
  if (!(arg instanceof gatwway_pb.ExecuteCompiledResponse)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.ExecuteCompiledResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_ExecuteCompiledResponse(buffer_arg) {
  return gatwway_pb.ExecuteCompiledResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_Gateway2Customer(arg) {
  if (!(arg instanceof gatwway_pb.Gateway2Customer)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.Gateway2Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_Gateway2Customer(buffer_arg) {
  return gatwway_pb.Gateway2Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_HTTPRequest(arg) {
  if (!(arg instanceof gatwway_pb.HTTPRequest)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.HTTPRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_HTTPRequest(buffer_arg) {
  return gatwway_pb.HTTPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_HTTPResponse(arg) {
  if (!(arg instanceof gatwway_pb.HTTPResponse)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.HTTPResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_HTTPResponse(buffer_arg) {
  return gatwway_pb.HTTPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_TextMessageRequest(arg) {
  if (!(arg instanceof gatwway_pb.TextMessageRequest)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.TextMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_TextMessageRequest(buffer_arg) {
  return gatwway_pb.TextMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_gateway_v1_TextMessageResponse(arg) {
  if (!(arg instanceof gatwway_pb.TextMessageResponse)) {
    throw new Error('Expected argument of type priorityconnect.gateway.v1.TextMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_gateway_v1_TextMessageResponse(buffer_arg) {
  return gatwway_pb.TextMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Following service is implemented by the GatewayService
var GatewayService = exports.GatewayService = {
  extCustomerStream: {
    path: '/priorityconnect.gateway.v1.Gateway/ExtCustomerStream',
    requestStream: true,
    responseStream: true,
    requestType: gatwway_pb.Customer2Gateway,
    responseType: gatwway_pb.Gateway2Customer,
    requestSerialize: serialize_priorityconnect_gateway_v1_Customer2Gateway,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_Customer2Gateway,
    responseSerialize: serialize_priorityconnect_gateway_v1_Gateway2Customer,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_Gateway2Customer,
  },
  httpRequest: {
    path: '/priorityconnect.gateway.v1.Gateway/HttpRequest',
    requestStream: false,
    responseStream: false,
    requestType: gatwway_pb.HTTPRequest,
    responseType: gatwway_pb.HTTPResponse,
    requestSerialize: serialize_priorityconnect_gateway_v1_HTTPRequest,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_HTTPRequest,
    responseSerialize: serialize_priorityconnect_gateway_v1_HTTPResponse,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_HTTPResponse,
  },
  attachment: {
    path: '/priorityconnect.gateway.v1.Gateway/Attachment',
    requestStream: false,
    responseStream: false,
    requestType: gatwway_pb.AttachmentRequest,
    responseType: gatwway_pb.AttachmentResponse,
    requestSerialize: serialize_priorityconnect_gateway_v1_AttachmentRequest,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_AttachmentRequest,
    responseSerialize: serialize_priorityconnect_gateway_v1_AttachmentResponse,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_AttachmentResponse,
  },
  authUser: {
    path: '/priorityconnect.gateway.v1.Gateway/AuthUser',
    requestStream: false,
    responseStream: false,
    requestType: gatwway_pb.AuthUserRequest,
    responseType: gatwway_pb.AuthUserResponse,
    requestSerialize: serialize_priorityconnect_gateway_v1_AuthUserRequest,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_AuthUserRequest,
    responseSerialize: serialize_priorityconnect_gateway_v1_AuthUserResponse,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_AuthUserResponse,
  },
  authProvider: {
    path: '/priorityconnect.gateway.v1.Gateway/AuthProvider',
    requestStream: false,
    responseStream: false,
    requestType: gatwway_pb.AuthProviderRequest,
    responseType: gatwway_pb.AuthProviderResponse,
    requestSerialize: serialize_priorityconnect_gateway_v1_AuthProviderRequest,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_AuthProviderRequest,
    responseSerialize: serialize_priorityconnect_gateway_v1_AuthProviderResponse,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_AuthProviderResponse,
  },
  textMessages: {
    path: '/priorityconnect.gateway.v1.Gateway/TextMessages',
    requestStream: false,
    responseStream: false,
    requestType: gatwway_pb.TextMessageRequest,
    responseType: gatwway_pb.TextMessageResponse,
    requestSerialize: serialize_priorityconnect_gateway_v1_TextMessageRequest,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_TextMessageRequest,
    responseSerialize: serialize_priorityconnect_gateway_v1_TextMessageResponse,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_TextMessageResponse,
  },
  executeCompiled: {
    path: '/priorityconnect.gateway.v1.Gateway/ExecuteCompiled',
    requestStream: false,
    responseStream: false,
    requestType: gatwway_pb.ExecuteCompiledRequest,
    responseType: gatwway_pb.ExecuteCompiledResponse,
    requestSerialize: serialize_priorityconnect_gateway_v1_ExecuteCompiledRequest,
    requestDeserialize: deserialize_priorityconnect_gateway_v1_ExecuteCompiledRequest,
    responseSerialize: serialize_priorityconnect_gateway_v1_ExecuteCompiledResponse,
    responseDeserialize: deserialize_priorityconnect_gateway_v1_ExecuteCompiledResponse,
  },
};

exports.GatewayClient = grpc.makeGenericClientConstructor(GatewayService);
