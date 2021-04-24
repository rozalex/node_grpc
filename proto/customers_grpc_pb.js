// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var customers_pb = require('./customers_pb.js');

function serialize_priorityconnect_customers_v1_Bool(arg) {
  if (!(arg instanceof customers_pb.Bool)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.Bool');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_Bool(buffer_arg) {
  return customers_pb.Bool.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_CompanyData(arg) {
  if (!(arg instanceof customers_pb.CompanyData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.CompanyData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_CompanyData(buffer_arg) {
  return customers_pb.CompanyData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_ContactData(arg) {
  if (!(arg instanceof customers_pb.ContactData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.ContactData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_ContactData(buffer_arg) {
  return customers_pb.ContactData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_ContactDataRequest(arg) {
  if (!(arg instanceof customers_pb.ContactDataRequest)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.ContactDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_ContactDataRequest(buffer_arg) {
  return customers_pb.ContactDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_EmailConfirmedResponse(arg) {
  if (!(arg instanceof customers_pb.EmailConfirmedResponse)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.EmailConfirmedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_EmailConfirmedResponse(buffer_arg) {
  return customers_pb.EmailConfirmedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_EmployeeData(arg) {
  if (!(arg instanceof customers_pb.EmployeeData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.EmployeeData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_EmployeeData(buffer_arg) {
  return customers_pb.EmployeeData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_InternalAccountData(arg) {
  if (!(arg instanceof customers_pb.InternalAccountData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.InternalAccountData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_InternalAccountData(buffer_arg) {
  return customers_pb.InternalAccountData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_KeyRequest(arg) {
  if (!(arg instanceof customers_pb.KeyRequest)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.KeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_KeyRequest(buffer_arg) {
  return customers_pb.KeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_LoginExternalData(arg) {
  if (!(arg instanceof customers_pb.LoginExternalData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.LoginExternalData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_LoginExternalData(buffer_arg) {
  return customers_pb.LoginExternalData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_LoginInternalData(arg) {
  if (!(arg instanceof customers_pb.LoginInternalData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.LoginInternalData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_LoginInternalData(buffer_arg) {
  return customers_pb.LoginInternalData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_OidcData(arg) {
  if (!(arg instanceof customers_pb.OidcData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.OidcData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_OidcData(buffer_arg) {
  return customers_pb.OidcData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_ResetContext(arg) {
  if (!(arg instanceof customers_pb.ResetContext)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.ResetContext');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_ResetContext(buffer_arg) {
  return customers_pb.ResetContext.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_ResetPasswordData(arg) {
  if (!(arg instanceof customers_pb.ResetPasswordData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.ResetPasswordData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_ResetPasswordData(buffer_arg) {
  return customers_pb.ResetPasswordData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_String(arg) {
  if (!(arg instanceof customers_pb.String)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.String');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_String(buffer_arg) {
  return customers_pb.String.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_Strings(arg) {
  if (!(arg instanceof customers_pb.Strings)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.Strings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_Strings(buffer_arg) {
  return customers_pb.Strings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_TenantData(arg) {
  if (!(arg instanceof customers_pb.TenantData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.TenantData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_TenantData(buffer_arg) {
  return customers_pb.TenantData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_UserData(arg) {
  if (!(arg instanceof customers_pb.UserData)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.UserData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_UserData(buffer_arg) {
  return customers_pb.UserData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_UserDataList(arg) {
  if (!(arg instanceof customers_pb.UserDataList)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.UserDataList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_UserDataList(buffer_arg) {
  return customers_pb.UserDataList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_priorityconnect_customers_v1_UserDataRequest(arg) {
  if (!(arg instanceof customers_pb.UserDataRequest)) {
    throw new Error('Expected argument of type priorityconnect.customers.v1.UserDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_priorityconnect_customers_v1_UserDataRequest(buffer_arg) {
  return customers_pb.UserDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomersService = exports.CustomersService = {
  // companies and nice names
extWriteCompany: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteCompany',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CompanyData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_CompanyData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_CompanyData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  extDeleteCompany: {
    path: '/priorityconnect.customers.v1.Customers/ExtDeleteCompany',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CompanyData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_CompanyData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_CompanyData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  readCompaniesByTenantID: {
    path: '/priorityconnect.customers.v1.Customers/ReadCompaniesByTenantID',
    requestStream: false,
    responseStream: true,
    requestType: customers_pb.String,
    responseType: customers_pb.CompanyData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_CompanyData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_CompanyData,
  },
  // accounts related calls
//
// ExtWriteEmployee sends emoployee data from Priority to connect and stores it in employees table.
extWriteEmployee: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteEmployee',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.EmployeeData,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_EmployeeData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_EmployeeData,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  // ExtWriteUser sends user data from Priority to connect and stores it in users table.
extWriteUser: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteUser',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.UserData,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_UserData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_UserData,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  extWriteUsers: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteUsers',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.UserDataList,
    responseType: customers_pb.Strings,
    requestSerialize: serialize_priorityconnect_customers_v1_UserDataList,
    requestDeserialize: deserialize_priorityconnect_customers_v1_UserDataList,
    responseSerialize: serialize_priorityconnect_customers_v1_Strings,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Strings,
  },
  extWriteContact: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteContact',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.ContactData,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_ContactData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_ContactData,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  extReadUserBySubject: {
    path: '/priorityconnect.customers.v1.Customers/ExtReadUserBySubject',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.UserDataRequest,
    responseType: customers_pb.UserData,
    requestSerialize: serialize_priorityconnect_customers_v1_UserDataRequest,
    requestDeserialize: deserialize_priorityconnect_customers_v1_UserDataRequest,
    responseSerialize: serialize_priorityconnect_customers_v1_UserData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_UserData,
  },
  extReadContactBySubject: {
    path: '/priorityconnect.customers.v1.Customers/ExtReadContactBySubject',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.ContactDataRequest,
    responseType: customers_pb.ContactData,
    requestSerialize: serialize_priorityconnect_customers_v1_ContactDataRequest,
    requestDeserialize: deserialize_priorityconnect_customers_v1_ContactDataRequest,
    responseSerialize: serialize_priorityconnect_customers_v1_ContactData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_ContactData,
  },
  readAccountByEmail: {
    path: '/priorityconnect.customers.v1.Customers/ReadAccountByEmail',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  readUserBySubject: {
    path: '/priorityconnect.customers.v1.Customers/ReadUserBySubject',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.UserDataRequest,
    responseType: customers_pb.UserData,
    requestSerialize: serialize_priorityconnect_customers_v1_UserDataRequest,
    requestDeserialize: deserialize_priorityconnect_customers_v1_UserDataRequest,
    responseSerialize: serialize_priorityconnect_customers_v1_UserData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_UserData,
  },
  readContactBySubject: {
    path: '/priorityconnect.customers.v1.Customers/ReadContactBySubject',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.ContactDataRequest,
    responseType: customers_pb.ContactData,
    requestSerialize: serialize_priorityconnect_customers_v1_ContactDataRequest,
    requestDeserialize: deserialize_priorityconnect_customers_v1_ContactDataRequest,
    responseSerialize: serialize_priorityconnect_customers_v1_ContactData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_ContactData,
  },
  // tenants
extWritePublicKey: {
    path: '/priorityconnect.customers.v1.Customers/ExtWritePublicKey',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.KeyRequest,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_KeyRequest,
    requestDeserialize: deserialize_priorityconnect_customers_v1_KeyRequest,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  readPublicKey: {
    path: '/priorityconnect.customers.v1.Customers/ReadPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.KeyRequest,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_KeyRequest,
    requestDeserialize: deserialize_priorityconnect_customers_v1_KeyRequest,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  extWriteTenant: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteTenant',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.TenantData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_TenantData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  extReadTenantById: {
    path: '/priorityconnect.customers.v1.Customers/ExtReadTenantById',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.TenantData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_TenantData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
  },
  writeTenant: {
    path: '/priorityconnect.customers.v1.Customers/WriteTenant',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.TenantData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_TenantData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  readTenantById: {
    path: '/priorityconnect.customers.v1.Customers/ReadTenantById',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.TenantData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_TenantData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
  },
  readTenantByName: {
    path: '/priorityconnect.customers.v1.Customers/ReadTenantByName',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.TenantData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_TenantData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
  },
  readTenantByTabulaini: {
    path: '/priorityconnect.customers.v1.Customers/ReadTenantByTabulaini',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.TenantData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_TenantData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
  },
  readTenantsBySubject: {
    path: '/priorityconnect.customers.v1.Customers/ReadTenantsBySubject',
    requestStream: false,
    responseStream: true,
    requestType: customers_pb.String,
    responseType: customers_pb.TenantData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_TenantData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
  },
  updateVersion: {
    path: '/priorityconnect.customers.v1.Customers/UpdateVersion',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.TenantData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_TenantData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_TenantData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  // email confirmations
// AccountEmailConfirmed gets guid for confirme
// returns the subject and challenge-id when confirmeion was successful
// otherwise return string empty
accountEmailConfirmed: {
    path: '/priorityconnect.customers.v1.Customers/AccountEmailConfirmed',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.EmailConfirmedResponse,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_EmailConfirmedResponse,
    responseDeserialize: deserialize_priorityconnect_customers_v1_EmailConfirmedResponse,
  },
  // accounts
//
// Register an Internal Account:
// receives email, password, and redirectURL for after confirmed
// if account is exists and intverified flag is TRUE - return FALSE
// otherwise create account and call AccountEmailConfirm function and return TRUEs
newAccountInternal: {
    path: '/priorityconnect.customers.v1.Customers/NewAccountInternal',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.InternalAccountData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_InternalAccountData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_InternalAccountData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  // Login by Internal account:
// receives email, password - and return subject if password correct and intverified flag is TRUE
// otherwise return string empty
loginInternal: {
    path: '/priorityconnect.customers.v1.Customers/LoginInternal',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.LoginInternalData,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_LoginInternalData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_LoginInternalData,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  // Login by External account:
// receives email, identity provider and return the subject 
// When the account does not exists - creates it
// (and update the extverified flag to TRUE)
loginExternal: {
    path: '/priorityconnect.customers.v1.Customers/LoginExternal',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.LoginExternalData,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_LoginExternalData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_LoginExternalData,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
  // Send reset password:
// receives emailchallenge, language) - sending email withe GUID for reset account password
// return TRUE if account exsits and confirmed and email sended
sendResetPassword: {
    path: '/priorityconnect.customers.v1.Customers/SendResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.ResetContext,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_ResetContext,
    requestDeserialize: deserialize_priorityconnect_customers_v1_ResetContext,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  // Reset password:
// receives guid and new password 
// return the subject if guid exsits and not expried
// otherwise return string empty
resetPassword: {
    path: '/priorityconnect.customers.v1.Customers/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.ResetPasswordData,
    responseType: customers_pb.EmailConfirmedResponse,
    requestSerialize: serialize_priorityconnect_customers_v1_ResetPasswordData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_ResetPasswordData,
    responseSerialize: serialize_priorityconnect_customers_v1_EmailConfirmedResponse,
    responseDeserialize: deserialize_priorityconnect_customers_v1_EmailConfirmedResponse,
  },
  // Get reset context by guid:
// receives guid 
// return context if guid exsits and not expried
// otherwise return context with challenge empty
getResetContext: {
    path: '/priorityconnect.customers.v1.Customers/GetResetContext',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.ResetContext,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_ResetContext,
    responseDeserialize: deserialize_priorityconnect_customers_v1_ResetContext,
  },
  // Register oidc definitions
// receives name, id, secret, redirectURL and externalOnly flag
// return False if tenant not exsits
extWriteOidcDefs: {
    path: '/priorityconnect.customers.v1.Customers/ExtWriteOidcDefs',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.OidcData,
    responseType: customers_pb.Bool,
    requestSerialize: serialize_priorityconnect_customers_v1_OidcData,
    requestDeserialize: deserialize_priorityconnect_customers_v1_OidcData,
    responseSerialize: serialize_priorityconnect_customers_v1_Bool,
    responseDeserialize: deserialize_priorityconnect_customers_v1_Bool,
  },
  // read oidc definitions by name
// receives pretty name
// return oidc definitions if exsits
// otherwise return error with string  
readOidcDefsByName: {
    path: '/priorityconnect.customers.v1.Customers/ReadOidcDefsByName',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.OidcData,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_OidcData,
    responseDeserialize: deserialize_priorityconnect_customers_v1_OidcData,
  },
  // create url with bearer token for tenante in hosting cloud by tabula
// receives tenantId for target tenante
// return berrar token
extCloudTabulaAuthURL: {
    path: '/priorityconnect.customers.v1.Customers/ExtCloudTabulaAuthURL',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.String,
    responseType: customers_pb.String,
    requestSerialize: serialize_priorityconnect_customers_v1_String,
    requestDeserialize: deserialize_priorityconnect_customers_v1_String,
    responseSerialize: serialize_priorityconnect_customers_v1_String,
    responseDeserialize: deserialize_priorityconnect_customers_v1_String,
  },
};

exports.CustomersClient = grpc.makeGenericClientConstructor(CustomersService);
