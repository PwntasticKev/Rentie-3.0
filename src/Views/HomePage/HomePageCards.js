import React, { Component } from "react"
import styled from "styled-components"
import background from "../../assets/Gradient_Bottom_Top.png"
import house from "../../assets/house.png"

const Container = styled.section`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  height: 60vh;
  display: flex;
  justify-content: center;
`

const CardContainer = styled.section`
  width: 250px;
  height: 223px;
  border-radius: 5px;
  background: white;
  padding: 5px;
  margin-bottom: 12px;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 1);
`

const HouseImg = styled.img`
  width: 100%;
  margin-bottom: 5px;
`

const Button = styled.button`
  width: 200px;
  background: blue;
`

const HouseName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 3px 0;
`

const RentPerMonth = styled.div`
  font-style: italic;
  font-size: 14px;
  margin: 3px 0;
`

const Rating = styled.div`
  margin: 3px 0;
`
const FeaturedListings = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin-bottom: 20px;
  color: #547086;
`

export default class HomePageCards extends Component {
  state = {
    cardsRendered: [],
    cardCount: 3
  }

  render() {
    let cardArray = [...this.state.cardCount]
    let card = (
      <CardContainer>
        <div>
          <HouseImg src={house} />
        </div>
        <HouseName>Splendida Casa</HouseName>
        <RentPerMonth>$450/Mo</RentPerMonth>
        <Rating>RATING</Rating>
      </CardContainer>
    )

    return (
      <Container>
        <FeaturedListings>Featured Listings</FeaturedListings>
        <CardContainer>
          <div>
            <HouseImg src={house} />
          </div>
          <HouseName>Splendida Casa</HouseName>
          <RentPerMonth>$450/Mo</RentPerMonth>
          <Rating>RATING</Rating>
        </CardContainer>
        <CardContainer>
          <div>
            <HouseImg src={house} />
          </div>
          <HouseName>Splendida Casa</HouseName>
          <RentPerMonth>$450/Mo</RentPerMonth>
          <Rating>RATING</Rating>
        </CardContainer>
        <Button>Show More</Button>
      </Container>
    )
  }
}
