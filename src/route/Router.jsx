import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Error from '../Error'
import Homes from '../pages/Homes'
import Abouts from '../pages/Abouts'
import Servicess from '../pages/Servicess'
import Propertiess from '../pages/Propertiess'
import Agentss from '../pages/Agentss'
import Blogss from '../pages/Blogss'
import Termspage from '../pages/Termspage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route index element={<Homes/>}/>
          <Route path='about' element={<Abouts/>}/>
          <Route path='properties' element={<Propertiess/>}/>
          <Route path='services' element={<Servicess/>}/>
          <Route path='agent' element={<Agentss/>} />
          <Route path='blog' element={<Blogss/>} />
          <Route path='terms' element={<Termspage/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router