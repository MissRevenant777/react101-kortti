import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Kortti">
      <h1>History of Alchemist</h1>
      <br></br>
        <p>Alchemy encompasses several philosophical traditions spanning some four millennia and three continents. These traditions' general penchant for cryptic and symbolic language makes it hard to trace their mutual influences and genetic relationships. One can distinguish at least three major strands, which appear to be mostly independent, at least in their earlier stages: Chinese alchemy, centered in China; Indian alchemy, centered on the Indian subcontinent; and Western alchemy, which occurred around the Mediterranean and whose center shifted over the millennia from Greco-Roman Egypt to the Islamic world, and finally medieval Europe. Chinese alchemy was closely connected to Taoism and Indian alchemy with the Dharmic faiths. In contrast, Western alchemy developed its philosophical system mostly independent of but influenced by various Western religions. It is still an open question whether these three strands share a common origin, or to what extent they influenced each other.</p>
      </div>
      <div className="Kortti">
      <h1>History of Alchemist</h1>
      <br></br>
        <p>Alchemy encompasses several philosophical traditions spanning some four millennia and three continents. These traditions' general penchant for cryptic and symbolic language makes it hard to trace their mutual influences and genetic relationships. One can distinguish at least three major strands, which appear to be mostly independent, at least in their earlier stages: Chinese alchemy, centered in China; Indian alchemy, centered on the Indian subcontinent; and Western alchemy, which occurred around the Mediterranean and whose center shifted over the millennia from Greco-Roman Egypt to the Islamic world, and finally medieval Europe. Chinese alchemy was closely connected to Taoism and Indian alchemy with the Dharmic faiths. In contrast, Western alchemy developed its philosophical system mostly independent of but influenced by various Western religions. It is still an open question whether these three strands share a common origin, or to what extent they influenced each other.</p>
      </div>
    </>
  )
}

export default App