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
    ${props => (props.color === true ? "black" : "white")};

  &:first-child {
    transform: ${props =>
      props.color === true ? "translate(5%, 123%) rotate(45deg)" : ""};
    transition: transform 0.25s ease-in-out;
  }
  &:nth-child(2) {
    display: ${props => (props.color === true ? "none" : "block")};
    transition: display 0.25s ease-in-out;
  }
  &:last-child {
    transform: ${props =>
      props.color === true ? "translate(5%, -145%) rotate(-45deg)" : ""};
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
  padding: 10px 0;
  &:first-child {
    margin-top: 40px;
  }
`

const MobileMenu = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: absolute;
  right: -190px;
  width: 170px;
  z-index: 2;
  transform: ${props => props.display};
  transition: transform 0.5s ease-in-out;
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
          <Bline color={this.state.mobileMenu} />
          <Bline color={this.state.mobileMenu} />
          <Bline color={this.state.mobileMenu} />
        </BurgerContainer>
        <DesktopMenu>
          <Span>Listings</Span>
          <Span>Post Listing</Span>
          <Span>SignUp</Span>
          <Span>Log In</Span>
        </DesktopMenu>
        <MobileMenu display={this.state.mobileMenu ? "translate(-190px)" : ""}>
          <Span>Listings</Span>
          <Span>Post Listing</Span>
          <Span>SignUp</Span>
          <Span>Log In</Span>
        </MobileMenu>
      </Container>
    )
  }
}
