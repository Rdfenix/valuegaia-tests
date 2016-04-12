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



## Running tests
First start up a server with:
```shell
webdriver-manager start
```

Now run the test with:
```shell
protractor conf.js
```

## Writing a test
- Follow file example [login.specs.js](https://github.com/I-Value/valuegaia-tests/blob/master/specs/login/login.spec.js)
