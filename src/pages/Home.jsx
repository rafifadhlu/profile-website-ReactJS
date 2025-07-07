import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import fotopp from '../assets/fotopp.png';
import About from "./About";
import '../styles/Home.css'


function Home() {
  return (
    <>
      <Container bg="dark" >
        <div className="wrap d-flex flex-column align-items-center mt-5">
          <p style={{fontSize:"5em"}}>Hi Welcome!</p>
          <div className="intro ">
            <p >
              Gimana kabarnya, baik kan? Kenalin, Aku Rafi Fadhlurokhman,
              Panggil aja rafi. Aku sedang belajar Web development dan Artificial Intelligence.
            </p>
            <Card className="card" >
              <img src={fotopp}/>
            </Card>
          </div>
        </div>
        <About/>
      </Container>
    </>
  );
}

export default Home;
