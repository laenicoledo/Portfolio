import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars, faX } from '@fortawesome/free-solid-svg-icons'

function HeadBar() {

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
   <header className="rounded-3xl bg-white drop-shadow-2xl h-[auto] mt-3 mx-3 pt-5 pb-5 px-6 
   md:h-auto
   lg:h-auto lg:mt-14 lg:mx-14 lg:pt-10 lg:pb-4 lg:px-12
   xl:h-auto xl:mt-16 xl:mx-16 xl:pt-10 xl:pb-4 xl:px-15
   2xl:h-auto 2xl:mt-20 2xl:mx-20 2xl:pt-10 2xl:pb-4 2xl:px-35
   overflow-hidden">

    <nav className=" item-stretch relative
    md:flex md:justify-between">
      <span className='w-auto inline-flex p-2 h-16
      md:h-20 md:p-2 2xl:h-30'>
        <img src="logo3.png" alt="logo" className=''/>
			</span>

      <button className='md:hidden fixed top-0 right-0 mt-[1.9rem] mr-[1rem] p-0 px-2 h-16 flex' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#212e52",}} className={`fill-current ${toggle ? "hidden" : "block"}`}/>
        <FontAwesomeIcon icon={faX} size="2xl" style={{color: "#212e52",}} className={`fill-current ${toggle ? "block" : "hidden"}`}/>
      </button>

      {toggle &&  (
        <div className="md:hidden border text-center border-white absolute w-full h-full drop-shadow">
          <ul className="block bg-white ">
            <li>
              <a href="/" className="font-Arial font-bold text-gray text-sm text-shadow block"
              onClick={() => setToggle(false)}> About </a>
            </li>
            <li>
              <a href="/" className="font-Arial font-bold text-gray text-sm inline-block"
              onClick={() => setToggle(false)}> Skills </a>
            </li>
            <li>
               <a href="/" className="font-Arial font-bold text-gray text-sm "
              onClick={() => setToggle(false)}> Portfolio </a>  
            </li>  
            <li>  
              <a href="/" className="font-Arial font-bold text-gray text-sm text-transparent bg-clip-text 
                 bg-gradient-to-r from-blue-gradient to-pink-gradient "
                 onClick={() => setToggle(false)}> 
               Contact Me </a>
            </li>   
          </ul>
        </div>
        )}
      
      <ul className="hidden md:flex
      md:list-none md:float-right md:truncate md:p-4 md:h-20 md:w-auto">
				<a href="/" className="font-Arial font-bold text-gray text-sm text-shadow 
        md:mr-5 lg:text-sm lg:mr-12 xl:text-sm xl:mr-20 2xl:text-xl 2xl:mr-20"> About </a>
				<a href="/" className="mr-20 font-Arial font-bold text-gray text-sm 
         md:mr-5 lg:text-sm lg:mr-12 xl:text-sm xl:mr-20 2xl:text-xl 2xl:mr-20"> Skills </a>
        <a href="/" className="mr-20 font-Arial font-bold text-gray text-sm 
         md:mr-5 lg:text-sm lg:mr-12 xl:text-sm xl:mr-20 2xl:text-xl 2xl:mr-20"> Portfolio </a>
        <a href="/" className="mr-5 font-Arial font-bold text-gray text-sm 
         md:mr-5 lg:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient to-pink-gradient 
         lg:mr-12 xl:text-sm xl:mr-20 2xl:text-xl 2xl:mr-20"> 
        Contact Me </a>
			</ul>
		</nav>
    <br/>
    <div className='flex flex-col-reverse
    md:flex-row md:justify-between'>
      <div className="float-left
      md:m-5 lg: xl: 2xl:mt-20">
          <span className="float-left font-Rubik text-sm text-cloud-burst-blue mb-4 mt-3
          md:text-base md:mb-2 md:mt-0 lg:text-lg xl:text-xl 2xl:text-2xl">
            Hello! I'm Nicole.
          </span>
          <br/>
          <span className="hidden md:block
          md:text-3xl md:mb-2 md:font-Poppins md:font-bold md:float-left md:box-decoration-slice md:bg-gradient-to-r from-blue-gradient to-pink-gradient md:text-white md:px-2
          lg:text-[2.5rem] lg:leading-10 
          xl:text-5xl xl:leading-none 
          2xl:text-6xl">
            I'm a Web Developer.
          </span>
          <span className="text-xl float-left font-medium text-cloud-burst-blue font-Rubik tracking-wide mb-5 md:hidden">
            I'm a Web Developer and I like to build wonderful things.
          </span>
          <br/>
          <span className="hidden
          md:block md:float-left md:font-Arial md:text-sm md:text-gray
          md:w-[15rem] md:text-xs lg:w-[25rem] xl:w-[34rem] xl:text-sm 2xl:text-xl 2xl:w-[40rem]">
            And I like to build wonderful things.<br/>
            A software developer specializing in web development. 
          </span>

          <br/>

          <div className='float-left mb-5 md:mb-0'>
            <a href="mailto:lmevangelista1@up.edu.ph">
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#212e52",}} className='mr-6 transition duration-300 ease-in-out transform hover:scale-105'/>
            </a>
            <a href="https://www.linkedin.com/in/lae-nicole-evangelista/">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "#212e52",}} className='mr-6 transition duration-300 ease-in-out transform hover:scale-105'/>
            </a>
            <a href="https://github.com/laenicoledo">
            <FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#212e52",}} className='mr-6 transition duration-300 ease-in-out transform hover:scale-105'/>
            </a>
          </div>

          <br/><br/>
          
          <div className='hidden w-auto md:block lg:mt-16 xl:mt-24 2xl:mt-32'>
            <a href="/about" className='lg:mx-6 xl:mx-10 2xl:mx-12'>
              <button className="border-double border-2 relative p-1 w-36 h-10 text-pink-gradient font-bold overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 rounded-lg
              md:ml-0 md:w-32 
              lg:w-36 lg:h-10
              xl:w-36 xl:h-10 
              2xl:w-36 2xl:h-10">
                <span className="relative z-10 font-bold text-sm">Portfolio</span>
                <span className="absolute inset-0 bg-white rounded-lg"></span>
              </button>
            </a>
            <a href="/about">
              <button className="relative p-2 w-36 h-10 text-white font-bold overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 rounded-lg
              md:ml-2 md:w-32
              lg:w-36 lg:h-10
              xl:w-36 xl:h-10 
              2xl:w-36 2xl:h-10">
                <span className="relative z-10 font-bold text-sm">Let's Talk</span>
                <span className="absolute inset-0 bg-gradient-to-r rounded-lg"></span>
              </button>
            </a>
          </div>
        </div>

      <div className="w-[12rem] h-[13rem] inline-flex bg-blue-gradient rounded-full self-center mb-3
        md:w-[17rem] md:h-[17rem] md:mb-0
        lg:w-[19rem] lg:h-[19rem] lg:mr-12 
        xl:w-[24rem] xl:h-[24rem] xl:mr-20
        2xl:w-[32rem] 2xl:h-[32rem] 2xl:mr-14">
          <img src="dp-2.png" alt="sample" className=''/>
      </div>

    </div>

  </header>
  );
}

export default HeadBar;