import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/CardPorto.css';


function CardPorto({porto}) {
  const [data, setData] = useState([]);
  useEffect(() => setData(porto),[]);
  // console.log(data);

  return (
    <>
    <Container className="container mt-6 pt-5 text-center" style={{height: "auto"}}>
        <Row className="justify-content-center"> 
          {data.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} className="d-flex justify-content-center column-card">
              <Card style={{ width: '18rem',height: '75%' }} className="card-item">
                <Card.Img variant="top" src={item.image} className='shadow' />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button variant="primary" target="_blank" href={item.link}>See full project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardPorto;