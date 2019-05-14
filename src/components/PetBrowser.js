import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  //Make a new Pet component (Pet.js) and give it the pet prop of this.props.
  makePets() {
    return this.props.pets.map(pet =>
      < Pet
      key = { pet.id }
      pet={ pet }
      onAdoptPet = { this.props.onAdoptPet }
      />)
  }

  render() {

    return <div className="ui cards">  { this.makePets() } </div>
  }
}

export default PetBrowser
