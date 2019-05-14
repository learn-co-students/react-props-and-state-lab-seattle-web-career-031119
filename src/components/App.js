import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const PETS_URL = '/api/pets'


class App extends React.Component {
  constructor() {
    super()
//state object that holds all the information, and are subject to change
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  //without arrow function filter below changes value of this by altering the scope
  changeType = (ev) => {
    this.setState({ filters: {
      type: ev.target.value
    }})
    console.log(this.state);
  }

  petsClick = (ev) => {
    let fullUrl = PETS_URL
      if (this.state.filters.type !== 'all'){
        //+= saves you from saying fullUrl  = fullURl + '?type=' + this.state.filters.type
        fullUrl += '?type=' + this.state.filters.type
      }

    fetch(fullUrl)
      .then(res => res.json())
      .then(json => {this.setState({pets: json})})
  }
  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map( pet => {
        if(pet.id === id){
          pet.isAdopted = true
        }
        return pet;

      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={ this.changeType } onFindPetsClick ={ this.petsClick }/>
            </div>
            <div className="twelve wide column">
        { /* use this to comment out or js will yell at you! {this.state.pets} pulled from*/}
              <PetBrowser
              pets=
              {this.state.pets}
              onAdoptPet=
              {this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
