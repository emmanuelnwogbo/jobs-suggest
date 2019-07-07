import React, { Component } from 'react';
import faker from 'faker';
import { connect } from 'react-redux';

import { getResults } from './actions';

import SuggestArea from './components/SuggestArea';
//console.log(faker)
class App extends Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.getResults()
    console.log(this.props);
  }
  
  render() {
    return (
      <div>
        <div className={'container'} style={{
          minHeight: '100vh',
        }}>
          <div className={'container__top'}>
            <h1>Jobotron.</h1>
            <SuggestArea />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.resultsReducer
  }
}

export default connect(mapStateToProps, { getResults })(App);