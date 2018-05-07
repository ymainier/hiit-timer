import React from 'react';

export function padNumber(number) {
  return number.toString().padStart(2, '0');
}

export default function HiitTimer({currentDuration, totalDuration}) {
  const duration = totalDuration - currentDuration;
  const minutes = padNumber(Math.floor(duration / 60));
  const seconds = padNumber(duration % 60);
  return <div>
    {minutes}:{seconds}
  </div>;
}
