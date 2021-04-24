import {ModuleCheckResult} from '../../../proto/license_pb';

export const assapiValid = (licenseId: string) => (
    Promise.resolve({
        checkresult: ModuleCheckResult.CheckResult.VALID
    }) as Promise<ModuleCheckResult.AsObject>
)