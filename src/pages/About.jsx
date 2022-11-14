import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/About.css";
import Activity from "./Activity";
import Skills from "./Skills";


function About() {
    return(
        <>
            <Container>
            <div className="wrapperPage">
                <h1 className="text-center">Siapa sih Rafi?</h1>
                <div className="detil-intro">
                    <div className="CustomGreet">Allo!</div>
                    <div className="text-right p-1"> Aku seorang kapiten mempunyai pedang panjang kalau berjalan
                        prok prok prok. aku seorang kapiten. Saya Rafi saat ini sedang menjalankan study di Skilvul mengambil
                        fokus Front End Web Development. Belajar disini asik tapi banyak tugas tapi asik tapi tapi au ah capek
                    </div>
                </div>
                <Skills/>
            </div>
            </Container>
        </>
    )
}

export default About