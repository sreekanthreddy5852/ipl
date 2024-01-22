import React from 'react'

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = team => {
  return (
    <Link to={`/team-matches/${team.id}`}>
      <div className="card">
        <img className="team-image" src={team.team_image_url} alt={team.name} />
        <h1 className="team-name">{team.name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
