import React, { Component } from 'react'
import { Pagination } from 'antd';
import '../style/components/pagination.scss';


export default class PaginationDisplay extends Component {

  constructor( props ) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(page, pageSize){
    this.props.change(page, pageSize)
  }

  render() {

    const current = this.props.current || 1;
    const totalPages = this.props.totalPages || 1;

    return (
       <Pagination showQuickJumper onChange={ this.onPageChange } current={current} defaultCurrent={1} pageSize={10} total={totalPages} />
    )

   }

}
