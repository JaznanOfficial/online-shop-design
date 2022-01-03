import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import './CardSlider.css'

const CardSlider = () => {
    return (
        <div className="my-5">
            <h1 className="mx-5 text-center">Chart</h1>
            <Swiper
                
                slidesPerView={1.3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="card-slider mx-auto mb-5"
            >
                <SwiperSlide>
                <Card className="m-5 product-card d-flex flex-row align-items-center justify-content-center">
                <Card.Img variant="top" src="https://www.tods.com/fashion/tods/X1M11432960TYOB999/X1M11432960TYOB999-30.jpg?imwidth=865" />
                <Card.Body className="my-5">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content
                            </Card.Text>
                            <div className="d-flex flex-row align-items-center w-100 mx-auto card-bottom">
                                <h3 className="text-danger">$ 250</h3>
                                <Button variant="outline-success">Add to cart</Button>
                            </div>
                </Card.Body>
              </Card>
                </SwiperSlide>
                
                
                <SwiperSlide>
                <Card className="m-5 product-card d-flex flex-row align-items-center justify-content-center">
                <Card.Img variant="top" src="https://www.tods.com/fashion/tods/X1M11432960TYOB999/X1M11432960TYOB999-30.jpg?imwidth=865" />
                <Card.Body className="my-5">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content
                            </Card.Text>
                            <div className="d-flex flex-row align-items-center w-100 mx-auto card-bottom">
                                <h3 className="text-danger">$ 250</h3>
                                <Button variant="outline-success">Add to cart</Button>
                            </div>
                </Card.Body>
              </Card>
                </SwiperSlide>
                
                
                <SwiperSlide>
                <Card className="m-5 product-card d-flex flex-row align-items-center justify-content-center">
                <Card.Img variant="top" src="https://www.tods.com/fashion/tods/X1M11432960TYOB999/X1M11432960TYOB999-30.jpg?imwidth=865" />
                <Card.Body className="my-5">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content
                            </Card.Text>
                            <div className="d-flex flex-row align-items-center w-100 mx-auto card-bottom">
                                <h3 className="text-danger">$ 250</h3>
                                <Button variant="outline-success">Add to cart</Button>
                            </div>
                </Card.Body>
              </Card>
                </SwiperSlide>
                
                
                <SwiperSlide>
                <Card className="m-5 product-card d-flex flex-row align-items-center justify-content-center">
                <Card.Img variant="top" src="https://www.tods.com/fashion/tods/X1M11432960TYOB999/X1M11432960TYOB999-30.jpg?imwidth=865" />
                <Card.Body className="my-5">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content
                            </Card.Text>
                            <div className="d-flex flex-row align-items-center w-100 mx-auto card-bottom">
                                <h3 className="text-danger">$ 250</h3>
                                <Button variant="outline-success">Add to cart</Button>
                            </div>
                </Card.Body>
              </Card>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default CardSlider;
