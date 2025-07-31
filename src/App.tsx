import { useState } from 'react';
import './App.css'
import { useGameLogic } from './hooks/useGameLogic';
import Timer from './components/Timer';
import RankUpNotification from './components/RankUpNotification';
import ParticleEffect from './components/ParticleEffect';
import EventLog from './components/EventLog';
import Tooltip from './components/Tooltip';

function App() {
  const [particlePosition, setParticlePosition] = useState<{ x: number; y: number } | null>(null);

  const {
    rank,
    knowledge,
    studyHabits,
    energy,
    events,
    studyAvailable,
    studyHabitsAvailable,
    studyPowerUpgradeAvailable,
    handleStudy,
    handleSleep,
    setStudyHabits,
    setStudyPowerUpgrades,
    handleTick,
    RANKS,
  } = useGameLogic();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setParticlePosition({ x: e.clientX, y: e.clientY });
    setTimeout(() => {
      setParticlePosition(null);
    }, 1000);
  };

  return (
    <>
      <Timer onTick={handleTick} />
      <RankUpNotification rank={rank} rankName={RANKS[rank]} />
      {particlePosition && <ParticleEffect x={particlePosition.x} y={particlePosition.y} />}
      <EventLog events={events} />
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
            <Tooltip text="Converts 1 energy into 1 knowledge.">
              <button onClick={(e) => { handleStudy(); handleButtonClick(e); }}>
                {/* Knowledge is {knowledge} */}
                Study
              </button>
            </Tooltip>
            &nbsp;
          </>
        : <p>To sleep, perchance to dream...</p>}

        <Tooltip text="Converts all energy into knowledge.">
          <button onClick={(e) => { handleSleep(); handleButtonClick(e); }}>Sleep</button>
        </Tooltip>

        {studyPowerUpgradeAvailable &&
          <>
            <br />
            <br />
            {/* <button onClick={() => setStudyPowerUpgrades((studyPowerUpgrades) => studyPowerUpgrades + 1)}>
              Study Habits
            </button> */}
            <Tooltip text="Increases study power by 1.">
              <button onClick={(e) => {
                setStudyHabits((studyHabits) => studyHabits + 1);
                setStudyPowerUpgrades((studyPowerUpgrades) => studyPowerUpgrades + 1);
                handleButtonClick(e);
              }}>
                Study Habits
              </button>
            </Tooltip>
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
