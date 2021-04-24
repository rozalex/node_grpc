// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var license_pb = require('./license_pb.js');

function serialize_priorityconnect_license_v1_AsapiCheckRequest(arg) {
  if (!(arg instanceof license_pb.AsapiCheckRequest)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.AsapiCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_AsapiCheckRequest(buffer_arg) {
  return license_pb.AsapiCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_license_v1_LicenseData(arg) {
  if (!(arg instanceof license_pb.LicenseData)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.LicenseData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_LicenseData(buffer_arg) {
  return license_pb.LicenseData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_license_v1_LicenseEntryRequest(arg) {
  if (!(arg instanceof license_pb.LicenseEntryRequest)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.LicenseEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_LicenseEntryRequest(buffer_arg) {
  return license_pb.LicenseEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_license_v1_LicenseEntryResponse(arg) {
  if (!(arg instanceof license_pb.LicenseEntryResponse)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.LicenseEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_LicenseEntryResponse(buffer_arg) {
  return license_pb.LicenseEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_license_v1_LicenseResult(arg) {
  if (!(arg instanceof license_pb.LicenseResult)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.LicenseResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_LicenseResult(buffer_arg) {
  return license_pb.LicenseResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_license_v1_ModuleCheckRequest(arg) {
  if (!(arg instanceof license_pb.ModuleCheckRequest)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.ModuleCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_ModuleCheckRequest(buffer_arg) {
  return license_pb.ModuleCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_license_v1_ModuleCheckResult(arg) {
  if (!(arg instanceof license_pb.ModuleCheckResult)) {
    throw new Error('Expected argument of type priorityconnect.license.v1.ModuleCheckResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_license_v1_ModuleCheckResult(buffer_arg) {
  return license_pb.ModuleCheckResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var LicensesService = exports.LicensesService = {
  extWriteLicense: {
    path: '/priorityconnect.license.v1.Licenses/ExtWriteLicense',
    requestStream: false,
    responseStream: false,
    requestType: license_pb.LicenseData,
    responseType: license_pb.LicenseResult,
    requestSerialize: serialize_priorityconnect_license_v1_LicenseData,
    requestDeserialize: deserialize_priorityconnect_license_v1_LicenseData,
    responseSerialize: serialize_priorityconnect_license_v1_LicenseResult,
    responseDeserialize: deserialize_priorityconnect_license_v1_LicenseResult,
  },
  moduleValid: {
    path: '/priorityconnect.license.v1.Licenses/ModuleValid',
    requestStream: false,
    responseStream: false,
    requestType: license_pb.ModuleCheckRequest,
    responseType: license_pb.ModuleCheckResult,
    requestSerialize: serialize_priorityconnect_license_v1_ModuleCheckRequest,
    requestDeserialize: deserialize_priorityconnect_license_v1_ModuleCheckRequest,
    responseSerialize: serialize_priorityconnect_license_v1_ModuleCheckResult,
    responseDeserialize: deserialize_priorityconnect_license_v1_ModuleCheckResult,
  },
  assapiValid: {
    path: '/priorityconnect.license.v1.Licenses/AssapiValid',
    requestStream: false,
    responseStream: false,
    requestType: license_pb.AsapiCheckRequest,
    responseType: license_pb.ModuleCheckResult,
    requestSerialize: serialize_priorityconnect_license_v1_AsapiCheckRequest,
    requestDeserialize: deserialize_priorityconnect_license_v1_AsapiCheckRequest,
    responseSerialize: serialize_priorityconnect_license_v1_ModuleCheckResult,
    responseDeserialize: deserialize_priorityconnect_license_v1_ModuleCheckResult,
  },
  licenseEntryByKey: {
    path: '/priorityconnect.license.v1.Licenses/LicenseEntryByKey',
    requestStream: false,
    responseStream: false,
    requestType: license_pb.LicenseEntryRequest,
    responseType: license_pb.LicenseEntryResponse,
    requestSerialize: serialize_priorityconnect_license_v1_LicenseEntryRequest,
    requestDeserialize: deserialize_priorityconnect_license_v1_LicenseEntryRequest,
    responseSerialize: serialize_priorityconnect_license_v1_LicenseEntryResponse,
    responseDeserialize: deserialize_priorityconnect_license_v1_LicenseEntryResponse,
  },
};

exports.LicensesClient = grpc.makeGenericClientConstructor(LicensesService);
