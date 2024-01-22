import React, {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    const {match: {params: {id}}} = props
    this.state = {
    teamMatches: [], isLoading: true,
    teamId: id,}

    this.teamMatchUrl = `https://apis.ccbp.in/ipl/${id}`
  }

  componentDidMount() {
    const {teamMatchUrl} = this

    fetch(teamMatchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({teamMatches: data, iLoading: false})
      })
  }

  render() {
    const {teamMatches, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamMatches.team_banner_url} alt="team banner" />

            <LatestMatch latestMatch={teamMatches.latest_match_details} />

            <ul className="list-container">
              {teamMatches.recent_matches.map(match => (
                <MatchCard match={match} key={match.key} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
