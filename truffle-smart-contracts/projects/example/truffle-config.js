module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',          // YOUR
            port: 8545,                 // GATEWAY
            network_id: "*",
            gas: 5000000,               // MAX GAS USAGE FOR UPLOAD
            websockets: true            // ENABLE WEBSOCKET UPLOAD
        }
    },
    compilers: {
        solc: {
            version: "^0.8.4",           // THE SOLIDITY COMPILER
            settings: {
                optimizer: {
                    enabled: true,      // DEFAULT: FALSE
                    runs: 200           // DEFAULT: 200
                }
            }
        }
    }
}