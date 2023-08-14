export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative px-8 pt-6 isolate">
        <div className="mx-auto max-w-6xl sm:py-48 lg:py-28">
          <div className="text-left justify-start">
            <h1 className="md:text-6xl text-2xl md:font-extrabold font-bold md:tracking-wide text-gray-900">
              DevConnect
              <br />
            </h1>
            <p className="mt-6 text-base leading-6 text-gray-600">
              We connect junior developers with
              clients seeking affordable software{" "}
              <br />
              solutions, promoting growth through
              real-world projects and practical
              learning.
            </p>
            <button
              type="button"
              className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>

          {/* Graphic */}
          <div className="hidden lg:block">
            {/* Blue Guy Avatar */}
            <div className="absolute top-[100px] right-[400px] rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out ">
              <img
                className="h-80 w-80 rounded-full object-cover object-top"
                src="assets/img/globe@2x.webp"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
