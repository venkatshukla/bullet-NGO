import React, {Component} from 'react';
import factory from '../ethereum/factory';
import { Card, Button , Rating} from 'semantic-ui-react';
import '../components/Layout';
import Layout from '../components/Layout';
import {Link} from '../routes';


class CampaignIndex extends Component{

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        
        const names = await Promise.all(campaigns.map((address) => {
            return factory.methods.getDeployedCampaignsName(address).call()
              })
          );
          
        return {campaigns,names};
      }
    
     /*  (
        <h2>
          ROT{" "}
          <Image
            src="https://cdn.countryflags.com/thumbs/germany/flag-400.png"
            floated="right"
            size="mini"
          />
        </h2>
      ) */
  
     renderCampaigns(){
       
        const items = this.props.campaigns.map((address ,index )=> {
            return {
                header: this.props.names[index]+ '  | Smart Contract Address:  ' + address,
            description: (
                <Link route={`/campaigns/${address}`}>
                <a>View NGO</a>
                </Link>
            ),
                fluid: true,
                extra:<Rating icon='star' defaultRating={4} maxRating={5} />,
                color: 'teal'
            };
        });

        return <Card.Group  items={items} />
    }
    
    render() {
        return <Layout>
            <div>
        <h3>Registered NGOs</h3>
        <Link route="/campaigns/new">
         <a>
            <Button
                floated="right" 
                content="Register NGO"
                icon= "add circle"
                primary 
            />
         </a>
        </Link>
         {this.renderCampaigns()}
        </div>
        </Layout>;
    }
}
export default CampaignIndex;