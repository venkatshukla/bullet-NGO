import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu fluid fixed='bottom' style={{ background: '#ff6b4a' }}>
      <Menu.Item position='right' fluid={true} style={{marginLeft: '200'}}>
      
        <Header as='h5'>Made with &#9749; by Venkat Shukla</Header>
     
      </Menu.Item>
    </Menu>
  );
};