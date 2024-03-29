const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
// compiled file reference
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  // retrieve accounts
  accounts = await web3.eth.getAccounts();
  // deploy contract
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});
  
    await factory.methods.createCampaign('100').send({
      from: accounts[0],
      gas: '1000000'
  });
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );    
});
describe('Campaigns',() => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as manager', async () =>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    });

    it('allows peoples to contri and marks them as approvers', async () =>{
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);

    });

    it('requires a minimum contri', async ()=> {
        try{
            await campaign.methods.contribute().send({
                value: '5',
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows a manager to make spend req', async () => {
        await campaign.methods.createRequest('Buy Batteries','100',accounts[2]).send({
            from: accounts[0],
            gas: '1000000'
        });

        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy Batteries', request.description);
    } );

    it('process requests', async ()=>{
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10','ether')
        });

        await campaign.methods.createRequest('A', web3.utils.toWei('5','ether'), accounts[1]).send({
            from: accounts[0],
            gas:'1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas:'1000000'
        });
        let bal = await web3.eth.getBalance(accounts[1]);
        bal = web3.utils.fromWei(bal,'ether');
        bal = parseFloat(bal);
        console.log(bal);
        assert(bal>103);
    });
});

