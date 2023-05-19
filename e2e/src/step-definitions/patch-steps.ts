import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import { JsonPayLoadName } from '../env/global'
import { patchResponse } from '../support/rest-helper'

Given(
    /^I patch the ([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd) "([^"]*)" with a "([^"]*)"$/,
    async function(this: ScenarioWorld, index: string, route: string, jsonPayloadName: JsonPayLoadName) {
        const {
            api: { request },
            globalAPIResponseVariables,
            globalConfig
        } = this

        console.log(`I patch the ${index} ${route} with a ${jsonPayloadName}`)
        
        const currentIndex = Number(index.match(/\d/g)?.join(''))
        const routeAtIndex = `${route}/${currentIndex}`

        await patchResponse(request, routeAtIndex, jsonPayloadName, globalConfig, globalAPIResponseVariables)
    }
)