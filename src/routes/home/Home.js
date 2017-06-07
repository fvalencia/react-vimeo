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
import history from '../../history';
import s from './Home.css';

class Home extends React.Component {

  goToDetail = (uri, e) => {
    e.preventDefault();
    history.push({
      pathname: '/detail/' + uri.split('/').pop(),
      search: '',
      state: this.state
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News <i className="material-icons">face</i></h1>
          {this.props.videos && this.props.videos.map(item => (
            <article key={item.uri} className={s.newsItem} onClick={(e) => this.goToDetail(item.uri, e)}>
              {item.picture && item.picture.link && <img src={item.picture.link} />}
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

