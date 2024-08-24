import React, { useState } from 'react';
import ChangeBackground from './ChangeBackground';

export default function PostCard() {
  const [color, setColor] = useState('red');

  const updateBackground = (updateColor) => {
    console.log(updateColor);
    setColor(updateColor);
  };

  return (
    <article>
      <div
        style={{ background: `${color}` }}
        className='p-5 border-round text-100 text-2xl'
      >
        <h3> Lorem, ipsum dolor. </h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
          similique?
        </p>
      </div>
      <ChangeBackground updateBackground={updateBackground} />
    </article>
  );
}
