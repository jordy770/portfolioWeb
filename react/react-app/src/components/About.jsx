import React, { Component } from 'react'
import { Grid, Col, Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        
    
        <Grid>
            <Col xs={12} sm={12} className="about-page-col">
                <Image src="assets/mijn-foto.1.jpg" className="about-profile-pic" rounded />
                <h3> About me!</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis volutpat lectus quis vestibulum. Suspendisse commodo vel erat non auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla mollis sagittis aliquet. Pellentesque id lacinia est, ac hendrerit odio. Ut blandit, nulla et pulvinar tristique, metus magna mattis tortor, vitae dapibus leo nisl non enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lacus ex, viverra vitae molestie in, lobortis sit amet justo. Pellentesque non luctus lectus. Sed luctus dui elementum, ullamcorper nisl et, varius est. Nulla condimentum tincidunt elementum. Sed quis justo eu dolor consectetur porta. Ut faucibus a leo eget blandit. Nulla facilisis urna at quam dignissim, sit amet vulputate nunc ultricies. Nam eu nisi eu mauris auctor rhoncus.</p>
            </Col>
            <Col>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis volutpat lectus quis vestibulum. Suspendisse commodo vel erat non auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla mollis sagittis aliquet. Pellentesque id lacinia est, ac hendrerit odio. Ut blandit, nulla et pulvinar tristique, metus magna mattis tortor, vitae dapibus leo nisl non enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lacus ex, viverra vitae molestie in, lobortis sit amet justo. Pellentesque non luctus lectus. Sed luctus dui elementum, ullamcorper nisl et, varius est. Nulla condimentum tincidunt elementum. Sed quis justo eu dolor consectetur porta. Ut faucibus a leo eget blandit. Nulla facilisis urna at quam dignissim, sit amet vulputate nunc ultricies. Nam eu nisi eu mauris auctor rhoncus.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis volutpat lectus quis vestibulum. Suspendisse commodo vel erat non auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla mollis sagittis aliquet. Pellentesque id lacinia est, ac hendrerit odio. Ut blandit, nulla et pulvinar tristique, metus magna mattis tortor, vitae dapibus leo nisl non enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lacus ex, viverra vitae molestie in, lobortis sit amet justo. Pellentesque non luctus lectus. Sed luctus dui elementum, ullamcorper nisl et, varius est. Nulla condimentum tincidunt elementum. Sed quis justo eu dolor consectetur porta. Ut faucibus a leo eget blandit. Nulla facilisis urna at quam dignissim, sit amet vulputate nunc ultricies. Nam eu nisi eu mauris auctor rhoncus.</p>         
            </Col>
        </Grid>
      </div>
    )
  }
}
