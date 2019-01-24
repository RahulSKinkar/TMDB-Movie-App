import React, { Component } from 'react'
import SearchBox from './SearchBox'
import PanelList from './PanelList'

import { getGenreListAsyncHandler, getNowPlayingMovieListAsyncHandler } from '../actions/actions'
import {connect} from 'react-redux'

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {

  constructor(props){
    super(props);

    this.onGetNowPlayingMovies = this.onGetNowPlayingMovies.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getNowPlayingMovieListAsyncHandler(1));
    this.props.dispatch(getGenreListAsyncHandler());
  }

  onGetNowPlayingMovies(e){
     e.preventDefault();
    this.props.dispatch(getNowPlayingMovieListAsyncHandler(1));
  }

  render() {
    return (
      <React.Fragment>

        <Layout className="layout">
          <Header>
            <div className="logo">
              <a  onClick={this.onGetNowPlayingMovies}><h1 style={{color: 'white'}}>The Movie App</h1></a>
            </div>

            {/*<Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
              >
              <Menu.Item key="1">Now Playing</Menu.Item>
              <Menu.Item key="2">Movies</Menu.Item>
              <Menu.Item key="3">TV Shows</Menu.Item>
            </Menu>*/}

          </Header>

          <Content style={{ padding: '0 50px' }}>

            <br/>

            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Movies</Breadcrumb.Item>
            </Breadcrumb>

            <br/>

            <div className="container-fluid">
              <div className="row">
                <div className="topbar" style={{'margin': '0 0 70px 0', padding: '15px', width: '100%', border: '1px solid #00152947', borderRadius: '10px', color: 'white'}}>
                  <SearchBox genre={this.props.genres} dispatch={this.props.dispatch}/>
                </div>
              </div>
            </div>

            <div  className="container panelListWrapper">
              <PanelList />
            </div>

          </Content>

          <Footer style={{ background: '#001529', color: 'white' }}>
            <img src="images/logo-tmdb.png" style={{height: '50px'}}></img>
            <span style={{ position: 'absolute', right: '50px', paddingTop: '15px'}} >Created by TheMovieApp  </span>
          </Footer>

        </Layout>

      </React.Fragment>
    )
  }
}

export default connect((properties)=>{
  return {
    movies: properties.movie,
    genres: properties.genre
  }
})(App)
