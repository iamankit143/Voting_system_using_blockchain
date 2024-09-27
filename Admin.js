import React from 'react'
import politicianData from '../data/PoliticianData'
import ProgressBar from '@ramonak/react-progress-bar'


const Admin = () => {
    const politician=politicianData

  return (
    <div className='admin-home'>
      {
        politician.map((politician, index) => (

          <div key={index} className='politician-card'>
            <img src={politician.image} alt={politician.name} className='admin-pol-image' />
            <h3>{politician.name}</h3>
            
            <ProgressBar className='progress-bar' completed={politician.votes} maxCompleted="10000"/>
          </div>
        ))
      }
    </div>
  )
}

export default Admin
