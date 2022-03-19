const main = async () => {

  const transactionFactory = await hre.ethers.getContractFactory('MyTestToken')
  const transactionContract = await transactionFactory.deploy("1000000000000000000000000")

  const ERC721Factory = await hre.ethers.getContractFactory('UniqueAsset');
  const ERC721Contract = await ERC721Factory.deploy();

  await transactionContract.deployed();
  // await ERC721Contract.deployed();

  console.log('Transactions deployed to:', transactionContract.address);
  console.log('ERC721 deployed to:', ERC721Contract.address);
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()