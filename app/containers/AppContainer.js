
// Tutorial react native router flux: https://www.youtube.com/watch?v=JKIMbSXlMkY&list=PLgpnWB3j6BnJFGc7g1NyDHnAy2_ORQ_fK#t=197.389613

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions'

import {
  AsyncStorage,
  Alert,
  View,
  Text,
  TouchableHighlight,
  Stylesheet,
  Navigator,
} from 'react-native';

import {Router, Scene,} from 'react-native-router-flux';


//Imports for the navigator screens (Router)
import cryptopunks from '../components//cryptopunks';



class AppContainer extends Component {

  componentWillMount(){

  }

  render () {
    return (
      <Router duration={0} >

        <Scene key="root">

          <Scene
            key="cryptopunks"
            component={cryptopunks}
            title="cryptopunks"
            initial={true}
            hideNavBar={true}
            />

        </Scene>
      </Router>
    );
  }
}



function mapDispatchToProps (dispatch) {
  return bindActionCreators (ActionCreators, dispatch);
}

function mapStateToProps (state) {
  return {
    //demoState: state.demoState,
    //recipeCount: state.recipeCount,
    //highscore: state.highscore
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (AppContainer);
