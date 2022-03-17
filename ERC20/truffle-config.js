const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

const privateKey = process.env['PRIVATE_KEY'];
const infuraProjectId = process.env['INFURA_PROJECT_ID'];

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*'
        },
        ropsten: {
            provider: () =>
            new HDWalletProvider({
              privateKeys: [privateKey],
              providerOrUrl:
              'https://ropsten.infura.io/v3/' + infuraProjectId,
            }),
            network_id: 4,
            confirmations: 2,
            timeoutBlocks: 400,
            skipDryRun: true,
        },
         
    },
    compilers: {
        solc: {
            version: "0.6.8",
            docker: false,
            settings: {
                optimizer: {
                    enabled: true,
                }
            }
        }
    }
}
