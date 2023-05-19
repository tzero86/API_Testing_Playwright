import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import { JsonPayLoadName } from '../env/global'
import { postResponse } from '../support/rest-helper'


Given(
    /^I create a new "([^"]*)" with "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string, jsonPayloadName: JsonPayLoadName) {
        const {
            api: { request },
            globalAPIResponseVariables,
            globalConfig
        } = this

        console.log(`I Create a new ${route} with ${jsonPayloadName}`)
        
        await postResponse(request, route, jsonPayloadName, globalConfig, globalAPIResponseVariables)
    }
)