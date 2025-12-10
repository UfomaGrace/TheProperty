import React from 'react'
import PremiumProp from './PremiumProp'
import PremiumEstate from './PremiumEstate'
import FeaturedProperties from './FeaturedProperties'
import Houses from './Houses'
import FeaturedServices from './FeaturedServices'
import FeaturedAgents from './FeaturedAgents'
import RecentPosts from './RecentPosts'
import PerfectInvestment from './PerfectInvestment'
import Testimonial from './Testimonial'

function Home() {
  return (
    
    <div>
      <PremiumProp />
      <PremiumEstate />
      <FeaturedProperties />
      <Houses />
      <FeaturedServices />
      <FeaturedAgents />
      <Testimonial/>
      <RecentPosts />
      <PerfectInvestment />
    </div>
  )
}

export default Home