import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (ev) => {
    this.setState({
      filters: {
        type: ev.target.value
      }
    })
  }

  // componentDidMount() {
  //   let URL = '/api/pets'
  //   if (this.state.type !== 'all') {
  //     URL = URL + `?type=${this.state.type}`
  //   }
  //   fetch('/api/pets')
  //   .then(res => res.json())
  //   .then(json => {
  //     console.log(json)
  //   })
  // }

  onAdoptPet = (id) => {
    this.setState(prevState => ({
      pets: prevState.pets.map(
        pet => (pet.id === id ? Object.assign(pet, {isAdopted: true}) : pet)
      )
    }))
  }

  onFindPetsClick = () => {
    let URL = '/api/pets'
    if (this.state.filters.type !== 'all') {
      URL = URL + `?type=${this.state.filters.type}`
    }
    fetch(URL)
    .then(res => res.json())
    .then(json => {
      this.setState({
        pets: json
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
