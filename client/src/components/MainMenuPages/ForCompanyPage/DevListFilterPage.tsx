export default function DevListFilterPage() {
  return (
    <div>
      <div className="min-w-max text-[.8rem] text-light-muted dark:text-dark-muted mb-10">
        <p>Filter Menu</p>
        <div className="mt-5">
          <ul className="space-y-5">
            <li>
              <label className="inline-flex items-center">
                <span className="ml-2 text-[1rem] font-semibold text-light-primary dark:text-dark-primary">
                  Skills
                </span>
              </label>
              <ul className="ml-8">
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Skill 1"
                    />
                    <span className="ml-2">
                      Web Develper
                    </span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Skill 2"
                    />
                    <span className="ml-2">
                      Mobile Developer
                    </span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Skill 3"
                    />
                    <span className="ml-2">
                      Game Developer
                    </span>
                  </label>
                </li>
                {/* <!-- Add more subcategories as needed --> */}
              </ul>
            </li>
            <li>
              <label className="inline-flex items-center">
                <span className="ml-2 text-[1rem] font-semibold text-light-primary dark:text-dark-primary">
                  Technologies
                </span>
              </label>
              <ul className="ml-8">
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Tech 1"
                    />
                    <span className="ml-2">
                      React.js
                    </span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Tech 2"
                    />
                    <span className="ml-2">
                      Python/Django
                    </span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Tech 3"
                    />
                    <span className="ml-2">
                      Swift io
                    </span>
                  </label>
                </li>
                {/* <!-- Add more subcategories as needed --> */}
              </ul>
            </li>
            <li>
              <label className="inline-flex items-center">
                <span className="ml-2 text-[1rem] font-semibold text-light-primary dark:text-dark-primary">
                  Location
                </span>
              </label>
              <ul className="ml-8">
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Location 1"
                    />
                    <span className="ml-2">
                      On-Site
                    </span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Location 2"
                    />
                    <span className="ml-2">
                      Remote
                    </span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="subcategory"
                      value="Location 3"
                    />
                    <span className="ml-2">
                      Both
                    </span>
                  </label>
                </li>
                {/* <!-- Add more subcategories as needed --> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
