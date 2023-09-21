# Token Pair Swapping Tool Using Uniswap V3

## About The Project
This project involves building a Token Swapping tool using Uniswap V3 on the Goerli test network.

The tool consists of two pages: SWAP and HISTORY.

## Live Demo

[Live Demo Link](https://uniswap-v3-dapp.vercel.app/)

### SWAP
- Users must connect their wallet before proceeding with the swap.
![1](https://github.com/tsremarkable/uniswap-v3-dapp/assets/110060055/970a713c-30d8-4f71-baf0-83c823fecccc)

- Users can enter the addresses of the `From Token` and `To Token`. For example, `0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6` for WETH and `0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984` for UNI. When users enter a valid token address, the Token symbol is automatically updated.
![2](https://github.com/tsremarkable/uniswap-v3-dapp/assets/110060055/aca1aa8b-a45a-49cb-a331-8f77fab569ec)

- Users can enter the amount of the `From Token`, and the tool automatically calculates the `To Token` amount. If the entered value is larger than the available stock, an error message is displayed.
![3](https://github.com/tsremarkable/uniswap-v3-dapp/assets/110060055/a9d2bc3f-74f5-433e-9c40-a2eb622b986d)

- Once the Token addresses and the entered amount are valid, users can initiate the swap by clicking the `SWAP` button.
![4](https://github.com/tsremarkable/uniswap-v3-dapp/assets/110060055/1102c3da-27f6-457f-b754-3d8e7289aef8)


- If the swap is successful, a `Success` message is displayed. If something went wrong, an `Error` message is displayed. You can check swap history by navigating to `History` tab.
![5](https://github.com/tsremarkable/uniswap-v3-dapp/assets/110060055/0d3d6fef-22f7-4f03-a563-148b97af503f)


### HISTORY
On this page, users can view their swapping history for their wallets. It displays information about the swapped Token pairs, including the address, symbol, and the amount that was exchanged.


## Built With
This project was initiated with [Create React App](https://github.com/facebook/create-react-app). It utilizes [Material UI](https://mui.com/material-ui/) and [Tailwind CSS](https://tailwindcss.com/) for building the frontend, along with various React components. The codebase is formatted with [Prettier](https://prettier.io/). To interact with the Ethereum network, [Ethers.js](https://docs.ethers.org/v6/) and [Wagmi.sh](https://wagmi.sh/) are utilized.


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
