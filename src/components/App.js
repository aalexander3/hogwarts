import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Filters from './Filters'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    filters: {
      sortBy: null,
      greased: false
    }
  }

  handleSort = (event) => {
    let filter = event.target.value

    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          sortBy: filter
        }
      }
    }, this.sortTheHogs)
  }

  sortTheHogs = () => {
    // take the existing hogs, sort them by the sorted filter, and set the sorted hogs to state
    let whatToSort;
    whatToSort = (this.state.filters.sortBy === "weight" ? 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' : "name")
    let sortedHogs = this.state.hogs.sort((a,b) => {
      if (a[whatToSort] < b[whatToSort]) return -1
      if (a[whatToSort] > b[whatToSort]) return 1
      if (a[whatToSort] === b[whatToSort]) return 0
    })

    this.setState(prevState => {
      return {
        hogs: sortedHogs
      }
    })
  }

  handleClick = () => {
    // filter the hogs by greasy/not greasy & set state of hogs to the filtered list
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          greased: !prevState.filters.greased
        }
      }
    }, this.filterTheHogs)
  }

  filterTheHogs = () => {
    let filteredHogs;
    if (this.state.filters.greased) {
      filteredHogs = this.state.hogs.filter(hog => {
        return hog.greased
      })
    } else {
      filteredHogs = hogs
    }

    this.setState(prevState => {
      return {
        hogs: filteredHogs
      }
    })
  }


  render() {
    return (
      <div className="App">
          <Nav />
          <Filters handleClick={this.handleClick} handleSort={this.handleSort} />
          <br />
          <HogList hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
