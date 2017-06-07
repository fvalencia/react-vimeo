import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Comments.css';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox';
import cardStyles from 'react-toolbox/lib/card/theme.css';

class Comments extends React.Component {
  render() {
  	let comment = this.props.comment;
    return (
		<Card>
			<CardTitle
				avatar={comment.user.picture.link}
				title={comment.user.name}
				subtitle={comment.text}
			/>
		</Card>
    );
  }
}

export default withStyles(s, cardStyles)(Comments);