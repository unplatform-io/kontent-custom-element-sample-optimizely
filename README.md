# Optimizely audiences selector for Kentico Cloud

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

This repository contains source code of Optimizely audiences selector custom element for Kentico Cloud

# Use

If you want to use Optimizely audiences selector in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open Content models tab
* Open / create a content model to which you want to add Optimizely selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/Optimizely/audiences-selector.html

# Installation

If you want to adjust the implementation, first download [Kentico Cloud Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). This repository should be positioned within `/client/custom-elements` folder. For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).

## Get started

Prerequisites:
* Node.js
* git

```
git clone https://github.com/Kentico/custom-element-devkit.git
cd custom-element-devkit
git clone https://github.com/Kentico/cloud-custom-element-sample-optimizely.git ./client/custom-elements/cloud-custom-element-sample-optimizely
npm install --save react@^16.8.6 react-dom@^16.8.6 react-select@^2.4.3
npm start -- -hw
```
Browse: https://localhost:3000/custom-elements/cloud-custom-element-sample-optimizely/wrap

# Live site implementation sample

If you want to see live site example of content personalized based on Optimizely audiences on the live site, browse to a [deployed sample site](https://kentico-cloud-sample-app-react-optimizely.surge.sh/).

See source code of the sample site implementation [here](https://github.com/Kentico/cloud-sample-app-react/commit/ee06b3180f85e324a12e36c4a66e30be41289e75).

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/cloud-custom-element-sample-optimizely?pixel)
