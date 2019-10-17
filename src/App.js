import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header';
import Headline from './components/headline';
import './app.scss';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { fetchPosts } from './actions';

const tempArr = [{
  fName: 'Jay',
  lName: 'Sheth',
  email: 'Jay@gmail.com',
  age: 25,
  onlineStatus: true
}];
 const initialState = {
   hideBtn: false
 }
class  App extends Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      ...initialState
    }
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState(){
    const { hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }
  exampleMethod_returnsAValue(number) {
    return number + 1 ;
  }
  render(){
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    }
    const {hideBtn} = this.state;
    return (
      <div className="App" data-test="app-component">
        <Header />
        <section className="main">
          <Headline 
            header="posts" 
            desc="Click the button the to render posts"
            tempArr={tempArr} />  
          {!hideBtn && 
              <SharedButton {...configButton} />
          }
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body,
                }
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps, {fetchPosts} )(App);
