import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Gallery() {
  return (
    <>
      <h1 className="gallery-title">photo gallery</h1>
      <div className="gallery-line" />

      <Carousel className="gallery" controls={false}>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              className="gallery1"
              src="https://images.pexels.com/photos/3771811/pexels-photo-3771811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
            />
            <img
              className="gallery2"
              src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
            />
            <img
              className="gallery3"
              src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <img
              className="gallery4"
              src="https://images.unsplash.com/photo-1458576627435-430ad58ead3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              className="gallery5"
              src="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
            />
            <img
              className="gallery6"
              src="https://images.pexels.com/photos/2555240/pexels-photo-2555240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <img
              className="gallery7"
              src="https://images.pexels.com/photos/7245423/pexels-photo-7245423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <img
              className="gallery8"
              src="https://images.pexels.com/photos/5371555/pexels-photo-5371555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              className="gallery9"
              src="https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <img
              className="gallery10"
              src="https://images.pexels.com/photos/8775178/pexels-photo-8775178.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="First slide"
            />
            <img
              className="gallery7"
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <img
              className="gallery8"
              src="https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Gallery;
