/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import { AppBar } from 'react-toolbox';
import appBarStyles from 'react-toolbox/lib/app_bar/theme.css';
import buttonStyles from 'react-toolbox/lib/button/theme.css';
import rippleStyles from 'react-toolbox/lib/ripple/theme.css';
//<Navigation />
/*

          <div className={s.banner}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>

          <div className={s.root}>
        <div className={s.container}>
          
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>Talos Vimeo</span>
          </Link>
        </div>
      </div>

*/
class Header extends React.Component {
  render() {
    return (
      <AppBar leftIcon='menu' onLeftIconClick={this.props.toggle} theme={s} />
    );
  }
}

export default withStyles(appBarStyles, buttonStyles, rippleStyles, s)(Header);
