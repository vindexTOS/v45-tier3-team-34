// import React from 'react'
import { teamInfo } from "../../../assets/front-end-data/team_info";

export default function AboutTeam() {
  return (
    <div>
      <div className="py-24">
        <div className="grid gap-x-4 gap-y-2 xl:grid-cols-3">
          <div className="text-muted dark:text-muted">
            <h2 className="text-[2rem] font-bold tracking-tight whitespace-nowrap">
              Meet our team
            </h2>
            <p className="text-sm">
              We are Team 34. Thank you for
              visiting our plaform.
            </p>
            <hr className="mt-4 border-primary w-16 border-2" />
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2 pt-5 sm:pt-0"
          >
            {teamInfo.map((person) => (
              <a
                href={person.link}
                target="_blank"
              >
                <li key={person.title}>
                  <div className="flex items-center gap-x-2">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.image}
                      alt=""
                    />
                    <div>
                      <h3 className="font-semibold leading-2 tracking-tight text-tersiary dark:text-muted">
                        {person.title}
                      </h3>
                      <p className="text-xs text-primary">
                        {person.role}
                      </p>
                      <p className="text-xs text-muted">
                        {person.country}
                      </p>
                    </div>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
