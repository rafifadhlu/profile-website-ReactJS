import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import CardPorto from "../components/CardPorto";
import tesString from "../assets/testString.png";
import ToDoList from "../assets/ToDoList.png";
import berkelanaYuk from "../assets/Berkelana.png";
import profilePic from "../assets/Profile.png";
import Clusteringpic from "../assets/Clustering.png";
import MLPic from "../assets/MLAnalysis.png";
import PortofPic from "../assets/PortoIcon.svg";

let data = [
    {
      id: 2,
      image: ToDoList,
      link: "https://github.com/rafifadhlu/To-do-List-vanilla-MVC",
      title: "To-Do List Website",
      description: "A project based on a to-do list that built using vanilla PHP with bootstrap and MySQL",    
    },
    {
      id: 3,
      image: berkelanaYuk,
      link: "https://berkelanayuk.itch.io/berkelana-yuk",
      title: "Berkelana Yuk! Game",
      description: "A 3D game project that i made for my thesis using Unity3D with C# programming and Blender for 3D assets.",    
    },
    {
      id: 4,
      image: profilePic,
      link: "https://github.com/rafifadhlu/profile-website-ReactJS",
      title: "Static Profile Website",
      description: "You can see the result of this project as you visit now, this project was built using ReactJS and Bootstrap.",    
    },
    {
      id: 5,
      image: tesString,
      link: "https://colab.research.google.com/drive/148RP5j57VYJCdCgWT-1kuEZq5lXJj2Al?usp=sharing",
      title: "Matching String",
      description: "Supporting Web for matching string, this project was for internship-purpose. It uses Streamlit and Ngrock with Fuzzy String Matching",    
    },
    {
      id: 6,
      image: Clusteringpic,
      link: "https://drive.google.com/file/d/1_n7DR08fcBHfctJdWsz7q7c9dJu2tYzl/view?usp=drive_link",
      title: "Clustering Analysis of Brand Car",
      description: "Analysis of clustering brand car using K-Means to find the best cluster for each brand.",    
    },
    {
      id: 7,
      image: MLPic,
      link: "https://drive.google.com/file/d/1X_5x-28_q61_OrLBqz-SKL6PY-K1WGdo/view?usp=drive_link",
      title: "Customer Churn Analysis PT XYZ (In Charge in ML Team)",
      description: "Final project for Startup campus data science bootcamp, focused on predict customer who potential to leave. ",    
    },
];

function Portofolio() {
  return (
      <Container>
        <div className="wrapperPage h-100 text-center">
        <h1 className="text-center pt-5">Portofolio</h1>
           <CardPorto porto={data}/>
           <div>
            <Button
          className="btn-activity"
          variant="primary"
          target="_blank"
          href="https://www.linkedin.com/in/rafifadhlu/"
        >
          <img src={PortofPic} alt="" width="30" />
          <span className="ms-2">
            See more Works & Certificate
          </span>
        </Button>
           </div>
        </div>
      </Container>
  );
}

export default Portofolio;