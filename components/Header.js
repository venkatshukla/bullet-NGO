import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu fluid fixed='top' style={{ marginTop: '0px', background: '#ff6b4a' }}>

      <Link route="/">
        <a className="item"><Header as='h4'>Bulletproof NGO</Header></a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">NGOs</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">Register</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};