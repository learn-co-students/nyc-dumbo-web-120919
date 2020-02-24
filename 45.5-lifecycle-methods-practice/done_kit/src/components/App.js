import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import FilterContainer from './FilterContainer'
import hogs from '../porkers_data';

let generalAppColor = '#'+Math.floor(Math.random()*16777215).toString(16)

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      sortValue: "All",
      filterValue: false
    }
    console.log(`%cCONSTRUCTED: App`, `color: ${generalAppColor}`);
  }

  componentDidMount(){
    console.log(`%cMOUNTED: App`, `color: ${generalAppColor}`);
    document.title = "Hog Blog " + document.title
  }

  shouldComponentUpdate(){
    console.log(`%cMAYBE WILL UPDATE: App`, `color: ${generalAppColor}`);
    return true
  }

  componentDidUpdate(){
    console.log(`%cUPDATED: App`, `color: ${generalAppColor}`);
  }

  handleSort = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
  }

  handleFilter = () => {
    this.setState(prevState => {
      return {
        filterValue: !prevState.filterValue
      }
    })
    }
  
  sortHogs = () => {
    let {sortValue} = this.state

    if(sortValue === "Name"){
      return [...hogs].sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)
      }
      )
    } else if (sortValue === "Weight"){
      return [...hogs].sort((hogA, hogB) => {
        return hogA.weight - hogB.weight
      })
    } else {
      return [...hogs]
    }
  }

  applyFilter = (finalHogs) => {
    let {filterValue} = this.state
    if (filterValue){
      return finalHogs.filter(hog => hog.greased)
    } else {
      return finalHogs
    }
  }

  render() {
    console.log(`%cRENDERED: App`, `color: ${generalAppColor}`);
    
    return (
      <div className="App">
          < Nav />
          < FilterContainer handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          < HogContainer hogs={this.applyFilter(this.sortHogs())} code={'979521369900769280'}/>
      </div>
    )
  }
}

export default App;
