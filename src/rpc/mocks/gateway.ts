import {TextMessageResponse} from '../../../proto/gatwway_pb';

export const getTextMessage = (entityName: string, lang: string, tenantid: any) =>
    Promise.resolve({
        msgsMap: [
            [1, 'Username'],
            [2, 'Record details in the report.'],
            [3, 'Annual Attendance Summary'],
        ]
    }) as Promise<TextMessageResponse.AsObject>;


