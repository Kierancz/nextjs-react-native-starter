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

## Contributing

We face difficult times together as our planet rapidly changes, we need to collaborate to face these daunting challenges. If this project (and/or it's companion package `webview-state-bridge`) helps you or your organization build universal apps faster, please consider contributing to the ongoing development and maintenance of this effort. We welcome any and all contributions, which may include (but not limited to) any of the following.

- Reporting bugs, asking questions, proposing improvements, or any other ideas by [opening an issue](TODO-url-here).
- Documentation improvements.
- Example app functionality additions (this would be amazing!).
- Code contributions! Please feel free to dig into the code to fix a bug, [open a PR](TODO-url-here), and we'll make sure the effort gets the attention it deserves.
- Feedback! All important to improving anything, we love to hear how you or your organization are using this code, what's working, what could be improved, and what isn't appreciated.
- Resources! If there's any related project/effort that we can link to and help our community find resources and grow, the better! Open an issue to mention it or better yet open a PR to add to the documentation.

## Other Resources

This project benefits from demoing the integration of amazing open source work from the following efforts.

- [next.js](https://nextjs.org/)
- [next-offline](https://github.com/hanford/next-offline)
- [material-ui](https://material-ui.com/)
- [react-native-geolocation](https://github.com/react-native-community/react-native-geolocation)
- [react-map-gl](https://github.com/visgl/react-map-gl)
- And many others! See the demo app's dependencies for a complete list.
