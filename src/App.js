// import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  const  date = new Date()
  const hours = date.getHours()
  let timeOfDay
    if (hours < 12){
    timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    }else if (hours >= 17 && hours < 19) {
      timeOfDay = "evening"
    }else {
      timeOfDay = "night"
    }


  return (
    <div className="App">
      <h1>Hello {firstName} {lastName}!</h1>
      <h2>It is currently about {hours} o'clock</h2>
      <h2>Good {timeOfDay}!</h2>
    </div>
  )
}

export default App;
