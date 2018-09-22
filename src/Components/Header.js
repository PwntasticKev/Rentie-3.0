import React, { Component } from "react"
import Logo from "../assets/WhiteRentie.png"
import styled from "styled-components"

const Img = styled.img`
  height: 50px;
`

const Container = styled.section`
  background: #547086;
  display: flex;
  justify-content: center;
  height: 52px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

const BurgerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  right: 15px;
  top: 15px;
  height: 22px;
  width: 24px;
  z-index: 4;
  @media (min-width: 768px) {
    display: none;
  }
`

const Bline = styled.div`
  border-bottom: 4px solid
    ${props => (props.Lcolor === true ? "black" : "white")};
  transition: color 1s ease-in-out;

  &:first-child {
    transform: ${props =>
      props.Lcolor === true ? "translate(5%, 123%) rotate(45deg)" : ""};
    transition: transform 0.25s ease-in-out;
  }
  &:nth-child(2) {
    display: ${props => (props.Lcolor === true ? "none" : "block")};
    transition: display 0.25s ease-in-out;
  }
  &:last-child {
    transform: ${props =>
      props.Lcolor === true ? "translate(5%, -145%) rotate(-45deg)" : ""};
    transition: transform 0.25s ease-in-out;
  }
`

const DesktopMenu = styled.section`
  align-items: center;
  display: flex;
  color: white;
  &:nth-child(3) {
    margin-right: 20px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

const Span = styled.span`
  margin-left: 16px;
  cursor: pointer;
  padding: 10px 0;
  &:first-child {
    margin-top: 40px;
  }
`

const MobileMenu = styled.section`
  background: white;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  right: -190px;
  width: 170px;
  z-index: 2;
  ${"" /* display: ${props => props.display}; */} display:flex;
  transform: ${props => props.translate};
  transition-delay: 1s, 0.1s;
  transition: transform 0.5s ease-in-out, display 3s ease-in-out;
  padding: 10px;
  @media (min-width: 767px) {
    right: -270px;
  }
`

export default class Header extends Component {
  state = {
    mobileMenu: false
  }

  mobileMenu(bool) {
    this.setState({
      mobileMenu: !bool
    })
  }
  render() {
    return (
      <Container>
        <Img src={Logo} alt="Rentie Logo" />
        <BurgerContainer onClick={_ => this.mobileMenu(this.state.mobileMenu)}>
          <Bline Lcolor={this.state.mobileMenu} />
          <Bline Lcolor={this.state.mobileMenu} />
          <Bline Lcolor={this.state.mobileMenu} />
        </BurgerContainer>
        <DesktopMenu>
          <Span>Listings</Span>
          <Span>Post Listing</Span>
          <Span>SignUp</Span>
          <Span>Log In</Span>
        </DesktopMenu>
        <MobileMenu
          translate={this.state.mobileMenu ? "translate(-190px)" : ""}
          display={this.state.mobileMenu ? "flex" : "none"}
        >
          <Span>
            <a href="https://myrentie.com/listings">Listings</a>
          </Span>
          <Span>Post Listing</Span>
          <Span>SignUp</Span>
          <Span>Log In</Span>
        </MobileMenu>
      </Container>
    )
  }
}
