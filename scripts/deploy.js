const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString());

    const hoopContractFactory = await hre.ethers.getContractFactory("HoopPortal");
    const hoopContract = await hoopContractFactory.deploy();
    await hoopContract.deployed();

    console.log("HoopPortal address: ", hoopContract.address);
}
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();