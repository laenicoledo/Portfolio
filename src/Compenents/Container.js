import React from 'react';

function Container() {

  return (
   <section className="h-auto mx-2 pt-4 px-6 pb-2
   md:border-white md:h-auto md:mt-2 md:mx-11 md:pt-4 md:pb-4 md:px-24 md:overflow-hidden border">

    <span className="hidden md:block md:font-Arial md:font-bold md:text-white md:text-2xl">Technologies I've Worked With</span>
    <span className="font-Rubik tracking-wide text-white text-xl md:hidden">Tech Stack</span>

    <br/>

    <div className='grid grid-flow-row auto-rows-max'>
      <div className='border border-black border-opacity-100 border-1 border-white
      rounded-lg border-dashed h-auto w-full bg-white/25 p-3 my-2 inline-block text-center'>
        
        <div className="flex flex-wrap justify-between">
          <i className="devicon-react-original-wordmark text-4xl text-white object-center m-1" alt="ReactJS"></i> 
          <i className="devicon-html5-plain-wordmark text-4xl text-white m-1 pt-1"></i>
          <i className="devicon-css3-plain-wordmark text-4xl text-white m-1 pt-1"></i>
          <i className="devicon-bootstrap-plain-wordmark text-4xl text-white m-1 pt-1"></i>
          <i className="devicon-tailwindcss-original-wordmark text-6xl text-white m-1"></i>
        </div>

        <span className='flex justify-evenly items-center font-Arial text-xs text-white mt-3'>Front-end</span>

      </div>

      <div className='border border-black border-opacity-100 border-1 border-white
      rounded-lg border-dashed h-auto w-full bg-white/25 p-3 my-2 inline-block text-center'>
        
        <div className="flex justify-between">    
          <i className="devicon-firebase-plain-wordmark text-5xl text-white object-center m-1"></i>
          <i className="devicon-nodejs-plain-wordmark text-5xl text-white object-center m-1"></i>
          <i className="devicon-express-original-wordmark text-5xl text-white object-center m-1"></i>
          <i className="devicon-mysql-plain-wordmark text-5xl text-white object-center m-1"></i>
          <i className="devicon-mongodb-plain-wordmark text-5xl text-white object-center m-1"></i>
        </div>
        
        <span className='flex justify-evenly items-center font-Arial text-xs text-white mt-3'>Back-end</span>

      </div>

      <div className='border border-black border-opacity-100 border-1 border-white
      rounded-lg border-dashed h-auto w-full bg-white/25 p-3 my-2 inline-block text-center'>

        <div className="flex justify-center">   
          <i className="devicon-python-plain-wordmark text-5xl text-white object-center mx-3"></i>
          <i className="devicon-c-line-wordmark text-4xl text-white object-center mx-3"></i>
          <i className="devicon-java-plain-wordmark text-4xl text-white object-center mx-3"></i>
          <i className="devicon-javascript-plain text-4xl text-white object-center mx-3"></i>
        </div>  
        
        <span className='flex justify-evenly items-center font-Arial text-xs text-white mt-3'>Languages</span>
    
      </div>

      <div className='border border-black border-opacity-100 border-1 border-white
      rounded-lg border-dashed h-auto w-full bg-white/25 p-3 my-2 inline-block text-center'>

        <div className="flex flex-wrap justify-center">
          <i className="devicon-github-original-wordmark text-5xl text-white object-center m-1"></i>  
          <i className="devicon-git-plain-wordmark text-5xl text-white object-center m-1"></i>    
          <i className="devicon-npm-original-wordmark text-5xl text-white object-center m-1"></i>
          <i className="devicon-slack-plain-wordmark text-5xl text-white object-center m-1"></i>
          <i class="devicon-linux-plain text-5xl text-white object-center m-1"></i>
          <i className="devicon-vscode-plain-wordmark text-5xl text-white object-center m-1"></i>
          <i className="devicon-canva-original text-5xl text-white object-center m-1"></i>
          
        </div>
        
        <span className='flex justify-evenly items-center font-Arial text-xs text-white mt-3'>Devops and Tools</span>
      
      </div>

    </div>

   </section>
  );
}

export default Container;