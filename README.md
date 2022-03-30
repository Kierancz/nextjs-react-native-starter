# nextjs-react-native-starter

## Contents

This [lerna](https://github.com/lerna/lerna) monorepo contains two apps, as described below.

The first app is a [Next.js](https://nextjs.org/) (hybrid SSG/SSR react framework) [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) that demos various hardware integrations through the [webview-state-bridge](https://github.com/obsense/webview-state-bridge).

The second is a simple `react-native` app running without the overhead of [Expo](https://expo.io/) (`webview-state-bridge` is fully compatible with Expo). The native app code is minimal, as a primary goal of this package is to provide the means to use traditional rock-solid web technologies we know and love such as react for the majority of the app code, while react-native is used as a native API provider to the react app with `webview-state-bridge` as the intuitive bridge between the two.

## Demo Usage

### Install, Build, Link

This repo uses yarn, make sure it's installed and run the following to install, build, and link the monorepo packages together automatically.

```sh
yarn
```

### Running on Web

### Running on Android

Start both native and web app servers.

```sh
yarn start
```

#### Android Emulator

```sh
yarn rn android
```

#### Android Device

```sh
yarn rn android:device
```

### Running on IOS

Start metro server

```sh
yarn rn start
```

#### IOS Emulator

```sh
yarn rn ios
```

WIP

## Other Resources

This project benefits from demoing the integration of amazing open source work from the following efforts.

- [next.js](https://nextjs.org/)
- [next-offline](https://github.com/hanford/next-offline)
- [material-ui](https://material-ui.com/)
- [react-native-geolocation](https://github.com/react-native-community/react-native-geolocation)
- [react-map-gl](https://github.com/visgl/react-map-gl)
- And many others! See the demo app's dependencies for a complete list.
