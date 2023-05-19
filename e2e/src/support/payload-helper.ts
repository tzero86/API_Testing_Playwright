import { env } from "../env/parseEnv";


export const payloadExists = (jsonPayload: any, payloadName: string): void => {
    if(jsonPayload === undefined) {
        throw new Error(`💣 The JSON Payload named '${payloadName}' is not defined in ${env('JSON_PAYLOADS_PATH')}`)
    }
    return jsonPayload
}