import React from "react";
import BreadcrumbBanner from "../components/BreadcrumbBanner"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLightbulb, FaBriefcase, FaGraduationCap, FaLaptopCode, FaWallet, FaBullseye } from "react-icons/fa";

function Services() {
  const serviceList = [
    { icon: <FaLightbulb />, title: "Digital Marketing Consulting", description: "Providing expert advice and problem-solving strategies across multiple industries, helping businesses improve efficiency, innovation, and performance.", link: "/digital_marketing_consulting" },
    { icon: <FaBriefcase />, title: "Business & Management Consulting", description: "Guiding companies in optimizing operations, leadership, organizational structure, and overall business strategies to enhance productivity and profitability.", link: "/business_consultancy" },
    { icon: <FaGraduationCap />, title: "EdTech & AI Consulting", description: "Specializing in educational technology and artificial intelligence solutions to enhance learning experiences, student engagement, and adaptive learning models.", link: "/edtech-ai" },
    { icon: <FaLaptopCode />, title: "IT Consulting", description: "Helping businesses with IT strategy, software development, cybersecurity, cloud computing, and digital transformation to improve operational efficiency.", link: "/it_consulting" },
    { icon: <FaWallet />, title: "Finance Consulting", description: "Offering expertise in financial planning, risk management, investments, and corporate finance to optimize profitability and long-term financial health.", link: "/finance_consulting" },
    { icon: <FaBullseye />, title: "Property Consulting", description: "Focusing on business expansion, market entry, competitive positioning, and long-term strategic planning to drive sustainable growth.", link: "/property_consulting" },
  ];

  return (
    <div className="services-page">
      {/* Breadcrumb Section */}
      <BreadcrumbBanner title="Services" />

      {/* Services Section */}
      <section className="services">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">Our Services</h2>
          </div>
          <Row>
            {serviceList.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <Card.Body>
                    <Card.Title className="card-title-service">{service.title}</Card.Title>
                    <Card.Text className="card-description-service">{service.description}</Card.Text>
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
    </div>
  );
}

export default Services;
