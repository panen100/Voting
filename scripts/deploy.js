// const hre = require("hardhat");

async function main(){
    const lock_factory = await ethers.getContractFactory("Lock");

    const lock_factory_contract = await lock_factory.deploy("1764580866");

    console.log("deployed to:",lock_factory_contract.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});