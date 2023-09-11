const Reviews = () => {
  return (
    <section>
      <article className='py-8 px-6 border-b border-gray-300 last:border-b-0'>
        <div className='flex items-center mb-4 space-x-4'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src='https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5JTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            alt=''
          />
          <div className='space-y-1 font-medium dark:text-white'>
            <p>
              <span>Jese Leos</span>
              <p className='block text-sm text-gray-500 dark:text-gray-400'>
                Client Title
              </p>
            </p>
          </div>
        </div>
        <div className='flex items-center mb-1'>
          <svg
            className='w-4 h-4 text-yellow-300 mr-1'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
          <svg
            className='w-4 h-4 text-yellow-300 mr-1'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
          <svg
            className='w-4 h-4 text-yellow-300 mr-1'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
          <svg
            className='w-4 h-4 text-yellow-300 mr-1'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
          <svg
            className='w-4 h-4 text-gray-300 dark:text-gray-500 mr-1'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
        </div>
        <footer className='mb-5 text-sm text-gray-500 dark:text-gray-400'>
          <p>
            Reviewed on <span>March 3, 2017</span>
          </p>
        </footer>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          This is my third Invicta Pro Diver. They are just fantastic value for
          money. This one arrived yesterday and the first thing I did was set
          the time, popped on an identical strap from another Invicta and went
          in the shower with it to test the waterproofing.... No problems.
        </p>
      </article>
    </section>
  );
};

export default Reviews;
