import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className='app'>
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter/>
    </div>
  )
})

export default App