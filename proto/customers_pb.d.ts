// package: priorityconnect.customers.v1
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class String extends jspb.Message { 
    getValue(): string;
    setValue(value: string): String;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): String.AsObject;
    static toObject(includeInstance: boolean, msg: String): String.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): String;
    static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
}

export namespace String {
    export type AsObject = {
        value: string,
    }
}

export class Strings extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): Strings;
    addValues(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Strings.AsObject;
    static toObject(includeInstance: boolean, msg: Strings): Strings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Strings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Strings;
    static deserializeBinaryFromReader(message: Strings, reader: jspb.BinaryReader): Strings;
}

export namespace Strings {
    export type AsObject = {
        valuesList: Array<string>,
    }
}

export class Bool extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): Bool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bool.AsObject;
    static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bool;
    static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
}

export namespace Bool {
    export type AsObject = {
        result: boolean,
    }
}

export class TenantData extends jspb.Message { 
    getLicenseid(): string;
    setLicenseid(value: string): TenantData;
    getTenantid(): string;
    setTenantid(value: string): TenantData;
    getTabini(): string;
    setTabini(value: string): TenantData;
    getWcf(): string;
    setWcf(value: string): TenantData;
    getServer(): string;
    setServer(value: string): TenantData;
    getDname(): string;
    setDname(value: string): TenantData;
    getHosting(): boolean;
    setHosting(value: boolean): TenantData;
    getInactive(): boolean;
    setInactive(value: boolean): TenantData;
    getVersion(): number;
    setVersion(value: number): TenantData;
    getBasiclanguage(): number;
    setBasiclanguage(value: number): TenantData;
    getWebclient(): string;
    setWebclient(value: string): TenantData;
    getExternalonly(): boolean;
    setExternalonly(value: boolean): TenantData;
    getAdmode(): number;
    setAdmode(value: number): TenantData;
    getDefaultprettyname(): string;
    setDefaultprettyname(value: string): TenantData;
    getLocktype(): string;
    setLocktype(value: string): TenantData;
    getTsdisabled(): boolean;
    setTsdisabled(value: boolean): TenantData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TenantData.AsObject;
    static toObject(includeInstance: boolean, msg: TenantData): TenantData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TenantData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TenantData;
    static deserializeBinaryFromReader(message: TenantData, reader: jspb.BinaryReader): TenantData;
}

export namespace TenantData {
    export type AsObject = {
        licenseid: string,
        tenantid: string,
        tabini: string,
        wcf: string,
        server: string,
        dname: string,
        hosting: boolean,
        inactive: boolean,
        version: number,
        basiclanguage: number,
        webclient: string,
        externalonly: boolean,
        admode: number,
        defaultprettyname: string,
        locktype: string,
        tsdisabled: boolean,
    }
}

export class CompanyData extends jspb.Message { 
    getDname(): string;
    setDname(value: string): CompanyData;
    getName(): string;
    setName(value: string): CompanyData;
    getCompid(): string;
    setCompid(value: string): CompanyData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompanyData.AsObject;
    static toObject(includeInstance: boolean, msg: CompanyData): CompanyData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompanyData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompanyData;
    static deserializeBinaryFromReader(message: CompanyData, reader: jspb.BinaryReader): CompanyData;
}

export namespace CompanyData {
    export type AsObject = {
        dname: string,
        name: string,
        compid: string,
    }
}

export class UserDataRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): UserDataRequest;
    getSubject(): string;
    setSubject(value: string): UserDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserDataRequest): UserDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDataRequest;
    static deserializeBinaryFromReader(message: UserDataRequest, reader: jspb.BinaryReader): UserDataRequest;
}

export namespace UserDataRequest {
    export type AsObject = {
        tenantid: string,
        subject: string,
    }
}

export class ContactDataRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): ContactDataRequest;
    getSubject(): string;
    setSubject(value: string): ContactDataRequest;
    getDname(): string;
    setDname(value: string): ContactDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ContactDataRequest): ContactDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactDataRequest;
    static deserializeBinaryFromReader(message: ContactDataRequest, reader: jspb.BinaryReader): ContactDataRequest;
}

export namespace ContactDataRequest {
    export type AsObject = {
        tenantid: string,
        subject: string,
        dname: string,
    }
}

export class UserData extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UserData;
    getUserlogin(): string;
    setUserlogin(value: string): UserData;
    getRestlogin(): string;
    setRestlogin(value: string): UserData;
    getUserid(): number;
    setUserid(value: number): UserData;
    getEmployeeid(): number;
    setEmployeeid(value: number): UserData;
    getSubject(): string;
    setSubject(value: string): UserData;
    getActive(): boolean;
    setActive(value: boolean): UserData;
    getName(): string;
    setName(value: string): UserData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserData.AsObject;
    static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserData;
    static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

export namespace UserData {
    export type AsObject = {
        email: string,
        userlogin: string,
        restlogin: string,
        userid: number,
        employeeid: number,
        subject: string,
        active: boolean,
        name: string,
    }
}

export class UserDataList extends jspb.Message { 
    clearAccountslistList(): void;
    getAccountslistList(): Array<UserData>;
    setAccountslistList(value: Array<UserData>): UserDataList;
    addAccountslist(value?: UserData, index?: number): UserData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDataList.AsObject;
    static toObject(includeInstance: boolean, msg: UserDataList): UserDataList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDataList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDataList;
    static deserializeBinaryFromReader(message: UserDataList, reader: jspb.BinaryReader): UserDataList;
}

export namespace UserDataList {
    export type AsObject = {
        accountslistList: Array<UserData.AsObject>,
    }
}

export class ContactData extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): ContactData;
    getName(): string;
    setName(value: string): ContactData;
    getId(): number;
    setId(value: number): ContactData;
    getActive(): boolean;
    setActive(value: boolean): ContactData;
    getDname(): string;
    setDname(value: string): ContactData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactData.AsObject;
    static toObject(includeInstance: boolean, msg: ContactData): ContactData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactData;
    static deserializeBinaryFromReader(message: ContactData, reader: jspb.BinaryReader): ContactData;
}

export namespace ContactData {
    export type AsObject = {
        email: string,
        name: string,
        id: number,
        active: boolean,
        dname: string,
    }
}

export class EmployeeData extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): EmployeeData;
    getUserid(): number;
    setUserid(value: number): EmployeeData;
    getEmployeeid(): number;
    setEmployeeid(value: number): EmployeeData;
    getSubject(): string;
    setSubject(value: string): EmployeeData;
    getActive(): boolean;
    setActive(value: boolean): EmployeeData;
    getName(): string;
    setName(value: string): EmployeeData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmployeeData.AsObject;
    static toObject(includeInstance: boolean, msg: EmployeeData): EmployeeData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmployeeData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmployeeData;
    static deserializeBinaryFromReader(message: EmployeeData, reader: jspb.BinaryReader): EmployeeData;
}

export namespace EmployeeData {
    export type AsObject = {
        email: string,
        userid: number,
        employeeid: number,
        subject: string,
        active: boolean,
        name: string,
    }
}

export class EmailConfirmedResponse extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): EmailConfirmedResponse;
    getChallenge(): string;
    setChallenge(value: string): EmailConfirmedResponse;
    getLang(): number;
    setLang(value: number): EmailConfirmedResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailConfirmedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmailConfirmedResponse): EmailConfirmedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailConfirmedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailConfirmedResponse;
    static deserializeBinaryFromReader(message: EmailConfirmedResponse, reader: jspb.BinaryReader): EmailConfirmedResponse;
}

export namespace EmailConfirmedResponse {
    export type AsObject = {
        subject: string,
        challenge: string,
        lang: number,
    }
}

export class InternalAccountData extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): InternalAccountData;
    getPassword(): string;
    setPassword(value: string): InternalAccountData;
    getChallenge(): string;
    setChallenge(value: string): InternalAccountData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalAccountData.AsObject;
    static toObject(includeInstance: boolean, msg: InternalAccountData): InternalAccountData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalAccountData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalAccountData;
    static deserializeBinaryFromReader(message: InternalAccountData, reader: jspb.BinaryReader): InternalAccountData;
}

export namespace InternalAccountData {
    export type AsObject = {
        email: string,
        password: string,
        challenge: string,
    }
}

export class LoginInternalData extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginInternalData;
    getPassword(): string;
    setPassword(value: string): LoginInternalData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginInternalData.AsObject;
    static toObject(includeInstance: boolean, msg: LoginInternalData): LoginInternalData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginInternalData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginInternalData;
    static deserializeBinaryFromReader(message: LoginInternalData, reader: jspb.BinaryReader): LoginInternalData;
}

export namespace LoginInternalData {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class LoginExternalData extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginExternalData;
    getIdp(): LoginExternalData.IndentityProvider;
    setIdp(value: LoginExternalData.IndentityProvider): LoginExternalData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginExternalData.AsObject;
    static toObject(includeInstance: boolean, msg: LoginExternalData): LoginExternalData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginExternalData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginExternalData;
    static deserializeBinaryFromReader(message: LoginExternalData, reader: jspb.BinaryReader): LoginExternalData;
}

export namespace LoginExternalData {
    export type AsObject = {
        email: string,
        idp: LoginExternalData.IndentityProvider,
    }

    export enum IndentityProvider {
    PRIORITY = 0,
    GOOGLE = 1,
    MICROSOFT = 2,
    EXTERNAL = 3,
    }

}

export class ResetPasswordData extends jspb.Message { 
    getGuid(): string;
    setGuid(value: string): ResetPasswordData;
    getNewpassword(): string;
    setNewpassword(value: string): ResetPasswordData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetPasswordData.AsObject;
    static toObject(includeInstance: boolean, msg: ResetPasswordData): ResetPasswordData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetPasswordData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetPasswordData;
    static deserializeBinaryFromReader(message: ResetPasswordData, reader: jspb.BinaryReader): ResetPasswordData;
}

export namespace ResetPasswordData {
    export type AsObject = {
        guid: string,
        newpassword: string,
    }
}

export class ResetContext extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): ResetContext;
    getChallenge(): string;
    setChallenge(value: string): ResetContext;
    getLang(): number;
    setLang(value: number): ResetContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetContext.AsObject;
    static toObject(includeInstance: boolean, msg: ResetContext): ResetContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetContext;
    static deserializeBinaryFromReader(message: ResetContext, reader: jspb.BinaryReader): ResetContext;
}

export namespace ResetContext {
    export type AsObject = {
        email: string,
        challenge: string,
        lang: number,
    }
}

export class OidcData extends jspb.Message { 
    getName(): string;
    setName(value: string): OidcData;
    getId(): string;
    setId(value: string): OidcData;
    getSecret(): string;
    setSecret(value: string): OidcData;
    getUrl(): string;
    setUrl(value: string): OidcData;
    getExternalonly(): boolean;
    setExternalonly(value: boolean): OidcData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OidcData.AsObject;
    static toObject(includeInstance: boolean, msg: OidcData): OidcData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OidcData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OidcData;
    static deserializeBinaryFromReader(message: OidcData, reader: jspb.BinaryReader): OidcData;
}

export namespace OidcData {
    export type AsObject = {
        name: string,
        id: string,
        secret: string,
        url: string,
        externalonly: boolean,
    }
}

export class KeyRequest extends jspb.Message { 
    getLicenseid(): string;
    setLicenseid(value: string): KeyRequest;
    getKeydata(): string;
    setKeydata(value: string): KeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: KeyRequest): KeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyRequest;
    static deserializeBinaryFromReader(message: KeyRequest, reader: jspb.BinaryReader): KeyRequest;
}

export namespace KeyRequest {
    export type AsObject = {
        licenseid: string,
        keydata: string,
    }
}
