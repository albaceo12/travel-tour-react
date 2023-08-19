import React, { useEffect } from "react";
import video from "../../assets/video2.mp4";
import "./Footer.css";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        {/* we are gonna remove "muted" "loop" "autoPlay" for a while because of cpu process but at the end we will put those in video tag */}
        <video src={video} muted loop autoPlay type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <span>
                  <MdOutlineTravelExplore className="icon" />
                  Travel.
                </span>
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium velit suscipit eveniet at vero consectetur illo fugiat
              nihil magni nostrum ipsam autem aliquam quis, voluptatem sed
              sequi? Earum eaque exercitationem enim maxime maiores laudantium,
              corrupti, eligendi iure reprehenderit magnam fuga!
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Payment
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> TripAdvisor
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Euroupe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ALLBALOU 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
