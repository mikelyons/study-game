import { useEffect, useRef } from 'react';
import './EventLog.css';

interface EventLogProps {
  events: string[];
}

const EventLog = ({ events }: EventLogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [events]);

  return (
    <div className="event-log-container" ref={containerRef}>
      <div className="event-log">
        {events.map((event, index) => (
          <p key={index}>{event}</p>
        ))}
      </div>
    </div>
  );
};

export default EventLog; 