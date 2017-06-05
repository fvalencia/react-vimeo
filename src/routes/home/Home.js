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
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          {this.props.videos && this.props.videos.map(item => (
            <article key={item.uri} className={s.newsItem}>
              <h1 className={s.newsTitle}>{item.name}</h1>
              <div className={s.newsDesc}>
                {item.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    videos: state.videos.data
  };
}

export default connect(mapStateToProps)(withStyles(s)(Home));

