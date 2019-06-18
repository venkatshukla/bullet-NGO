import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0x3ED7A19f011B1dF12ddF08d15E1B38032A8129C4'
);

export default instance;