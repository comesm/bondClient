//wrapper class for use with redux-first routing
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push, replace, goBack, goForward } from '../routingActions';

const Link = (props) => {
    const { to, action, onClick, children, dispatch, ...other } = props;
    
    const handleClick = (event) => {
        if((event.button && event.button !== 0)
          || event.metaKey
          || event.altKey 
          || event.ctrlKey
          || event.shiftKey
          || event.defaultPrevented === true) {
              return;
          }
          event.preventDefault();

          if(onClick) {
              onClick(event);
          }

          if(action === 'replace') {
              dispatch(replace(to));
          } else if(action === 'back' || action === 'goBack') {
              dispatch(goBack());
          } else if(action === 'forward' || action === 'goForward') {
              dispatch(goForward()); 
          } else {
              dispatch(push(to));
          }
        };
        return (<a href={to} onClick={handleClick} {...other}>{children}</a>)
    }

    Link.PropTypes = {
        to: PropTypes.string.isRequired,
        action: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.node,
        dispatch: PropTypes.func.isRequired
    };

    export default connection()(Link);
