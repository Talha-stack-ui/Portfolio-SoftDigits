import logo from './logo.svg';
import './App.css';
import Anagram from 'react-anagram-animation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import IMG from '../src/assets/project.png'
import IMG2 from '../src/assets/project2.jpeg'
import IMG3 from '../src/assets/project3.png'
import Email from '../src/assets/email.png'
import Call from '../src/assets/call.png'
import GIT from '../src/assets/git.png'


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />

      <div id="home" className="container d-flex justify-content-center align-content-center " style={{ height: "350px" }}>
        <div className="row" style={{ paddingTop: "120px" }}>
          <h1><span>Hi</span>,<br /><span style={{ color: "grey", margin: "3px" }}>I am</span><br /><Anagram words={['Talha Ansari', 'Ansari Talha']} /><span style={{ position: "relative", top: "-190px", margin: "7px", fontSize: "20px", color: "whitesmoke",backgroundColor:"black",padding:"2px",borderRadius:"4px" }}> &lt; Web Developer /&gt;</span></h1>
        </div>
      </div>

      <div id="about" className="container d-flex justify-content-center align-content-center bg-light text-center" style={{ height: "350px" }}>
        <div className="row d-flex justify-content-center " style={{ paddingTop: "20px" }}>
          <h1>About Me</h1>
          <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine" }}></div>
          <h3>Design + Development</h3>
          <p style={{ fontFamily: "sans-serif" }}>I am a Bsc IT Graduate with a penchant for design and storytelling currently working at <span style={{backgroundColor:"#00FF00"}}>SOFTDIGITS</span> as a Web Developer. I am passionate about enhancing user experience and maximizing user interface.</p>
        </div>
      </div>
      <div className="container" >
        <h5 className="text-center" style={{paddingTop:"25px"}}>Skills</h5>
        <div className="d-flex justify-content-around">
          <div className="my-3"><p>Html 5 <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "70px", height: "4px", backgroundColor: "#e34c26", borderRadius: "40px" }}></div></div></p>
            <p>Css 3 <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "65px", height: "4px", backgroundColor: "#264de4", borderRadius: "40px" }}></div></div></p>
            <p>Js <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "56px", height: "4px", backgroundColor: "#f0db4f", borderRadius: "40px" }}></div></div></p>
            <p>React <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "60px", height: "4px", backgroundColor: "#61DBFB", borderRadius: "40px" }}></div></div></p>
            <p>Bootstrap <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "70px", height: "4px", backgroundColor: "#563d7c", borderRadius: "40px" }}></div></div></p></div>
          <div className="my-3"><p>Express <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "57px", height: "4px", backgroundColor: "#303030", borderRadius: "40px" }}></div></div></p>
            <p>Php <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "45px", height: "4px", backgroundColor: "#8993be", borderRadius: "40px" }}></div></div></p>
            <p>Python <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "40px", height: "4px", backgroundColor: "#4B8BBE", borderRadius: "40px" }}></div></div></p>
            <p>MongoDb <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "58px", height: "4px", backgroundColor: "#4DB33D", borderRadius: "40px" }}></div></div></p>
            <p>MySql <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "53px", height: "4px", backgroundColor: "#F29111", borderRadius: "40px" }}></div></div></p>
          </div>
        </div>



        <div id="projects" className="container " style={{ paddingTop: "20px"}} >
          <h2 className="text-center" style={{ color: "black",marginBottom:"30px" }}>My Work's</h2>
          <marquee>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div  style={{padding:"9px"}}><p className="text-center" style={{fontWeight:'bold'}}>Taaba Web</p><a href="http://react-web-app0.herokuapp.com/"><img src={IMG} className="images" width="300px"></img></a></div>
            <div style={{padding:"9px"}}><p className="text-center" style={{fontWeight:'bold'}}>Whatsapp Ui</p><a href="https://github.com/Talha-stack-ui/whatsappui/"><img src={IMG2} className="images" width="300px"></img></a></div>
            <div  style={{padding:"9px"}}><p className="text-center" style={{fontWeight:'bold'}}>Wall Gallery</p><a href="https://github.com/Talha-stack-ui/wall-gallery/"><img src={IMG3} className="images" width="300px"></img></a></div>
          </div>
          </marquee>
        </div>



      </div>

      <div id="contact"><Footer imageE={Email} imageC={Call} imageG={GIT}/></div>
    </div>
  );
}

export default App;
