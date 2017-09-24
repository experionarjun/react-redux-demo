import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userDetailsFetch from '../data/actions/userActions';

function moveStateToProps(state){
  return{
    user: state.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    userDetailsFetch
  },dispatch)
}

class App extends Component {

  componentDidMount(){
      this.props.userDetailsFetch();
  }

  renderUser=()=>{
    const {data} = this.props.user;

    if(!data.hasOwnProperty('id')) return null;

    return(
      <div style={{marginTop:'10px'}}>
        <img src={data.picture.large} alt='profile'/>
        <h4>{data.name.first} {data.name.last}</h4>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {
          this.props.user.fetching ?
          <p className="App-intro">Loading........</p>
          : this.renderUser()
        }
      </div>
    );
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(App);
