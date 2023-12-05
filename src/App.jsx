import React, { useState } from 'react'
import Header from './components/Header'
import Center from './components/Center'

const App = () => {

  const [boardModalOpen, setboardModalOpen] = useState(false)

  return (
    <div>

      {/* Header Section */}
      <Header boardModalOpen = {boardModalOpen} setboardModalOpen = {setboardModalOpen}/>

      {/* Center Section */}
      <Center/>
    </div>
  )
}

export default App