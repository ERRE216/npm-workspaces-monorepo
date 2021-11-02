# npm-workspaces-monorepo

This project is a `react` monorepo. It packs some useful packages that would help you in the development of your app.

- `ui-components` package its as is named an ui-component library. It cames pre-defined to use:

  -`roullup` as a way to compile the library.

  -`typescript` as a weapon of choice to code the component.

  -`storybook` as a way to preview and document the components.

  -`styled-components` as a way to style the app. This one is packed as a `peerDependency`.

  -`@testing-library/react` as a way to test the components.

- `eslint-rules` package its as is named a global eslint rules configurations.

- `app` as a simple Create React App to use our components.

## Scripts

### `npm run <command> -w <workspace>`

To run any of the commands declared in the speciic `package.json` of the workspace.

### `npm run <command> -w`

To run the specified command in all the workspaces. If the workspace does not have the command its ignored.

### `npm init -w <workspace>`

To add a new workspace that will be symlinked with the others without the need to use `npm link`.

### `npm install <package> -w <workspace>`

To install the specified package in the workspace.
