import React, {Component} from 'react';
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button, Rating } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import factory from '../../ethereum/factory';
class CampaignShow extends Component {

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        const name = await factory.methods.getDeployedCampaignsName(props.query.address).call();
        const gstin = await factory.methods.getDeployedCampaignsGstin(props.query.address).call();
        
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            name: name,
            gstin: gstin
        };
    }

    renderCards(){
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
            name,
            gstin
        } = this.props;
        const items = [
            {
                header: name,
                meta:'Name of the NGO',
                description:<a target='_blank' href={'http://localhost:8080/api/gstin?gstin='+gstin}>GSTIN : {gstin}</a>,
                extra: <Rating icon='star' defaultRating={4} maxRating={5} />,
                style:{overflowWrap: 'break-word'}
            },
            {
                header: manager,
                meta:'Address of NGO Manager',
                description:'The manager created this NGO',
                style:{overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta:'Minimum Contribution (wei)',
                description:'You must contribute at least this much wei to become an approver',
                style:{overflowWrap: 'break-word'}
            }, 
            {
                header: requestsCount,
                meta:'Number of Payment Requests',
                description:'A request tries to withdraw money from the contract. Requests must be approved by approvers',
                style:{overflowWrap: 'break-word'}
            },
            {
                header: approversCount,
                meta:'Number of Approvers',
                description:'Number of people who have contributed to the NGO',
                style:{overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.fromWei(balance,'ether'),
                meta:'NGO Balance (ether)',
                description:'Balance is how much money this NGO has left to spend',
                style:{overflowWrap: 'break-word'}
            }

        ];

        return <Card.Group items={items} />;

    }
    render(){
    return ( 
    <Layout>
        <h3>{this.props.name} Dashboard </h3>
        <Grid>
            <Grid.Row>
        <Grid.Column width={10}>
            {this.renderCards()}
           
            </Grid.Column>
        <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Link route={`/campaigns/${this.props.address}/requests`}>
            <a>
                <Button primary>View Requests</Button>
            </a>
            </Link>
        </Grid.Row>
        </Grid>
    </Layout>

    );
    }
}

export default CampaignShow;