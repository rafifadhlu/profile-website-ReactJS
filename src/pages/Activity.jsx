import Container from "react-bootstrap/esm/Container";

import Galangdana from "../assets/Galangdana.jpeg";
import Pemberdayaan1 from "../assets/Pemberdayaan1.jpeg";
import Pemberdayaan2 from "../assets/Pemberdayaan2.jpeg";
import Pemberdayaan3 from "../assets/Pemberdayaan3.png";
import Santunan1 from "../assets/Santunan1.jpeg";
import "../styles/Activity.css"

function Activity() {
  return (
    <>
      <Container className="pt-5">
        <section className="Quotes">
          <h1 className="mt-5 text-center">Activity</h1>
          <blockquote className="blockquote text-center">
            <h2 className="mb-3 mt-5">
              "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia"
            </h2>
            <footer className="blockquote-footer">
              (HR. Ahmad, ath-Thabrani, ad-Daruqutni).
            </footer>
          </blockquote>
        </section>
        <section className="HumanSec">
          <h2 className="mt-5 text-center">humanity's</h2>
          <div className="wrapVid ">
            <div>
              <h2>Pemberdayaan Kaum Dhuafa</h2>
              <p className="text-left mt-5">
                Kegiatan ini merupakan salah satu bentuk implementasi dari Mata
                Kuliah Al Islam Kemuhamadiyahan, yang bertujuan untuk melatih
                kepekaan terhadap Masyarakat dan juga kepedulian kepada
                masyarakat sekitar. Pada Kegiatan ini kami membantu Ibu Karsini
                yang bertujuan meningkatkan sumber daya yang ada untuk berjualan
                lebih maksimal.
              </p>
            </div>
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                className="m-2"
                width="400px"
                height="315px"
                src="https://www.youtube.com/embed/jMiur76Qe7M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="d-flex flex-row mt-5 mb-5 justify-content-center">
            <div className="m-2">
              <img
                className="m-1"
                src={Pemberdayaan1}
                width="100%"
                height="50%"
              />
              <img
                className="m-1"
                src={Pemberdayaan2}
                width="100%"
                height="50%"
              />
            </div>
            <img
              className="m-2"
              src={Pemberdayaan3}
              width="60%"
              height="100%"
            />
          </div>
          <div className="santunan text-center">
            <h3 className="text-center">
              Selain Penyaluran ke Ibu Karsini kami juga menyalurkan bantuan
              yang kami terima melalui donasi, kami salurkan ke yayasan yatim
              piatu dan dhuafa.
            </h3>
            <img src={Santunan1} width="100%" height="100%"/>
          </div>
          <div className="mt-5">
            <h2>Penggalangan Dana</h2>
            <div className="galdan ">
              <p className="text-left">Galang dana dalam rangka Gempa Palu dan Donggala yang terjadi pada 28 September 2018. Galang dana ini dilaksanakan pada 7 Oktober 2018 di acara Car Free Day yang dilaksanakan bersama Karang Taruna RT 011/021  yang mana mendapatkan dana dan pakaian dari para Donatur. </p>
              <img src={Galangdana} width="90%" height="100%" />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Activity;
