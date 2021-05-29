// LIST ALL CONTRACTS THAT SHOULD BE UPLOADED
const contracts = [
    'DeviceManager',
]

// TRUFFLE RUNS THIS AUTOMATICALLY
module.exports = (deployer) => {
    contracts.forEach(path => {
        deployer.deploy(
            artifacts.require('./contracts/' + path + '.sol')
        )
    })
}