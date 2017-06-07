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
import Comments from '../../components/Comments';

class Detail extends React.Component {
  render() {
    return (
      <div className={s.root}> 
        {this.props.detail &&
          <div className={s.container}>
            <h1>{this.props.detail.name}</h1>
            <div dangerouslySetInnerHTML={{__html: this.props.detail.embed.html}}></div>
            <p className={s.description}>{this.props.detail.description}</p>
            {this.props.comments && this.props.comments.map(comment => (
                <Comments comment={comment} key={comment.uri} />
              ))
            }
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    detail: state.detail.data,
    comments: state.comments.data
  };
}

export default connect(mapStateToProps)(withStyles(s)(Detail));

