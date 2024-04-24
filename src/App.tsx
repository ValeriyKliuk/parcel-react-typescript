import React, { useEffect } from 'react'
import Reactotron from 'reactotron-react-js'

export const App: React.FC = () => {
  useEffect(() => {
    Reactotron.display({
      name: 'display name',
      preview: 'display preview',
      value: 'display value',
    })
  }, [])

  return <h1>Hello, World!</h1>
}
