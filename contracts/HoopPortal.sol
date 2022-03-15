// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HoopPortal {
    uint256 totalShots;

    constructor() {
        console.log("Welcome to HoopPortal,\n a custom Eth project from CryptoLeek");    
    }

    function shoot() public {
        totalShots += 1;
        console.log("%s has made a jumpshot!", msg.sender);
    }

    function getTotalPoints() public view returns (uint256){
        console.log("We have %d total points!", totalShots);
        return totalShots;
        
    }

}