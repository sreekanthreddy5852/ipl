import React, {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  url = 'https://apis.ccbp.in/ipl'

  componentDidMount() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        this.setState({teams: data.teams, isLoading: false})
      })
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="container">
        <div className="heading-details">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            {teams.map(team => (
              <TeamCard team={team} key={team.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
export default Home
