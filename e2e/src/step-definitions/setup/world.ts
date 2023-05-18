import playwright, {APIRequestContext} from 'playwright'
import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber'
import { GlobalAPIResponseVariables, GlobalConfig } from '../../env/global'


export type Api = {
    request: APIRequestContext
}

export class ScenarioWorld extends World {

    constructor(options: IWorldOptions) {
        super(options)
        this.globalAPIResponseVariables = {}
        this.globalConfig = options.parameters as GlobalConfig
    }
    
    globalConfig: GlobalConfig
    globalAPIResponseVariables: GlobalAPIResponseVariables
    api!: Api

    async init(): Promise<Api> {
        const request = await this.newRequest()
        this.api = { request }
        return this.api
    }


    private newRequest = async (): Promise<APIRequestContext> => {
        const request = await playwright.request.newContext({
            extraHTTPHeaders: {
                "Content-Type": "application/json; charset=utf-8",
            }
        })
        return request
    }
}


setWorldConstructor(ScenarioWorld)