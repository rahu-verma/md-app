# Mastering Diabetes App

## Launching the development environment

### Clone and install dependencies

```bash
$ git clone https://github.com/beehive-software/md-app.git
$ cd md-app
$ nvm use  # or make sure you use node v16 without nvm
$ npm install
```

### Update env variables

```bash
$ cp env.example .env
```
Update the appropriate values of env variables in created .env file

### Setup Android / iOS development environments

Follow the instructions [here](https://reactnative.dev/docs/environment-setup) to set up all the tools you need for device development.

We use React Native CLI and **not** expo.

### Build and run the application

```bash
$ npx react-native run-android
$ npx react-native run-ios
```

## Component catalog

App-wide reusable components live under the `shared` folder. Feel free to use any of them or add new ones if required.

If you need to change an existing shared component make sure to check that other pages using it are unharmed by the changes.

Page-specific components should live under the page's `components` folder, for example: `src/pages/createAccount/components`.

## OpenAPI

An OpenAPI specification is available in the `openapi` folder. A package manifest is also available to enable running a mock server easily which can be used for connecting APIs without an active backend.

To start the mock server, install dependencies in that folder and start it:

```bash
$ cd openapi
$ npm install
$ npm start
```

You can also start the mock server yourself if you wish to change execution flags:

```bash
$ npx prism mock -p 8000 ./spec.yaml
```

Available endpoints may change in the future. Check out the list of them when the mock server is started.

### Chat mocking

Note that the OpenAPI spec contains several chat tokens you can use (under the `/profile/chat` endpoint's example responses). You may uncomment any one of them that you wish to use.