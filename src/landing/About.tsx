import React from 'react'
import AboutEnvoyX from './about/AboutEnvoyX'
import OurCommitment from './about/OurCommitment'
import MeetTheTeam from './about/MeetTheTeam'
import Statistics from './about/Statistics'
import Services from './Services'

function About() {
  return (
    <div>
        <Statistics/>
        <AboutEnvoyX/>
        <Services/>
        <OurCommitment/>
        <MeetTheTeam/>
    </div>
  )
}

export default About