import { GlobalConfig } from "../env/global";


export const retrieveHostURL = (
    {hostsConfig}: GlobalConfig
): URL => {
    const {
        API_AUTONATION_HOST: hostname = 'production'
    } = process.env

    const hostPath = hostsConfig[hostname]
    const url = new URL(hostPath)
    return url
}