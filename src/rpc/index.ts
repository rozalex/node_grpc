import * as customerRpc from './customer';
import * as customerMock from './mocks/customer';
import * as licenseRpc from './license';
import * as licenceMock from './mocks/license';
import * as gatewayRpc from './gateway';
import * as gatewayMock from './mocks/gateway';
import {development} from '../consts/configuration';

let customer = customerRpc;
let license = licenseRpc;
let gateway = gatewayRpc;

if (process.env.NODE_ENV === development) {
    customer = customerMock;
    license = licenceMock;
    gateway = gatewayMock;
}

export {customer, license, gateway};
