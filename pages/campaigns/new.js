import React, { Component } from 'react';
import { Form, Button, Input, Message, Progress } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class CampaignNew extends Component {

    state = {
        minimumContribution:'',
        name:'',
        gstin:'',
        errorMessage:'',
        loading:false,
        percentD:100
    };

    
    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading:true,errorMessage:''});
        
        try{
            const accounts = await web3.eth.getAccounts();
            let retobj = await factory.methods
            .createCampaign(this.state.minimumContribution,this.state.name,this.state.gstin)
            .send({from: accounts[0]});

            console.log(retobj.blockHash);

        Router.pushRoute('/');
        } catch(err) {
            this.setState({errorMessage: err.message});
        }
            this.setState({loading: false});
            }
    
    render() {
    return (
        <Layout>
    <h3>Register an NGO</h3>
    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
        <Form.Field>
            <label style={{color: '#FFF'}}>NGO Name</label>
            <Input 
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}/>

             <label style={{color: '#FFF'}}>GSTIN Number</label>
            <Input 
            value={this.state.gstin}
            onChange={event => this.setState({gstin: event.target.value})}/>

            <label style={{color: '#FFF'}}>Minimum Contribution</label>
            <Input 
            label="wei" 
            labelPosition="right"
            value={this.state.minimumContribution}
            onChange={event => this.setState({minimumContribution: event.target.value})}/>
           
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button loading={this.state.loading} primary>Create!</Button>
            
    </Form>
    <br></br>
            <Progress disabled={!this.state.loading} percent={this.state.percentD}  indicating>
            <label style={{color: '#FFF'}}>Deployting to Ethereum blockchain</label>
  </Progress>
        </Layout>
    );
    }
}

export default CampaignNew;