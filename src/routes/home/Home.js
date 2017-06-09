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
import {bindActionCreators} from 'redux';
import history from '../../history';
import s from './Home.css';
import LetsPaginate from '../../components/Paginate';
import {fetchNews} from '../../actions/home';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

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
    const videos = this.props.videos.map(item => (
      <div key={item.uri} className={s.videoBox} onClick={(e) => this.goToDetail(item.uri, e)}>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <div className={s.imageWrapper}>
            {item.picture && item.picture.link && <img src={item.picture.link} className={s.imgBox} />}
          </div>
          <h1 className={s.titleBox}>{item.name}</h1>
          {item.user && 
            <div className={s.userBox}>
              { item.user.picture && item.user.picture.link && <img src={item.user.picture.link} className={s.avatarPicture} />}
              { item.user.name && <h1 className={s.userText} >{item.user.name}</h1>}
            </div>}
        </CSSTransitionGroup>
      </div>
    ));
    return (
      <div className={s.root}>
        <div className={s.container}>
           <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {videos}
           </CSSTransitionGroup>
          {!this.props.isFetching && 
            <LetsPaginate 
                page = {this.props.page} 
                per_page = {this.props.per_page} 
                total = {this.props.total} 
                max_page = {3}
                clickPage = {this.props.fetchNews}
            />
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    videos: state.videos.data,
    page: state.videos.page,
    per_page: state.videos.per_page,
    total: state.videos.total,
    isFetching: state.videos.isFetching
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews: fetchNews }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(withStyles(s)(Home));

