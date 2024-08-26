import { Button } from 'primereact/button';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { v6 as uuidv6 } from 'uuid';

export default function Todos() {
  const data = useLoaderData();

  return (
    <section className='px-6'>
      <div className='card py-4'>
        <ul className='list-none p-0 m-0'>
          {data?.map((todo, index) => (
            <li
              key={todo.id}
              className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'
            >
              <div className='text-500 w-6 md:w-2 font-medium'>{todo.id}</div>
              <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
                {todo.title}
              </div>
              <div className='w-6 md:w-2 flex justify-content-end'>
                <Link to={`${todo.id}`}>
                  <Button
                    icon='pi pi-heart'
                    rounded
                    text
                    raised
                    severity='help'
                    aria-label='Favorite'
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
