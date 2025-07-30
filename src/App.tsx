import { useState, useEffect } from 'react'
import './App.css'

/*
  The upgrades should be a state object, and this is where the expenditures should be called
  the call will be the update on an interval, and handle all currencies and upgrades
  TODO:
  - Implement button availability matrix
  - Implement energy and knowledge expenditures
  - Implement currency expenditures
  - Implement study power upgrades
  - Implement study habits upgrades
  - Implement rank changes
  - Implement knowledge and study habits display
  - Implement study power upgrade display
  - Implement study habits upgrade display
  - Implement rank change display
  - Implement knowledge and study habits change display
*/

const RANKS = ["child", "student", "graduate", "doctor", "professor", "expert", "genius", "master", "legend", "god", "universe", "Source"]
const RANK_THRESHOLDS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000];

function App() {
  const [rank, setRank] = useState(0)
  const [knowledge, setKnowledge] = useState(0)
  const [studyHabits, setStudyHabits] = useState(0)
  const [studyPowerUpgrades, setStudyPowerUpgrades] = useState(0)
  const [energy, setEnergy] = useState(0)

  // TODO: Implement button availability matrix
  var studyAvailable = rank > 0 && rank < 5;
  var studyHabitsAvailable = rank > 1 && rank < 3;
  var studyPowerUpgradeAvailable = true;

  const handleRankChange = () => {
    setRank((rank) => rank + 1);
    // studyAvailable = rank > 0 && rank < 5;
    // studyHabitsAvailable = rank > 1 && rank < 3;
    // studyPowerUpgradeAvailable = true;
  }

  // TODO: Implement energy and knowledge expenditures
  // const handleCurrencyExpenditures = () => {
  //   setEnergy((energy) => energy - 1);
  // }

  useEffect(() => {
    if (energy > 10 && rank < 1) {
      handleRankChange();
    }
    if (knowledge > RANK_THRESHOLDS[rank] + 10) {
      handleRankChange();
    }
  }, [knowledge, rank, energy])

  return (
    <>
      <div>
        <h1 className="title">Welcome to the Real World.</h1>
      </div>

      <div className="card">
        <p>You are a {RANKS[rank] || "infinity"}.</p>
        <p>Knowledge: {knowledge}</p>
        <p>Study Habits: {studyHabits}</p>
        <p>Energy: {energy}</p>
        {/* <p>Study Power Upgrades: {studyPowerUpgrades}</p> */}
      </div>

      <div className="card">
        {studyAvailable ? 
          <>
            <button onClick={() => setKnowledge((knowledge) => knowledge + 1 + studyPowerUpgrades)}>
              {/* Knowledge is {knowledge} */}
              Study
            </button>
            &nbsp;
          </>
        : <p>To sleep, perchance to dream...</p>}

        <button onClick={() => setEnergy((energy) => energy + 1)}>Sleep</button>

        {studyPowerUpgradeAvailable &&
          <>
            <br />
            <br />
            {/* <button onClick={() => setStudyPowerUpgrades((studyPowerUpgrades) => studyPowerUpgrades + 1)}>
              Study Habits
            </button> */}
            <button onClick={() => {
              setStudyHabits((studyHabits) => studyHabits + 1);
              setStudyPowerUpgrades((studyPowerUpgrades) => studyPowerUpgrades + 1);
            }}>
              Study Habits
            </button>
          </>
        }
        <p>
          You know {knowledge === 0 ? "nothing" : knowledge + " things" }.
        </p>
        {studyHabitsAvailable ? <p>
          You have {studyHabits === 0 ? "no" : studyHabits } study habit{studyHabits > 1 ? "s" : ""}.
        </p> : <br />}
      </div>
    </>
  )
}

export default App
