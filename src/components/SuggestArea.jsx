import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerSuggestions } from '../actions';

import SuggestCard from './SuggestCard';

class SuggestArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputStyle: {
        position: 'relative',
        padding: '1.5rem',
        fontSize: '1.7rem',
        outline: 'none',
        background: 'rgba(48, 51, 107,.2)',
        color: '#000000',
        borderRadius: '.5rem',
      }
    }
  }

  returnSuggestions = () => {
    if (this.props.state.results.length > 0) {
      if (this.props.state.searchvalue === '') {
        return;
      }

      return this.props.state.results.map(result => {
        if (result.profession && result.profession.toLowerCase().includes(this.props.state.searchvalue.toLowerCase())) {
          return <SuggestCard 
            key={result.id} 
            name={result.name}
            image={result.image}
            profession={result.profession}
            state={result.state}/>
        }

        if (result.role && result.role.toLowerCase().includes(this.props.state.searchvalue.toLowerCase())) {
          return <SuggestCard 
            key={result.id}
            companyName={result.companyName}
            image={result.image}
            role={result.role}
            state={result.state}/>
        }
      })
    }
  }
  
  render() {
    return (
      <div style={{
        width: '100%'
      }} className={'container__top__inputarea'} onClick={this.openSuggestions}>
        <input 
        className={'container__top--input'} 
        style={this.state.inputStyle} 
        id={'search-input'}
        onChange={(e) => this.props.triggerSuggestions(e.target.value)}/>
        <div className={'container__top__suggestions'}>{this.returnSuggestions()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.resultsReducer2
  }
}

export default connect(mapStateToProps, { triggerSuggestions })(SuggestArea);