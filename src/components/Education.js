import { BookOpenIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../data";


export default function Education(){
    return(
        <section id="education">
          <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <BookOpenIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Educational Details
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Below, you'll find the compilation of my acquired education.
          </p>
        </div>
        <div class="mx-10 ">
        <table class="table-auto w-full border border-slate-500 border-collapse text-white">
  <thead  class="border border-slate-500  text-left bg-gray-800">
    <tr>
    <th class="p-3">Course</th>
    <th>Institute</th>
    <th>University/Board</th>
    <th>Year</th>
    <th>Percentage</th>
    </tr>
  </thead>
  {education.map((education) => (
  <tbody  class="border border-slate-500">
    <tr >
      <td class="py-2 px-3">{education.course}</td>
      <td>{education.institute}</td>
      <td >{education.board}</td>
      <td >{education.year}</td>
      <td>{education.percentage}</td>
    </tr>
  </tbody>
  ))}
  
</table>
</div>
      </div>
        </section>
    );
}