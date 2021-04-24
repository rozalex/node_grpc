// package: priorityconnect.gateway.v1
// file: gatwway.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Header extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Header;
    getValue(): string;
    setValue(value: string): Header;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class HTTPRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): HTTPRequest;
    getRequestType(): HTTPRequest.RequestType;
    setRequestType(value: HTTPRequest.RequestType): HTTPRequest;
    getMethod(): string;
    setMethod(value: string): HTTPRequest;
    getUrl(): string;
    setUrl(value: string): HTTPRequest;
    clearHeadersList(): void;
    getHeadersList(): Array<Header>;
    setHeadersList(value: Array<Header>): HTTPRequest;
    addHeaders(value?: Header, index?: number): Header;
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): HTTPRequest;
    getUserlogin(): string;
    setUserlogin(value: string): HTTPRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPRequest): HTTPRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPRequest;
    static deserializeBinaryFromReader(message: HTTPRequest, reader: jspb.BinaryReader): HTTPRequest;
}

export namespace HTTPRequest {
    export type AsObject = {
        tenantid: string,
        requestType: HTTPRequest.RequestType,
        method: string,
        url: string,
        headersList: Array<Header.AsObject>,
        body: Uint8Array | string,
        userlogin: string,
    }

    export enum RequestType {
    PASS_THRU = 0,
    WEB_SDK = 1,
    REST_API = 2,
    SEAMLESS = 3,
    }

}

export class HTTPResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): HTTPResponse;
    clearHeadersList(): void;
    getHeadersList(): Array<Header>;
    setHeadersList(value: Array<Header>): HTTPResponse;
    addHeaders(value?: Header, index?: number): Header;
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): HTTPResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPResponse): HTTPResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPResponse;
    static deserializeBinaryFromReader(message: HTTPResponse, reader: jspb.BinaryReader): HTTPResponse;
}

export namespace HTTPResponse {
    export type AsObject = {
        code: number,
        headersList: Array<Header.AsObject>,
        body: Uint8Array | string,
    }
}

export class AttachmentRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): AttachmentRequest;
    getParentform(): string;
    setParentform(value: string): AttachmentRequest;
    getFilename(): string;
    setFilename(value: string): AttachmentRequest;
    getDname(): string;
    setDname(value: string): AttachmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AttachmentRequest): AttachmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachmentRequest;
    static deserializeBinaryFromReader(message: AttachmentRequest, reader: jspb.BinaryReader): AttachmentRequest;
}

export namespace AttachmentRequest {
    export type AsObject = {
        tenantid: string,
        parentform: string,
        filename: string,
        dname: string,
    }
}

export class AttachmentResponse extends jspb.Message { 
    getFilename(): string;
    setFilename(value: string): AttachmentResponse;
    getFiledata(): Uint8Array | string;
    getFiledata_asU8(): Uint8Array;
    getFiledata_asB64(): string;
    setFiledata(value: Uint8Array | string): AttachmentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AttachmentResponse): AttachmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachmentResponse;
    static deserializeBinaryFromReader(message: AttachmentResponse, reader: jspb.BinaryReader): AttachmentResponse;
}

export namespace AttachmentResponse {
    export type AsObject = {
        filename: string,
        filedata: Uint8Array | string,
    }
}

export class Ping extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ping.AsObject;
    static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ping;
    static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
    export type AsObject = {
    }
}

export class Pong extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pong.AsObject;
    static toObject(includeInstance: boolean, msg: Pong): Pong.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pong, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pong;
    static deserializeBinaryFromReader(message: Pong, reader: jspb.BinaryReader): Pong;
}

export namespace Pong {
    export type AsObject = {
    }
}

export class AuthUserRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): AuthUserRequest;
    getAction(): AuthUserRequest.AuthActionType;
    setAction(value: AuthUserRequest.AuthActionType): AuthUserRequest;
    getUid(): number;
    setUid(value: number): AuthUserRequest;
    getSub(): string;
    setSub(value: string): AuthUserRequest;
    getLogin(): string;
    setLogin(value: string): AuthUserRequest;
    getPassword(): string;
    setPassword(value: string): AuthUserRequest;
    getEmail(): string;
    setEmail(value: string): AuthUserRequest;
    getFullname(): string;
    setFullname(value: string): AuthUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserRequest): AuthUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserRequest;
    static deserializeBinaryFromReader(message: AuthUserRequest, reader: jspb.BinaryReader): AuthUserRequest;
}

export namespace AuthUserRequest {
    export type AsObject = {
        tenantid: string,
        action: AuthUserRequest.AuthActionType,
        uid: number,
        sub: string,
        login: string,
        password: string,
        email: string,
        fullname: string,
    }

    export enum AuthActionType {
    FINDUSER = 0,
    VALIDATEUSER = 1,
    PROVISIONUSER = 2,
    }

}

export class AuthUserResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AuthUserResponse;
    getMessage(): string;
    setMessage(value: string): AuthUserResponse;
    getActive(): boolean;
    setActive(value: boolean): AuthUserResponse;
    getEmployeeid(): number;
    setEmployeeid(value: number): AuthUserResponse;
    getUid(): number;
    setUid(value: number): AuthUserResponse;
    getApilogin(): string;
    setApilogin(value: string): AuthUserResponse;
    getFirstname(): string;
    setFirstname(value: string): AuthUserResponse;
    getLastname(): string;
    setLastname(value: string): AuthUserResponse;
    getFullname(): string;
    setFullname(value: string): AuthUserResponse;
    getSub(): string;
    setSub(value: string): AuthUserResponse;
    getLogin(): string;
    setLogin(value: string): AuthUserResponse;
    getEmail(): string;
    setEmail(value: string): AuthUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserResponse): AuthUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserResponse;
    static deserializeBinaryFromReader(message: AuthUserResponse, reader: jspb.BinaryReader): AuthUserResponse;
}

export namespace AuthUserResponse {
    export type AsObject = {
        success: boolean,
        message: string,
        active: boolean,
        employeeid: number,
        uid: number,
        apilogin: string,
        firstname: string,
        lastname: string,
        fullname: string,
        sub: string,
        login: string,
        email: string,
    }
}

export class AuthProviderRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): AuthProviderRequest;
    getAction(): AuthProviderRequest.AuthActionType;
    setAction(value: AuthProviderRequest.AuthActionType): AuthProviderRequest;
    getClientid(): string;
    setClientid(value: string): AuthProviderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthProviderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthProviderRequest): AuthProviderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthProviderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthProviderRequest;
    static deserializeBinaryFromReader(message: AuthProviderRequest, reader: jspb.BinaryReader): AuthProviderRequest;
}

export namespace AuthProviderRequest {
    export type AsObject = {
        tenantid: string,
        action: AuthProviderRequest.AuthActionType,
        clientid: string,
    }

    export enum AuthActionType {
    FINDCLIENT = 0,
    GETPROVIDER = 1,
    }

}

export class AuthProviderResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AuthProviderResponse;
    getMessage(): string;
    setMessage(value: string): AuthProviderResponse;
    getClientname(): string;
    setClientname(value: string): AuthProviderResponse;
    getClientid(): string;
    setClientid(value: string): AuthProviderResponse;
    getClientsecret(): string;
    setClientsecret(value: string): AuthProviderResponse;
    clearClienturlsList(): void;
    getClienturlsList(): Array<string>;
    setClienturlsList(value: Array<string>): AuthProviderResponse;
    addClienturls(value: string, index?: number): string;
    getExternalonly(): boolean;
    setExternalonly(value: boolean): AuthProviderResponse;
    getAutoprovisioning(): boolean;
    setAutoprovisioning(value: boolean): AuthProviderResponse;
    getDefaultgroup(): number;
    setDefaultgroup(value: number): AuthProviderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthProviderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthProviderResponse): AuthProviderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthProviderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthProviderResponse;
    static deserializeBinaryFromReader(message: AuthProviderResponse, reader: jspb.BinaryReader): AuthProviderResponse;
}

export namespace AuthProviderResponse {
    export type AsObject = {
        success: boolean,
        message: string,
        clientname: string,
        clientid: string,
        clientsecret: string,
        clienturlsList: Array<string>,
        externalonly: boolean,
        autoprovisioning: boolean,
        defaultgroup: number,
    }
}

export class TextMessageRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): TextMessageRequest;
    getEntityname(): string;
    setEntityname(value: string): TextMessageRequest;
    getEtype(): TextMessageRequest.EntityType;
    setEtype(value: TextMessageRequest.EntityType): TextMessageRequest;
    getFrom(): number;
    setFrom(value: number): TextMessageRequest;
    getTo(): number;
    setTo(value: number): TextMessageRequest;
    getLang(): number;
    setLang(value: number): TextMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TextMessageRequest): TextMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextMessageRequest;
    static deserializeBinaryFromReader(message: TextMessageRequest, reader: jspb.BinaryReader): TextMessageRequest;
}

export namespace TextMessageRequest {
    export type AsObject = {
        tenantid: string,
        entityname: string,
        etype: TextMessageRequest.EntityType,
        from: number,
        to: number,
        lang: number,
    }

    export enum EntityType {
    PROCEDURE = 0,
    COMPILED = 1,
    FORM = 2,
    }

}

export class TextMessageResponse extends jspb.Message { 

    getMsgsMap(): jspb.Map<number, string>;
    clearMsgsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TextMessageResponse): TextMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextMessageResponse;
    static deserializeBinaryFromReader(message: TextMessageResponse, reader: jspb.BinaryReader): TextMessageResponse;
}

export namespace TextMessageResponse {
    export type AsObject = {

        msgsMap: Array<[number, string]>,
    }
}

export class ExecuteCompiledRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): ExecuteCompiledRequest;
    getDname(): string;
    setDname(value: string): ExecuteCompiledRequest;
    getAnycompany(): boolean;
    setAnycompany(value: boolean): ExecuteCompiledRequest;
    getLanguage(): number;
    setLanguage(value: number): ExecuteCompiledRequest;
    getCompname(): string;
    setCompname(value: string): ExecuteCompiledRequest;
    clearParamsList(): void;
    getParamsList(): Array<ExecuteCompiledRequest.ExecuteCompiledParam>;
    setParamsList(value: Array<ExecuteCompiledRequest.ExecuteCompiledParam>): ExecuteCompiledRequest;
    addParams(value?: ExecuteCompiledRequest.ExecuteCompiledParam, index?: number): ExecuteCompiledRequest.ExecuteCompiledParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteCompiledRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteCompiledRequest): ExecuteCompiledRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteCompiledRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteCompiledRequest;
    static deserializeBinaryFromReader(message: ExecuteCompiledRequest, reader: jspb.BinaryReader): ExecuteCompiledRequest;
}

export namespace ExecuteCompiledRequest {
    export type AsObject = {
        tenantid: string,
        dname: string,
        anycompany: boolean,
        language: number,
        compname: string,
        paramsList: Array<ExecuteCompiledRequest.ExecuteCompiledParam.AsObject>,
    }


    export class ExecuteCompiledParam extends jspb.Message { 
        getType(): ExecuteCompiledRequest.ExecuteCompiledParam.ParamType;
        setType(value: ExecuteCompiledRequest.ExecuteCompiledParam.ParamType): ExecuteCompiledParam;
        getValue(): string;
        setValue(value: string): ExecuteCompiledParam;
        getBvalue(): Uint8Array | string;
        getBvalue_asU8(): Uint8Array;
        getBvalue_asB64(): string;
        setBvalue(value: Uint8Array | string): ExecuteCompiledParam;
        getExtension$(): string;
        setExtension$(value: string): ExecuteCompiledParam;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExecuteCompiledParam.AsObject;
        static toObject(includeInstance: boolean, msg: ExecuteCompiledParam): ExecuteCompiledParam.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExecuteCompiledParam, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExecuteCompiledParam;
        static deserializeBinaryFromReader(message: ExecuteCompiledParam, reader: jspb.BinaryReader): ExecuteCompiledParam;
    }

    export namespace ExecuteCompiledParam {
        export type AsObject = {
            type: ExecuteCompiledRequest.ExecuteCompiledParam.ParamType,
            value: string,
            bvalue: Uint8Array | string,
            extension: string,
        }

        export enum ParamType {
    STRING = 0,
    FILE = 1,
    OUTPUT = 2,
    ENCRYPTEDFILE = 3,
    BINARYFILE = 4,
    BINARYOUTPUT = 5,
        }

    }

}

export class ExecuteCompiledResponse extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): ExecuteCompiledResponse;
    getMessage(): string;
    setMessage(value: string): ExecuteCompiledResponse;
    clearParamsList(): void;
    getParamsList(): Array<ExecuteCompiledResponse.ExecuteCompiledParam>;
    setParamsList(value: Array<ExecuteCompiledResponse.ExecuteCompiledParam>): ExecuteCompiledResponse;
    addParams(value?: ExecuteCompiledResponse.ExecuteCompiledParam, index?: number): ExecuteCompiledResponse.ExecuteCompiledParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteCompiledResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteCompiledResponse): ExecuteCompiledResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteCompiledResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteCompiledResponse;
    static deserializeBinaryFromReader(message: ExecuteCompiledResponse, reader: jspb.BinaryReader): ExecuteCompiledResponse;
}

export namespace ExecuteCompiledResponse {
    export type AsObject = {
        result: boolean,
        message: string,
        paramsList: Array<ExecuteCompiledResponse.ExecuteCompiledParam.AsObject>,
    }


    export class ExecuteCompiledParam extends jspb.Message { 
        getType(): ExecuteCompiledResponse.ExecuteCompiledParam.ParamType;
        setType(value: ExecuteCompiledResponse.ExecuteCompiledParam.ParamType): ExecuteCompiledParam;
        getValue(): string;
        setValue(value: string): ExecuteCompiledParam;
        getBvalue(): Uint8Array | string;
        getBvalue_asU8(): Uint8Array;
        getBvalue_asB64(): string;
        setBvalue(value: Uint8Array | string): ExecuteCompiledParam;
        getExtension$(): string;
        setExtension$(value: string): ExecuteCompiledParam;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExecuteCompiledParam.AsObject;
        static toObject(includeInstance: boolean, msg: ExecuteCompiledParam): ExecuteCompiledParam.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExecuteCompiledParam, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExecuteCompiledParam;
        static deserializeBinaryFromReader(message: ExecuteCompiledParam, reader: jspb.BinaryReader): ExecuteCompiledParam;
    }

    export namespace ExecuteCompiledParam {
        export type AsObject = {
            type: ExecuteCompiledResponse.ExecuteCompiledParam.ParamType,
            value: string,
            bvalue: Uint8Array | string,
            extension: string,
        }

        export enum ParamType {
    STRING = 0,
    FILE = 1,
    OUTPUT = 2,
    ENCRYPTEDFILE = 3,
    BINARYFILE = 4,
    BINARYOUTPUT = 5,
        }

    }

}

export class Gateway2Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Gateway2Customer;
    getTabulaini(): string;
    setTabulaini(value: string): Gateway2Customer;

    hasPing(): boolean;
    clearPing(): void;
    getPing(): Ping | undefined;
    setPing(value?: Ping): Gateway2Customer;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HTTPRequest | undefined;
    setHttp(value?: HTTPRequest): Gateway2Customer;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): AttachmentRequest | undefined;
    setAttachment(value?: AttachmentRequest): Gateway2Customer;

    hasAuthuser(): boolean;
    clearAuthuser(): void;
    getAuthuser(): AuthUserRequest | undefined;
    setAuthuser(value?: AuthUserRequest): Gateway2Customer;

    hasAuthprovider(): boolean;
    clearAuthprovider(): void;
    getAuthprovider(): AuthProviderRequest | undefined;
    setAuthprovider(value?: AuthProviderRequest): Gateway2Customer;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): TextMessageRequest | undefined;
    setMsg(value?: TextMessageRequest): Gateway2Customer;

    hasExec(): boolean;
    clearExec(): void;
    getExec(): ExecuteCompiledRequest | undefined;
    setExec(value?: ExecuteCompiledRequest): Gateway2Customer;

    getInnerMessageCase(): Gateway2Customer.InnerMessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Gateway2Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Gateway2Customer): Gateway2Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Gateway2Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Gateway2Customer;
    static deserializeBinaryFromReader(message: Gateway2Customer, reader: jspb.BinaryReader): Gateway2Customer;
}

export namespace Gateway2Customer {
    export type AsObject = {
        id: string,
        tabulaini: string,
        ping?: Ping.AsObject,
        http?: HTTPRequest.AsObject,
        attachment?: AttachmentRequest.AsObject,
        authuser?: AuthUserRequest.AsObject,
        authprovider?: AuthProviderRequest.AsObject,
        msg?: TextMessageRequest.AsObject,
        exec?: ExecuteCompiledRequest.AsObject,
    }

    export enum InnerMessageCase {
        INNERMESSAGE_NOT_SET = 0,
        PING = 3,
        HTTP = 4,
        ATTACHMENT = 5,
        AUTHUSER = 6,
        AUTHPROVIDER = 7,
        MSG = 8,
        EXEC = 9,
    }

}

export class Customer2Gateway extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer2Gateway;
    getError(): string;
    setError(value: string): Customer2Gateway;

    hasPong(): boolean;
    clearPong(): void;
    getPong(): Pong | undefined;
    setPong(value?: Pong): Customer2Gateway;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HTTPResponse | undefined;
    setHttp(value?: HTTPResponse): Customer2Gateway;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): AttachmentResponse | undefined;
    setAttachment(value?: AttachmentResponse): Customer2Gateway;

    hasAuthuser(): boolean;
    clearAuthuser(): void;
    getAuthuser(): AuthUserResponse | undefined;
    setAuthuser(value?: AuthUserResponse): Customer2Gateway;

    hasAuthprovider(): boolean;
    clearAuthprovider(): void;
    getAuthprovider(): AuthProviderResponse | undefined;
    setAuthprovider(value?: AuthProviderResponse): Customer2Gateway;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): TextMessageResponse | undefined;
    setMsg(value?: TextMessageResponse): Customer2Gateway;

    hasExec(): boolean;
    clearExec(): void;
    getExec(): ExecuteCompiledResponse | undefined;
    setExec(value?: ExecuteCompiledResponse): Customer2Gateway;

    getInnerMessageCase(): Customer2Gateway.InnerMessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer2Gateway.AsObject;
    static toObject(includeInstance: boolean, msg: Customer2Gateway): Customer2Gateway.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer2Gateway, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer2Gateway;
    static deserializeBinaryFromReader(message: Customer2Gateway, reader: jspb.BinaryReader): Customer2Gateway;
}

export namespace Customer2Gateway {
    export type AsObject = {
        id: string,
        error: string,
        pong?: Pong.AsObject,
        http?: HTTPResponse.AsObject,
        attachment?: AttachmentResponse.AsObject,
        authuser?: AuthUserResponse.AsObject,
        authprovider?: AuthProviderResponse.AsObject,
        msg?: TextMessageResponse.AsObject,
        exec?: ExecuteCompiledResponse.AsObject,
    }

    export enum InnerMessageCase {
        INNERMESSAGE_NOT_SET = 0,
        PONG = 2,
        HTTP = 3,
        ATTACHMENT = 4,
        AUTHUSER = 5,
        AUTHPROVIDER = 6,
        MSG = 7,
        EXEC = 8,
    }

}
