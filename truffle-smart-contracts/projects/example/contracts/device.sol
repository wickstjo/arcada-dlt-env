pragma solidity ^0.8.4;
// SPDX-License-Identifier: MIT

contract Child {

    // THE WALLET ADDRESS THAT PAID FOR THIS CONTRACTS CREATION
    address public creator;

    // THE ASSIGNED NAME OF THE CONTRACT
    string public name;

    // WHEN CREATED..
    constructor(string memory _name, address _creator) {

        // SET VARIABLES
        name = _name;
        creator = _creator;
    }
}