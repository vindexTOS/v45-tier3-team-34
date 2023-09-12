// import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../Shadcn/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="w-[90%] lg:w-[60%] mx-auto my-14">
      <div className="text-center text-primary dark:text-primary">
        <h3 className="text-[2rem] font-bold ">
          Frequently Asked Questions
        </h3>
        <p className="text-muted">
          More questions you may want to ask
        </p>
      </div>
      <div className="my-10 text-muted dark:text-muted">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#fafafa] hover:bg-[#f2f2f2] dark:bg-slate-900 dark:hover:bg-slate-950 border border-secondary p-5 rounded-t-lg">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="my-5 mx-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam
                enim, odit eaque quia rerum ipsum
                voluptatem consequatur ratione,
                doloremque debitis? Fuga labore
                omnis minima, quisquam delectus
                culpa!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Click here to{" "}
                <a
                  href="/register"
                  className="text-primary dark:text-primary hover:underline font-bold"
                >
                  get started
                </a>{" "}
                today
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-[#fafafa] hover:bg-[#f2f2f2] dark:bg-slate-900 dark:hover:bg-slate-950 border border-secondary p-5">
              What is question 2?
            </AccordionTrigger>
            <AccordionContent className="my-5 mx-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam
                enim, odit eaque quia rerum ipsum
                voluptatem consequatur ratione,
                doloremque debitis? Fuga labore
                omnis minima, quisquam delectus
                culpa!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-[#fafafa] hover:bg-[#f2f2f2] dark:bg-slate-900 dark:hover:bg-slate-950 border border-secondary p-5">
              What is question 3?
            </AccordionTrigger>
            <AccordionContent className="my-5 mx-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam
                enim, odit eaque quia rerum ipsum
                voluptatem consequatur ratione,
                doloremque debitis? Fuga labore
                omnis minima, quisquam delectus
                culpa!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Click here to{" "}
                <a
                  href="/register"
                  className="text-primary dark:text-primary hover:underline font-bold"
                >
                  get started
                </a>{" "}
                today
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-[#fafafa] hover:bg-[#f2f2f2] dark:bg-slate-900 dark:hover:bg-slate-950 border border-secondary p-5 rounded-b-lg">
              What is the other question 4?
            </AccordionTrigger>
            <AccordionContent className="my-5 mx-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam
                enim, odit eaque quia rerum ipsum
                voluptatem consequatur ratione,
                doloremque debitis? Fuga labore
                omnis minima, quisquam delectus
                culpa!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Click here to{" "}
                <a
                  href="/register"
                  className="text-primary dark:text-primary hover:underline font-bold"
                >
                  get started
                </a>{" "}
                today
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
