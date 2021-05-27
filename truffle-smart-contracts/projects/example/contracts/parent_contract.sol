pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT

// IMPORT THE TASK CONTRACTS INTERFACE
import { Child } from './child_contract.sol';

contract Parent {

    // MAP OF INSTANTIATED CHILD CONTRACTS -- NAME => CONTRACT
    mapping (string => Child) public children;

    // FETCH CHILD BY NAME
    function fetch_child(string memory name) public view returns(Child) {
        return children[name];
    }

    // CREATE NEW CHILD CONTRACT
    function create_child(string memory name) public {

        // IF THE NAME IS NOT ALREADY TAKEN
        require(!exists(name), 'a child with this name already exists');

        // INSTANTIATE & INDEX A NEW CHILD
        children[name] = new Child(name, msg.sender);
    }

    // CHECK IF A CHILD EXISTS
    function exists(string memory name) public view returns(bool) {
        if (address(children[name]) != 0x0000000000000000000000000000000000000000) {
            return true;
        } else {
            return false;
        }
    }
}