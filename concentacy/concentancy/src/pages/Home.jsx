import Banner from "../components/Banner";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaArrowRight, FaLightbulb, FaBriefcase, FaGraduationCap, FaLaptopCode, FaWallet, FaBullseye, FaPlay, FaQuoteLeft,FaUser,FaEnvelope,FaPhone,FaEdit,FaComments,FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Services Component
function Services() {
  const serviceList = [
    { icon: <FaLightbulb />, title: "Digital Marketing Consulting", description: "Providing expert advice and problem-solving strategies across multiple industries, helping businesses improve efficiency, innovation, and performance.", link: "/digital_marketing_consulting" },
    { icon: <FaBriefcase />, title: "Business & Management Consulting", description: "Guiding companies in optimizing operations, leadership, organizational structure, and overall business strategies to enhance productivity and profitability.", link: "/digital-marketing-consulting" },
    { icon: <FaGraduationCap />, title: "EdTech & AI Consulting", description: "Specializing in educational technology and artificial intelligence solutions to enhance learning experiences, student engagement, and adaptive learning models.", link: "/digital-marketing-consulting" },
    { icon: <FaLaptopCode />, title: "IT Consulting", description: "Helping businesses with IT strategy, software development, cybersecurity, cloud computing, and digital transformation to improve operational efficiency.", link: "/it-consulting" },
    { icon: <FaWallet />, title: "Finance Consulting", description: "Offering expertise in financial planning, risk management, investments, and corporate finance to optimize profitability and long-term financial health.", link: "/finance_consulting" },
    { icon: <FaBullseye />, title: "Property Consulting", description: "Focusing on business expansion, market entry, competitive positioning, and long-term strategic planning to drive sustainable growth.", link: "/property_consulting" },
  ];

  return (
    <section className="services">
      <Container>
        <div className="section-header d-flex justify-content-between align-items-center">
          <h2 className="section-title">Our Services</h2>
          <Button variant="warning" className="discover-btn">Discover more</Button>
        </div>
        <Row>
          {serviceList.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="service-card">
                <div className="service-icon">{service.icon}</div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                   {/* Clickable Link Inside Card */}
                  <Link to={service.link} className="service-link">
                    Learn More <FaArrowRight className="arrow-icon" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// ✅ Tailored Section Component
function TailoredSection() {
  return (
    <section className="tailored-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6} className="text-content">
            <h2>
              Tailored to your <br />
              unique <span className="italic-text">needs</span>
            </h2>
            <div className="underline"></div>
            <p>
              Ready to embrace a future where finance meets technology? Join us today and experience the next level of financial innovation.
              Whether you're a savvy investor, a digital payment enthusiast, or someone looking for personalized financial solutions, we have something for you.
            </p>
            <Button variant="warning" className="learn-btn">Learn more</Button>
          </Col>

          <Col lg={6} className="image-content">
            <div className="image-container">
              <img src="./unique.jpg" alt="Tailored Solution" className="img-fluid" />
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// ✅ Showcases Component
function Showcases() {
  const showcaseItems = [
    { title: "Empowering Businesses", category: "Businesses", image: "./service1.jpg" },
    { title: "Innovation & Strategy", category: "Strategy", image: "./service2.jpg" },
    { title: "Service Industries", category: "Industries", image: "./service3.jpg" },
    { title: "Your Success, Our Expertise", category: "Expertise", image: "./service4.jpg" },
    { title: "Smart Solutions for a Smarter Business", category: "Business", image: "./service5.jpg" },
    { title: "Navigating Growth with Expert", category: "Expert", image: "./service6.jpg" },

  ];

  return (
    <section className="showcases">
      <Container>
        <div className="section-header d-flex justify-content-between align-items-center">
          <h2 className="section-title">Our Consulting Showcases</h2>
          <Button variant="warning" className="discover-btn">Discover more</Button>
        </div>
        <Row>
          {showcaseItems.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="showcase-card">
                <img src={item.image} alt={item.title} className="img-fluid" />
                <div className="showcase-text">
                  <h4>{item.title}</h4>
                  <p className="category">{item.category}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// ✅ Testimonials Component
function Testimonials() {
  const testimonials = [
    { name: "David L.", role: "Entrepreneur", image: "./testimonial1.jpg" },
    { name: "Lisa B.", role: "Small Business Owner", image: "./testimonial2.jpg" },
    { name: "Carlos S.", role: "Tech Enthusiast", image: "./testimonial3.jpg" },
  ];

  return (
    <section className="testimonial-section">
      <Container>
        <h6 className="testimonial-header">Our Happy Clients</h6>

        {/* Main Quote */}
      
        {/* Testimonials */}
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="testimonial-content">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                  <div>
                    <h5>{testimonial.name}</h5>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// ✅ Home Page Component
function Home() {
  return (
    <div>
      <Banner />

      {/* About Us Section */}
      <section className="about-us">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="about-image">
              <img src="./about.jpg" alt="About Us" className="img-fluid" />
            </Col>
            <Col lg={6} className="about-text">
              <h2>Your financial well-being is <span className="italic-text">our priority.</span></h2>
              <div className="underline"></div>
              <p>Stay ahead of the game with real-time insights into your finances. Our dynamic analytics provide you with a clear understanding of your financial health, empowering you to make informed decisions.</p>
              <hr className="divider" />
              <Row className="stats">
                <Col md={4} className="stat-item"><h3>384</h3><p>Successful projects</p></Col>
                <Col md={4} className="stat-item"><h3>1000+</h3><p>Satisfied clients</p></Col>
                <Col md={4} className="stat-item"><h3>20</h3><p>Years working</p></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sections */}
      <Services />
      <Container fluid className="recruitment-container">
      <Row className="justify-content-center">
        {/* Left Side - Recruitment Steps */}
        <Col md={5} className="recruitment-info">
          <h2 className="main-title">Expert Consulting Solutions</h2>
          <p className="description">
          Looking for expert guidance to enhance your business operations, strategy, or technology? Our consulting services are tailored to optimize performance, reduce costs, and drive sustainable growth.


          </p>

          <ul className="steps-list">
            <li>
              <strong>Business & Management Consulting</strong>
              <p>Improve efficiency, leadership, and decision-making to scale your business successfully.</p>
            </li>
            <li>
              <strong>Strategic Growth Consulting</strong>
              <p>Develop market expansion strategies and competitive positioning to accelerate long-term success.</p>
            </li>
            <li>
              <strong>IT & Digital Transformation Consulting</strong>
              <p>Implement cutting-edge technology solutions to modernize your business.</p>
            </li>
            <li>
              <strong> Finance & Cost Optimization Consulting</strong>
              <p>Control expenses, optimize financial strategies, and enhance profitability.</p>
            </li>
           
          </ul>
        </Col>

        {/* Right Side - Consultation Form */}
        <Col md={5} className="form-container">
          <h4 className="form-title">
            <strong>Request</strong> Free Consultation
          </h4>
          <Form>
          <Row>
            <Col md={6} className="mb-3">
              <div className="input-icon">
                <FaUser />
                <Form.Control type="text" placeholder="First Name" />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="input-icon">
                <FaUser />
                <Form.Control type="text" placeholder="Lastname" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <div className="input-icon">
                <FaEnvelope />
                <Form.Control type="email" placeholder="Your Email" />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="input-icon">
                <FaPhone />
                <Form.Control type="tel" placeholder="Phone" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <div className="input-icon">
                <FaEdit />
                <Form.Control type="text" placeholder="Your Subject" />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="input-icon">
                <FaList />
                <Form.Select>
                  <option>Consulting</option>
                  <option>Strategic & Growth-Oriented Consulting</option>
                   <option>Business & Management Consulting</option>
                   <option>EdTech & AI Consulting</option>
                  <option>General Consulting</option>
                  <option>IT Consulting</option>
                  <option>Finance Consulting</option>
                 
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <div className="input-icon textarea-icon">
              <FaComments />
              <Form.Control as="textarea" rows={4} placeholder="Enter Your Message" />
            </div>
          </Form.Group>

          <Button className="send-btn w-100">SEND</Button>
        </Form>
        </Col>
      </Row>
    </Container>
      <Showcases />
      <TailoredSection />

      <Testimonials />
    </div>
  );
}

export default Home;
