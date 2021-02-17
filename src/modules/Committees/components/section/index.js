import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "./style.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Committees() {
  const [committees] = useState([
    { title: "DCR", icon_class: "cut" },
    { title: "Logistics", icon_class: "tools" },
    { title: "Human Resources", icon_class: "user-tie" },
    { title: "Marketing", icon_class: "bullhorn" },
    { title: "Design", icon_class: "fill-drip" },
    { title: "Media", icon_class: "camera" },
    { title: "Public Relations", icon_class: "handshake" },
    { title: "Fundraising", icon_class: "hand-holding-usd" },
    { title: "Web Development", icon_class: "laptop-code" },
    { title: "Mobile App Development", icon_class: "mobile-alt" },
    { title: "Electronics Design", icon_class: "microchip" },
    { title: "Embedded Systems", icon_class: "network-wired" },
    { title: "C++", icon_class: "code" },
    { title: "Management", icon_class: "chart-pie" }
  ]);

  return (
    <>
      {committees ? (
        <div id="Committees" className="component-font">
          <h2 className="section-title"> Our Committees </h2>
          <Carousel responsive={responsive} infinite={true}>
            {committees.map((el, idx) => (
              <div className="committee-carousel-item" key={idx}>
                <div className="icon-container">
                  <Link
                    to={`/committee/${el.title.toLowerCase()}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <FontAwesomeIcon icon={el.icon_class} className="icon" />
                  </Link>
                </div>
                <Link
                  to={`/committee/${el.title.toLowerCase()}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <p className="committee-label">{el.title}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
}
