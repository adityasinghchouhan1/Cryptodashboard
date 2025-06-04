import React from 'react'
import Sidebar from './Components/SideBar'

const App = () => {
  return (
    <div className="w-full  bg-radial-gradient bg-size-300 animate-radial-move">
      <div className="flex flex-col sm:justify-start sm:items-start h-full text-white text-3xl font-bold sm:p-4">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
