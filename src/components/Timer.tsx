import { useState, useEffect } from 'react';

interface TimerProps {
  onTick: () => void;
}

const Timer = ({ onTick }: TimerProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
      onTick();
    }, 1000);

    return () => clearInterval(interval);
  }, [onTick]);

  return (
    <div>
      <p>Time: {time}</p>
    </div>
  );
};

export default Timer; 