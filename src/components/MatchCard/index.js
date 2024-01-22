import React from 'react'
import './index.css'

const MatchCard = ({match}) => {
  return (
    <li>
      <div className="container">
        <img
          className="image"
          src={match.competing_team_logo}
          alt={match.competing_team}
        />
        <h1 className="heading">{match.competing_team}</h1>
        <p className="match-result">{match.result}</p>
        <p className="match-status">{match.match_status}</p>
      </div>
    </li>
  )
}
export default MatchCard
