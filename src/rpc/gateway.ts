import {credentials} from 'grpc';
import {Message} from 'google-protobuf';
import {GatewayClient, IGatewayClient, } from '../../proto/gatwway_grpc_pb';
import {
    TextMessageRequest,
    TextMessageResponse,
} from '../../proto/gatwway_pb';

type Rpc = (client: IGatewayClient, callback: (error: any, result: Message) => void) => void;

const gatewayRpc = (rpc: Rpc) => {
    return new Promise((resolve, reject) => {
        const client: IGatewayClient = new GatewayClient(
            'priority-gateway:8000',
            credentials.createInsecure()
        );
        const callback = (error: any, result: any) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.toObject());
            }
        };
        rpc(client, callback);
    });
};

export const getTextMessage = (entityName: string, lang: string, tenantid: any) =>
    gatewayRpc((client, callback) => {
        const request = new TextMessageRequest();

        request.setEntityname(entityName);
        request.setLang(Number(lang));
        request.setTenantid(tenantid);
        request.setEtype(TextMessageRequest.EntityType.COMPILED);

        client.textMessages(request, callback);
    }) as Promise<TextMessageResponse.AsObject>;