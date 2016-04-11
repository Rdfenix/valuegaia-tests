# The [ValueGaia](valuegaia.com.br) browser testing project

## Get Started
Use npm to install Protractor globally with:

```shell
npm install -g protractor
```

This will install two command line tools, `protractor` and `webdriver-manager`. Try running protractor --version to make sure it's working.

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```shell
webdriver-manager update
```

Now start up a server with:

```shell
webdriver-manager start
```

## Running tests
Now run the test with:

```shell
protractor conf.js
```
