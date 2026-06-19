import GetInTouch from '@/components/something-new'
import CoreValues from '@/features/components/CoreValues'
import Hero from '@/features/components/Hero'
import MeetTheTeam from '@/features/components/MeetTheTeam'
import React from 'react'

const About = () => {
  return (
    <main>
        <Hero/>
        <MeetTheTeam/>
        <CoreValues/>
        <GetInTouch/>
    </main>
  )
}

export default About