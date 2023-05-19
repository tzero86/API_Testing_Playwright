#!/bin/bash 
# cucumber tag
tag=$1

# export common config file path
export COMMON_CONFIG_FILE=env/common.env

# Run tests
npm run cucumber -- --profile "$tag" || npm run postcucumber