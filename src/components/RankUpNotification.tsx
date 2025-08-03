import { useState, useEffect } from 'react';
import './RankUpNotification.css';

interface RankUpNotificationProps {
  rank: number;
  rankName: string;
}

const RankUpNotification = ({ rank, rankName }: RankUpNotificationProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rank > 0) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [rank]);

  return (
    <div className={`rank-up-notification ${visible ? 'visible' : ''}`}>
      <p>Congratulations! You have reached the rank of {rankName}.</p>
    </div>
  );
};

export default RankUpNotification; 