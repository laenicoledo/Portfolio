// eslint-disable-next-line
import {stylesheet} from './stylesheet.css'
import HeadBar from './Compenents/HeadBar';
import Container from './Compenents/Container';
import Projects from './Compenents/Projects';
import Experience from './Compenents/Experience';
import Contact from './Compenents/Contact';


function App() {
  return (
   
   <>
    <HeadBar/>
    <Container/>
    
    <br/>
    <Projects/>
    <br/>   
    <Experience/>
    <br/>
    <Contact/>
    <br/>
    <footer>
      Created by
    </footer>
   </>
    
  );
}

export default App;
