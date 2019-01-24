import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'antd';
import { Card } from 'antd';

import PaginationDisplay from './Pagination';
import '../style/components/panel-list.scss';
import { getNowPlayingMovieListAsyncHandler, getFilteredMoviesListAsyncHandler } from '../actions/actions'

const { Meta } = Card;

class PanelList extends Component {

  constructor(props){
    super(props);

    this.fetchGenresName = this.fetchGenresName.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  fetchGenresName(genreArr){
    let result = [];
    if(this.props.genre.length == 0){
      return;
    }
    result = this.props.genre.filter( (genreItem) => {
      return genreArr.includes(genreItem.id)
    });
    result = result.map( (item) => {
      return item.name
    });
    return result
  }

  onPageChange(page, pageSize){
    if(this.props.movie && this.props.movie.isFiltered){
      this.props.dispatch(getFilteredMoviesListAsyncHandler({genreSelected : this.props.movie.genres, rating : this.props.movie.rating , page : page}) )
    } else {
      this.props.dispatch(getNowPlayingMovieListAsyncHandler(page))
    }
  }

  render() {
    const {movie, genre} = this.props;
    let cards;
    let movieList =  movie.results || [];
    if(1){
      cards = movieList.map( (movieItem, index) => {
        return (
          <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ margin: '0 0 15px 0' }}>

            <Card
              hoverable
              cover={<img src={`https://image.tmdb.org/t/p/w154/${movieItem.poster_path}`} className="img-responsive moviePanel" alt="Movie Image" />}
              >
              <Meta
                title={movieItem.title}
                description={this.fetchGenresName(movieItem.genre_ids)? this.fetchGenresName(movieItem.genre_ids).join(' | ') : ''}
                />
              <p>Rating - {movieItem.vote_average}</p>

            </Card>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="row">
          {cards}
        </div>

        <div className=''>
          <PaginationDisplay current={this.props.movie.page}  totalPages={ Math.ceil(this.props.movie.total_results / 2 ) } change={this.onPageChange}/>
        </div>
      </div>
    )

  }
}


export default connect((store)=>{
  return store
})(PanelList)
