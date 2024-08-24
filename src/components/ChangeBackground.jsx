import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
export default function ChangeBackground({ updateBackground }) {
  const [background, setBackground] = useState('');

  const handelClick = () => {
    console.log('clicked child');
    updateBackground(background);
  };

  return (
    <div className='my-4'>
      <div className='card mb-2'>
        <InputText
          className='w-full'
          placeholder='Change Parent Background Color'
          onChange={(e) => setBackground(e.target.value)}
        />
      </div>
      <div className='card flex flex-wrap justify-content-center gap-3'>
        <Button
          label='Change Background'
          onClick={handelClick}
          icon='pi pi-check'
        />
      </div>
    </div>
  );
}
