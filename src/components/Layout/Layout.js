/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import { Layout as LayoutMaterial, NavDrawer, Panel } from 'react-toolbox';
import layoutStyles from 'react-toolbox/lib/layout/theme.css';
import drawStyles from 'react-toolbox/lib/drawer/theme.css';
import overLay from 'react-toolbox/lib/overlay/theme.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
      drawerActive: false
  };

  toggleDrawerActive = () => {
    console.log('Clicked!!');
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  render() {
    return (
      <LayoutMaterial>
        <NavDrawer 
            active={this.state.drawerActive}
            onOverlayClick={ this.toggleDrawerActive }>
            <p>
                Navigation, account switcher, etc. go here.
            </p>
        </NavDrawer>
         <Header toggle={this.toggleDrawerActive} />
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                {this.props.children}
            </div>
            <Footer />
      </LayoutMaterial>
    );
  }
}

export default withStyles(s, layoutStyles, drawStyles, overLay)(Layout);
