import React from 'react';

export default function Text({ textContent, heading }) {
  return (
    <div>
      <span className='text-muted'>{heading}</span>
      <br />
      {textContent}
    </div>
  );
}
