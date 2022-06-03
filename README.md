# Belvo Test - By Raphael Pimenta

This project is a Crypto Wallet that allows the user to check the wallet information and send crypto in transactions to their contacts.

#### Stack used

- _React_ as the main library to create the application
- _Redux & Redux Saga_ with the purpose to create a store and managing the async flow outside the components
- _Styled Components_ for styling
- _Axios_ to create the API interface
- _Formik + Yup_ to simplify the form controls
- _i18next_ to provide language accessibility

## Getting started

First of all, you can either use `npm` or `yarn` to install the dependencies

`yarn` or `npm install`

### Build & Run

To run the project in development mode you should run the command below:

`yarn start` or `npm run start`

To build the project you can use this command:

`yarn build` or `npm run build`

## About tests

Currently we hav only unit-tests for the store using `Jest`.
Considering a next step, would be great to configure and implement the `react-testing-library` to test the components and the integrations.
One other step ahead is using `cypress` for the e2e tests.

To run the tests in this project, use the command below:

`yarn test`

## Moving forward

There are a lot of other possibilities for improvement, but I'd like to highlight these two below:

### Design Tokens

In this project, we have the folder `src/design-tokens`. The main idea here is to create a way to easily change colors, fonts, and sizes.
In this project, this information is described inside the source code, but following the concept of Design Tokens, we can create a separate package that handles this kind of information and distribute it in many different ways so developers can use it for all different platforms, such as mobile applications and desktop applications.

### Components Library with Storybook

Also, we could create a separate storybook project that contains the atomic components for the applications.
