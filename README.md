# KEYKO - TEST Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure
The project is divided into 3 main functional folders inside `src/`, which are:
### `components/`
### `screens/`
### `services/`

We use `components/` for the reusable widgets, `screens/` for the application's screens, and `services/` for any heavier non-DOM related computations.

## Flow
The app starts on the homepage `/`, which allows the user to connect a wallet provider (only Metamask implemented in the test).

Upon connecting, the user is then redirected to the dashboard page `/dashboard` where they can see their available panels, depending on their role.

We have 2 non-exclusive roles for each connected wallet:
- owner
- minter (isWhitelisted -> true)

We have 4 widgets:
- Add whitelist (owner only)
- Remove whitelist (owner only)
- Mint (minter only)
- Burn (all connected users)
- (additional) Balance of token with id 1

## CSS
We use the styled-components package in order to create the CSS for the components and screens. Each component or screen will be child of a folder with the same name and will have a ``.style.tsx`` sibling.

Generally available CSS is set in `App.style.tsx`.

## Testing points
- routing and navigation
- conditional rendering based on user roles
- reactive Submit buttons, auto disable/re-enable
- REFRESH role computation if an owner calls Add/Remove Whitelist on themselves (after successfull Add Whitelist, the MINTER Widget appears automatically, and after successull Remove Whitelist, the MINTER Widget dissappears automatically)
- REFRESH balance computation after mint/burn (please use token id 1)
- web3js usage for calling
    - public contract variables
    - public read functions
    - public write functions
    - functions restricted only to a small group of users
    - onlyOwner functions
    - balanceOf function
- deployment and prerequisites for the contract which can be found [here](https://rinkeby.etherscan.io/address/0x9c88EA32d0693F8dA29EaFa2A239A7EF716290f1#readContract)


## Running locally
### On the existing contract
1. ``npm install``
2. ``npm start``
3. 🚀🚀🚀🌑

If you want to play with the whole interface, we will provide you ownership of the current contract.

### On fresh Contract
1. Follow the instructions [here](https://github.com/wamfever/erc1155-contract-test)
2. After setting ``ContractData.jsx`` follow the steps from the existing contract section
3. 🚀🚀🚀🌑
