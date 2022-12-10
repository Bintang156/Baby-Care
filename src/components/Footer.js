import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box className="footer">
      <h1 style={{ color: "#FF0B66", 
                   textAlign: "center", 
                   marginTop: "-30px",
                   marginBottom: "30px"
                    }}>

        Created By Team C22-144 FERE Dicoding
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="https://github.com/Abyr14">Aby</FooterLink>
            <FooterLink href="https://github.com/Ansar23-x">Ansar</FooterLink>
            <FooterLink href="https://github.com/ArifFirmansyah19">Arif</FooterLink>
            <FooterLink href="https://github.com/Bintang156">Bintang</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">HomePage</FooterLink>
            <FooterLink href="/article">Article</FooterLink>
            <FooterLink href="/remainder">Reminder</FooterLink>
            <FooterLink href="/babycheck">BabyChcek</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://github.com/Abyr14"> Mas Aby</FooterLink>
            <FooterLink href="https://github.com/Ansar23-x"> Mas Ansar</FooterLink>
            <FooterLink href="https://github.com/ArifFirmansyah19"> Mas Arif</FooterLink>
            <FooterLink href="https://github.com/Bintang156"> Mas Bintang</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
