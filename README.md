# Token Pair Swapping Tool Using Uniswap V3

<div align="center">
    <a href="#"><h1>View Demo</h1></a>
</div>

## About The Project
This project is for building a Token Swapping tool with Uniswap V3 on Goerli test network.

This tool consists of two pages; SWAP and HISTORY

### SWAP
- Users must connect their wallet before proceeding swap.
- Users can add `From Token` and `To Token` addresses.
For example, `0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6` for WETH, `0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984` for UNI. When users enter a valid token address, it updates the Token symbol besides of the amount input box.
- Users can enter `From Token` amount, then the tool calculates automatically the `To Token` amount. If the entered value is larger than stock, it displays error message.
- Token addresses and the entered amount is valid, users can do swap by clicking `SWAP` button.

### HISTORY
Users can see their swapping history on this page for their wallets. It displays the swapped Token pairs info; address, symbol and the swapped amount.


## Built With
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In this project, I used [Material UI](https://mui.com/material-ui/) and [Tailwind CSS](https://tailwindcss.com/) as well as React components for building frontend.
For formatting codebase, [Prettier](https://prettier.io/) was used. For interacting with Ethereum network, [Ethers.js](https://docs.ethers.org/v6/) and [Wagmi.sh](https://wagmi.sh/) were used.


## Getting Started
### Installation
1. Clone the repo
```shell
git clone https://github.com/tsremarkable/uniswap-v3-dapp.git
```
2. Install NPM package in the project directory
```shell
cd uniswap-v3-dapp
npm install
```
3. In the project directory, you can run:
```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```shell
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```shell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```shell
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
