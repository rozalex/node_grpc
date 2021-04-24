import {TenantData, UserData, ContactData} from '../../../proto/customers_pb';

export const getTenantByName = (tenantName: string) => (
    Promise.resolve({
        licenseid: 'F2F504DA2BF1435BACF6CDCDC3254D98',
        tenantid: 'F2F504DA2BF1435BACF6CDCDC3254D98',
        tabini: 'tabdev.ini',
        wcf: 'https://dk8s.priority-software.com/wcf/service.svc',
        server: 'KUBE',
        dname: 'test',
        hosting: true,
        inactive: false,
        version: 21,
        basiclanguage: 1,
        webclient: ' https://s3.priority-software.com/webapps/client/nextgen',
        externalonly: true,
        admode: 0,
        defaultprettyname: '',
        locktype: '',
        tsdisabled: false
    })
) as Promise<TenantData.AsObject>

export const readUserBySubject = (subject: string, tenantid: string) => (
    Promise.resolve({
        email: 'user@gmail.com',
        userlogin: 'user',
        restlogin: 'user',
        userid: 221,
        employeeid: 332,
        subject: 'F2F504DA2BF1435BACF6CDCDC3254D98',
        active: true,
        name: 'User'
    })
) as Promise<UserData.AsObject>

export const readContactBySubject = (subject: string, tenantid: string, dname: string) => (
    Promise.resolve({
        email: 'user@gmail.com',
        name: 'User',
        id: 657,
        active: true,
        dname: 'test'
    })
) as Promise<ContactData.AsObject>
