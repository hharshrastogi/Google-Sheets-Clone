import React from 'react'
import './App.css'
import Cell from './components/Cell/Cell.tsx'
import { RecoilRoot } from 'recoil'

function App() {
  

  return (
   <RecoilRoot>
    <Cell> Hello</Cell>
   </RecoilRoot>
  )
}

export default App
