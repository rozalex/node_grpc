// package: priorityconnect.license.v1
// file: license.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as license_pb from "./license_pb";

interface ILicensesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    extWriteLicense: ILicensesService_IExtWriteLicense;
    moduleValid: ILicensesService_IModuleValid;
    assapiValid: ILicensesService_IAssapiValid;
    licenseEntryByKey: ILicensesService_ILicenseEntryByKey;
}

interface ILicensesService_IExtWriteLicense extends grpc.MethodDefinition<license_pb.LicenseData, license_pb.LicenseResult> {
    path: "/priorityconnect.license.v1.Licenses/ExtWriteLicense";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<license_pb.LicenseData>;
    requestDeserialize: grpc.deserialize<license_pb.LicenseData>;
    responseSerialize: grpc.serialize<license_pb.LicenseResult>;
    responseDeserialize: grpc.deserialize<license_pb.LicenseResult>;
}
interface ILicensesService_IModuleValid extends grpc.MethodDefinition<license_pb.ModuleCheckRequest, license_pb.ModuleCheckResult> {
    path: "/priorityconnect.license.v1.Licenses/ModuleValid";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<license_pb.ModuleCheckRequest>;
    requestDeserialize: grpc.deserialize<license_pb.ModuleCheckRequest>;
    responseSerialize: grpc.serialize<license_pb.ModuleCheckResult>;
    responseDeserialize: grpc.deserialize<license_pb.ModuleCheckResult>;
}
interface ILicensesService_IAssapiValid extends grpc.MethodDefinition<license_pb.AsapiCheckRequest, license_pb.ModuleCheckResult> {
    path: "/priorityconnect.license.v1.Licenses/AssapiValid";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<license_pb.AsapiCheckRequest>;
    requestDeserialize: grpc.deserialize<license_pb.AsapiCheckRequest>;
    responseSerialize: grpc.serialize<license_pb.ModuleCheckResult>;
    responseDeserialize: grpc.deserialize<license_pb.ModuleCheckResult>;
}
interface ILicensesService_ILicenseEntryByKey extends grpc.MethodDefinition<license_pb.LicenseEntryRequest, license_pb.LicenseEntryResponse> {
    path: "/priorityconnect.license.v1.Licenses/LicenseEntryByKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<license_pb.LicenseEntryRequest>;
    requestDeserialize: grpc.deserialize<license_pb.LicenseEntryRequest>;
    responseSerialize: grpc.serialize<license_pb.LicenseEntryResponse>;
    responseDeserialize: grpc.deserialize<license_pb.LicenseEntryResponse>;
}

export const LicensesService: ILicensesService;

export interface ILicensesServer {
    extWriteLicense: grpc.handleUnaryCall<license_pb.LicenseData, license_pb.LicenseResult>;
    moduleValid: grpc.handleUnaryCall<license_pb.ModuleCheckRequest, license_pb.ModuleCheckResult>;
    assapiValid: grpc.handleUnaryCall<license_pb.AsapiCheckRequest, license_pb.ModuleCheckResult>;
    licenseEntryByKey: grpc.handleUnaryCall<license_pb.LicenseEntryRequest, license_pb.LicenseEntryResponse>;
}

export interface ILicensesClient {
    extWriteLicense(request: license_pb.LicenseData, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseResult) => void): grpc.ClientUnaryCall;
    extWriteLicense(request: license_pb.LicenseData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseResult) => void): grpc.ClientUnaryCall;
    extWriteLicense(request: license_pb.LicenseData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseResult) => void): grpc.ClientUnaryCall;
    moduleValid(request: license_pb.ModuleCheckRequest, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    moduleValid(request: license_pb.ModuleCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    moduleValid(request: license_pb.ModuleCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    assapiValid(request: license_pb.AsapiCheckRequest, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    assapiValid(request: license_pb.AsapiCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    assapiValid(request: license_pb.AsapiCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    licenseEntryByKey(request: license_pb.LicenseEntryRequest, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseEntryResponse) => void): grpc.ClientUnaryCall;
    licenseEntryByKey(request: license_pb.LicenseEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseEntryResponse) => void): grpc.ClientUnaryCall;
    licenseEntryByKey(request: license_pb.LicenseEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseEntryResponse) => void): grpc.ClientUnaryCall;
}

export class LicensesClient extends grpc.Client implements ILicensesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public extWriteLicense(request: license_pb.LicenseData, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseResult) => void): grpc.ClientUnaryCall;
    public extWriteLicense(request: license_pb.LicenseData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseResult) => void): grpc.ClientUnaryCall;
    public extWriteLicense(request: license_pb.LicenseData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseResult) => void): grpc.ClientUnaryCall;
    public moduleValid(request: license_pb.ModuleCheckRequest, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    public moduleValid(request: license_pb.ModuleCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    public moduleValid(request: license_pb.ModuleCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    public assapiValid(request: license_pb.AsapiCheckRequest, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    public assapiValid(request: license_pb.AsapiCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    public assapiValid(request: license_pb.AsapiCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.ModuleCheckResult) => void): grpc.ClientUnaryCall;
    public licenseEntryByKey(request: license_pb.LicenseEntryRequest, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseEntryResponse) => void): grpc.ClientUnaryCall;
    public licenseEntryByKey(request: license_pb.LicenseEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseEntryResponse) => void): grpc.ClientUnaryCall;
    public licenseEntryByKey(request: license_pb.LicenseEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: license_pb.LicenseEntryResponse) => void): grpc.ClientUnaryCall;
}
