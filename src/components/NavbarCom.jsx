import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homeicon from "../assets/Homeicon.svg";
import Abouticon from "../assets/Abouticon.svg";
import Skillsicon from "../assets/Skillsicon.svg";
import Contacticon from "../assets/Contacticon.svg";
import PortoIcon from "../assets/Porto.png";

import {LinkContainer} from 'react-router-bootstrap'
import { NavLink } from "react-router-dom";



const style = {
  background: {
    backgroundColor: "#25316D",
    boxShadow: "0px 0px 10px 1px purple",
  },
  font: {
    color: "#FFFFF",
  },
};

function NavbarCom() {
  return (
    <>
      <Navbar style={style.background} expand="lg" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="w-100 d-flex justify-content-between align-items-center">
            <NavLink to='/' className="text-white text-decoration-none home">
                <div className="d-flex flex-row align-items-center">
                  <img className="m-2" src={Homeicon} width="20px" />
                  <p className="d-flex m-0">Home</p>
                </div>
              </NavLink>
             
             
              <NavLink to='/About' className="text-white text-decoration-none about">
                <div className="d-flex flex-row align-items-center">
                  <img className="m-2" src={Contacticon} width="20px" />
                  <p className="d-flex m-0">About</p>
                </div>
              </NavLink>

             <NavLink to='/porto' className="text-white text-decoration-none skills">
                <div className="d-flex flex-row align-items-center">
                  <img className="m-2" src={PortoIcon} width="20px" />
                  <p className="d-flex m-0">Portofolio</p>
                </div>
              </NavLink>
             
              <NavLink to='/Skills' className="text-white text-decoration-none skills">
                <div className="d-flex flex-row align-items-center">
                  <img className="m-2" src={Skillsicon} width="20px" />
                  <p className="d-flex m-0">Skills</p>
                </div>
              </NavLink>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;
