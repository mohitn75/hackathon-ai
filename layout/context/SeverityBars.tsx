import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { LayoutState, ChildContainerProps, LayoutConfig, LayoutContextProps } from '../../types/types';

interface SeverityBarProps {
    value: number;
  }

const SeverityBars: React.FC<SeverityBarProps> = ({ value }) => {
    const calculateGradientColor = (value: any) => {
    // Convert severity value to a range between 0 and 1
    const normalizedValue = value / 100;

    // Calculate color values based on severity value
    const red = Math.round(255 - normalizedValue * 255);
    const green = Math.round(normalizedValue * 255);

    // Generate CSS color string
    const color = `rgb(${red}, ${green}, 0)`;

    return color;
  };

  const gradientColor = calculateGradientColor(value);

  const progressBarStyle = {
    height: '20px',
    background: `linear-gradient(to right, red, ${gradientColor}, green)`,
  };

  return (
    <ProgressBar
      value={value}
      style={progressBarStyle}
      showValue={false}
      className="severity-bar"
    />
  );
};

export default SeverityBars