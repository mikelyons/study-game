import { useState } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    setVisible(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          className="tooltip"
          style={{ left: position.x + 10, top: position.y + 10 }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip; 