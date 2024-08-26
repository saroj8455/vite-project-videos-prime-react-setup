import React from 'react';
import { Card } from 'primereact/card';
import { useLoaderData } from 'react-router-dom';
export default function Todo() {
  const todo = useLoaderData();

  console.log(todo);

  return (
    <section className='px-6'>
      <Card title={`${todo.id} - ${todo.title}`} className='my-4'>
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </section>
  );
}
