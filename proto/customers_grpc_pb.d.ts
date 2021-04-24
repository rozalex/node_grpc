// package: priorityconnect.customers.v1
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as customers_pb from "./customers_pb";

interface ICustomersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    extWriteCompany: ICustomersService_IExtWriteCompany;
    extDeleteCompany: ICustomersService_IExtDeleteCompany;
    readCompaniesByTenantID: ICustomersService_IReadCompaniesByTenantID;
    extWriteEmployee: ICustomersService_IExtWriteEmployee;
    extWriteUser: ICustomersService_IExtWriteUser;
    extWriteUsers: ICustomersService_IExtWriteUsers;
    extWriteContact: ICustomersService_IExtWriteContact;
    extReadUserBySubject: ICustomersService_IExtReadUserBySubject;
    extReadContactBySubject: ICustomersService_IExtReadContactBySubject;
    readAccountByEmail: ICustomersService_IReadAccountByEmail;
    readUserBySubject: ICustomersService_IReadUserBySubject;
    readContactBySubject: ICustomersService_IReadContactBySubject;
    extWritePublicKey: ICustomersService_IExtWritePublicKey;
    readPublicKey: ICustomersService_IReadPublicKey;
    extWriteTenant: ICustomersService_IExtWriteTenant;
    extReadTenantById: ICustomersService_IExtReadTenantById;
    writeTenant: ICustomersService_IWriteTenant;
    readTenantById: ICustomersService_IReadTenantById;
    readTenantByName: ICustomersService_IReadTenantByName;
    readTenantByTabulaini: ICustomersService_IReadTenantByTabulaini;
    readTenantsBySubject: ICustomersService_IReadTenantsBySubject;
    updateVersion: ICustomersService_IUpdateVersion;
    accountEmailConfirmed: ICustomersService_IAccountEmailConfirmed;
    newAccountInternal: ICustomersService_INewAccountInternal;
    loginInternal: ICustomersService_ILoginInternal;
    loginExternal: ICustomersService_ILoginExternal;
    sendResetPassword: ICustomersService_ISendResetPassword;
    resetPassword: ICustomersService_IResetPassword;
    getResetContext: ICustomersService_IGetResetContext;
    extWriteOidcDefs: ICustomersService_IExtWriteOidcDefs;
    readOidcDefsByName: ICustomersService_IReadOidcDefsByName;
    extCloudTabulaAuthURL: ICustomersService_IExtCloudTabulaAuthURL;
}

interface ICustomersService_IExtWriteCompany extends grpc.MethodDefinition<customers_pb.CompanyData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteCompany";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.CompanyData>;
    requestDeserialize: grpc.deserialize<customers_pb.CompanyData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IExtDeleteCompany extends grpc.MethodDefinition<customers_pb.CompanyData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/ExtDeleteCompany";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.CompanyData>;
    requestDeserialize: grpc.deserialize<customers_pb.CompanyData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IReadCompaniesByTenantID extends grpc.MethodDefinition<customers_pb.String, customers_pb.CompanyData> {
    path: "/priorityconnect.customers.v1.Customers/ReadCompaniesByTenantID";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.CompanyData>;
    responseDeserialize: grpc.deserialize<customers_pb.CompanyData>;
}
interface ICustomersService_IExtWriteEmployee extends grpc.MethodDefinition<customers_pb.EmployeeData, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteEmployee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.EmployeeData>;
    requestDeserialize: grpc.deserialize<customers_pb.EmployeeData>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_IExtWriteUser extends grpc.MethodDefinition<customers_pb.UserData, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.UserData>;
    requestDeserialize: grpc.deserialize<customers_pb.UserData>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_IExtWriteUsers extends grpc.MethodDefinition<customers_pb.UserDataList, customers_pb.Strings> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.UserDataList>;
    requestDeserialize: grpc.deserialize<customers_pb.UserDataList>;
    responseSerialize: grpc.serialize<customers_pb.Strings>;
    responseDeserialize: grpc.deserialize<customers_pb.Strings>;
}
interface ICustomersService_IExtWriteContact extends grpc.MethodDefinition<customers_pb.ContactData, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.ContactData>;
    requestDeserialize: grpc.deserialize<customers_pb.ContactData>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_IExtReadUserBySubject extends grpc.MethodDefinition<customers_pb.UserDataRequest, customers_pb.UserData> {
    path: "/priorityconnect.customers.v1.Customers/ExtReadUserBySubject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.UserDataRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.UserDataRequest>;
    responseSerialize: grpc.serialize<customers_pb.UserData>;
    responseDeserialize: grpc.deserialize<customers_pb.UserData>;
}
interface ICustomersService_IExtReadContactBySubject extends grpc.MethodDefinition<customers_pb.ContactDataRequest, customers_pb.ContactData> {
    path: "/priorityconnect.customers.v1.Customers/ExtReadContactBySubject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.ContactDataRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.ContactDataRequest>;
    responseSerialize: grpc.serialize<customers_pb.ContactData>;
    responseDeserialize: grpc.deserialize<customers_pb.ContactData>;
}
interface ICustomersService_IReadAccountByEmail extends grpc.MethodDefinition<customers_pb.String, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ReadAccountByEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_IReadUserBySubject extends grpc.MethodDefinition<customers_pb.UserDataRequest, customers_pb.UserData> {
    path: "/priorityconnect.customers.v1.Customers/ReadUserBySubject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.UserDataRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.UserDataRequest>;
    responseSerialize: grpc.serialize<customers_pb.UserData>;
    responseDeserialize: grpc.deserialize<customers_pb.UserData>;
}
interface ICustomersService_IReadContactBySubject extends grpc.MethodDefinition<customers_pb.ContactDataRequest, customers_pb.ContactData> {
    path: "/priorityconnect.customers.v1.Customers/ReadContactBySubject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.ContactDataRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.ContactDataRequest>;
    responseSerialize: grpc.serialize<customers_pb.ContactData>;
    responseDeserialize: grpc.deserialize<customers_pb.ContactData>;
}
interface ICustomersService_IExtWritePublicKey extends grpc.MethodDefinition<customers_pb.KeyRequest, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ExtWritePublicKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.KeyRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.KeyRequest>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_IReadPublicKey extends grpc.MethodDefinition<customers_pb.KeyRequest, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ReadPublicKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.KeyRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.KeyRequest>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_IExtWriteTenant extends grpc.MethodDefinition<customers_pb.TenantData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteTenant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.TenantData>;
    requestDeserialize: grpc.deserialize<customers_pb.TenantData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IExtReadTenantById extends grpc.MethodDefinition<customers_pb.String, customers_pb.TenantData> {
    path: "/priorityconnect.customers.v1.Customers/ExtReadTenantById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.TenantData>;
    responseDeserialize: grpc.deserialize<customers_pb.TenantData>;
}
interface ICustomersService_IWriteTenant extends grpc.MethodDefinition<customers_pb.TenantData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/WriteTenant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.TenantData>;
    requestDeserialize: grpc.deserialize<customers_pb.TenantData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IReadTenantById extends grpc.MethodDefinition<customers_pb.String, customers_pb.TenantData> {
    path: "/priorityconnect.customers.v1.Customers/ReadTenantById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.TenantData>;
    responseDeserialize: grpc.deserialize<customers_pb.TenantData>;
}
interface ICustomersService_IReadTenantByName extends grpc.MethodDefinition<customers_pb.String, customers_pb.TenantData> {
    path: "/priorityconnect.customers.v1.Customers/ReadTenantByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.TenantData>;
    responseDeserialize: grpc.deserialize<customers_pb.TenantData>;
}
interface ICustomersService_IReadTenantByTabulaini extends grpc.MethodDefinition<customers_pb.String, customers_pb.TenantData> {
    path: "/priorityconnect.customers.v1.Customers/ReadTenantByTabulaini";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.TenantData>;
    responseDeserialize: grpc.deserialize<customers_pb.TenantData>;
}
interface ICustomersService_IReadTenantsBySubject extends grpc.MethodDefinition<customers_pb.String, customers_pb.TenantData> {
    path: "/priorityconnect.customers.v1.Customers/ReadTenantsBySubject";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.TenantData>;
    responseDeserialize: grpc.deserialize<customers_pb.TenantData>;
}
interface ICustomersService_IUpdateVersion extends grpc.MethodDefinition<customers_pb.TenantData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/UpdateVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.TenantData>;
    requestDeserialize: grpc.deserialize<customers_pb.TenantData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IAccountEmailConfirmed extends grpc.MethodDefinition<customers_pb.String, customers_pb.EmailConfirmedResponse> {
    path: "/priorityconnect.customers.v1.Customers/AccountEmailConfirmed";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.EmailConfirmedResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.EmailConfirmedResponse>;
}
interface ICustomersService_INewAccountInternal extends grpc.MethodDefinition<customers_pb.InternalAccountData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/NewAccountInternal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.InternalAccountData>;
    requestDeserialize: grpc.deserialize<customers_pb.InternalAccountData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_ILoginInternal extends grpc.MethodDefinition<customers_pb.LoginInternalData, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/LoginInternal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.LoginInternalData>;
    requestDeserialize: grpc.deserialize<customers_pb.LoginInternalData>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_ILoginExternal extends grpc.MethodDefinition<customers_pb.LoginExternalData, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/LoginExternal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.LoginExternalData>;
    requestDeserialize: grpc.deserialize<customers_pb.LoginExternalData>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}
interface ICustomersService_ISendResetPassword extends grpc.MethodDefinition<customers_pb.ResetContext, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/SendResetPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.ResetContext>;
    requestDeserialize: grpc.deserialize<customers_pb.ResetContext>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IResetPassword extends grpc.MethodDefinition<customers_pb.ResetPasswordData, customers_pb.EmailConfirmedResponse> {
    path: "/priorityconnect.customers.v1.Customers/ResetPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.ResetPasswordData>;
    requestDeserialize: grpc.deserialize<customers_pb.ResetPasswordData>;
    responseSerialize: grpc.serialize<customers_pb.EmailConfirmedResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.EmailConfirmedResponse>;
}
interface ICustomersService_IGetResetContext extends grpc.MethodDefinition<customers_pb.String, customers_pb.ResetContext> {
    path: "/priorityconnect.customers.v1.Customers/GetResetContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.ResetContext>;
    responseDeserialize: grpc.deserialize<customers_pb.ResetContext>;
}
interface ICustomersService_IExtWriteOidcDefs extends grpc.MethodDefinition<customers_pb.OidcData, customers_pb.Bool> {
    path: "/priorityconnect.customers.v1.Customers/ExtWriteOidcDefs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.OidcData>;
    requestDeserialize: grpc.deserialize<customers_pb.OidcData>;
    responseSerialize: grpc.serialize<customers_pb.Bool>;
    responseDeserialize: grpc.deserialize<customers_pb.Bool>;
}
interface ICustomersService_IReadOidcDefsByName extends grpc.MethodDefinition<customers_pb.String, customers_pb.OidcData> {
    path: "/priorityconnect.customers.v1.Customers/ReadOidcDefsByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.OidcData>;
    responseDeserialize: grpc.deserialize<customers_pb.OidcData>;
}
interface ICustomersService_IExtCloudTabulaAuthURL extends grpc.MethodDefinition<customers_pb.String, customers_pb.String> {
    path: "/priorityconnect.customers.v1.Customers/ExtCloudTabulaAuthURL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<customers_pb.String>;
    requestDeserialize: grpc.deserialize<customers_pb.String>;
    responseSerialize: grpc.serialize<customers_pb.String>;
    responseDeserialize: grpc.deserialize<customers_pb.String>;
}

export const CustomersService: ICustomersService;

export interface ICustomersServer {
    extWriteCompany: grpc.handleUnaryCall<customers_pb.CompanyData, customers_pb.Bool>;
    extDeleteCompany: grpc.handleUnaryCall<customers_pb.CompanyData, customers_pb.Bool>;
    readCompaniesByTenantID: grpc.handleServerStreamingCall<customers_pb.String, customers_pb.CompanyData>;
    extWriteEmployee: grpc.handleUnaryCall<customers_pb.EmployeeData, customers_pb.String>;
    extWriteUser: grpc.handleUnaryCall<customers_pb.UserData, customers_pb.String>;
    extWriteUsers: grpc.handleUnaryCall<customers_pb.UserDataList, customers_pb.Strings>;
    extWriteContact: grpc.handleUnaryCall<customers_pb.ContactData, customers_pb.String>;
    extReadUserBySubject: grpc.handleUnaryCall<customers_pb.UserDataRequest, customers_pb.UserData>;
    extReadContactBySubject: grpc.handleUnaryCall<customers_pb.ContactDataRequest, customers_pb.ContactData>;
    readAccountByEmail: grpc.handleUnaryCall<customers_pb.String, customers_pb.String>;
    readUserBySubject: grpc.handleUnaryCall<customers_pb.UserDataRequest, customers_pb.UserData>;
    readContactBySubject: grpc.handleUnaryCall<customers_pb.ContactDataRequest, customers_pb.ContactData>;
    extWritePublicKey: grpc.handleUnaryCall<customers_pb.KeyRequest, customers_pb.String>;
    readPublicKey: grpc.handleUnaryCall<customers_pb.KeyRequest, customers_pb.String>;
    extWriteTenant: grpc.handleUnaryCall<customers_pb.TenantData, customers_pb.Bool>;
    extReadTenantById: grpc.handleUnaryCall<customers_pb.String, customers_pb.TenantData>;
    writeTenant: grpc.handleUnaryCall<customers_pb.TenantData, customers_pb.Bool>;
    readTenantById: grpc.handleUnaryCall<customers_pb.String, customers_pb.TenantData>;
    readTenantByName: grpc.handleUnaryCall<customers_pb.String, customers_pb.TenantData>;
    readTenantByTabulaini: grpc.handleUnaryCall<customers_pb.String, customers_pb.TenantData>;
    readTenantsBySubject: grpc.handleServerStreamingCall<customers_pb.String, customers_pb.TenantData>;
    updateVersion: grpc.handleUnaryCall<customers_pb.TenantData, customers_pb.Bool>;
    accountEmailConfirmed: grpc.handleUnaryCall<customers_pb.String, customers_pb.EmailConfirmedResponse>;
    newAccountInternal: grpc.handleUnaryCall<customers_pb.InternalAccountData, customers_pb.Bool>;
    loginInternal: grpc.handleUnaryCall<customers_pb.LoginInternalData, customers_pb.String>;
    loginExternal: grpc.handleUnaryCall<customers_pb.LoginExternalData, customers_pb.String>;
    sendResetPassword: grpc.handleUnaryCall<customers_pb.ResetContext, customers_pb.Bool>;
    resetPassword: grpc.handleUnaryCall<customers_pb.ResetPasswordData, customers_pb.EmailConfirmedResponse>;
    getResetContext: grpc.handleUnaryCall<customers_pb.String, customers_pb.ResetContext>;
    extWriteOidcDefs: grpc.handleUnaryCall<customers_pb.OidcData, customers_pb.Bool>;
    readOidcDefsByName: grpc.handleUnaryCall<customers_pb.String, customers_pb.OidcData>;
    extCloudTabulaAuthURL: grpc.handleUnaryCall<customers_pb.String, customers_pb.String>;
}

export interface ICustomersClient {
    extWriteCompany(request: customers_pb.CompanyData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extWriteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extWriteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extDeleteCompany(request: customers_pb.CompanyData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extDeleteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extDeleteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    readCompaniesByTenantID(request: customers_pb.String, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.CompanyData>;
    readCompaniesByTenantID(request: customers_pb.String, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.CompanyData>;
    extWriteEmployee(request: customers_pb.EmployeeData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteEmployee(request: customers_pb.EmployeeData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteEmployee(request: customers_pb.EmployeeData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteUser(request: customers_pb.UserData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteUser(request: customers_pb.UserData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteUser(request: customers_pb.UserData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteUsers(request: customers_pb.UserDataList, callback: (error: grpc.ServiceError | null, response: customers_pb.Strings) => void): grpc.ClientUnaryCall;
    extWriteUsers(request: customers_pb.UserDataList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Strings) => void): grpc.ClientUnaryCall;
    extWriteUsers(request: customers_pb.UserDataList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Strings) => void): grpc.ClientUnaryCall;
    extWriteContact(request: customers_pb.ContactData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteContact(request: customers_pb.ContactData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteContact(request: customers_pb.ContactData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extReadUserBySubject(request: customers_pb.UserDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    extReadUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    extReadUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    extReadContactBySubject(request: customers_pb.ContactDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    extReadContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    extReadContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    readAccountByEmail(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    readAccountByEmail(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    readAccountByEmail(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    readUserBySubject(request: customers_pb.UserDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    readUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    readUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    readContactBySubject(request: customers_pb.ContactDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    readContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    readContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    extWritePublicKey(request: customers_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWritePublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWritePublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    readPublicKey(request: customers_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    readPublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    readPublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extWriteTenant(request: customers_pb.TenantData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extWriteTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extWriteTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extReadTenantById(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    extReadTenantById(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    extReadTenantById(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    writeTenant(request: customers_pb.TenantData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    writeTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    writeTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    readTenantById(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantById(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantById(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantByName(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantByName(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantByName(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantByTabulaini(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantByTabulaini(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantByTabulaini(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    readTenantsBySubject(request: customers_pb.String, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.TenantData>;
    readTenantsBySubject(request: customers_pb.String, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.TenantData>;
    updateVersion(request: customers_pb.TenantData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    updateVersion(request: customers_pb.TenantData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    updateVersion(request: customers_pb.TenantData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    accountEmailConfirmed(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    accountEmailConfirmed(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    accountEmailConfirmed(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    newAccountInternal(request: customers_pb.InternalAccountData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    newAccountInternal(request: customers_pb.InternalAccountData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    newAccountInternal(request: customers_pb.InternalAccountData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    loginInternal(request: customers_pb.LoginInternalData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    loginInternal(request: customers_pb.LoginInternalData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    loginInternal(request: customers_pb.LoginInternalData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    loginExternal(request: customers_pb.LoginExternalData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    loginExternal(request: customers_pb.LoginExternalData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    loginExternal(request: customers_pb.LoginExternalData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    sendResetPassword(request: customers_pb.ResetContext, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    sendResetPassword(request: customers_pb.ResetContext, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    sendResetPassword(request: customers_pb.ResetContext, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    resetPassword(request: customers_pb.ResetPasswordData, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    resetPassword(request: customers_pb.ResetPasswordData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    resetPassword(request: customers_pb.ResetPasswordData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    getResetContext(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.ResetContext) => void): grpc.ClientUnaryCall;
    getResetContext(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.ResetContext) => void): grpc.ClientUnaryCall;
    getResetContext(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.ResetContext) => void): grpc.ClientUnaryCall;
    extWriteOidcDefs(request: customers_pb.OidcData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extWriteOidcDefs(request: customers_pb.OidcData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    extWriteOidcDefs(request: customers_pb.OidcData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    readOidcDefsByName(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.OidcData) => void): grpc.ClientUnaryCall;
    readOidcDefsByName(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.OidcData) => void): grpc.ClientUnaryCall;
    readOidcDefsByName(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.OidcData) => void): grpc.ClientUnaryCall;
    extCloudTabulaAuthURL(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extCloudTabulaAuthURL(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    extCloudTabulaAuthURL(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
}

export class CustomersClient extends grpc.Client implements ICustomersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public extWriteCompany(request: customers_pb.CompanyData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extWriteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extWriteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extDeleteCompany(request: customers_pb.CompanyData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extDeleteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extDeleteCompany(request: customers_pb.CompanyData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public readCompaniesByTenantID(request: customers_pb.String, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.CompanyData>;
    public readCompaniesByTenantID(request: customers_pb.String, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.CompanyData>;
    public extWriteEmployee(request: customers_pb.EmployeeData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteEmployee(request: customers_pb.EmployeeData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteEmployee(request: customers_pb.EmployeeData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteUser(request: customers_pb.UserData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteUser(request: customers_pb.UserData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteUser(request: customers_pb.UserData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteUsers(request: customers_pb.UserDataList, callback: (error: grpc.ServiceError | null, response: customers_pb.Strings) => void): grpc.ClientUnaryCall;
    public extWriteUsers(request: customers_pb.UserDataList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Strings) => void): grpc.ClientUnaryCall;
    public extWriteUsers(request: customers_pb.UserDataList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Strings) => void): grpc.ClientUnaryCall;
    public extWriteContact(request: customers_pb.ContactData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteContact(request: customers_pb.ContactData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteContact(request: customers_pb.ContactData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extReadUserBySubject(request: customers_pb.UserDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    public extReadUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    public extReadUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    public extReadContactBySubject(request: customers_pb.ContactDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    public extReadContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    public extReadContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    public readAccountByEmail(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public readAccountByEmail(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public readAccountByEmail(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public readUserBySubject(request: customers_pb.UserDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    public readUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    public readUserBySubject(request: customers_pb.UserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.UserData) => void): grpc.ClientUnaryCall;
    public readContactBySubject(request: customers_pb.ContactDataRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    public readContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    public readContactBySubject(request: customers_pb.ContactDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.ContactData) => void): grpc.ClientUnaryCall;
    public extWritePublicKey(request: customers_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWritePublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWritePublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public readPublicKey(request: customers_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public readPublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public readPublicKey(request: customers_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extWriteTenant(request: customers_pb.TenantData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extWriteTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extWriteTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extReadTenantById(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public extReadTenantById(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public extReadTenantById(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public writeTenant(request: customers_pb.TenantData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public writeTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public writeTenant(request: customers_pb.TenantData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public readTenantById(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantById(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantById(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantByName(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantByName(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantByName(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantByTabulaini(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantByTabulaini(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantByTabulaini(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.TenantData) => void): grpc.ClientUnaryCall;
    public readTenantsBySubject(request: customers_pb.String, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.TenantData>;
    public readTenantsBySubject(request: customers_pb.String, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customers_pb.TenantData>;
    public updateVersion(request: customers_pb.TenantData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public updateVersion(request: customers_pb.TenantData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public updateVersion(request: customers_pb.TenantData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public accountEmailConfirmed(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    public accountEmailConfirmed(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    public accountEmailConfirmed(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    public newAccountInternal(request: customers_pb.InternalAccountData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public newAccountInternal(request: customers_pb.InternalAccountData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public newAccountInternal(request: customers_pb.InternalAccountData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public loginInternal(request: customers_pb.LoginInternalData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public loginInternal(request: customers_pb.LoginInternalData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public loginInternal(request: customers_pb.LoginInternalData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public loginExternal(request: customers_pb.LoginExternalData, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public loginExternal(request: customers_pb.LoginExternalData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public loginExternal(request: customers_pb.LoginExternalData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public sendResetPassword(request: customers_pb.ResetContext, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public sendResetPassword(request: customers_pb.ResetContext, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public sendResetPassword(request: customers_pb.ResetContext, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public resetPassword(request: customers_pb.ResetPasswordData, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    public resetPassword(request: customers_pb.ResetPasswordData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    public resetPassword(request: customers_pb.ResetPasswordData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.EmailConfirmedResponse) => void): grpc.ClientUnaryCall;
    public getResetContext(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.ResetContext) => void): grpc.ClientUnaryCall;
    public getResetContext(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.ResetContext) => void): grpc.ClientUnaryCall;
    public getResetContext(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.ResetContext) => void): grpc.ClientUnaryCall;
    public extWriteOidcDefs(request: customers_pb.OidcData, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extWriteOidcDefs(request: customers_pb.OidcData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public extWriteOidcDefs(request: customers_pb.OidcData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Bool) => void): grpc.ClientUnaryCall;
    public readOidcDefsByName(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.OidcData) => void): grpc.ClientUnaryCall;
    public readOidcDefsByName(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.OidcData) => void): grpc.ClientUnaryCall;
    public readOidcDefsByName(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.OidcData) => void): grpc.ClientUnaryCall;
    public extCloudTabulaAuthURL(request: customers_pb.String, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extCloudTabulaAuthURL(request: customers_pb.String, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
    public extCloudTabulaAuthURL(request: customers_pb.String, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.String) => void): grpc.ClientUnaryCall;
}
