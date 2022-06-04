# Node WebStation
Node WebStation is a powerful tool designed for developers to use to create an advanced WebStation for any use all without *not* having the requirement to code.

[Click here](https://github.com/risphs/WebStation/blob/master/docs/Implementation.md) to find the implementation of the WebSockets.

Our features:
+ Port configuration
+ Domain configuration
+ Different defualt socket protocols
+ Different protocols allowed to be programming within our development space
    + This can be used aswell as the default one or just alone
+ *More to be coming soon*

## Installing
To install from source you can use the following commands
```bash
$ git clone http://github.com/risphs/webstation.git
$ cd webstation
$ npm install
```
However, to avoid using the terminal you can instead install the latest version from the [Releases](https://github.com/risphs/webstation/releases) page

## Configuration

**⚠️Please note that we messing with configuration settings may cause issues within the program - You should only change them with detailed instructions like what will be given after**

Firstly, to avoid ambiguity `configuration.json` is where we will be saving all our settings. Here is an example of it's default settings.

```json
{
    "port": 8080,
    "domain": "localhost",

    "WebStationProtocol": 0,
    "useDefaultProtocol": true,

    "onMessageSeperateProtocolFile": "./protocols/template.js"
}
```


If you choose to use a custom domain you will want to change the `domain` key to your DNA (Domain Name Adress); instead you could set it to an IP like `172.0.0.1`, this is a loopback ip could be replaced with `localhost` however the choice is up to you.

With ports, It is recommended to keep at `8080` since this is mostly use for web servers but it can be changed it another. The `webStationProtocol` is the configuration that changes how your WebStation takes action. For the protocol details [click here](https://github.com/risphs/WebStation/blob/master/docs/Protocol.md)

## Adding Custom Protocols

If you would like to add custom protocols you need to have setup your JavaScript files in a specific way which we will show you know.

First, create a JavaScript file in the `protocols` directory and make sure it has a `root` class as followed:

```js
module.exports.root = function root() {
    // Put your code here
}
```
This is so the program knows which function to initially call.

Once you have setup your JS file, in order for your code to run we have to update the configurations.

Find the `onMessageSeperateProtocolFile` key and change its value to `./protocols/Your_File_Name.js`
```json
"onMessageSeperateProtocolFile": "./protocols/example.js"
```
Finally if you would like your code to run without the default configurations you can disable the default protocol by changing the `useDefaultProtocol` to `false`:

```json
"useDefaultProtocol": false
```

We have provided you with `template.js` so all you have to do is rename the file in the configurations and the accutal file itself then you should have a template (Note that the template includes data to your WebStation).

## Contribute

Since Node WebStation is open sourced you can help by:
- [Submitting bugs](https://github.com/risphs/webstation/issues) that you find within our code so we can prevent that happening from others
- Modifiying the tool then creating a [pull request](https://github.com/risphs/webstation/pulls) to help other developers