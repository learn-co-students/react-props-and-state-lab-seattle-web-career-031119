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

  componentDidMount() {
    fetch('/api/pets').then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  pushPets = (data) => {
    this.setState({
      pets: data
    })
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    if (type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => this.pushPets(json))
    } else if (type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(res => res.json())
      .then(json => this.pushPets(json))
    } else if (type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(res => res.json())
      .then(json => this.pushPets(json))
    } else if (type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(res => res.json())
      .then(json => this.pushPets(json))
    }
  }

  onAdoptPet = (ev) => {
    let id = ev.target.id
    this.setState(prevState => ({
      pets: prevState.pets.map(
        pet => (pet.id === id ? Object.assign(pet, {isAdopted: true}) : pet)
      )
    })
  )
  }

  onChangeType = (ev) => {
    let animal = ev.target.value
    this.setState({
      filters: {
        type: animal
      }
    })
  }

render() {
  return (<div className="ui container">
    <header>
      <h1 className="ui dividing header">React Animal Shelter</h1>
    </header>
    <div className="ui container">
      <div className="ui grid">
        <div className="four wide column">
          <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
        </div>
        <div className="twelve wide column">
          <PetBrowser petData={this.state.pets} onAdoptPet={this.onAdoptPet}/>
        </div>
      </div>
    </div>
  </div>)
}
}




export default App
