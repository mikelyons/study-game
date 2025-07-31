import './MenuBar.css';

interface MenuBarProps {
  version: string;
}

const MenuBar = ({ version }: MenuBarProps) => {
  return (
    <div className="menu-bar">
      <div className="menu-items">
        <a href="#">Player</a>
        <a href="#">Game</a>
        <a href="#">Help</a>
      </div>
      <div className="version">v{version}</div>
    </div>
  );
};

export default MenuBar; 