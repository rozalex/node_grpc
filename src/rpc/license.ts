import {credentials} from 'grpc';
import {Message} from 'google-protobuf';
import {LicensesClient, ILicensesClient} from '../../proto/license_grpc_pb';
import {AsapiCheckRequest, ModuleCheckResult} from '../../proto/license_pb';

type Rpc = (client: ILicensesClient, callback: (error: any, result: Message) => void) => void;

const licenceRpc = (rpc: Rpc) => {
    return new Promise((resolve, reject) => {
        const client: ILicensesClient = new LicensesClient(
            'priority-license:8001',
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

export const assapiValid = (licenseId: string, appId: string) =>
    licenceRpc((client, callback) => {
        const request = new AsapiCheckRequest();
        request.setLicenseid(licenseId);
        request.setAsapiname(appId);

        client.assapiValid(request, callback);
    }) as Promise<ModuleCheckResult.AsObject>;
