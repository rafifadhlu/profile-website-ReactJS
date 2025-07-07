import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import '../styles/Contact.css'

let Contact = ({link}) => {
  const [data, setData] = useState([]);
  useEffect(() => setData(link),[]);

  return (
    <>
      <Container className="container mt-6 pt-5 text-center" size="sm">
        <div>
          <h1 className="title-con mt-5">Contact me!</h1>
          <div className="container-con">
            <div className="contact-p d-flex flex-row justify-content-center">
              {data.map((items, index) => (
                <div className="mx-5" key={index}>
                  <a className="text-decoration-none text-white" target="_blank"  href={items.linkSite}>
                    <p>{items.nameSite}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <h1 className="or">or</h1>
        </div>
      </Container>
      <div className="email-cp text-center">
        <h1>rafifadhlu11@gmail.com</h1>
      </div>
    </>
  );
};

export default Contact;
