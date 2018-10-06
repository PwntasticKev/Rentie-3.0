import React, { Component } from "react"
import styled from "styled-components"
import Logo from "../../assets/WhiteRentie.png"
import { Link } from "react-router-dom"

const Container = styled.section`
  background: #547086;
  letter-spacing: 0.5px;
  padding: 20px 10px 0 10px;
`

const SpanSection = styled.section`
  display: flex;
  justify-content: space-around;
`

const Img = styled.img`
  height: 56px;
`
const P = styled.p`
  margin: 0;
  margin-right: 15px;
`

const LowerFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const SpanContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
`

const Span = styled.span`
  text-decoration: none;
  color: white;
  margin-bottom: 7px;
  &:nth-child(1) {
    margin-top: 7px;
  }
`

const FooterOption = styled.span`
  font-size: 17px;
  border-bottom: 1px solid white;
  margin-bottom: 7px;
`
let a = {
  textDecoration: "none",
  color: "white"
}
export default class Footer extends Component {
  render() {
    return (
      <Container>
        <SpanSection>
          <SpanContainer>
            <FooterOption>Company</FooterOption>
            <Span>Our Team</Span>
            <Span>Utah Service</Span>
            <Span>Privacy Policy</Span>
          </SpanContainer>
          <SpanContainer>
            <FooterOption>About Us</FooterOption>
            <Span>
              <Link to="/listings" style={a}>
                <Span>Listings</Span>
              </Link>
            </Span>
            <Span>Applications</Span>
            <Span>Contact Us</Span>
          </SpanContainer>
          <SpanContainer>
            <FooterOption>Tools</FooterOption>
            <Span>Tenant</Span>
            <Span>Landlord</Span>
          </SpanContainer>
        </SpanSection>
        <LowerFooter>
          <Img src={Logo} alt="" />
          <P>Rentie Co.</P>
        </LowerFooter>
      </Container>
    )
  }
}
