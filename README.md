# Optimizely audiences selector for Kentico Kontent

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

This repository contains the source code for the Optimizely audiences selector custom element for Kentico Kontent.

## Setup

1. Deploy the code to a secure public host
    * See [deploying section](#Deploying) for a really quick option
1. Follow the instructions in the [Kentico Kontent documentation](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features#a-3--displaying-a-custom-element-in-kentico-kontent) to add the element to a content model.
    * The `Hosted code URL` is where you deployed to in step 1
    * No JSON parameters are necessary

## JSON Parameters

Our [documentation provides instructions](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-personalization-optimizely#a-step-1-get-personal-api-token-and-project-id-from-optimizely) for getting the values needed below.

```json
{
  "projectId": "<OPTIMIZELY PROJECT ID>",
  "apiToken": "<OPTIMIZELY API TOKEN>"
}
```

## Deploying

Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your GitHub account as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Kentico/kontent-custom-element-sample-optimizely)


## Developing

This is built as a React SPA. As such, the normal React development processes apply.

After cloning the repo locally, you can get started with:

```console
yarn install
yarn run start
```

When you want to build run `yarn build`

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-sample-optimizely?pixel)
