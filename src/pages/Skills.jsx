import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../styles/Skills.css";
import Activity from "./Activity";
import { NavLink } from "react-router-dom";

function Skills() {
  const [IsShown, SetIsShown] = useState(false);

  let handleSubmit = (e) => {
    SetIsShown(current => !current)
    console.log(IsShown);
  };

  return (
    <>
      <Container id="card" className=" text-center mt-5 ">
        <h1 className="item-title text-white ">Skills</h1>
        <Card className="cardWrap w-100 m-0 h-100">
          <div className="card-page d-flex justify-content-between">
            <div className="card h-75">
              <h1 className="tittle-skill">nulis kode</h1>
              <div className="pic-card">
                <img src="../assets/Codepic.png" alt="" />
              </div>
            </div>
            <div className="card h-75">
              <h1 className="tittle-skill">Edit foto</h1>
              <div className="pic-card">
                <img src="../assets/EditPhoto.png" alt="" />
              </div>
            </div>
            <div className="card h-75">
              <h1 className="tittle-skill">Mencintai Ibu dan pacar</h1>
              <div className="pic-card">
                <img src="../assets/Kissing.png" alt="" />
              </div>
            </div>
          </div>
        </Card>
      </Container>
      <div className="d-grid gap-2 mt-5 justify-content-center">
        <Button
          onClick={handleSubmit}
          className="btn-activity"
          variant="primary"
          
        >
          See more Activity
        </Button>
      </div>
      {IsShown && (<div>
          <Activity/>
        </div>)}
    </>
  );
}

export default Skills;
