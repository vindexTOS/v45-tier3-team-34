// FindCompanyMenu.js

const FindCompanyMenu = () => {
  return (
    <div className="group relative">
      <div className="absolute -top-6 -left-10 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[500px] transform">
        <div className="relative top-6 p-6 bg-[#F3F4F6] rounded-xl shadow-xl w-full">
          <div className="w-10 h-10 bg-[#F3F4F6] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[3rem] duration-500 ease-in-out rounded-sm"></div>
          <div className="p-4">
            <ul className="space-y-2">
              <a href="#" className="">
                <li className="p-3 hover:bg-white rounded-md relative group">
                  <h3 className="font-semibold text-sm">
                    List All Developers
                  </h3>
                  <p className="text-xs font-light text-green-900">
                    See comprehensive list of all
                    our junior developers
                  </p>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </li>
              </a>
              <a href="#" className="">
                <li className="p-3 hover:bg-white rounded-md relative group">
                  <h3 className="font-semibold text-sm">
                    Post a New Project
                  </h3>
                  <p className="text-xs font-light text-green-900">
                    Follow these easy steps to get
                    started
                  </p>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </li>
              </a>
              <a href="#" className="">
                <li className="p-3 hover:bg-white rounded-md relative group">
                  <h3 className="font-semibold text-sm">
                    View/Buy Completed Projects
                  </h3>
                  <p className="text-xs font-light text-green-900">
                    Browse our list of all
                    Completed Projects
                  </p>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </li>
              </a>
              <a href="#" className="">
                <li className="p-3 hover:bg-white rounded-md relative group">
                  <h3 className="font-semibold text-sm">
                    Need Help
                  </h3>
                  <p className="text-xs font-light text-green-900">
                    Feel free to contact us for
                    more info
                  </p>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCompanyMenu;
