import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './person-details.css';

export default class PersonDetails extends Component {

  swapi = new SwapiService()

  state = {
    data: {}
  }

  _updatePerson = (id) => {
    this.swapi.getPerson(id)
    .then(data => {
      this.setState({data: data})
    })
  }

  componentDidMount = () => {

    setInterval(() => {
      const id = Math.floor(Math.random() * (25 - 1 + 1) + 1)
      this._updatePerson(id)
    }, 5000)
  }



  render() {

    const {id, name, gender, birthYear, eyeColor} = this.state.data;
    const personImg = 'https://starwars-visualguide.com/assets/img/characters/${id}.jpg'

    return (
      <div className="person-details card">
        <img className="person-image"
          src={personImg}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}