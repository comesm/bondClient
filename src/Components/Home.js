import style from './Home.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as stuffActions from '../actions/stuffActions';

class Home extends Component {

constructor(props) {
    super(props);
    this.state = {
        isLoaded: false
    }
}


componentDidMount() {
    console.log(19, this.props);
   // this.props.stuffActions.fetchStuff();  
}

renderName() {
    console.log(23, this.props.stuff);
    if(this.props.stuff.length > 0) {
        console.log(24, this.props.stuff);
        return (<li>HELLO HOME</li>)
    }
}

    render() {
        console.log(21, this.props);
        return (<div>
            HELLO HOME
        </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
