import React from 'react'
import Header from '../Home/Header';
import Dashboard from '../Home/Dashboard';
import '../Home/Appp.css'
import Sidebar from '../Extra/Sidebar'
import { useState } from 'react'


function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
       <Dashboard />
    </div>
  )
}

export default Home