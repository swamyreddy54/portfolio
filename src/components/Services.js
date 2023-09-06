import React from "react";
import { BriefcaseIcon, CubeIcon } from "@heroicons/react/solid";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services">
      <div className="container px-5 py-10 mx-auto text-center">
        <CubeIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Services
        </h1>
        <div className="flex flex-wrap m-4">
          {services.map((services) => (
            <div className="p-4 md:w-1/3 w-full ">
              <a href = "#">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded border border-transparent hover:border-gray-500 ">
                <BriefcaseIcon className="w-8 inline-block mb-4"/>
                <p className="leading-relaxed mb-6">{services.quote}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-xl text-gray-300 tracking-wide">
                      {services.title}
                    </span> 
                  </span>
                </div>               
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}