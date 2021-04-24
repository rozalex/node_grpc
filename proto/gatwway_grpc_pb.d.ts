// package: priorityconnect.gateway.v1
// file: gatwway.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as gatwway_pb from "./gatwway_pb";

interface IGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    extCustomerStream: IGatewayService_IExtCustomerStream;
    httpRequest: IGatewayService_IHttpRequest;
    attachment: IGatewayService_IAttachment;
    authUser: IGatewayService_IAuthUser;
    authProvider: IGatewayService_IAuthProvider;
    textMessages: IGatewayService_ITextMessages;
    executeCompiled: IGatewayService_IExecuteCompiled;
}

interface IGatewayService_IExtCustomerStream extends grpc.MethodDefinition<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer> {
    path: "/priorityconnect.gateway.v1.Gateway/ExtCustomerStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<gatwway_pb.Customer2Gateway>;
    requestDeserialize: grpc.deserialize<gatwway_pb.Customer2Gateway>;
    responseSerialize: grpc.serialize<gatwway_pb.Gateway2Customer>;
    responseDeserialize: grpc.deserialize<gatwway_pb.Gateway2Customer>;
}
interface IGatewayService_IHttpRequest extends grpc.MethodDefinition<gatwway_pb.HTTPRequest, gatwway_pb.HTTPResponse> {
    path: "/priorityconnect.gateway.v1.Gateway/HttpRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gatwway_pb.HTTPRequest>;
    requestDeserialize: grpc.deserialize<gatwway_pb.HTTPRequest>;
    responseSerialize: grpc.serialize<gatwway_pb.HTTPResponse>;
    responseDeserialize: grpc.deserialize<gatwway_pb.HTTPResponse>;
}
interface IGatewayService_IAttachment extends grpc.MethodDefinition<gatwway_pb.AttachmentRequest, gatwway_pb.AttachmentResponse> {
    path: "/priorityconnect.gateway.v1.Gateway/Attachment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gatwway_pb.AttachmentRequest>;
    requestDeserialize: grpc.deserialize<gatwway_pb.AttachmentRequest>;
    responseSerialize: grpc.serialize<gatwway_pb.AttachmentResponse>;
    responseDeserialize: grpc.deserialize<gatwway_pb.AttachmentResponse>;
}
interface IGatewayService_IAuthUser extends grpc.MethodDefinition<gatwway_pb.AuthUserRequest, gatwway_pb.AuthUserResponse> {
    path: "/priorityconnect.gateway.v1.Gateway/AuthUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gatwway_pb.AuthUserRequest>;
    requestDeserialize: grpc.deserialize<gatwway_pb.AuthUserRequest>;
    responseSerialize: grpc.serialize<gatwway_pb.AuthUserResponse>;
    responseDeserialize: grpc.deserialize<gatwway_pb.AuthUserResponse>;
}
interface IGatewayService_IAuthProvider extends grpc.MethodDefinition<gatwway_pb.AuthProviderRequest, gatwway_pb.AuthProviderResponse> {
    path: "/priorityconnect.gateway.v1.Gateway/AuthProvider";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gatwway_pb.AuthProviderRequest>;
    requestDeserialize: grpc.deserialize<gatwway_pb.AuthProviderRequest>;
    responseSerialize: grpc.serialize<gatwway_pb.AuthProviderResponse>;
    responseDeserialize: grpc.deserialize<gatwway_pb.AuthProviderResponse>;
}
interface IGatewayService_ITextMessages extends grpc.MethodDefinition<gatwway_pb.TextMessageRequest, gatwway_pb.TextMessageResponse> {
    path: "/priorityconnect.gateway.v1.Gateway/TextMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gatwway_pb.TextMessageRequest>;
    requestDeserialize: grpc.deserialize<gatwway_pb.TextMessageRequest>;
    responseSerialize: grpc.serialize<gatwway_pb.TextMessageResponse>;
    responseDeserialize: grpc.deserialize<gatwway_pb.TextMessageResponse>;
}
interface IGatewayService_IExecuteCompiled extends grpc.MethodDefinition<gatwway_pb.ExecuteCompiledRequest, gatwway_pb.ExecuteCompiledResponse> {
    path: "/priorityconnect.gateway.v1.Gateway/ExecuteCompiled";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gatwway_pb.ExecuteCompiledRequest>;
    requestDeserialize: grpc.deserialize<gatwway_pb.ExecuteCompiledRequest>;
    responseSerialize: grpc.serialize<gatwway_pb.ExecuteCompiledResponse>;
    responseDeserialize: grpc.deserialize<gatwway_pb.ExecuteCompiledResponse>;
}

export const GatewayService: IGatewayService;

export interface IGatewayServer {
    extCustomerStream: grpc.handleBidiStreamingCall<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer>;
    httpRequest: grpc.handleUnaryCall<gatwway_pb.HTTPRequest, gatwway_pb.HTTPResponse>;
    attachment: grpc.handleUnaryCall<gatwway_pb.AttachmentRequest, gatwway_pb.AttachmentResponse>;
    authUser: grpc.handleUnaryCall<gatwway_pb.AuthUserRequest, gatwway_pb.AuthUserResponse>;
    authProvider: grpc.handleUnaryCall<gatwway_pb.AuthProviderRequest, gatwway_pb.AuthProviderResponse>;
    textMessages: grpc.handleUnaryCall<gatwway_pb.TextMessageRequest, gatwway_pb.TextMessageResponse>;
    executeCompiled: grpc.handleUnaryCall<gatwway_pb.ExecuteCompiledRequest, gatwway_pb.ExecuteCompiledResponse>;
}

export interface IGatewayClient {
    extCustomerStream(): grpc.ClientDuplexStream<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer>;
    extCustomerStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer>;
    extCustomerStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer>;
    httpRequest(request: gatwway_pb.HTTPRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.HTTPResponse) => void): grpc.ClientUnaryCall;
    httpRequest(request: gatwway_pb.HTTPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.HTTPResponse) => void): grpc.ClientUnaryCall;
    httpRequest(request: gatwway_pb.HTTPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.HTTPResponse) => void): grpc.ClientUnaryCall;
    attachment(request: gatwway_pb.AttachmentRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AttachmentResponse) => void): grpc.ClientUnaryCall;
    attachment(request: gatwway_pb.AttachmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AttachmentResponse) => void): grpc.ClientUnaryCall;
    attachment(request: gatwway_pb.AttachmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AttachmentResponse) => void): grpc.ClientUnaryCall;
    authUser(request: gatwway_pb.AuthUserRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    authUser(request: gatwway_pb.AuthUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    authUser(request: gatwway_pb.AuthUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    authProvider(request: gatwway_pb.AuthProviderRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthProviderResponse) => void): grpc.ClientUnaryCall;
    authProvider(request: gatwway_pb.AuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthProviderResponse) => void): grpc.ClientUnaryCall;
    authProvider(request: gatwway_pb.AuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthProviderResponse) => void): grpc.ClientUnaryCall;
    textMessages(request: gatwway_pb.TextMessageRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.TextMessageResponse) => void): grpc.ClientUnaryCall;
    textMessages(request: gatwway_pb.TextMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.TextMessageResponse) => void): grpc.ClientUnaryCall;
    textMessages(request: gatwway_pb.TextMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.TextMessageResponse) => void): grpc.ClientUnaryCall;
    executeCompiled(request: gatwway_pb.ExecuteCompiledRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.ExecuteCompiledResponse) => void): grpc.ClientUnaryCall;
    executeCompiled(request: gatwway_pb.ExecuteCompiledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.ExecuteCompiledResponse) => void): grpc.ClientUnaryCall;
    executeCompiled(request: gatwway_pb.ExecuteCompiledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.ExecuteCompiledResponse) => void): grpc.ClientUnaryCall;
}

export class GatewayClient extends grpc.Client implements IGatewayClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public extCustomerStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer>;
    public extCustomerStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<gatwway_pb.Customer2Gateway, gatwway_pb.Gateway2Customer>;
    public httpRequest(request: gatwway_pb.HTTPRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.HTTPResponse) => void): grpc.ClientUnaryCall;
    public httpRequest(request: gatwway_pb.HTTPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.HTTPResponse) => void): grpc.ClientUnaryCall;
    public httpRequest(request: gatwway_pb.HTTPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.HTTPResponse) => void): grpc.ClientUnaryCall;
    public attachment(request: gatwway_pb.AttachmentRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AttachmentResponse) => void): grpc.ClientUnaryCall;
    public attachment(request: gatwway_pb.AttachmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AttachmentResponse) => void): grpc.ClientUnaryCall;
    public attachment(request: gatwway_pb.AttachmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AttachmentResponse) => void): grpc.ClientUnaryCall;
    public authUser(request: gatwway_pb.AuthUserRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    public authUser(request: gatwway_pb.AuthUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    public authUser(request: gatwway_pb.AuthUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    public authProvider(request: gatwway_pb.AuthProviderRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthProviderResponse) => void): grpc.ClientUnaryCall;
    public authProvider(request: gatwway_pb.AuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthProviderResponse) => void): grpc.ClientUnaryCall;
    public authProvider(request: gatwway_pb.AuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.AuthProviderResponse) => void): grpc.ClientUnaryCall;
    public textMessages(request: gatwway_pb.TextMessageRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.TextMessageResponse) => void): grpc.ClientUnaryCall;
    public textMessages(request: gatwway_pb.TextMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.TextMessageResponse) => void): grpc.ClientUnaryCall;
    public textMessages(request: gatwway_pb.TextMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.TextMessageResponse) => void): grpc.ClientUnaryCall;
    public executeCompiled(request: gatwway_pb.ExecuteCompiledRequest, callback: (error: grpc.ServiceError | null, response: gatwway_pb.ExecuteCompiledResponse) => void): grpc.ClientUnaryCall;
    public executeCompiled(request: gatwway_pb.ExecuteCompiledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gatwway_pb.ExecuteCompiledResponse) => void): grpc.ClientUnaryCall;
    public executeCompiled(request: gatwway_pb.ExecuteCompiledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gatwway_pb.ExecuteCompiledResponse) => void): grpc.ClientUnaryCall;
}
