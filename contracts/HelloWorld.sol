// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/metatx/ERC2771Context.sol";

contract HelloWorld is ERC2771Context {

    string private _saySomething;

    constructor() ERC2771Context(0xAC7340Eba2Ce03EEb8c7eC92800f13DDaba75667) {
        _saySomething = "Hello World!";
    }

    function speak() public view returns(string memory) {
        return _saySomething;
    }

    function updateAndSpeak(string memory newMessage) public {
        _saySomething = newMessage;
    }
}
