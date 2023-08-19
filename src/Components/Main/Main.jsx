import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Main.css";
const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurios stays and adventures activities. ",
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular. ",
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ′lavish′ and ′beauty′. Always intersting to be in this place ",
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "According to the world tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventures activities ",
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "A city in central Mexico, Guanajuato is knownn for its history of ailver minig and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.",
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place, Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!",
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkot Wat represents the entire rane of khmer art of from 9th to the 15th century. This temple is considered the heart and soul pf Cambodia. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      " An immense mausoleum of white marble, built-in Arga by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurious activities",
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is Indonesia Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountain, history, art & culture, food, temples and beautiful sandy beaches.",
  },
];
function Main() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most viseted destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => (
            <div
              data-aos="fade-up"
              className="singleDestination"
              key={uuidv4()}
            >
              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{desTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Main;
