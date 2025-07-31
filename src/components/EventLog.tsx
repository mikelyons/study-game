import './EventLog.css';

interface EventLogProps {
  events: string[];
}

const EventLog = ({ events }: EventLogProps) => {
  return (
    <div className="event-log-container">
      <div className="event-log">
        {events.map((event, index) => (
          <p key={index}>{event}</p>
        ))}
      </div>
    </div>
  );
};

export default EventLog; 