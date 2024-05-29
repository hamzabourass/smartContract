require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

const { RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
    networks: {
        besu: {
            url: RPC_URL,
            accounts: [PRIVATE_KEY]
        }
    },
    solidity: "0.8.24",
};