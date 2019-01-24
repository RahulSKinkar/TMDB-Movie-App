import React, { Component } from 'react'
import Redux, { connect } from 'react-redux'

import { getFilteredMoviesListAsyncHandler } from '../actions/actions'
import { Select, Slider } from 'antd';

class SearchBox extends Component {

  constructor (props ){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      genreSelected: [],
      rating: 3
    }

  }

  handleSearch(e) {
    e.preventDefault()
    this.props.dispatch(getFilteredMoviesListAsyncHandler({ ...this.state, page: 1} ))
  }

  handleChange(value) {
    this.setState({
      genreSelected: value
    })

  }

  onSliderChange(value) {

    this.setState({
      rating: value
    })

  }

  render() {

    const Option = Select.Option;
    const genreArr = this.props.genre;
    const { rating } = this.state;
    let children = [];

    children = genreArr.map( (genre, index) => {
      return <Option key={genre.id} value={genre.id + ''}>{genre.name}</Option>
    })

    return (

      <React.Fragment>

        <div className="search ">
          <form onSubmit={this.handleSearch.bind(this)}>

            <h2 style={{color: 'white'}}> Filter:</h2>
            <div className='input-group'>

              <div className="col-xs-12 col-sm-5 col-lg-6"  style={{marginBottom: '15px'}}>
                <p>By Genres:</p>
                <Select className=""
                  mode="tags"
                  style={{ width: '100%' }}
                  onChange={this.handleChange}
                  tokenSeparators={[',']}
                  >
                  {children}
                </Select>
              </div>

              <div className="col-xs-12 col-sm-5 col-lg-4" style={{marginBottom: '15px'}}>
                <p>By Rating:</p>
                <Slider
                  className=""
                  min={0}
                  max={10}
                  onChange={this.onSliderChange}
                  value={typeof rating === 'number' ? rating : 0}
                  step={0.5}
                  style={{marginTop: '25px'}}
                  />
              </div>

              <div className="col-xs-12 col-sm-2" style={{marginTop: '30px'}}>
                <button type='submit' className='btn btn-light styleButton' onClick={this.handleSearch}>Search</button>
              </div>

            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}



export default connect()(SearchBox)
