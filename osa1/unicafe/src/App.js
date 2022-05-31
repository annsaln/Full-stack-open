import { useState } from 'react'

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good+bad+neutral}/>
        <StatisticLine text="average" value={(good - bad) / (good + bad + neutral)}/>
        <StatisticLine text="positive" value={((good / (good + bad + neutral)) * 100).toFixed(2)} extra='%'/>
      </tbody>   
    </table>
    </div>
  )
}

const StatisticLine = ({ text, value, extra }) => {
  return (
    <tr><td>{text}</td><td>{value} {extra}</td></tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good +1)
  const handleNeutral = () => setNeutral(neutral +1)
  const handleBad = () => setBad(bad +1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App