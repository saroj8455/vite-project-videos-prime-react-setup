import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { Rating } from 'primereact/rating';
import { ProgressBar } from 'primereact/progressbar';
import { v4 as uuidv4 } from 'uuid';

// Create a client
const queryClient = new QueryClient();
const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export default function Products() {
  return (
    <section className='px-6'>
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </section>
  );
}

function ProductList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch(PRODUCTS_URL);
      // if (!response.ok) return;
      if (!response.ok) {
        throw new Error('Network response was not ok!');
      }
      return response.json();
    },
  });

  if (isLoading)
    return (
      <div className='card py-6'>
        <ProgressBar
          mode='indeterminate'
          style={{ height: '6px' }}
        ></ProgressBar>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='mt-3'>
      <div className='font-medium text-3xl text-900 mb-2'>Fake Store API</div>
      <div className='text-500 mb-5'>
        Fake store rest API for your e-commerce or shopping website prototype
      </div>
      <ul className='list-none p-0 m-0'>
        {data.map((product) => {
          return (
            <li
              key={uuidv4()}
              className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'
            >
              <div className='text-500 w-6 md:w-2 font-medium'>
                <span className='text-400 mr-1'>$</span>
                {product.price}
              </div>
              <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
                {product.title}
              </div>
              <div className='w-6 md:w-2 flex justify-content-end'>
                {/* <Button label='Delete' icon='pi pi-trash' /> */}
                <Rating value={product.rating.rate} cancel={false} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
