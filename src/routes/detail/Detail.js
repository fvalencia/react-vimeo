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
import {connect} from 'react-redux';
import s from './Detail.css';

class Detail extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Detail Video</h1>
          {this.props.detail &&
            <div>
              <h2>{this.props.detail.name}</h2>
              <div dangerouslySetInnerHTML={{__html: this.props.detail.embed.html}}></div>
              <p>{this.props.detail.description}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    detail: state.detail.data
  };
}

export default connect(mapStateToProps)(withStyles(s)(Detail));

