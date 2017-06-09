import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Paginate.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginate extends React.Component {

  generatePages(page, max_page, callbackPage){
  	let list = [];
  	for (let i = page; i < (max_page + page); i++) {
		list.push(
			<PaginationItem key={i} { ...(i == page?{'active':true}:{}) }>
		      <PaginationLink onClick={() => callbackPage(i)}>
		        {i}
		      </PaginationLink>
		    </PaginationItem>
	    );	
	}
	return list;
  }

  render() {
  	let {
  		page,
  		per_page,
  		total,
  		max_page,
  		clickPage
  	} = this.props;
  	console.log(page,per_page,total,max_page);
    return (
		<Pagination>
	        <PaginationItem { ...(page == 1?{'disabled':true}:{}) }>
	          <PaginationLink previous/>
	        </PaginationItem>
	        { this.props.max_page && this.generatePages(page, max_page, clickPage) }
	        <PaginationItem { ...(page == (Math.ceil(total/per_page))?{'disabled':true}:{}) }>
	          <PaginationLink next/>
	        </PaginationItem>
      </Pagination>
    );
  }
}

export default withStyles(s)(Paginate);