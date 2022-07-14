import React, {useState} from 'react'

import './index.css'

function App() {

  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const [message2, setMessage2] = useState('')



  let calcBmi = (event) => {
    //if submit without enteries it'll prevent submitting
    event.preventDefault()
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 10000)
      // [weight (kg) / height (cm) / height (cm)] x 10,000
      setBmi(bmi.toFixed(1))

   

      if (weight < 25) {
        setMessage('Your suggested weight range is between 1 - 25')
        setMessage2('You are in underweight range.')
      } else if (weight >= 25 && weight < 45) {
        setMessage('Your suggested weight range is between 25 - 45' )
        setMessage2('You are in the healthy weight range.')
      }
      else if (weight >= 45 && weight < 65) {
        setMessage('Your suggested weight range is between 45 - 65')
        setMessage2('You are in the overweight range.')
      }
       else {
        setMessage('Your suggested weight range is more than 65')
        setMessage2('You are in the obesity range.')
      }
    }
  }




  return (
    <div className="app">
      <h2 className='center-head'>BMI Calculator</h2>
      <div className='container'>
        
        <form onSubmit={calcBmi}>
        <div>
            <label>Enter your height in cm:</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <label>Enter your weight in kg:</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          
          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
          <p>{message2}</p>
        </div>
      </div>
    </div>
  );
}

export default App;