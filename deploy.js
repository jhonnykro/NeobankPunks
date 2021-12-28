const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const NeoBankPunks = await ethers.getContractFactory("NeoBankPunks");
  const deployed = await NeoBankPunks.deploy();

  console.log("Neo Bank Punks is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
