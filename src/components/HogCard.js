import React, { Component } from 'react'

// dummy data to structure hog card
// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }

export default class HogCard extends Component {

  state = {
    showDetails: false
  }

  formatUrl = () => {
    let format = this.props.hog.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${format}.jpg`)
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showDetails: !prevState.showDetails
      }
    })
  }

  details = () => {
    let {specialty, greased} = this.props.hog
    let weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    let medal = this.props.hog['highest medal achieved']
    return (
      <div>
        <p>Specialty: { specialty }</p>
        <p>{ greased ? "supes greasy" : 'squeaky cleany' }</p>
        <p>Weight: { weight }</p>
        <p>Medal: { medal }</p>
      </div>
    )
  }


  render(){
    return (
      <div className="ui four wide column" onClick={this.handleClick}>
        <div className="pigTile">
          <img src={this.formatUrl()} alt={this.props.hog.name} />
          <h3>{ this.props.hog.name }</h3>
          { this.state.showDetails ? this.details() : null }
        </div>
      </div>
    )
  }

}












//
