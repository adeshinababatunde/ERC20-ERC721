//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract MyTestToken is ERC20 {

    constructor(uint256 totalSupply) ERC20("MyTestToken", "MTT") {
        _mint(msg.sender, totalSupply);
    }


   function buyToken(address receiver, uint256 amount) public payable {
        _mint(receiver, amount);
    }
}