// add functionality

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const hoopContractFactory = await hre.ethers.getContractFactory('HoopPortal');
    // @HoopContract using the .deploy method Hardhat creates a local eth blockchain that is spun up, runs the contract code, and afterwards destroys the local network for testing purposes
    const hoopContract = await hoopContractFactory.deploy();
    // Awaits for deployment confirmation  on the blockchain
    await hoopContract.deployed();

    console.log("Contract deployed to:", hoopContract.address);
    console.log("Contract deployed by:", owner.address);

    let pointCount;
    pointCount = await hoopContract.getTotalPoints();

    let pointTxn = await hoopContract.shoot();
    await pointTxn.wait();

    pointCount = await hoopContract.getTotalPoints();

    pointTxn = await hoopContract.connect(randomPerson).shoot();
    await pointTxn.wait();

    pointCount = await hoopContract.getTotalPoints
};
// run the main func
const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit node process without error
    } catch (error) {
        console.error(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
};

runMain();