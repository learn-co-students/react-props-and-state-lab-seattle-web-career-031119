import React from 'react'

class Pet extends React.Component {

  checkAdoptStatus = () => {
    if (this.props.petInfo.isAdopted) {
      return (
        <div className="extra content">
          <button className="ui primary button">Already adopted</button>
          <button className="ui disabled button">Adopt pet</button>
        </div>
      )
    } else {
      return (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button id = {this.props.petInfo.id} onClick={this.props.onAdoptPet} className="ui primary button">Adopt pet</button>
        </div>
    )}
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.petInfo.gender === 'female' ? <div>♀</div> : <div>♂</div>}
            {this.props.petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}lbs</p>
          </div>
        </div>
          {this.checkAdoptStatus()}
      </div>
    )
  }
}

export default Pet
