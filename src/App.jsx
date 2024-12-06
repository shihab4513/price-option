// import { LineChart } from 'recharts'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'

import Nav from './components/Nav/Nav'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
      
      <Nav></Nav>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
// recharts instillation code: npm install recharts
