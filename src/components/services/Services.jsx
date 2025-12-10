import React from 'react'
import Serviceh from './Serviceh'
import Servicebreadcrumb from './Servicebreadcrumb'
import ServiceProperty from './ServiceProperty'
import ServiceCard from './ServiceCard'
import ServiceFooter from './ServiceFooter'

export default function Services() {
  return (
    <div>
        <Serviceh />
        <Servicebreadcrumb />
        <ServiceProperty />
        <ServiceCard />
        <ServiceFooter />
    </div>
  )
}
