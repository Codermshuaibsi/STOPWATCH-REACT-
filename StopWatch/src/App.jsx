import React, { useEffect, useState } from 'react'
import './App.css'
import image from './Assest/logo.png'

function App() {
  const [second, Setsecond] = useState(0)
  const [minute, Setminute] = useState(0)
  const [hour, Sethour] = useState(0)
  const [isRunning, Setissrunning] = useState(false);

  useEffect(() => {
    let intervals;
    if (isRunning) {
      intervals = setInterval(() => {
        Setsecond(prevSec => {
          if (prevSec == 59) {
            Setminute(prevMin => {
              if (prevMin == 59) {
                Sethour(prevHour => prevHour + 1);
                return 0;
              }
              return prevMin + 1;
            })
            return 0;
          }
          return prevSec + 1;
        })

      }, 1000);
    }
    return () => { clearInterval(intervals) }
  }, [isRunning])


  function start() {
    Setissrunning(true);
  }

  function stops() {
    Setissrunning(false)
  }

  function reset() {
    Sethour(0);
    Setminute(0);
    Setsecond(0);
    Setissrunning(false);
  }

  return (
    <div>
      <div className="container">
        <div className="head">
          <img src={image} alt="" />
          <h1>Stopwatch </h1>
        </div>
        <div className="main">
          <div className="time-container">
            <h2 className="time">{second>9?"":"0"}{second}:{minute>9?"":"0"}{minute}:{hour>9?"":"0"}{hour}</h2>
            <button className='start' onClick={start}> Start</button>
            <button className='stop' onClick={stops}>Stop</button>
            <button className='reset' onClick={reset}>Reset   </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App