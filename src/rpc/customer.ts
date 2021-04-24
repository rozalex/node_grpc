import {credentials} from 'grpc';
import {Message} from 'google-protobuf';
import {CustomersClient, ICustomersClient} from '../../proto/customers_grpc_pb';
import {
    String,
    TenantData,
    UserDataRequest,
    UserData,
    ContactDataRequest,
    ContactData
} from '../../proto/customers_pb';

type Rpc = (client: ICustomersClient, callback: (error: any, result: Message) => void) => void;

const customerRpc = (rpc: Rpc) => {
    return new Promise((resolve, reject) => {
        const client: ICustomersClient = new CustomersClient(
            'priority-customer:8002',
            credentials.createInsecure()
        );
        const callback = (error: any, result: Message) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.toObject());
            }
        };
        rpc(client, callback);
    });
};

export const getTenantByName = (tenantName: string) =>
    customerRpc((client, callback) => {
        const name = new String();
        name.setValue(tenantName);
        client.readTenantByName(name, callback);
    }) as Promise<TenantData.AsObject>;

export const readUserBySubject = (subject: any, tenantid: string) =>
    customerRpc((client, callback) => {
        const request = new UserDataRequest();
        request.setSubject(subject);
        request.setTenantid(tenantid);
        client.readUserBySubject(request, callback);
    }) as Promise<UserData.AsObject>;

export const readContactBySubject = (subject: string, tenantid: string, dname: string) =>
    customerRpc((client, callback) => {
        const request = new ContactDataRequest();
        request.setSubject(subject);
        request.setTenantid(tenantid);
        request.setDname(dname);
        client.readContactBySubject(request, callback);
    }) as Promise<ContactData.AsObject>;
