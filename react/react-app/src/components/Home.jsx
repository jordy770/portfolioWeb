import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import  './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Image src="assets/serenity_galaxy.1.jpg" className="home-header-image"/>
        <Grid>
          {/* <Jumbotron className="introtext-homepage">
          </Jumbotron> */}
          

           <Row className="show-grid text-center">
              <Col xs={12} sm={5} className="person-wrapper">
              <ScrollAnimation animateIn='fadeIn'>
                <h1>Welcome</h1>
                <p> Dit is mijn portfolio website </p>
                <p> Ik ben Jordy van Santen <br /> Ik ben een beginnend Creatieve Programmeur </p>
                <p> Click Here if you want to know me Better!!</p>
              </ScrollAnimation>
              <ScrollAnimation delay={2000}animateIn="fadeIn">
                <Button className="home-button" bsSize="large" href="./About"> About ME! </Button>
                <Button className="home-button" bsSize="large" href="./News"> My Projects! </Button>
              </ScrollAnimation>
              </Col>
              <Col xs={12} sm={7} className="person-wrapper">
                <Image src="assets/mijn-foto.1.jpg" circle className="profile-pic"/>

              </Col>
            </Row>
        </Grid>
        </div>
    )
  }
}
