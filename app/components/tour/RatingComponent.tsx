"use client"
// components/Rating.tsx
import React from 'react';
import ReactStars from 'react-stars';

interface RatingProps {
  count?: number;
  value?: number;
  onChange?: (newValue: number) => void;
  size?: number;
  color1?: string;
  color2?: string;
}

const RatingComponent: React.FC<RatingProps> = ({
  count = 5,
  value = 0,
  onChange,
  size = 24,
  color1 = '#cccccc',
  color2 = '#ffd700'
}) => {
  const handleRatingChange = (newValue: number) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <ReactStars
      count={count}
      value={value}
      onChange={handleRatingChange}
      size={size}
      color1={color1}
      color2={color2}
      half={false}
    />
  );
};

export default RatingComponent;


