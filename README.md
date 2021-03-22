# Demo

Please visit: [https://zendala-test-dsj.netlify.app/](https://zendala-test-dsj.netlify.app/) to see the demo.

# Principles and technologies

| Purpose                     | Technology                                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Development library         | [React Js](https://es.reactjs.org/)                                                                                        |
| Styles                      | [Styled components](https://styled-components.com/)                                                                        |
| State management            | [Redux toolkit](https://redux-toolkit.js.org/)                                                                             |
| Information consumption     | [Openpay API REST](https://www.openpay.mx/docs/api/?shell#introducci-n)                                                    |
| Authentication and database | [Firebase](https://console.firebase.google.com/u/0/)                                                                       |
| Requests to the server      | [Axios](https://github.com/axios/axios)                                                                                    |
| Architecture                | [Clean architecture](https://medium.com/@janithl/on-doing-clean-architecture-in-react-applications-666d568362e)            |
| Development methodology     | [Mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00) |
| Deploy                      | [Netlify](https://www.netlify.com/)                                                                                        |

# Setup and Run

### Env variables

Create a .env file at the root level of the project, below are the required environment variables:

Openpay: To obtain Openpay credentials you must create a free account and then enter the sandbox provided by Openpay.
| Variable | Description |
| -------------------------- | ------------------------------ |
| `REACT_APP_OPENPAY_API` | url for the Openpay API REST |
| `REACT_APP_OPENPAY_SECRET_KEY` | For calls between servers and with full access to all API operations |
| `REACT_APP_OPENPAY_PUBLIC_KEY` | This key is only allowed to create cards or create tokens |
| `REACT_APP_OPENPAY_ID` | merchant identifier|

Firebase: To obtain the firebase configuration visit [firebase console](https://console.firebase.google.com/u/0/) and create a project, this project must have the authentication integration with Google activated and the integration with Firestore. Then add the following environment variables:
| Variable | Description |
| -------------------------- | ------------------------------ |
| `REACT_APP_FIREBASE_API_KEY` | Firebase api key|
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase authentication domain|
| `REACT_APP_FIREBASE_PROJECT_ID` | Firebase project id |
| `REACT_APP_FIREBASE_STORAGE` | Firebase storage bucket url|
| `REACT_APP_FIREBASE_MESSAGING` | Firebase messaging sender id|
| `REACT_APP_FIREBASE_APP_ID` | Firebase application id|

### Install and run

`yarn` or `yarn add`
Install the dependencies and devDependencies and start the server.

`yarn start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

# Folder Architecture

There are 2 main folders and one index.tsx file inside the `src` folder:

### `src/app`

All the web stuff: components, styles, routes, store, etc.

| Resource      | Description                                                                                                                                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/components` | It contains 4 main folders:`/app` here the app is wrapped along with providers that are necessary, `/common` for reusable components,` /layout` for the main structure of the interface, and `/pages` where the main views are concentrated. |
| `/constants`  | constants that could be used throughout the development of the project                                                                                                                                                                       |
| `/redux`      | Redux implementation for application state management.                                                                                                                                                                                       |
| `/routes`     | It contains 2 files, `Routes.ts` declares the names of the app paths, and `Router.ts` handles the general routing of the app.                                                                                                                |
| `/styles`     | root styles for global project                                                                                                                                                                                                               |
| `/typings`    | global types and/or interfaces that can be reused. Similar to entities but separate from the connection to the backend                                                                                                                       |
| `/theme`      | Global configuration for the style provider, allows changing the theme.                                                                                                                                                                      |

### `src/core`

All the material of the backend connection: axios configuration, firebase, entities, endpoints calls, etc.

| Resource          | Description                                                                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/config`         | It contains contracts generation, the axios config and the firebase config                                                                                                                                         |
| `/entities`       | Here the entity definitions are placed, these depend on the business logic                                                                                                                                         |
| `/infrastructure` | Here is where we connect to the API, services, external stuff to achieve use-cases requirements.                                                                                                                   |
| `/usecases`       | Here goes the logic of the app. What is a use-case? A bussiness process: create a customer, get all customers, etc. Use cases are used by components and it receives entities and contracts to achieve their work. |

### `src/index.tsx`

main application execution file
