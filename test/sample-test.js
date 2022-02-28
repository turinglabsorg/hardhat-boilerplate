const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greetings", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greetings = await ethers.getContractFactory("Greetings");
    const contract = await Greetings.deploy("Hello, world!");
    await contract.deployed();

    expect(await contract.greet()).to.equal("Hello, world!");

    const setGreetingTx = await contract.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await contract.greet()).to.equal("Hola, mundo!");
  });
});
