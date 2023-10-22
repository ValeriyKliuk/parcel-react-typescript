import React from 'react'
import { getTodo } from './api/fetchjson'

export const App = () => {
  void getTodo()
  return <h1>Hello, World!</h1>
}
