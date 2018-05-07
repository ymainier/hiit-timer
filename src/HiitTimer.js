import React from 'react';
import Exercise from './Exercise';
import Timer from './Timer';

export default function HiitTimer({title, imageSource, currentDuration, totalDuration, onClick}) {
  return <div onClick={onClick}>
    <Exercise title={title} imageSource={imageSource}/>
    <Timer currentDuration={currentDuration} totalDuration={totalDuration} />
  </div>;
}
