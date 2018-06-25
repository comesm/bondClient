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
    this.props.stuffActions.fetchStuff();  
}

renderName() {
    if(this.props.stuff.length > 0) {
        console.log(this.props.stuff);
        return (<li>{this.props.stuff[0].name}</li>)
    }
}

    render() {
        console.log(21, this.props);
        return (<div>
            {this.renderName()}
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
