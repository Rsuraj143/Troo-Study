import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import icon from "../../images/Icon.png";
import call from "../../images/call.png";
import mail from "../../images/mail.png";
import logo from "../../images/Logo.png";
import humbuirger from "../../images/Humberders.png";
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavData } from "./NavData";
import Navmenu from "./Navmenu";

const Header = () => {
  const navbar_ref = useRef();
  function handleScroll() {
    if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
      navbar_ref.current.style.top = "0";
    } else {
      navbar_ref.current.style.top = "-150px";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="troo_header">
      <div class="fllowa-socail">
        <ul>
          <li>
            <Link to="/">
              <TiSocialLinkedin />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TbBrandInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialTwitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TiSocialFacebook />
            </Link>
          </li>
        </ul>
        <span>Follow Us</span>
      </div>
      <div className="show_nav" ref={navbar_ref}>
        <Navbar className="troo-da-bottom-header">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                {NavData.slice(0, 6).map((item, i) => {
                  return <Navmenu key={i} item={item} />;
                })}
              </ul>
              <div className="call-ss">
                {NavData.slice(-1).map((e, i) => {
                  return (
                    <Link className="btn btn-lg" key={i} to={e.path}>
                      {e.title}
                    </Link>
                  );
                })}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <section id="troo-da-top-header" class="troo-da-top-header">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="troo-con">
                  <img src={icon} alt="icon" />
                  <span>Welcome to TRooStudy Website</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cll-de">
                  <div class="cll-mail-link">
                    <ul>
                      <li>
                        <img src={call} alt="call" />
                        <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                      </li>
                      <li>
                        <img src={mail} alt="mail" />
                        <a href="mailto:contact@troostudy.com">
                          contact@troostudy.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="socal-icon">
                  <span>We Are on </span>
                  <ul>
                    <li>
                      <Link href="#">
                        <TiSocialFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <TbBrandInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <TiSocialLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <TiSocialTwitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Navbar className="troo-da-bottom-header">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                {NavData.slice(0, 6).map((item, i) => {
                  return <Navmenu key={i} item={item} />;
                })}
              </ul>
              <div className="call-ss">
                {NavData.slice(-1).map((e, i) => {
                  return (
                    <Link className="btn btn-lg" key={i} to={e.path}>
                      {e.title}
                    </Link>
                  );
                })}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
