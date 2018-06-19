import style from './Home.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as stuffActions from '../actions/stuffActions';

class Home extends Component {

componentDidMount() {
    console.log(11, this.props);
}


    render() {
        return (<div>Hello world</div>)
    }
}


function mapStateToProps({ stuff }) {
    return {
        stuff
    };
   // stuff: stuff
}

function mapDispatchToProps(dispatch) {
  return {
      stuffActions: bindActionCreators(stuffActions, dispatch)
  }
}
