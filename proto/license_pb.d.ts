// package: priorityconnect.license.v1
// file: license.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LicenseEntry extends jspb.Message { 
    getKey(): string;
    setKey(value: string): LicenseEntry;
    getValue(): string;
    setValue(value: string): LicenseEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseEntry): LicenseEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseEntry;
    static deserializeBinaryFromReader(message: LicenseEntry, reader: jspb.BinaryReader): LicenseEntry;
}

export namespace LicenseEntry {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class LicenseData extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<LicenseEntry>;
    setDataList(value: Array<LicenseEntry>): LicenseData;
    addData(value?: LicenseEntry, index?: number): LicenseEntry;
    getRawdata(): string;
    setRawdata(value: string): LicenseData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseData.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseData): LicenseData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseData;
    static deserializeBinaryFromReader(message: LicenseData, reader: jspb.BinaryReader): LicenseData;
}

export namespace LicenseData {
    export type AsObject = {
        dataList: Array<LicenseEntry.AsObject>,
        rawdata: string,
    }
}

export class LicenseResult extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): LicenseResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseResult.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseResult): LicenseResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseResult;
    static deserializeBinaryFromReader(message: LicenseResult, reader: jspb.BinaryReader): LicenseResult;
}

export namespace LicenseResult {
    export type AsObject = {
        result: boolean,
    }
}

export class ModuleCheckResult extends jspb.Message { 
    getCheckresult(): ModuleCheckResult.CheckResult;
    setCheckresult(value: ModuleCheckResult.CheckResult): ModuleCheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModuleCheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: ModuleCheckResult): ModuleCheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModuleCheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModuleCheckResult;
    static deserializeBinaryFromReader(message: ModuleCheckResult, reader: jspb.BinaryReader): ModuleCheckResult;
}

export namespace ModuleCheckResult {
    export type AsObject = {
        checkresult: ModuleCheckResult.CheckResult,
    }

    export enum CheckResult {
    VALID = 0,
    INVALID = 1,
    EXPIRED = 2,
    }

}

export class ModuleCheckRequest extends jspb.Message { 
    getLicenseid(): string;
    setLicenseid(value: string): ModuleCheckRequest;
    getModuleid(): number;
    setModuleid(value: number): ModuleCheckRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModuleCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ModuleCheckRequest): ModuleCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModuleCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModuleCheckRequest;
    static deserializeBinaryFromReader(message: ModuleCheckRequest, reader: jspb.BinaryReader): ModuleCheckRequest;
}

export namespace ModuleCheckRequest {
    export type AsObject = {
        licenseid: string,
        moduleid: number,
    }
}

export class AsapiCheckRequest extends jspb.Message { 
    getLicenseid(): string;
    setLicenseid(value: string): AsapiCheckRequest;
    getAsapiname(): string;
    setAsapiname(value: string): AsapiCheckRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsapiCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AsapiCheckRequest): AsapiCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsapiCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsapiCheckRequest;
    static deserializeBinaryFromReader(message: AsapiCheckRequest, reader: jspb.BinaryReader): AsapiCheckRequest;
}

export namespace AsapiCheckRequest {
    export type AsObject = {
        licenseid: string,
        asapiname: string,
    }
}

export class LicenseEntryRequest extends jspb.Message { 
    getLicenseid(): string;
    setLicenseid(value: string): LicenseEntryRequest;
    getKey(): string;
    setKey(value: string): LicenseEntryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseEntryRequest): LicenseEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseEntryRequest;
    static deserializeBinaryFromReader(message: LicenseEntryRequest, reader: jspb.BinaryReader): LicenseEntryRequest;
}

export namespace LicenseEntryRequest {
    export type AsObject = {
        licenseid: string,
        key: string,
    }
}

export class LicenseEntryResponse extends jspb.Message { 

    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): LicenseEntry | undefined;
    setEntry(value?: LicenseEntry): LicenseEntryResponse;
    getFound(): boolean;
    setFound(value: boolean): LicenseEntryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseEntryResponse): LicenseEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseEntryResponse;
    static deserializeBinaryFromReader(message: LicenseEntryResponse, reader: jspb.BinaryReader): LicenseEntryResponse;
}

export namespace LicenseEntryResponse {
    export type AsObject = {
        entry?: LicenseEntry.AsObject,
        found: boolean,
    }
}
