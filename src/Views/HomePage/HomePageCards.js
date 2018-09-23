import React, { Component } from "react"
import styled from "styled-components"
import background from "../../assets/Gradient_Bottom_Top.png"
import house from "../../assets/house.png"

const Container = styled.section`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 32px;
  height: 40vh;
  display: flex;
  justify-content: center;
`

const CardContainer = styled.section`
  width: 250px;
  height: 223px;
  border-radius: 5px;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 1);
`

const HouseImg = styled.img`
  width: 100%;
  margin-bottom: 5px;
`

export default class HomePageCards extends Component {
  state = {
    amountOfCardsRendered: 3
  }

  render() {
    return (
      <Container>
        <CardContainer>
          <div>
            <HouseImg src={house} />
          </div>
          <div>Splendida Casa</div>
          <div>$450/Mo</div>
          <div>RATING</div>
        </CardContainer>
      </Container>
    )
  }
}
