import { useState, useEffect, useCallback } from 'react';

const RANKS = ["child", "student", "graduate", "doctor", "professor", "expert", "genius", "master", "legend", "god", "universe", "Source"];
const RANK_THRESHOLDS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000];

export const useGameLogic = () => {
  const [rank, setRank] = useState(0);
  const [knowledge, setKnowledge] = useState(0);
  const [studyHabits, setStudyHabits] = useState(0);
  const [studyPowerUpgrades, setStudyPowerUpgrades] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [events, setEvents] = useState<string[]>([]);

  const studyAvailable = rank > 0 && rank < 5;
  const studyHabitsAvailable = rank > 1 && rank < 3;
  const studyPowerUpgradeAvailable = true;

  const addEvent = useCallback((event: string) => {
    setEvents((prevEvents) => [event, ...prevEvents]);
  }, []);

  const handleStudy = useCallback(() => {
    if (energy > 4) {
      setKnowledge((prevKnowledge) => prevKnowledge + 1 + studyPowerUpgrades);
      setEnergy((prevEnergy) => prevEnergy - 5);
      addEvent('You studied and gained 1 knowledge.');
    } else {
      addEvent('You are too tired to study.');
    }
  }, [energy, studyPowerUpgrades, addEvent]);

  const handleSleep = useCallback(() => {
    setKnowledge((prevKnowledge) => prevKnowledge + energy);
    setEnergy(0);
    addEvent(`You slept and converted ${energy} energy into knowledge.`);
  }, [energy, addEvent]);

  const handleRankChange = useCallback(() => {
    setRank((prevRank) => prevRank + 1);
  }, []);

  const handleCurrencyExpenditures = useCallback(() => {
    setEnergy((prevEnergy) => prevEnergy - 1);
  }, []);

  const handleStudyHabitsUpgrade = useCallback(() => {
    setStudyHabits((prevHabits) => prevHabits + 1);
    setStudyPowerUpgrades((prevUpgrades) => prevUpgrades + 1);
    addEvent('You upgraded your study habits.');
  }, [addEvent]);

  const handleTick = useCallback(() => {
    setEnergy((prevEnergy) => prevEnergy + 0.5);
  }, []);

  useEffect(() => {
    if (rank > 0) {
      addEvent(`You have reached the rank of ${RANKS[rank]}.`);
    }
  }, [rank, addEvent]);

  useEffect(() => {
    if (energy > 10 && rank < 1) {
      handleRankChange();
    }
    if (knowledge > RANK_THRESHOLDS[rank] + 10) {
      handleRankChange();
    }
  }, [knowledge, rank, energy, handleRankChange]);

  return {
    rank,
    setRank,
    knowledge,
    setKnowledge,
    studyHabits,
    setStudyHabits,
    studyPowerUpgrades,
    setStudyPowerUpgrades,
    energy,
    setEnergy,
    events,
    studyAvailable,
    studyHabitsAvailable,
    studyPowerUpgradeAvailable,
    handleStudy,
    handleSleep,
    handleRankChange,
    handleCurrencyExpenditures,
    handleTick,
    handleStudyHabitsUpgrade,
    RANKS,
  };
}; 