export default function FAQCard() {
  return (
    <div>
      <div
        className="text-left my-10"
        id="accordion-open"
        data-accordion="open"
      >
        {/* FAQ 1 */}
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left  border border-b-0 border-white rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800  text-light-primary dark:text-dark-primary"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 shrink-0 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v4m0 6h.01"
                />
              </svg>{' '}
              What is DevConnect?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 text-base">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Click here to{' '}
              <a
                href="/register"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{' '}
              today
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 shrink-0 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v4m0 6h.01"
                />
              </svg>
              Is there Question 2?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 text-base">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Click here to{' '}
              <a
                href="/register"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{' '}
              today
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 shrink-0 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v4m0 6h.01"
                />
              </svg>{' '}
              What is question 3?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          className="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 text-base">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="/register"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
