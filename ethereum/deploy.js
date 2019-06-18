const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    'hub panda total initial clap gadget range group essay farm original mixture',
    'https://rinkeby.infura.io/xVPsW6e6WkYyvaS0JUGh');

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
     
    console.log('Attempting to deploy from account', accounts[0]);
    try{
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({gas: 4712388,gasPrice: 65000000000, from: accounts[0]});
    console.log('Contract deployed to ', result.options.address);
    }
    catch(err) {
        console.log(err);
    }
    
};
deploy();