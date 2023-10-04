import React from 'react';

function Projects() {

  return (
    <div className="h-auto overflow-clip mt-4 mx-2 pt-4 px-6 pb-2 border 
    md:h-[600px] md:mt-2 md:mx-11 md:pt-4 md:pb-4 md:px-24 md:overflow-hidden">
      <span className="font-Arial font-bold text-white text-2xl">
        Projects
      </span>
      <article className="border h-[450px] rounded-3xl border-white bg-white drop-shadow-2xl mt-10 pt-16 pb-4 px-24">
        <span className="float-left h-12 font-bold font-Arial text-gray">
          Hulagway
        </span><br/><br/><br/>
        <span className="float-left text-gray font-Arial text-sm">
          Is a barangay web profiling app that records
          barangay data and colates information in a database
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. SUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.
        </span>
        <div className="border w-[250px] inline-flex float-right">
          <img src="sample.png" alt="sample"/>
        </div>
      </article>
      <article className="border rounded-2xl border-white bg-white drop-shadow-2xl mt-16 pt-4 pb-4 px-24">
        SAMPLE
        <br/><br/>
        SAMPLE
      </article>
    </div>
  );
}

export default Projects;