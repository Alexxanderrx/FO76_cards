import { useState } from 'react'
import './App.css'
import Carta from './Carta'

function App() {

  return (
    <>
    <div>
      
    </div>
      <div id="contenedor-carta">
        {/* What makes you S.P.E.C.I.A.L.? */}
        <Carta cara="cara.jpg" detras="./S_1.jpg" />
        <Carta cara="cara.jpg" detras="./P_1.jpg" />
        <Carta cara="cara.jpg" detras="./E_1.jpg" />
        <Carta cara="cara.jpg" detras="./C_1.jpg"/>
        <Carta cara="cara.jpg" detras="./I_1.jpg"/>
        <Carta cara="cara.jpg" detras="./A_1.jpg"/>
        <Carta cara="cara.jpg" detras="./L_1.jpg"/>
      </div>
    </>
  )
}

export default App
