import { Container, Row, Col, Button } from "react-bootstrap";

function Banner() {
  return (
    <section className="hero-banner">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="banner-text mb-4">
            <h2>
              <span className="italic-text">Smarter Strategies for a Stronger Future</span>
             
            </h2>
            <p>
              Your trusted partner in the ever-evolving world of finance and technology. We bring cutting-edge 
              solutions to empower you on your financial journey.
            </p>
            <div className="banner-buttons">
              <Button className="btn get-started m-2">Get started</Button>
              <Button className="btn learn-more m-2">Learn more</Button>
            </div>
          </Col>

          <Col lg={6} className="banner-images">
            <div className="image-grid">
              <img src="./service1.jpg" className="img-one" alt="Fintech Image 1" />
              <img src="./service2.jpg" className="img-two" alt="Fintech Image 2" />
              <img src="./service3.jpg" className="img-three" alt="Fintech Image 3" />
              <img src="./service4.jpg" className="img-four" alt="Fintech Image 4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
