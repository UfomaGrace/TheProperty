import React from 'react'
import Aboutbreadcrumb from './Aboutbreadcrumb'
import Abouth from './Abouth'
import AboutCounter from './AboutCounter';
import OurJourney from './OurJourney';
import ExpertTeam from './ExpertTeam';
import FirstAbout from './FirstAbout';

function About() {
  return (
    <div className=''>
      <Abouth />
      <Aboutbreadcrumb />
      <FirstAbout />
      <AboutCounter />
      <OurJourney />
      <ExpertTeam />
    </div>
  )
}

export default About;