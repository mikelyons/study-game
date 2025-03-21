import { useState, useEffect } from 'react'
import './App.css'

const RANKS = ["child", "student", "graduate", "doctor", "professor", "expert", "genius", "master", "legend", "god", "universe", "Source"]
const RANK_THRESHOLDS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000];

function App() {
  const [rank, setRank] = useState(0)
  const [knowledge, setKnowledge] = useState(0)
  const [studyHabits, setStudyHabits] = useState(0)
  const [studyPowerUpgrades, setStudyPowerUpgrades] = useState(0)

  const handleRankChange = () => {
    setRank((rank) => rank + 1);
  }

  useEffect(() => {
    if (knowledge > RANK_THRESHOLDS[rank] + 10) {
      handleRankChange();
    }
  }, [knowledge])

  var studyHabitsAvailable = rank > 0 && rank < 3;
  var studyPowerUpgradeAvailable = true;

  return (
    <>
      <div>
        <h1 className="title">Welcome to the Real World.</h1>
      </div>

      <div className="card">
        <p>You are a {RANKS[rank] || "infinity"}.</p>
        <p>Knowledge: {knowledge}</p>
        <p>Study Habits: {studyHabits}</p>
        {/* <p>Study Power Upgrades: {studyPowerUpgrades}</p> */}
      </div>

      <div className="card">
        <button onClick={() => setKnowledge((knowledge) => knowledge + 1 + studyPowerUpgrades)}>
          {/* Knowledge is {knowledge} */}
          Study
        </button>
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
