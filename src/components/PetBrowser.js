import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePets = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} />
    })
  }
  
  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
