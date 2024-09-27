import React from 'react'
import TeamMember from '../data/TeamMember'
import VotingCandidates from '../data/VotingCandidates'  // Assuming you have a similar data file for candidates

const About = () => {
    const teamMembers = TeamMember
    const candidates = VotingCandidates

    return (
        <div>
            <h1 className='title'>Voting Candidates</h1>
            <div className="candidates">
                {candidates.map((candidate, index) => (
                    <div key={index} className="candidate">
                        <a href={candidate.wikipediaUrl} target="_blank" rel="noopener noreferrer">
                            <img src={candidate.imageUrl} alt={candidate.name} className='profile-image' />
                        </a>
                        <div className='details'>
                            <h3>{candidate.name}</h3>
                            <p>{candidate.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='title'>My Team Members</h1>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.imageUrl} alt={member.name} className='profile-image' />
                        <div className='details'>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <a>{member.email}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About
