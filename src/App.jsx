
import { useState } from 'react'
import './App.css'

import Intervalo from './components/intervalo'
import Media from './components/media'
import Soma from './components/soma'
import Sorteio from './components/sorteio'
function App() {
  
  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div id='appBody'>
    <h1>Exercício react-redux</h1>

    <div className='linha'>
      <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
    </div> 
    <div className="linha">
    <Media min={min} max={max}></Media>
    <Soma min={min} max={max}></Soma>
    <Sorteio min={min} max={max}></Sorteio>
    </div>
    
    </div>
  )
}

export default App
