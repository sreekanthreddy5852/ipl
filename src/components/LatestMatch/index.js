import React from 'react'
import './index.css'

const LatestMatch = ({latestMatch}) => {
  return (
    <>
      <h1 className="head">Latest Matches</h1>
      <div className="card">
        <div>
          <div className="match-details">
            <h1 className="team-name">{latestMatch.competing_team}</h1>
            <p className="match-date">{latestMatch.date}</p>
            <p className="match-venue">{latestMatch.venue}</p>
            <p className="match-result">{latestMatch.result}</p>
          </div>
          <img
            className="image"
            src={latestMatch.competing_team_logo}
            alt={latestMatch.competing_team}
          />
        </div>
        <hr className="line" />
        <div className="details">
          <h1 className="heading">First Innings</h1>
          <p className="innings-1">{latestMatch.first_innings}</p>
          <h1 className="heading">Second Innings</h1>
          <p className="innings-2">{latestMatch.second_innings}</p>
          <h1 className="heading">Man Of The Match</h1>
          <p className="player-of-the-match">{latestMatch.man_of_the_match}</p>
          <h1 className="heading">Umpires</h1>
          <p className="umpires">{latestMatch.umpires}</p>
        </div>
      </div>
    </>
  )
}
export default LatestMatch
