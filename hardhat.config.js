require("@nomicfoundation/hardhat-toolbox");


const GOERLI_PRIVATE_KEY = "YOUR_KEY";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "YOUR_API(infura or other)",
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};