import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './SocialLink.css'

const SocialLink = () => {
    return (
        <div className='m-5'>
            
            <h1 className='social-links text-center'>Social Links</h1>
        <Row xs={1} md={4} className="g-4">
        
          <Col>
                <a href='#' className='text-decoration-none'>
                <Card className='rounded-pill link-card d-felx flex-row justify-content-center align-items-center p-2'>
              <Card.Img variant="left" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" width={50} />
              
            <Card.Title className='m-0 p-0 text-light'>Facebook</Card.Title>
              
            </Card>
                </a>
          </Col>
          <Col>
                <a href='#' className='text-decoration-none'>
                <Card className='rounded-pill link-card d-felx flex-row justify-content-center align-items-center p-2'>
              <Card.Img variant="left" src="https://www.transparentpng.com/thumb/logo-instagram/C3469L-new-logo-instagram-clipart-photos.png" width={50} />
              
            <Card.Title className='m-0 p-0 text-light'>Instagram</Card.Title>
              
            </Card>
                </a>
          </Col>
          <Col>
                <a href='#' className='text-decoration-none'>
                <Card className='rounded-pill link-card d-felx flex-row justify-content-center align-items-center p-2'>
              <Card.Img variant="left" src="https://www.freeiconspng.com/thumbs/logo-twitter-png/cricle-twitter-emblem-png-clipart-8.png" width={30} />
              
            <Card.Title className='m-0 ps-1 text-light'>Twitter</Card.Title>
              
            </Card>
                </a>
          </Col>
          <Col>
                <a href='#' className='text-decoration-none'>
                <Card className='rounded-pill link-card d-felx flex-row justify-content-center align-items-center p-2'>
              <Card.Img variant="left" src="https://i.ibb.co/Zf9jSsk/142785-middle-removebg-preview.png" width={50} />
              
            <Card.Title className='m-0 ps-1 text-light'>Twitter</Card.Title>
              
            </Card>
                </a>
          </Col>
       
      </Row>
        </div>
    );
};

export default SocialLink;