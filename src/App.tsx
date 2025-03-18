import { useState } from 'react'
import './App.css'

function App() {
  const [knowledge, setKnowledge] = useState(0)
  const [studyHabits, setStudyHabits] = useState(0)
  const [studyPowerUpgrades, setStudyPowerUpgrades] = useState(0)
  var studyPowerUpgradeAvailable = true;

  return (
    <>
      <div>
      </div>
      {/* logo glass moves everything down but adds drop shadow */}
      {/* <h1 className="logo">Welcome to the real world.</h1> */}
      <h1>Welcome to the real world.</h1>
      <div className="card">
        <button onClick={() => setKnowledge((knowledge) => knowledge + 1 + studyPowerUpgrades)}>
          {/* Knowledge is {knowledge} */}
          Study
        </button>
        {studyPowerUpgradeAvailable &&
          <>
            {/* DO THIS WITH CSS */}
            <br />
            <br />
            {/* DO THIS WITH CSS */}
            <button onClick={() => setStudyPowerUpgrades((studyPowerUpgrades) => studyPowerUpgrades + 1)}>
              Study Power Upgrade
            </button>
          </>
        }
        <p>
          You know {knowledge === 0 ? "nothing" : knowledge + " things" }.
        </p>
      </div>
    </>
  )
}

export default App
