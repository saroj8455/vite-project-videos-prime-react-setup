import React from 'react';
import { Button } from 'primereact/button';
export default function Person2() {
  const [price, setPrice] = React.useState(1);
  const handelMoney = () => setPrice(price * 2);
  return (
    <div>
      <div className='font-medium text-3xl text-900 mb-3'>
        Jhon Deo - Movie Information [{price}]
      </div>
      <div className='text-500 mb-5'>
        Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit
        rutrum.
      </div>
      <div className='card flex flex-wrap mb-4 gap-3'>
        <Button
          onClick={handelMoney}
          label='Increase Count'
          icon='pi pi-check'
        />
      </div>
    </div>
  );
}
