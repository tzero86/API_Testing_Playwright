import playwright, {APIRequestContext} from 'playwright'
import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber'


export type Api = {
    request: APIRequestContext
}

export class ScenarioWorld extends World {

    constructor(options: IWorldOptions) {
        super(options)
    }
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