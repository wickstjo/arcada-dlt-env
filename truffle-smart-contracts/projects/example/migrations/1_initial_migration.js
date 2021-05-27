// THIS NEVER NEEDS TO BE MODIFIED
// READ THE TRUFFLE DOCS TO UNDERSTAND WHY
module.exports = function(deployer) {
    deployer.deploy(
        artifacts.require('./contracts/Migrations.sol')
    )
}