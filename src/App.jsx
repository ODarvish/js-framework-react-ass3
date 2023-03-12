import { useEffect, useState } from 'react'
import { parseISO, differenceInDays } from 'date-fns'
import './App.css'

const myBirthday = parseISO('2023-08-10T00:00:00')
const startDate = myBirthday;
const endDate = new Date();
const durationInDays = differenceInDays(startDate, endDate)

function App() {

  useEffect(() => {
 
    return () => {
      console.log(durationInDays)
    }  
  }, [])
  return (
    <div>
      <div className="app"></div>
      <h1>Days to my bithday</h1>
      <p className='days'>{durationInDays}</p>
    </div>
  )
}

export default App
