import { useEffect, useState } from 'react'
import { parseISO, intervalToDuration } from 'date-fns'
import './App.css'

function getInterval() {
  const midsummer = parseISO('2023-08-24T00:00:00')
  const intervalId = setInterval(() => {
    const interval = intervalToDuration({
      start: new Date(),
      end: midsummer
    })
  })
}

function App() {
  const [untilMidsummer, setUntilMidsummer] = useState(getInterval())

  // const [count, setCount] = useState(0)

  // console.log('render')
 

  useEffect(() => {
    // console.log('useEffect')
    
    // const midsummer = parseISO('2023-06-24T00:00:00')
    const intervalId = setInterval(() => {
     
      const interval = getInterval()
      // const { months, days, hours, minutes, seconds } = interval  
      // console.log('months', months)
      // console.log('days', days)
      // console.log('hours', hours)
      // console.log('minutes', minutes)
      // console.log('seconds', seconds)
      // console.log('-days until midsummer', days)
      // console.log('setInterval')
      setUntilMidsummer(interval)
    }, 1000);

    return () => {
      // console.log('clearInterval')
      clearInterval(intervalId)
    }  
  }, [])
  console.log(untilMidsummer)

// function App() {
//   const [count, setCount] = useState(0)

  return (
    <div>
      <div className="app">
       
      </div>
      <h1>Days to my bithday</h1>
      <p className='days'>16</p>
    </div>
  )
}

export default App
