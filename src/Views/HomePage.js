import React, { Component } from "react"
import Header from "../Components/Header/Header"
import HomePageSearch from "../Views/HomePage/HomePageSearch"
import styled from "styled-components"
import background from "../assets/gradientbackground_1.png"

const Container = styled.section`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <HomePageSearch />
      </Container>
    )
  }
}
