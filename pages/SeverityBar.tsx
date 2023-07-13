import React from 'react';
import { ProgressBar } from 'primereact/progressbar';


interface SeverityBarProps {
    value: number;
  }

const SeverityBar: React.FC<SeverityBarProps> = ({ value }) => {
    const calculateGradientColor = (value: any) => {
    const normalizedValue = value / 100;
    const red = Math.round(255 - normalizedValue * 255);
    const green = Math.round(normalizedValue * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  const gradientColor = calculateGradientColor(value);

  const progressBarStyle = {
    height: '20px',
    background: `linear-gradient(to right, red, ${gradientColor}, green)`,
    position: 'relative',

  };

  const pointerStyle = {
    position: 'absolute',
    top: '-10px',
    left: `calc(${value}% - 5px)`,
    width: '0',
    height: '0',
    borderTop: '10px solid black',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    transform: 'translateX(-50%)',
  };

  return (
    <div style={progressBarStyle}>
      <ProgressBar
        value={value}
        style={{ height: '100%', borderRadius: 0 }}
        showValue={false}
        className="severity-bar"
      />
      <div style={pointerStyle} />
    </div>
  );
};

export default SeverityBar;
