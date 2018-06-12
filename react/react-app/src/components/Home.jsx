import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap';
import  './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>                 
           <Row className="show-grid text-center">
              <Col xs={12} sm={6} className="person-jumbo">
              <ScrollAnimation animateIn='fadeIn' delay={1000}>
              <Jumbotron className="introtext-homepage">
                <h1>Welcome</h1>
                <p> Dit is mijn portfolio website </p>
                <p> Ik ben Jordy van Santen <br /> Ik ben een beginnend Creatieve Programmeur </p>
                <p> Ik zit op de Hogeschool Rotterdam en de Opleiding die ik op dit moment volg is Creative Media and Game Technologies.</p>
                <p> Click Here if you want to know me Better!!</p>
                <ScrollAnimation delay={2000}animateIn="fadeIn">
                <Button className="home-button" bsSize="large" href="./About"> About ME! </Button>
                <Button className="home-button" bsSize="large" href="./News"> My Projects! </Button>
              </ScrollAnimation>
                </Jumbotron>
              </ScrollAnimation>
              </Col>
              <Col xs={12} sm={6} className="person-wrapper">
                <Image src="assets/beter.png" circle className="profile-pic"/>
              </Col>
            </Row>
            <Row className="Aboutme-homepage">
            <Col xs={12} sm={3} xsOffset={1}>
              <h1> About me !! </h1>
            </Col>
            </Row>
            <Row>
              <Col xs={12} sm={1} xsOffset={1}>
            <Carousel className="carousel-homepage">
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="assets/somepic.jpg" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="assets/somepic2.jpg" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/assets/somepic3.jpg" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>;
            </Col>
            </Row>
        </Grid>
       
        </div>
    )
  }
}
