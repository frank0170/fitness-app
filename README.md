Once you're up and running with Create React Native App, visit [the tutorial on reactnative.dev](https://reactnative.dev/docs/tutorial) and [the tutorial on expo.dev](https://docs.expo.dev/tutorial/introduction/) for more information on building mobile apps with React.

## Usage

- `npx create-react-native-app` Create a new native React app.
- `npx crna` Alias for `npx create-react-native-app`.
- `npm run ios` -- (`npx expo run:ios`) Build the iOS App (requires a MacOS computer).
- `npm run android` -- (`npx expo run:android`) Build the Android App.
- `npm run web` -- (`npx expo start --web`) Run the website in your browser.

### Templates

By default you create a [bare workflow React](https://docs.expo.dev/bare/overview/) project with support for iOS, Android, and web. The project comes preconfigured with support for [Expo Modules](https://docs.expo.dev/modules/overview/), an API writing native modules using Swift and Kotlin, and this also makes it possible to use any library in the [Expo SDK](https://docs.expo.dev/versions/latest/).

You can opt to use an example project instead by selecting the "Templates from ..." option. Custom templates can be used with `--template <Example Name or GitHub URL>` option.

- Use an [example](https://github.com/expo/examples): `npx create-react-native-app -t with-typescript`
- Use a custom template: `npx create-react-native-app --template https://github.com/someone/my-react-starter` -- Only works with GitHub repos on the master branch.
- All examples can be modified in the [expo/examples](https://github.com/expo/examples) repo.

## Sections

- [Usage with Expo Go App](#usage-with-expo-go-app)
- [Support and Contact](#support-and-contact)
- [FAQs](#faqs)
- [Contributing](#contributing)

## Usage with Expo Go App

Expo Go enables you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started) in `react-native`, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest) that the are bundled with the Expo app.

- Download the "Expo Go" app from the Play Store or App Store.
- Start your project with Expo CLI: `npm start`
- Open the project by scanning the QR code in the terminal.

## Support and Contact

If you're having issues with Create React Native App, please make sure:

- The issue is not covered in the [Expo Docs](https://docs.expo.io/versions/latest/)
- There is not already an [open issue](https://github.com/expo/create-react-native-app/issues/) for your particular problem

If you've checked the documentation and currently open issues, please either [open a new GitHub issue](https://github.com/expo/create-react-native-app/issues/new) or ask a question on [Expo Community Discord](https://chat.expo.dev).

## Contributing

Refer to the [Contributing guide](https://github.com/expo/create-react-native-app/blob/main/CONTRIBUTING.md) for more information.

### Attribution

The examples feature was inspired by the `templates` system of [create-next-app](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) by the [Vercel](https://vercel.com/) team.

## Related

CRNA is focused on being the fastest way to bootstrap a React Native app without worrying about the native platforms or bundlers required for developing and shipping apps. Other tools provide both an init script (which is slower) and a suite of other tools that can be used for interacting with the project. CRNA is meant to be used with any of the following tools:

- [Expo CLI](https://docs.expo.dev/more/expo-cli/) by [Expo team](https://expo.dev)
- [Ignite CLI](https://github.com/infinitered/ignite) by [Infinite Red](https://infinite.red/)
- [React Native Community CLI](https://github.com/react-native-community/cli) by members of [the React Native community](https://github.com/orgs/react-native-community/people)

<!-- Footer -->

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/baconbrix"><img src="https://avatars1.githubusercontent.com/u/9664363?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Evan Bacon</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=EvanBacon" title="Code">💻</a> <a href="https://github.com/expo/create-react-native-app/commits?author=EvanBacon" title="Documentation">📖</a> <a href="#design-EvanBacon" title="Design">🎨</a> <a href="#maintenance-EvanBacon" title="Maintenance">🚧</a> <a href="https://github.com/expo/create-react-native-app/pulls?q=is%3Apr+reviewed-by%3AEvanBacon" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://expo.dev"><img src="https://avatars2.githubusercontent.com/u/90494?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brent Vatne</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=brentvatne" title="Code">💻</a> <a href="https://github.com/expo/create-react-native-app/commits?author=brentvatne" title="Documentation">📖</a> <a href="https://github.com/expo/create-react-native-app/pulls?q=is%3Apr+reviewed-by%3Abrentvatne" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://hamzah"><img src="https://avatars0.githubusercontent.com/u/26879042?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hamza Halilovic</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=hamzahalilovic" title="Code">💻</a></td>
    <td align="center"><a href="https://bycedric.com"><img src="https://avatars2.githubusercontent.com/u/1203991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cedric van Putten</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=byCedric" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/VilleImmonen"><img src="https://avatars3.githubusercontent.com/u/497214?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ville Immonen</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=fson" title="Code">💻</a> <a href="https://github.com/expo/create-react-native-app/pulls?q=is%3Apr+reviewed-by%3Afson" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/friederbluemle"><img src="https://avatars0.githubusercontent.com/u/743291?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Frieder Bluemle</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=friederbluemle" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kbrandwijk"><img src="https://avatars.githubusercontent.com/u/852069?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kim Brandwijk</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=kbrandwijk" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/srkds"><img src="https://avatars.githubusercontent.com/u/61644078?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nirav</b></sub></a><br /><a href="https://github.com/expo/create-react-native-app/commits?author=srkds" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
