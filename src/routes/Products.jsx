import React, { useEffect, useState } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { Rating } from 'primereact/rating';
import { ProgressBar } from 'primereact/progressbar';
import { Paginator } from 'primereact/paginator';
import { v4 as uuidv4 } from 'uuid';

// Create a client
const queryClient = new QueryClient();
const PRODUCTS_URL = 'https://fakestoreapi.com/products';
// API endpoint
const POSTS_API_URL = 'http://localhost:3000/posts';

export default function Products() {
  return (
    <section className='px-6'>
      <QueryClientProvider client={queryClient}>
        {/* <PaginateProducts /> */}
        <PostList />
        <ProductList />
        <ReactQueryDevtools initialIsOpen={true} />
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

export function PaginateProducts() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const onPageChange = async (event) => {
    // {first: 0, rows: 10, page: 0, totalPages: 10}
    // totalPages: 10 -> dropdown value [5,10,15]
    // page -> number of page in UI 1,2,3,4
    // console.log(event);
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page + 1);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `http://localhost:3000/posts?_page=${page}&_per_page=${rows}`
      );
      if (!response.ok) {
        setPosts([]);
        return;
      }
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, [page]);

  return (
    <>
      <h1>Paginate Products {posts.length} </h1>

      <div className='card'>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={50}
          rowsPerPageOptions={[5, 10, 15]}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

function PostList() {
  const [page, setPage] = useState(1); // Start with page 1
  const perPage = 5; // Number of posts per page
  const [cachedData, setCachedData] = useState([]);
  const queryClient = useQueryClient();

  const queryKey = ['postprod', page];
  // Fetch posts with pagination
  const { data, error, isLoading, isFetching, isPreviousData } = useQuery({
    queryKey: queryKey, // Include page in query key to refetch when page changes
    queryFn: async () => {
      const response = await fetch(
        `${POSTS_API_URL}?_page=${page}&_per_page=${perPage}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // keep data for five minutes
  });

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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
      <h2 className='font-medium text-3xl text-900 mb-2'>Posts</h2>
      <ul className='list-none p-0 m-0'>
        {data.data?.map((post) => (
          <li key={uuidv4()} className='py-3 px-2 border-top-1 surface-border'>
            <div className='text-900 text-xl'>
              <span className='text-500 text-xl'>{post.id}</span> {post.title}
            </div>
            <div className='text-500'>{post.body}</div>
          </li>
        ))}
      </ul>

      <div className='flex justify-content-between mt-4'>
        <Button
          label='Previous'
          icon='pi pi-angle-left'
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        />
        <Button
          label='Next'
          icon='pi pi-angle-right'
          disabled={isPreviousData || data.length < perPage}
          onClick={() => handlePageChange(page + 1)}
        />
      </div>
      {isFetching && (
        <ProgressBar
          mode='indeterminate'
          style={{ height: '6px', marginTop: '10px' }}
        />
      )}
    </div>
  );
}
