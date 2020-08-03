import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <hr/>
          {this.props.bands.map(band => <li>{band.name}</li>)}
      </div>
    )
  }
}

const stateToProps = (state) =>{
  return {
    bands: state.bands
  }
}
const dispatchToProps = (dispatch) => {
  return {
    addBand: (bandInfo) => {dispatch(addBand(bandInfo))}
  }
}

const addBand = (payload) => {
  return {
    type: "ADD_BAND",
    payload
  }
}


export default connect(stateToProps, dispatchToProps)(BandsContainer)