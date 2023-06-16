import { useState } from 'react'
import './App.css'
import Carta from './Carta'

function App() {

  return (
    <>
      <div id="box_00">
        <div id="box_01">
            <img src='./special.jpg' alt='special.jpg'  width="300px" height="180px"></img>
        </div>
        <div id="contenedor-carta">
          
          {/* What makes you S.P.E.C.I.A.L.? */}
          <Carta special="STRENGTH" cara="cara.jpg" detras="./S_1.jpg" />
          <Carta special="PERCEPTION" cara="cara.jpg" detras="./P_1.jpg" />
          <Carta special="ENDURANCE" cara="cara.jpg" detras="./E_1.jpg" />
          <Carta special="CHARISMA" cara="cara.jpg" detras="./C_1.jpg" />
          <Carta special="INTELLIGENCE" cara="cara.jpg" detras="./I_1.jpg" />
          <Carta special="AGILITY" cara="cara.jpg" detras="./A_1.jpg" />
          <Carta special="LUCK" cara="cara.jpg" detras="./L_1.jpg" />
        </div>
      </div>

    </>
  )
}

export default App
