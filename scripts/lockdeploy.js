
async function main() {

    const TestContract_Factory = await ethers.getContractFactory("Lock");
  
    const TestContract = await TestContract_Factory.deploy("1764580866");

    await TestContract.waitForDeployment();

    console.log("Bank deployed to:",TestContract.target);
  
  }
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });